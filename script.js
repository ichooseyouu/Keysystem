const keys = [
    "ORcVr0O4CJ", "0X55EdzmAd", "9aqJjfR2m0", "f1wjKNrlKW",
    "BQ8hnQ01l2", "EPj2yF42lx", "EzjmSo9W5Y", "vzHA6fQxFZ",
    "sCzUusatbu", "xNdHOyJQi9", "3j3lbsQc0r", "u3HBwQCVmS",
    "tkFoX2ptHk", "GXA2AwfvKW", "EqIRZw1AR0", "VSZKm5qNdu",
    "YyzMozC34A", "dxrtw5oRRe", "JoNgIXANni", "av9xE2cGDw",
    "afaCCFHN1n", "us2SyjAzK5", "gHeSsKI5qJ", "6RIPcW9vyM",
    "jpTY2KuqLb", "0gwJFyZOUp", "JGN6tpmoxE", "dcXpQxcLAO",
    "7KkxtZNQnN", "N92NJh8X1O"
];

// 2 minutes in milliseconds
const COOLDOWN = 2 * 60 * 1000;

function checkAccess() {
    const existingKey = localStorage.getItem('geezyKey');
    const lastGenerated = localStorage.getItem('lastGenerated');

    const now = Date.now();

    if (existingKey && lastGenerated && now - lastGenerated < COOLDOWN) {
        // Still in cooldown
        document.getElementById('keyBox').value = existingKey;
        document.getElementById('generateBtn').disabled = true;
        const remaining = Math.ceil((COOLDOWN - (now - lastGenerated)) / 1000);
        document.getElementById('generateBtn').innerText = `Wait ${remaining}s`;
        startCountdown(remaining);
    } else {
        document.getElementById('generateBtn').disabled = false;
        document.getElementById('generateBtn').innerText = 'Generate Key';
    }
}

function startCountdown(seconds) {
    const btn = document.getElementById('generateBtn');
    let remaining = seconds;

    const interval = setInterval(() => {
        remaining--;
        btn.innerText = `Wait ${remaining}s`;
        if (remaining <= 0) {
            clearInterval(interval);
            btn.disabled = false;
            btn.innerText = 'Generate Key';
        }
    }, 1000);
}

function generateKey() {
    // Pick a random key
    const randomIndex = Math.floor(Math.random() * keys.length);
    const key = keys[randomIndex];

    // Show key in input
    document.getElementById('keyBox').value = key;

    // Store key and timestamp
    localStorage.setItem('geezyKey', key);
    localStorage.setItem('lastGenerated', Date.now());

    // Disable button and start cooldown display
    document.getElementById('generateBtn').disabled = true;
    startCountdown(120); // 120 seconds
}
