const img = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');

img.onclick = () => {
    img.height += 20;
    img.width += 20;
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
    setTimeout(() => {
        img.width -= 20;
        img.height -= 20;
    }, 100);         
}