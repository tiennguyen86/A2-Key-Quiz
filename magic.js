/**
 * ============================================================
 * MAGIC.JS V3 — ULTIMATE EDITION (BUG FIXED)
 * Âm thanh Studio, 3D Mobile, Pháo hoa nổ tung & Cyberpunk
 * ============================================================
 */

(function initMagicV3() {
    'use strict';

    /* =========================================
       1. THEME CYBERPUNK & CSS ANIMATIONS
       ========================================= */
    const magicStyles = document.createElement('style');
    magicStyles.innerHTML = `
        /* Theme Cyberpunk */
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
        [data-theme="cyberpunk"] .card, [data-theme="cyberpunk"] .passage-box {
            border: 1px solid var(--border-color);
            box-shadow: 0 0 10px rgba(0,255,255,0.2), inset 0 0 10px rgba(0,255,255,0.05);
            border-radius: 8px;
        }
        [data-theme="cyberpunk"] .btn-primary { background: transparent; color: var(--accent-primary); border: 1px solid var(--accent-primary); box-shadow: 0 0 15px rgba(0,255,255,0.4); text-transform: uppercase; letter-spacing: 2px; }
        [data-theme="cyberpunk"] .btn-primary:hover { background: var(--accent-primary); color: #000; box-shadow: 0 0 25px rgba(0,255,255,0.8); }
        [data-theme="cyberpunk"] .option-btn { border-radius: 4px; }
        [data-theme="cyberpunk"] .option-btn.selected { box-shadow: 0 0 15px rgba(0,255,255,0.4); }
        [data-theme="cyberpunk"] .option-btn.correct { box-shadow: 0 0 15px rgba(57,255,20,0.5); }
        [data-theme="cyberpunk"] .option-btn.wrong { box-shadow: 0 0 15px rgba(255,0,60,0.5); }

        /* Hiệu ứng chuyển cảnh (Smooth Transition) */
        @keyframes iosSlideIn {
            0% { transform: translateX(50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        #quizBody { animation: iosSlideIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .card { transition: transform 0.15s ease-out, box-shadow 0.15s ease-out !important; transform-style: preserve-3d; perspective: 1000px; }

        /* Pháo hoa nổ (Explosive Confetti) */
        .magic-confetti {
            position: fixed; width: 8px; height: 8px; border-radius: 50%; pointer-events: none; z-index: 99999;
            animation: explode 1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
        @keyframes explode {
            0% { transform: translate(0, 0) scale(1); opacity: 1; }
            100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(magicStyles);

    // Chèn nút Cyberpunk
    document.addEventListener('DOMContentLoaded', () => {
        const switcher = document.getElementById('themeSwitcher');
        if (switcher && !document.querySelector('[data-theme="cyberpunk"]')) {
            const cyberBtn = document.createElement('button');
            cyberBtn.className = 'theme-btn';
            cyberBtn.dataset.theme = 'cyberpunk';
            cyberBtn.innerText = '⚡';
            cyberBtn.onclick = () => window.setTheme('cyberpunk');
            switcher.appendChild(cyberBtn);
        }
    });

    /* =========================================
       2. ÂM THANH STUDIO (WEB AUDIO API V3)
       ========================================= */
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx;
    let isMobileGyroUnlocked = false;

    function initAudioAndSensors() {
        if (!audioCtx) audioCtx = new AudioContext();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        // Xin quyền Gyroscope trên iPhone khi chạm màn hình lần đầu
        if (!isMobileGyroUnlocked && typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(response => { if (response === 'granted') isMobileGyroUnlocked = true; })
                .catch(console.error);
        }
    }

    // Tiếng Ting trong vắt (Giống tiếng gõ ly thủy tinh)
    function playPremiumTing() {
        if (!audioCtx) return;
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc1.type = 'sine'; osc1.frequency.setValueAtTime(1200, audioCtx.currentTime);
        osc2.type = 'triangle'; osc2.frequency.setValueAtTime(2400, audioCtx.currentTime);

        gain.gain.setValueAtTime(0, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);

        osc1.connect(gain); osc2.connect(gain); gain.connect(audioCtx.destination);
        osc1.start(); osc2.start();
        osc1.stop(audioCtx.currentTime + 1); osc2.stop(audioCtx.currentTime + 1);
    }

    // Tiếng Bụp trầm ấm (Giống tiếng đánh trống)
    function playPremiumBup() {
        if (!audioCtx) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.2);

        gain.gain.setValueAtTime(0, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.4, audioCtx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.start(); osc.stop(audioCtx.currentTime + 0.2);
    }

    // Tiếng vỗ tay rào rào (Mô phỏng bằng White Noise)
    function playApplause() {
        if (!audioCtx) return;
        const bufferSize = audioCtx.sampleRate * 2.5; 
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1000;
        filter.Q.value = 0.5;

        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.2); 
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2.5);

        noise.connect(filter); filter.connect(gain); gain.connect(audioCtx.destination);
        noise.start();
    }

    /* =========================================
       3. PHÁO HOA NỔ TUNG TÓE TẠI VỊ TRÍ CHUỘT
       ========================================= */
    function fireExplosiveConfetti(x, y) {
        const colors = ['#39ff14', '#00ffff', '#ffea00', '#bc13fe', '#ff00ff'];
        for (let i = 0; i < 40; i++) { 
            const piece = document.createElement('div');
            piece.className = 'magic-confetti';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.left = x + 'px';
            piece.style.top = y + 'px';
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = 50 + Math.random() * 150; 
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity + 50; 
            
            piece.style.setProperty('--tx', `${tx}px`);
            piece.style.setProperty('--ty', `${ty}px`);
            
            document.body.appendChild(piece);
            setTimeout(() => piece.remove(), 1000); 
        }
    }

    /* =========================================
       4. BẮT SỰ KIỆN CLICK (TÍCH HỢP TẤT CẢ)
       ========================================= */
    document.addEventListener('click', (e) => {
        initAudioAndSensors();

        const optionBtn = e.target.closest('.option-btn');
        if (optionBtn && !optionBtn.classList.contains('locked')) {
            const onclickAttr = optionBtn.getAttribute('onclick') || '';
            const match = onclickAttr.match(/'([^']+)'/); 
            
            if (match) {
                const qId = match[1];
                setTimeout(() => {
                    const newCard = document.getElementById('q_' + qId);
                    if (newCard) {
                        if (newCard.querySelector('.option-btn.wrong')) {
                            playPremiumBup();
                        } else if (newCard.querySelector('.option-btn.correct')) {
                            playPremiumTing();
                            fireExplosiveConfetti(e.clientX, e.clientY);
                        }
                    }
                }, 50);
            }
        }

        const finishBtn = e.target.closest('#btnNext');
        if (finishBtn && finishBtn.innerText.includes('Finish')) {
            playApplause();
        }

        if (finishBtn && !finishBtn.innerText.includes('Finish')) {
            const qBody = document.getElementById('quizBody');
            if (qBody) {
                qBody.style.animation = 'none';
                setTimeout(() => qBody.style.animation = 'iosSlideIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', 10);
            }
        }
    });

    /* =========================================
       5. 3D TILT CHO CẢ MÁY TÍNH VÀ ĐIỆN THOẠI
       ========================================= */
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return; 
        document.querySelectorAll('.card').forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top > window.innerHeight || rect.bottom < 0) return;
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const centerX = rect.width / 2, centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -2; 
            const rotateY = ((x - centerX) / centerX) * 2;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
    });

    document.addEventListener('mouseleave', () => {
        document.querySelectorAll('.card').forEach(card => card.style.transform = 'none');
    });

    window.addEventListener('deviceorientation', (e) => {
        if (!e.beta || !e.gamma) return; 
        let tiltX = Math.max(-20, Math.min(20, e.beta - 45)); 
        let tiltY = Math.max(-20, Math.min(20, e.gamma));     

        document.querySelectorAll('.card').forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top > window.innerHeight || rect.bottom < 0) return;
            card.style.transform = `perspective(1000px) rotateX(${-tiltX/2}deg) rotateY(${tiltY/2}deg)`;
        });
    });

    console.log("🚀 Magic V3 Ultimate Loaded without Syntax Errors!");
})();