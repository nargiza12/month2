document.getElementById("redBtn").addEventListener("mouseover", function() {
    document.getElementById("redBtn").style.backgroundColor = "#b22222";
    document.getElementById("statusText").innerText = "СТОП";
    document.getElementById("statusText").style.color = "#b22222";
});

document.getElementById("redBtn").addEventListener("mouseout", function() {
    resetLights();
    resetText();
});

document.getElementById("yellowBtn").addEventListener("mouseover", function() {
    document.getElementById("yellowBtn").style.backgroundColor = "#cccc00";
    document.getElementById("statusText").innerText = "ЖДИ";
    document.getElementById("statusText").style.color = "#cccc00";
});

document.getElementById("yellowBtn").addEventListener("mouseout", function() {
    resetLights();
    resetText();
});

document.getElementById("greenBtn").addEventListener("mouseover", function() {
    document.getElementById("greenBtn").style.backgroundColor = "#228b22";
    document.getElementById("statusText").innerText = "ИДИ";
    document.getElementById("statusText").style.color = "#228b22";
});

document.getElementById("greenBtn").addEventListener("mouseout", function() {
    resetLights();
    resetText();
});

function resetLights() {
    document.getElementById("redBtn").style.backgroundColor = "#555";
    document.getElementById("yellowBtn").style.backgroundColor = "#555";
    document.getElementById("greenBtn").style.backgroundColor = "#555";
}

function resetText() {
    document.getElementById("statusText").innerText ='';
    document.getElementById("statusText").style.color = "#333";
}
