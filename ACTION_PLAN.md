# 🚀 A2 Key Quiz — Action Plan (2024-2025)

## Phần 1: TỔNG HỢP NHANH (5 phút đọc)

### 🎯 Tình Trạng Hiện Tại
Dự án là một **Single Page Application (SPA) English Quiz** hoạt động tốt nhưng với **kiến trúc code không scalable** và **thiếu công cụ phát triển chuyên nghiệp**.

### ⚡ Top 3 Vấn Đề Cần Giải Quyết
1. **Code quá tập trung** - 2000+ lines JS trong 1 file (quiz.html)
2. **Không có test** - Rủi ro cao khi refactor
3. **Thiếu tối ưu hóa** - Tải Tailwind từ CDN, không code splitting

### 💰 Effort Estimate
- **Refactoring:** 3-4 tuần
- **Testing setup:** 2-3 tuần  
- **Build optimization:** 1-2 tuần
- **Total:** 6-9 tuần để "production ready"

---

## Phần 2: CÁC BƯỚC THỰC HIỆN CỤ THỂ

### WEEK 1-2: Preparation & Analysis

#### Task: Thiết lập Repository

```bash
# 1. Tạo .gitignore
cat > .gitignore << 'EOF'
node_modules/
dist/
build/
.env
.env.local
.DS_Store
*.log
EOF

# 2. Tạo package.json
npm init -y

# 3. Cài đặt dependencies cơ bản
npm install --save-dev vite tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Task: Tạo Cấu Trúc Folder

```
quiz/
├── public/
│   ├── audio/              ← Audio files cho listening
│   ├── data/
│   │   ├── test1.json
│   │   ├── test2.json
│   │   └── ...
│   └── index.html          ← Static HTML
├── src/
│   ├── main.js             ← Entry point
│   ├── styles/
│   │   ├── main.css
│   │   ├── theme.css
│   │   └── components.css
│   ├── components/
│   │   ├── Quiz.js
│   │   ├── Results.js
│   │   ├── NavBar.js
│   │   └── ThemeSwitcher.js
│   ├── stores/
│   │   └── quizStore.js
│   ├── utils/
│   │   ├── formatters.js
│   │   ├── validators.js
│   │   ├── storage.js
│   │   └── audio.js
│   └── data/
│       └── quizzes.js      ← Meta về các bài thi
├── tests/
│   ├── unit/
│   │   └── *.test.js
│   ├── e2e/
│   │   └── *.spec.js
│   └── setup.js
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

#### Task: Document Current System

```markdown
# Current Architecture (quiz.html)
- AppModule (IIFE): Tất cả logic
  - state: currentPart, score, answered, userAnswers, etc.
  - init(): Khởi tạo theme, load data
  - renderLandingStats(): Hiển thị preview
  - renderSettings(): Toggle options
  - startQuiz(): Bắt đầu
  - renderQuestion(): Render câu hỏi
  - checkAnswer(): Kiểm tra đáp án
  - showResults(): Hiển thị kết quả
  - Utilities: formatTime(), saveProgress(), etc.

# Current Data Structure (test1.js)
quizData = {
  title: string,
  parts: [
    {
      id: string,
      title: string,
      skill: 'reading'|'listening'|'writing',
      questions: [
        {
          id: string,
          type: 'reading-mcq'|'fill-in'|'writing'|'listening-mcq'|...,
          text: string,
          options/context: ...,
          correctAnswer: string,
          explanation: string
        }
      ]
    }
  ]
}

# Current Theme System (quiz.html CSS)
[data-theme="warm"]
[data-theme="dark"] 
[data-theme="focus"]
CSS Variables: --bg-primary, --text-primary, --accent-primary, etc.

# Current UI Components
- Navbar: Theme switcher, score, timer, progress
- Landing Page: Stats preview, settings
- Quiz Page: Part tabs, question, options, explanation
- Results Page: Bento grid, statistics
```

---

### WEEK 3-4: Code Extraction

#### Task 1: Extract State Management

**File: `src/stores/quizStore.js`**

```javascript
/**
 * Centralized state management for Quiz
 * Using simple object + handler pattern (no Redux needed yet)
 */

const initialState = {
    // Quiz Meta
    quizzes: [],          // [ { id, title, parts: [...] } ]
    currentQuizId: null,
    
    // Progress
    currentPart: 0,
    currentQuestion: 0,
    
    // Answers
    answered: {},         // { questionId: true }
    userAnswers: {},      // { questionId: answerValue }
    
    // Scoring
    score: 0,
    totalGradable: 0,
    
    // UX State
    streak: 0,
    maxStreak: 0,
    seconds: 0,
    
    // Settings
    settings: {
        shuffleQuestions: false,
        shuffleOptions: true,
        instantFeedback: true,
    },
    
    // UI
    currentTheme: 'warm',
    isQuizActive: false,
};

class QuizStore {
    constructor() {
        this.state = { ...initialState };
        this.listeners = [];  // Observer pattern
        this.load();
    }
    
    /**
     * Public methods
     */
    loadQuiz(quizId) {
        const quiz = this.state.quizzes.find(q => q.id === quizId);
        if (!quiz) throw new Error(`Quiz ${quizId} not found`);
        
        this.setState({
            currentQuizId: quizId,
            currentPart: 0,
            currentQuestion: 0,
            answered: {},
            userAnswers: {},
            score: 0,
            isQuizActive: true,
        });
    }
    
    recordAnswer(questionId, answer) {
        const newState = {
            ...this.state,
            answered: { ...this.state.answered, [questionId]: true },
            userAnswers: { ...this.state.userAnswers, [questionId]: answer },
        };
        this.setState(newState);
        this.save();  // Auto-persist
    }
    
    getCurrentPart() {
        if (!this.state.currentQuizId) return null;
        const quiz = this.state.quizzes.find(q => q.id === this.state.currentQuizId);
        return quiz?.parts[this.state.currentPart];
    }
    
    getCurrentQuestion() {
        const part = this.getCurrentPart();
        if (!part) return null;
        return part.questions[this.state.currentQuestion];
    }
    
    /**
     * STATE MANAGEMENT
     */
    setState(updates) {
        this.state = { ...this.state, ...updates };
        this.notifyListeners();
    }
    
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
    
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.state));
    }
    
    /**
     * PERSISTENCE
     */
    save() {
        localStorage.setItem('a2_quiz_state', JSON.stringify(this.state));
    }
    
    load() {
        const saved = localStorage.getItem('a2_quiz_state');
        if (saved) {
            try {
                this.state = JSON.parse(saved);
            } catch (e) {
                console.error('Failed to load state', e);
            }
        }
    }
    
    reset() {
        this.state = { ...initialState };
        this.notifyListeners();
    }
    
    /**
     * GETTERS
     */
    getState() {
        return { ...this.state };  // Immutable copy
    }
}

export const store = new QuizStore();
```

#### Task 2: Extract Question Renderer

**File: `src/components/Quiz.js`**

```javascript
/**
 * Quiz Component - Handles rendering and interaction
 */

import { store } from '../stores/quizStore.js';
import { formatTime } from '../utils/formatters.js';
import { animateCorrect, animateWrong } from '../utils/animations.js';

export class Quiz {
    constructor(container) {
        this.container = container;
        this.unsubscribe = null;
    }
    
    mount() {
        // Subscribe to state changes
        this.unsubscribe = store.subscribe(() => this.render());
        this.render();
    }
    
    unmount() {
        if (this.unsubscribe) this.unsubscribe();
    }
    
    render() {
        const { currentPart, currentQuestion } = store.getState();
        const part = store.getCurrentPart();
        const question = store.getCurrentQuestion();
        
        if (!part || !question) {
            this.container.innerHTML = '<p>No question found</p>';
            return;
        }
        
        // Render based on question type
        const renderer = this.getRenderer(question.type);
        this.container.innerHTML = renderer(question);
        
        // Attach event listeners
        this.attachListeners();
    }
    
    getRenderer(type) {
        const renderers = {
            'reading-mcq': (q) => this.renderMCQ(q),
            'fill-in': (q) => this.renderFillIn(q),
            'writing': (q) => this.renderWriting(q),
            'listening-mcq': (q) => this.renderMCQ(q),
            'matching': (q) => this.renderMatching(q),
        };
        return renderers[type] || (() => '<p>Unknown question type</p>');
    }
    
    renderMCQ(question) {
        const state = store.getState();
        const userAnswer = state.userAnswers[question.id];
        
        return `
            <div class="question-card">
                <div class="question-text">${question.text || ''}</div>
                ${question.context ? `<div class="question-context">${question.context}</div>` : ''}
                
                <div class="options-list">
                    ${question.options.map(opt => `
                        <button class="option-btn ${userAnswer === opt.letter ? 'selected' : ''}"
                                data-option="${opt.letter}"
                                onclick="app.selectOption('${question.id}', '${opt.letter}')">
                            <span class="option-letter">${opt.letter}</span>
                            <span class="option-text">${opt.text}</span>
                        </button>
                    `).join('')}
                </div>
                
                ${userAnswer ? `<div class="explanation">${question.explanation}</div>` : ''}
            </div>
        `;
    }
    
    renderFillIn(question) {
        const state = store.getState();
        const userAnswer = state.userAnswers[question.id];
        
        return `
            <div class="question-card">
                <div class="question-text">${question.text}</div>
                <input 
                    type="text" 
                    class="quiz-input"
                    value="${userAnswer || ''}"
                    onchange="app.selectOption('${question.id}', this.value)"
                    placeholder="Type your answer...">
            </div>
        `;
    }
    
    renderWriting(question) {
        const state = store.getState();
        const userAnswer = state.userAnswers[question.id] || '';
        const wordCount = userAnswer.split(/\\s+/).filter(w => w).length;
        
        return `
            <div class="question-card">
                <div class="question-text">${question.prompt}</div>
                
                <textarea 
                    class="quiz-textarea"
                    onchange="app.selectOption('${question.id}', this.value)"
                >${userAnswer}</textarea>
                
                <div class="word-count">
                    ${wordCount} words (minimum: ${question.minWords})
                </div>
                
                ${question.sampleAnswer ? `
                    <button class="sample-toggle" onclick="app.toggleSample('${question.id}')">
                        📋 View Sample Answer
                    </button>
                    <div id="sample-${question.id}" class="sample-box" style="display:none">
                        ${question.sampleAnswer}
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    // ... more renderers
    
    attachListeners() {
        // Event delegation
        this.container.addEventListener('click', (e) => {
            if (e.target.classList.contains('option-btn')) {
                const option = e.target.dataset.option;
                const questionId = e.target.dataset.questionId;
                this.selectOption(questionId, option);
            }
        });
    }
    
    selectOption(questionId, answer) {
        store.recordAnswer(questionId, answer);
        store.notifyListeners();  // Trigger re-render
    }
}

export default Quiz;
```

#### Task 3: Extract Utilities

**File: `src/utils/formatters.js`**

```javascript
/**
 * Formatting utilities
 */

export function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
}

export function formatScore(score, total) {
    return `${score}/${total} (${Math.round((score/total)*100)}%)`;
}

export function getPerformanceLabel(percentage) {
    if (percentage >= 80) return 'Excellent! 🌟';
    if (percentage >= 70) return 'Good! ✅';
    if (percentage >= 50) return 'Fair ⚠️';
    return 'Needs improvement 💪';
}

export function truncateText(text, length) {
    return text.length > length ? text.substring(0, length) + '...' : text;
}
```

**File: `src/utils/validators.js`**

```javascript
/**
 * Validation utilities
 */

export function validateQuizData(data) {
    if (!data.title || !data.parts) {
        throw new Error('Invalid quiz: missing title or parts');
    }
    
    const questionIds = new Set();
    
    data.parts.forEach((part, partIdx) => {
        if (!part.id || !part.title || !part.questions) {
            throw new Error(`Invalid part at index ${partIdx}`);
        }
        
        part.questions.forEach((q, qIdx) => {
            // Check duplicate IDs
            if (questionIds.has(q.id)) {
                throw new Error(`Duplicate question ID: ${q.id}`);
            }
            questionIds.add(q.id);
            
            // Check correct answer exists
            if (q.type === 'reading-mcq' || q.type === 'listening-mcq') {
                const validOptions = q.options.map(o => o.letter);
                if (!validOptions.includes(q.correctAnswer)) {
                    throw new Error(`Invalid correctAnswer in Q${qIdx}: ${q.id}`);
                }
            }
            
            // Check writing min words
            if (q.type === 'writing' && q.minWords > 500) {
                console.warn(`Large minWords (${q.minWords}) in ${q.id}`);
            }
        });
    });
    
    return true;
}

export function validateAnswer(question, answer) {
    if (!answer) return { valid: false, message: 'Please select an answer' };
    
    if (question.type === 'writing') {
        const wordCount = answer.split(/\s+/).filter(w => w).length;
        if (wordCount < question.minWords) {
            return { 
                valid: false, 
                message: `Need ${question.minWords - wordCount} more words` 
            };
        }
    }
    
    return { valid: true };
}
```

---

### WEEK 5-6: Data Migration

#### Task 1: Convert test1.js to test1.json

Create `public/data/test1.json`:

```json
{
  "id": "test1",
  "title": "A2 Key Practice Test — Đề 1",
  "description": "Reading & Writing + Listening",
  "parts": [
    {
      "id": "r1",
      "title": "Reading Part 1 — Short Texts",
      "skill": "reading",
      "questions": [
        {
          "id": "r1q1",
          "type": "reading-mcq",
          "text": "",
          "context": "<strong>City Library / Reading Competition:</strong><br>...",
          "options": [
            { "letter": "A", "text": "The library is open for three hours." },
            { "letter": "B", "text": "Students of all ages can take part in the competition." },
            { "letter": "C", "text": "Adults can't take part in the competition." }
          ],
          "correctAnswer": "C",
          "explanation": "The competition is open to students aged 10-17, so adults cannot take part..."
        }
      ]
    }
  ]
}
```

#### Task 2: Create Loader

**File: `src/utils/dataLoader.js`**

```javascript
import { validateQuizData } from './validators.js';

export async function loadQuizData(quizId) {
    try {
        const response = await fetch(`/data/test${quizId}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load test ${quizId}`);
        }
        
        const data = await response.json();
        validateQuizData(data);
        return data;
    } catch (error) {
        console.error('Failed to load quiz:', error);
        throw error;
    }
}

export async function loadAllQuizMeta() {
    // Load just IDs and titles (lightweight)
    const quizzes = [];
    for (let i = 1; i <= 8; i++) {
        try {
            const response = await fetch(`/data/test${i}.json`);
            if (response.ok) {
                const data = await response.json();
                quizzes.push({
                    id: data.id,
                    title: data.title,
                    description: data.description,
                });
            }
        } catch (e) {
            console.warn(`Could not load meta for test${i}`);
        }
    }
    return quizzes;
}
```

---

### WEEK 7-8: Build Setup & CSS

#### Task 1: Configure Vite

**File: `vite.config.js`**

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
    root: './public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        minify: 'terser',
        target: 'esnext',
        sourcemap: false,
    },
    server: {
        port: 5173,
        open: true,
    },
})
```

#### Task 2: Organize CSS

**File: `src/styles/theme.css`**

```css
:root {
  /* WARM THEME */
  --bg-primary: #FDF6EC;
  --bg-card: #FFFFFF;
  --text-primary: #2D2418;
  --accent-primary: #C67B4E;
  --accent-success: #5B9A6F;
  --accent-error: #C75050;
  
  /* ... all CSS variables from quiz.html */
}

[data-theme="dark"] {
  --bg-primary: #0F0F14;
  --bg-card: rgba(30, 30, 42, 0.7);
  --text-primary: #F0EDF5;
  --accent-primary: #818CEF;
  /* ... */
}
```

**File: `src/styles/components.css`**

```css
/* Quiz Card */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

/* Option Button */
.option-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: var(--bg-card);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.option-btn:hover {
  border-color: var(--accent-primary);
  transform: translateX(4px);
}

.option-btn.selected {
  background: var(--accent-primary);
  color: white;
}

/* ... more components */
```

#### Task 3: Extract inline CSS from test2.js, test3.js, test4.js

**File: `src/styles/test2-neubrutalism.css`**

```css
/* Neubrutalism Theme for Test 2 */
body { background-color: #F4F4F0 !important; font-family: 'Space Grotesk', 'Inter', sans-serif !important; }

.card, .option-btn, .btn-primary {
    background-color: #FFF !important;
    border: 3px solid #000 !important;
    border-radius: 0 !important;
    box-shadow: 6px 6px 0px #000 !important;
}

.option-btn.selected { background: #FFD166 !important; }
.option-btn.correct { background: #06D6A0 !important; }
/* ... */
```

---

### WEEK 9-10: Testing

#### Task 1: Setup Vitest

```bash
npm install --save-dev vitest @vitest/ui @testing-library/dom @testing-library/user-event
```

**File: `vitest.config.js`**

```javascript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.js'],
      exclude: ['src/**/*.test.js'],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
})
```

#### Task 2: Write Unit Tests

**File: `tests/unit/formatters.test.js`**

```javascript
import { describe, it, expect } from 'vitest';
import { formatTime, formatScore, getPerformanceLabel } from '../../src/utils/formatters.js';

describe('formatTime', () => {
  it('should format 0 seconds as 0:00', () => {
    expect(formatTime(0)).toBe('0:00');
  });
  
  it('should format 65 seconds as 1:05', () => {
    expect(formatTime(65)).toBe('1:05');
  });
  
  it('should format 3661 seconds as 61:01', () => {
    expect(formatTime(3661)).toBe('61:01');
  });
});

describe('formatScore', () => {
  it('should format 50/100 as "50/100 (50%)"', () => {
    expect(formatScore(50, 100)).toBe('50/100 (50%)');
  });
  
  it('should handle perfect score', () => {
    expect(formatScore(25, 25)).toBe('25/25 (100%)');
  });
});

describe('getPerformanceLabel', () => {
  it('should return Excellent for 80%+', () => {
    expect(getPerformanceLabel(80)).toMatch('Excellent');
  });
  
  it('should return Good for 70-79%', () => {
    expect(getPerformanceLabel(75)).toMatch('Good');
  });
});
```

#### Task 3: Write E2E Tests (Optional but Recommended)

```bash
npm install --save-dev @playwright/test
```

**File: `tests/e2e/quiz-flow.spec.js`**

```javascript
import { test, expect } from '@playwright/test';

test('complete quiz flow', async ({ page, browser }) => {
  // 1. Navigate and see landing
  await page.goto('http://localhost:5173/?id=1');
  await expect(page.locator('h1')).toContainText('English Practice Test');
  
  // 2. Start quiz
  await page.click('button:has-text("Start Test")');
  await expect(page.locator('#pgQuiz')).toBeVisible();
  
  // 3. Answer questions
  await page.click('.option-btn:nth-child(1)');
  await expect(page.locator('.explanation')).toBeVisible();
  
  // 4. Navigate to next
  await page.click('button:has-text("Next")');
  
  // 5. Verify results page appears after completing
  // ... more steps
});
```

---

## Phần 3: COMMANDS & DEPLOYMENT

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "lint": "eslint src --fix",
    "format": "prettier --write 'src/**/*.js'",
    "type-check": "tsc --noEmit"
  }
}
```

### Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
npm install -g vercel
vercel deploy

# Or Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## Phần 4: CHECKLIST HOÀN THÀNH

### Sprint 1 (Week 1-4): Setup & Structure
- [ ] Create GitHub repository
- [ ] Setup .gitignore, package.json
- [ ] Create folder structure
- [ ] Document current architecture
- [ ] Extract state management (quizStore.js)
- [ ] Extract components (Quiz.js, Results.js)
- [ ] Extract utilities (formatters, validators)

### Sprint 2 (Week 5-8): Data & Build
- [ ] Convert test1.js → test1.json
- [ ] Convert remaining tests to JSON
- [ ] Create data loader utility
- [ ] Setup Vite config
- [ ] Extract all CSS into separate files
- [ ] Remove inline CSS from test*.js
- [ ] Create public/index.html (clean)
- [ ] Create src/main.js (entry point)

### Sprint 3 (Week 9-10): Testing & CI/CD
- [ ] Setup Vitest
- [ ] Write unit tests (80% coverage)
- [ ] Write E2E tests
- [ ] Setup ESLint + Prettier
- [ ] Create .eslintrc.json
- [ ] Setup GitHub Actions CI
- [ ] Add pre-commit hooks

### Sprint 4 (Week 11-12): Optimization & Deployment
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit (axe)
- [ ] Add audio files
- [ ] SEO optimization
- [ ] Create README.md
- [ ] Create CONTRIBUTING.md
- [ ] Deploy to Vercel/Netlify
- [ ] Setup monitoring (Sentry)

---

## Phần 5: RESOURCES & REFERENCES

### Documentation
- [Vite Guide](https://vitejs.dev/guide/)
- [Vitest Documentation](https://vitest.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Tools
- [GitHub](https://github.com) - Version control
- [Vercel](https://vercel.com) - Deployment
- [Sentry](https://sentry.io) - Error tracking
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Best Practices
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [Testing Best Practices](https://testingjavascript.com/)
- [Web Performance](https://web.dev/performance/)

---

## FINAL NOTES

✅ **This is a solid project with great UX.** The next step is professionalizing the codebase to enable faster development, easier testing, and better maintainability.

📊 **Estimated Impact After Refactoring:**
- Development speed: +50% (easier to add features)
- Bug detection: +80% (with tests)
- Code reusability: +40% (modular components)
- Performance: -60% load time (optimized build)

🚀 **Go ahead with confidence. You've got a great foundation!**

---

*Last Updated: April 4, 2026*
