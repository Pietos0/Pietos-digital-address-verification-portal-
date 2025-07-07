document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const contentFrame = document.getElementById('contentFrame');
    const textElement = document.querySelector('.loader-text');
    
    // Dynamic loading messages
    const phrases = [
        "Almost there...",
        "Getting things ready...",
        "Preparing your experience...",
        "Just a moment longer..."
    ];
    
    let currentPhrase = 0;
    const phraseInterval = setInterval(() => {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        textElement.textContent = phrases[currentPhrase];
    }, 3000);
    
    // When iframe loads
    contentFrame.onload = function() {
        clearInterval(phraseInterval);
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    };
    
    // Optional: Timeout fallback in case iframe fails to load
    setTimeout(() => {
        if (loader.style.display !== 'none') {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 15000); // 15 seconds timeout
});