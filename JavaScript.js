function resposta(){
    alert("Comentário enviado");
}

function validar(){
    var nome = document.getElementById("nome");

    if (nome(nome.value == "")){
        alert("Login inválido");
        nome.focus();
    }
}

function validar(){
    var senha = document.getElementById("senha");

    if (senha(senha.value == "")){
        alert("Senha inválida");
        senha.focus();
    }
}