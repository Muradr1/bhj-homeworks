const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`)
for (let holeIndex = 1; holeIndex < 10; holeIndex++) {
let hole = getHole(holeIndex);
hole.onclick = function() {
    if (hole.className.includes( 'hole_has-mole' )) {
        dead.textContent++;
    } else {
        lost.textContent++;
    }

    if (dead.textContent === "10") {
        dead.textContent = 0;
        lost.textContent = 0
        alert("win");
    }
    if (lost.textContent === "6") {
       dead.textContent = 0;
       lost.textContent = 0
       alert("game over")
    }
}
}