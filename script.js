
let score = 0;

document.addEventListener('keydown', function (event) {
    if (event.key === 's' && !event.repeat) {
        score++;
        updateScore();
        checkAchievements();
        document.getElementById("pts").style.fontSize = "140px"
    }
});

function updateScore() {
    document.getElementById("pts").textContent = score;
}

function checkAchievements() {
    if (score >= 100) {
        document.getElementById("atc").style.visibility = "visible"
        document.getElementById("pts").style.marginLeft = "0px"
    }

    if (score >= 700) {
        document.getElementById("atc1").style.visibility = "visible"
    }

    if (score >= 1500) {
        document.getElementById("atc2").style.visibility = "visible"
    }

    if (score >= 4000) {
        document.getElementById("atc3").style.visibility = "visible"
    }

    if (score >= 8000) {
        document.getElementById("atc4").style.visibility = "visible"
    }

    if (score >= 10000) {
        document.getElementById("atc5").style.visibility = "visible"
    }
}

