const adsArrau = [...document.querySelectorAll("span.rotator__case")];
let index = 0;

function changeRotator() {
    if (index === adsArrau.length - 1) {
        index = 0;
    }
    adsArrau[index].classList.remove('rotator__case_active');
    adsArrau[index + 1].classList.add('rotator__case_active');
    index++;
}
setInterval(changeRotator, 1000);