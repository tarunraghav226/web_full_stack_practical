//selectors

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");

const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");

const submit = document.getElementById("submit");

const progresBar = document.getElementById("progress-bar");

next1.onclick = function() {
    form1.style.left = "-500px";
    form2.style.left = "80px";
    progresBar.style.width = "320px";
}

back1.onclick = function(){
    form2.style.left = "500px";
    form1.style.left = "80px";
    progresBar.style.width = "160px";
}

next2.onclick = function(){
    form2.style.left = "-500px";
    form3.style.left = "80px";
    progresBar.style.width = "480px";
}

back2.onclick = function(){
    form3.style.left = "500px";
    form2.style.left = "80px";
    progresBar.style.width = "360px";

}