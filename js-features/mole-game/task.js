for (let i = 1; i <= 9; i++) {
    const hole = document.getElementById("hole" + i);
    hole.onclick = moleCatcher;
}
function moleCatcher() {
const killMole = document.getElementById("dead");
const lostMole = document.getElementById("lost");

    if (this.classList.contains("hole_has-mole")) {
        killMole.innerHTML++;
        this.className = "hole";
        if (killMole.innerHTML >= 10) {
            killMole.innerHTML = 0;
            lostMole.innerHTML = 0;
            window.alert("Вы выиграли!");
        }
    } else {
        lostMole.innerHTML++;
        this.className = "hole";
        if (lostMole.innerHTML >= 5) {
            lostMole.innerHTML = 0;
            lostMole.innerHTML = 0;
            window.alert("Вы проиграли!");
        }
    }
}