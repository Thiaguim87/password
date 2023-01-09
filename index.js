var page1 = document.getElementById('home');
var page2 = document.getElementById('verify');
var menu = document.getElementById('menu_button');
var gen = document.getElementById('gen');
var len = document.getElementById('length');
var pass = document.getElementById('password');
var copy = document.getElementById('copy');
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
    window.location.href = "./index.html";
}
page2.onclick = function() {
    window.location.href = "./verify.html";
}

gen.onclick = function(){
    if(len.value != ''){
        gerarSenha(len.value);
    } else {
        gerarSenha(8);
    }
}


copy.onclick = function(){
    navigator.clipboard.writeText(pass.value)
    copy.innerHTML = "Copied!"
}

function gerarSenha(x) {
    let senha = '';
    let temNumero = false;
    let temMaiuscula = false;
    let temMinuscula = false;
    while (!temNumero || !temMaiuscula || !temMinuscula) {
      senha = '';
      for (let i = 0; i < x; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 94) + 33;
        senha += String.fromCharCode(numeroAleatorio);
      }
      temNumero = /\d/.test(senha);
      temMaiuscula = /[A-Z]/.test(senha);
      temMinuscula = /[a-z]/.test(senha);
    }
    pass.value = senha;
  }