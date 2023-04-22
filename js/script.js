//estilização

var email = document.querySelector('input');
var mensagem = document.querySelector('textarea');
var assunto = document.getElementById('assuntoid')

email.addEventListener('focus',()=>{
    email.style.borderColor = "#76b4a2";
});

email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";
});

mensagem.addEventListener('focus',()=>{
    mensagem.style.borderColor = "#76b4a2";
});

mensagem.addEventListener('blur',()=>{
    mensagem.style.borderColor = "#ccc";
});

assunto.addEventListener('focus',()=>{
    assunto.style.borderColor = "#76b4a2";
});

assunto.addEventListener('blur',()=>{
    assunto.style.borderColor = "#ccc";
});

















