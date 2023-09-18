var page1 = document.getElementById('home');
var gen = document.getElementById('gen');
var len = document.getElementById('length');
var pass = document.getElementById('password');
var copy = document.getElementById('copy');
var visibilidade = false;


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