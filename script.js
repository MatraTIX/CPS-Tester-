let clicks = 0;
let startTime, endTime;

function clickCounter() {
    clicks++;
    if (clicks === 1) {
        startTime = new Date().getTime();
    }
    if (clicks === 10) {
        endTime = new Date().getTime();
        let timeDiff = endTime - startTime;
        let cps = Math.round((clicks / timeDiff) * 1000);
        document.getElementById("cps").innerHTML = cps;
        if (cps <= 3) {
            document.getElementById("message").innerHTML = "Slow ahh";
        } else if (cps >= 4 && cps <= 8) {
            document.getElementById("message").innerHTML = "Average";
        } else if (cps >= 15) {
            document.getElementById("message").innerHTML = "HOW THE HELLL LOL";
        } else {
            document.getElementById("message").innerHTML = "Damn you fast";
        }
        clicks = 0;
    }
}