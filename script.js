// 1. Typewriter Effect
const typed = new Typed('#typed-text', {
    strings: [
        'The Pipeline.', 
        'Infrastructure.', 
        'Kubernetes.', 
        'The Cloud.'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
});

// 2. Scroll Animation
ScrollReveal().reveal('.reveal', { 
    distance: '60px', 
    duration: 1200, 
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 150, 
    origin: 'bottom' 
});

// 3. Smooth Mouse Blob Movement
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Smooth easing for blobs
    const topBlob = document.querySelector('.blob.top-0');
    const bottomBlob = document.querySelector('.blob.bottom-0');
    
    if(topBlob) topBlob.style.transform = `translate(${x/40}px, ${y/40}px)`;
    if(bottomBlob) bottomBlob.style.transform = `translate(-${x/40}px, -${y/40}px)`;
});