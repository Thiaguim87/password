var page1 = document.getElementById('home');
var page2 = document.getElementById('verify');
var menu = document.getElementById('menu_button');
var passInput = document.getElementById('password');
var passLevel = document.getElementById('strength');

var visibilidade = false;

menu.onclick= function() {
    if (visibilidade) {
        document.getElementById('menu_inner').style.display = "none";
        visibilidade = false;
        menu.innerHTML = "Ξ";
    } else {
        document.getElementById('menu_inner').style.display = "block";
        visibilidade = true;
        menu.innerHTML = "X";
    }
}

page1.onclick = function() {
    window.location.href = "./index.html"
}
page2.onclick = function() {
    window.location.href = "./verify.html"
}

passInput.addEventListener("input", function() {
    if (passInput.value.length <= 4) {
        passLevel.innerHTML = "Weak ☹️";
    } else if (passInput.value.length <= 7){
        passLevel.innerHTML = "Medium 😐";
    } else if (passInput.value.length >= 8 && passInput.value.length <= 12){
        passLevel.innerHTML = "Strong 🙂";
    } else if (passInput.value.length >= 12){
        passLevel.innerHTML = "Amazing 😀";
    }
})