/**
 * ============================================================
 * MAGIC.JS — HIỆU ỨNG ÂM THANH, 3D, CHUYỂN CẢNH & CYBERPUNK
 * Cắm vào là chạy, không cần sửa code cũ!
 * ============================================================
 */

(function initMagic() {
    'use strict';

    /* =========================================
       1. THEME CYBERPUNK (NEON PHÁT SÁNG)
       ========================================= */
    const cyberpunkStyles = document.createElement('style');
    cyberpunkStyles.innerHTML = `
        /* Theme Cyberpunk Variables */
        [data-theme="cyberpunk"] {
            --bg-primary: #09090b; --bg-secondary: #12121a; --bg-card: #181825; --bg-card-hover: #1f1f2e;
            --bg-input: #12121a; --bg-accent: rgba(0, 255, 255, 0.1); 
            --text-primary: #00ffff; --text-secondary: #b3b3b3; --text-tertiary: #666; --text-inverse: #000;
            --border-color: #00ffff; --border-strong: #ff00ff;
            --accent-primary: #00ffff; --accent-primary-hover: #00cccc; 
            --accent-success: #39ff14; --accent-success-light: rgba(57, 255, 20, 0.1);
            --accent-error: #ff003c; --accent-error-light: rgba(255, 0, 60, 0.1);
            --accent-warning: #ffea00; --accent-info: #bc13fe;
            font-family: 'JetBrains Mono', monospace;
        }

        /* Hiệu ứng Neon cho Cyberpunk */
        [data-theme="cyberpunk"] .card, [data-theme="cyberpunk"] .passage-box {
            border: 1px solid var(--border-color);
            box-shadow: 0 0 10px rgba(0,255,255,0.2), inset 0 0 10px rgba(0,255,255,0.05);
            border-radius: 8px;
        }
        [data-theme="cyberpunk"] .btn-primary {
            background: transparent; color: var(--accent-primary);
            border: 1px solid var(--accent-primary);
            box-shadow: 0 0 15px rgba(0,255,255,0.4);
            text-transform: uppercase; letter-spacing: 2px; border-radius: 4px;
        }
        [data-theme="cyberpunk"] .btn-primary:hover {
            background: var(--accent-primary); color: #000; box-shadow: 0 0 25px rgba(0,255,255,0.8);
        }
        [data-theme="cyberpunk"] .option-btn { border-radius: 4px; }
        [data-theme="cyberpunk"] .option-btn.selected { box-shadow: 0 0 15px rgba(0,255,255,0.4); }
        [data-theme="cyberpunk"] .option-btn.correct { box-shadow: 0 0 15px rgba(57,255,20,0.5); }
        [data-theme="cyberpunk"] .option-btn.wrong { box-shadow: 0 0 15px rgba(255,0,60,0.5); }

        /* =========================================
           2. HIỆU ỨNG CHUYỂN CẢNH (SMOOTH TRANSITION)
           ========================================= */
        @keyframes slideInRight {
            0% { transform: translateX(30px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        .card { animation: slideInRight 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both !important; }
        
        /* =========================================
           3. CARD 3D TILT EFFECT
           ========================================= */
        .card { transition: transform 0.1s ease-out, box-shadow 0.1s ease-out !important; transform-style: preserve-3d; perspective: 1000px; }
    `;
    document.head.appendChild(cyberpunkStyles);

    // Chèn thêm nút Theme Cyberpunk vào Navbar
    document.addEventListener('DOMContentLoaded', () => {
        const switcher = document.getElementById('themeSwitcher');
        if (switcher) {
            const cyberBtn = document.createElement('button');
            cyberBtn.className = 'theme-btn';
            cyberBtn.dataset.theme = 'cyberpunk';
            cyberBtn.innerText = '⚡';
            cyberBtn.onclick = () => window.setTheme('cyberpunk'); // Gọi hàm setTheme từ quiz.html
            switcher.appendChild(cyberBtn);
        }
    });


    /* =========================================
       4. HIỆU ỨNG ÂM THANH (WEB AUDIO API)
       ========================================= */
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx;

    function initAudio() {
        if (!audioCtx) audioCtx = new AudioContext();
        if (audioCtx.state === 'suspended') audioCtx.resume();
    }

    // Hàm tạo tiếng bíp điện tử
    function playTone(freq, type, duration, vol=0.1) {
        if (!audioCtx) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    }

    // Tiếng Ting! (Đúng)
    function playTing() {
        initAudio();
        playTone(880, 'sine', 0.1, 0.2); // Nốt A5
        setTimeout(() => playTone(1318.51, 'sine', 0.3, 0.2), 100); // Nốt E6 ngân dài
    }

    // Tiếng Bụp (Sai)
    function playBup() {
        initAudio();
        playTone(300, 'square', 0.1, 0.1);
        setTimeout(() => playTone(150, 'square', 0.2, 0.1), 100);
    }

    // Tiếng Finish (Tèn Tén Ten)
    function playFinish() {
        initAudio();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            setTimeout(() => playTone(freq, 'sine', 0.4, 0.2), i * 150);
        });
    }

    // Bắt sự kiện Click để phát âm thanh
    // Bắt sự kiện Click để phát âm thanh
    document.addEventListener('click', (e) => {
        initAudio(); // Khởi tạo audio khi user tương tác

        // 1. BẮT ÂM THANH CHỌN ĐÁP ÁN
        const optionBtn = e.target.closest('.option-btn');
        if (optionBtn && !optionBtn.classList.contains('locked')) {
            // Lấy ID câu hỏi từ thuộc tính onclick (VD: App.selectMCQ('r1q1','A'))
            const onclickAttr = optionBtn.getAttribute('onclick') || '';
            const match = onclickAttr.match(/'([^']+)'/); 
            
            if (match) {
                const qId = match[1];
                // Đợi 50ms để giao diện vẽ xong màu Xanh/Đỏ
                setTimeout(() => {
                    const newCard = document.getElementById('q_' + qId);
                    if (newCard) {
                        // Nếu thẻ mới có nút bị Đỏ -> Sai
                        if (newCard.querySelector('.option-btn.wrong')) {
                            playBup();
                        } 
                        // Nếu có Xanh mà không có Đỏ -> Đúng
                        else if (newCard.querySelector('.option-btn.correct')) {
                            playTing();
                        }
                    }
                }, 50);
            }
        }

        // 2. BẮT ÂM THANH NÚT FINISH
        const finishBtn = e.target.closest('#btnNext');
        if (finishBtn && finishBtn.innerText.includes('Finish')) {
            playFinish();
        }
    });

    /* =========================================
       5. LOGIC CARD 3D TILT (Nghiêng theo chuột)
       ========================================= */
    document.addEventListener('mousemove', (e) => {
        // Chỉ chạy trên Desktop (màn hình to)
        if (window.innerWidth < 768) return; 
        
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            // Chỉ nghiêng các thẻ đang hiển thị trên màn hình
            if (rect.top > window.innerHeight || rect.bottom < 0) return;

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -3; // Chỉnh số 3 để tăng/giảm độ nghiêng
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        });
    });

    // Reset thẻ khi chuột rời khỏi web
    document.addEventListener('mouseleave', () => {
        document.querySelectorAll('.card').forEach(card => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    console.log("🚀 Magic loaded: Sounds, 3D Tilt, Smooth Transitions & Cyberpunk theme is ready!");
})();