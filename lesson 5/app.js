document.getElementById("redBtn").addEventListener("click", function() {
    resetLights();
    document.getElementById("redBtn").style.backgroundColor = "#b22222";
    document.getElementById("statusText").innerText = "СТОП";
    document.getElementById("statusText").style.color = "#b22222";
});

document.getElementById("yellowBtn").addEventListener("click", function() {
    resetLights();
    document.getElementById("yellowBtn").style.backgroundColor = "#cccc00";
    document.getElementById("statusText").innerText = "ЖДИ";
    document.getElementById("statusText").style.color = "#cccc00";
});

document.getElementById("greenBtn").addEventListener("click", function() {
    resetLights();
    document.getElementById("greenBtn").style.backgroundColor = "#228b22";
    document.getElementById("statusText").innerText = "ИДИ";
    document.getElementById("statusText").style.color = "#228b22";
});

function resetLights() {
    document.getElementById("redBtn").style.backgroundColor = "#555";
    document.getElementById("yellowBtn").style.backgroundColor = "#555";
    document.getElementById("greenBtn").style.backgroundColor = "#555";
}
