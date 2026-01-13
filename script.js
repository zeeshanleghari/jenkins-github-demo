// 1. Typewriter Effect (Jo text khud type hota hai)
const typed = new Typed('#typed-text', {
    strings: [
        'The Pipeline.', 
        'Cloud Infrastructure.', 
        'The Kubernetes Cluster.', 
        'The Deployment Flow.'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// 2. Scroll Animation (Jo elements scroll karne par smoothly aate hain)
ScrollReveal().reveal('.reveal', { 
    distance: '40px', 
    duration: 1500, 
    interval: 200, 
    origin: 'bottom' 
});

// 3. Mouse Move Effect (Background blobs move karne ke liye)
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    document.querySelector('.blob.top-0').style.transform = `translate(${x/50}px, ${y/50}px)`;
    document.querySelector('.blob.bottom-0').style.transform = `translate(-${x/50}px, -${y/50}px)`;
});