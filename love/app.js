// Unconditional Love - Optimized
// ==========================================

// State
const state = {
    video: null,
    model: null,
    confettiCanvas: null,
    confettiCtx: null,
    detectionCanvas: null,
    detectionCtx: null,
    
    personDetected: false,
    lastConfettiTime: 0,
    lastPraiseTime: 0,
    currentPraiseIndex: 0,
    
    confettiParticles: [],
    praiseMessageElement: null,
};

// Config
const config = {
    confetti: {
        burstInterval: 600,
        burstSize: 8,
        initialBurst: 24,
        maxParticles: 80,
        colors: ['#1a88f8', '#6ac4dc', '#5e5ce6', '#34c759', '#ff9f0a', '#ff453a', '#bf5af2', '#ff375f'],
    },
    praise: {
        rotationInterval: 1500, // Pop up every 1.5 seconds
        messages: [
            "Amazing!",
            "Awesome!",
            "Epic!!",            
            "LEGENDARY!!",
            "Spectacular!!",
            "You are Loved!",
            "You are Beautiful!",
            "You are Wonderful!",
            "You are Incredible!",
            "You are Perfect!",
            "You are Brilliant!",
            "You Matter!",
            "You are Radiant!",
            "You are Stunning!",
            "You are Fabulous!",
            "You are Awesome!",
            "You are Magnificent!",
            "You are Extraordinary!",
            "You are Phenomenal!",
        ],
    },
    detection: {
        confidenceThreshold: 0.65,
        boxColor: '#1a88f8',
        boxGlowIntensity: 8,
        detectionInterval: 200,
    }
};

// ==========================================
// Initialization
// ==========================================

async function init() {
    state.video = document.getElementById('video');
    state.confettiCanvas = document.getElementById('confettiCanvas');
    state.confettiCtx = state.confettiCanvas.getContext('2d', { alpha: true, desynchronized: true });
    state.detectionCanvas = document.getElementById('detectionCanvas');
    state.detectionCtx = state.detectionCanvas.getContext('2d', { alpha: true });
    
    setupCanvas();
    window.addEventListener('resize', setupCanvas);
    
    createFloatingHearts();
    try {
        await Promise.all([
            initializeWebcam(),
            loadAIModel()
        ]);
        
        hideSpinner();
        hideBottomLoading();
        startDetectionLoop();
    } catch (error) {
        console.error('Initialization failed:', error);
    }
}

function setupCanvas() {
    const dpr = window.devicePixelRatio || 1;
    state.confettiCanvas.width = Math.round(window.innerWidth * dpr);
    state.confettiCanvas.height = Math.round(window.innerHeight * dpr);
    state.confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    resizeDetectionCanvas();
}

function resizeDetectionCanvas() {
    if (state.video.videoWidth && state.video.videoHeight) {
        const rect = state.video.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        state.detectionCanvas.width = Math.round(rect.width * dpr);
        state.detectionCanvas.height = Math.round(rect.height * dpr);
        state.detectionCtx.setTransform(
            state.detectionCanvas.width / state.video.videoWidth,
            0,
            0,
            state.detectionCanvas.height / state.video.videoHeight,
            0,
            0
        );
    }
}

// ==========================================
// Webcam & AI Model
// ==========================================

async function initializeWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { 
                width: { ideal: 320 },
                height: { ideal: 240 },
                facingMode: 'user'
            }
        });
        
        state.video.srcObject = stream;
        
        await new Promise((resolve) => {
            state.video.onloadedmetadata = () => {
                resizeDetectionCanvas();
                resolve();
            };
        });
        
        updateStatus('Camera ready');
    } catch (error) {
        console.error('Webcam error:', error);
        updateStatus('Camera access denied');
        throw error;
    }
}

async function loadAIModel() {
    try {
        updateLoading('Loading AI model...');
        state.model = await cocoSsd.load();
    } catch (error) {
        console.error('Model loading error:', error);
        updateLoading('AI loading failed');
        throw error;
    }
}

// ==========================================
// Detection Loop (Optimized)
// ==========================================

let lastDetectionTime = 0;

function startDetectionLoop() {
    detectPerson();
}

async function detectPerson() {
    const now = Date.now();
    
    // Only run detection every 200ms to reduce lag
    if (state.model && state.video.readyState === 4 && now - lastDetectionTime > config.detection.detectionInterval) {
        lastDetectionTime = now;
        
        try {
            const predictions = await state.model.detect(state.video);
            const personPredictions = predictions.filter(
                pred => pred.class === 'person' && pred.score > config.detection.confidenceThreshold
            );
            const personFound = personPredictions.length > 0;
            
            // Clear detection canvas
            state.detectionCtx.clearRect(0, 0, state.detectionCanvas.width, state.detectionCanvas.height);
            
            if (personFound) {
                handlePersonDetected(personPredictions);
            } else {
                handlePersonLeft();
            }
        } catch (error) {
            console.error('Detection error:', error);
        }
    }
    
    setTimeout(detectPerson, config.detection.detectionInterval);
}

function handlePersonDetected(predictions) {
    if (!state.personDetected) {
        state.personDetected = true;
        startCelebration();
    }
    
    // Draw bounding boxes
    predictions.forEach(prediction => drawBoundingBox(prediction));
    
    // Continuous effects
    const now = Date.now();
    
    if (now - state.lastConfettiTime > config.confetti.burstInterval) {
        addConfettiBurst();
        state.lastConfettiTime = now;
    }
    
    if (now - state.lastPraiseTime > config.praise.rotationInterval) {
        rotatePraiseMessage();
        state.lastPraiseTime = now;
    }
    
    updateStatus(`You are awesome!`);
}

function handlePersonLeft() {
    if (state.personDetected) {
        state.personDetected = false;
        stopCelebration();
    }
    updateStatus('Step into frame!');
}

// ==========================================
// Celebration Control
// ==========================================

function startCelebration() {
    // Start with first pop-up (which will trigger confetti)
    rotatePraiseMessage();
}

function stopCelebration() {
    if (state.praiseMessageElement) {
        state.praiseMessageElement.classList.remove('praise-enter');
        state.praiseMessageElement.classList.add('praise-exit');
        setTimeout(() => {
            if (state.praiseMessageElement) {
                state.praiseMessageElement.remove();
                state.praiseMessageElement = null;
            }
        }, 300);
    }
    
    state.lastConfettiTime = 0;
    state.lastPraiseTime = 0;
}

// ==========================================
// Visual Effects
// ==========================================

function drawBoundingBox(prediction) {
    const [x, y, width, height] = prediction.bbox;
    const ctx = state.detectionCtx;
    
    // Simple glowing box
    const glowIntensity = config.detection.boxGlowIntensity + Math.sin(Date.now() / 400) * 5;
    
    ctx.strokeStyle = config.detection.boxColor;
    ctx.lineWidth = 3;
    ctx.shadowColor = config.detection.boxColor;
    ctx.shadowBlur = glowIntensity;
    
    // Draw rounded rectangle
    const radius = 12;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.stroke();
    
    ctx.shadowBlur = 0;
}

// ==========================================
// Confetti System (Optimized)
// ==========================================

function createInitialConfettiBurst() {
    const { colors, initialBurst } = config.confetti;
    for (let i = 0; i < initialBurst; i++) {
        state.confettiParticles.push(createConfettiParticle(colors, true));
    }
}

function addConfettiBurst() {
    const { colors, burstSize } = config.confetti;
    for (let i = 0; i < burstSize; i++) {
        state.confettiParticles.push(createConfettiParticle(colors, false));
    }
    if (state.confettiParticles.length > config.confetti.maxParticles) {
        state.confettiParticles.splice(0, state.confettiParticles.length - config.confetti.maxParticles);
    }
    startConfettiAnimation();
}

function createConfettiParticle(colors, isInitial) {
    return {
        x: Math.random() * window.innerWidth,
        y: isInitial ? -10 - Math.random() * 100 : -10 - Math.random() * 30,
        vx: (Math.random() - 0.5) * 5,
        vy: Math.random() * 4 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        gravity: 0.2,
        shape: Math.random() > 0.5 ? 'square' : 'circle',
    };
}

function startConfettiAnimation() {
    if (!state.confettiAnimationRunning) {
        state.confettiAnimationRunning = true;
        animateConfetti();
    }
}

function animateConfetti() {
    const ctx = state.confettiCtx;
    
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    for (let i = state.confettiParticles.length - 1; i >= 0; i--) {
        const p = state.confettiParticles[i];
        
        // Update
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotationSpeed;
        p.vx *= 0.99;
        
        // Draw
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        
        if (p.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        }
        
        ctx.restore();
        
        // Remove off-screen
        if (p.y > window.innerHeight + 50) {
            state.confettiParticles.splice(i, 1);
        }
    }
    
    if (state.confettiParticles.length) {
        requestAnimationFrame(animateConfetti);
    } else {
        state.confettiAnimationRunning = false;
    }
}

// ==========================================
// Praise Messages (Pop-up style)
// ==========================================

function rotatePraiseMessage() {
    // Create new pop-up message at random position
    const message = config.praise.messages[state.currentPraiseIndex];
    state.currentPraiseIndex = (state.currentPraiseIndex + 1) % config.praise.messages.length;
    
    const messageElement = document.createElement('div');
    messageElement.className = 'praise-popup';
    messageElement.textContent = message;
    
    // Random position (avoid edges)
    const x = 10 + Math.random() * 80; // 10% to 90%
    const y = 10 + Math.random() * 80; // 10% to 90%
    messageElement.style.left = x + '%';
    messageElement.style.top = y + '%';
    
    // Random tilt
    const tilt = (Math.random() - 0.5) * 20; // -10deg to +10deg
    messageElement.style.setProperty('--tilt', tilt + 'deg');
    
    // Random color
    const colors = config.confetti.colors;
    const color = colors[Math.floor(Math.random() * colors.length)];
    messageElement.style.setProperty('--color', color);
    
    document.body.appendChild(messageElement);
    
    // Trigger confetti burst
    addConfettiBurst();
    
    setTimeout(() => {
        messageElement.remove();
    }, 2000);
}

// ==========================================
// Floating Hearts
// ==========================================

function createFloatingHearts() {
    const container = document.getElementById('heartsBackground');
    const symbols = ['❤️', '💕', '💖', '💗', '💝'];
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        const duration = Math.random() * 8 + 12;
        heart.style.animation = `heartFloat ${duration}s infinite ease-in-out`;
        heart.style.animationDelay = Math.random() * 15 + 's';
        container.appendChild(heart);
    }
}

// ==========================================
// UI Updates
// ==========================================

function updateStatus(text) {
    const statusText = document.getElementById('statusText');
    if (statusText) statusText.textContent = text;
}

function updateLoading(text) {
    const loading = document.getElementById('loading');
    if (loading) loading.textContent = text;
}

function hideSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) spinner.style.display = 'none';
}

function hideBottomLoading() {
    const loading = document.getElementById('loading');
    if (loading?.parentElement) {
        loading.parentElement.style.display = 'none';
    }
}

// ==========================================
// Event Listeners
// ==========================================

window.addEventListener('load', init);

// Cleanup
window.addEventListener('beforeunload', () => {
    if (state.video && state.video.srcObject) {
        state.video.srcObject.getTracks().forEach(track => track.stop());
    }
});
