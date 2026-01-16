// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// TYPING EFFECT HERO
const typedText = document.getElementById('typed-text');
const text = "hello i am , Paul Haule.";
let index = 0;

function type(){
    if(index < text.length){
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 60); // speed
    }
}
window.addEventListener('load', type);

// SCROLL-TRIGGERED ANIMATION
const faders = document.querySelectorAll('.fade-in');
const textFaders = document.querySelectorAll('.fade-in-text');

const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

// staggered animation for multiple elements
faders.forEach((fader,i)=>{
    fader.style.transitionDelay = `${i*0.2}s`;
    appearOnScroll.observe(fader);
});
textFaders.forEach((text,i)=>{
    text.style.transitionDelay = `${i*0.2}s`;
    appearOnScroll.observe(text);
});
