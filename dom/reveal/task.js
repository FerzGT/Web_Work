const reveal = Array.from(document.querySelectorAll('.reveal'));
const vision = window.innerHeight;

document.addEventListener('scroll', () => {
    
    for (let item of reveal) {
        item.classList.remove('reveal_active');
        if (item.getBoundingClientRect().top < vision) {
            item.classList.add('reveal_active');
        }
    }
});