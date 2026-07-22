let botaoEntrar = document.querySelector(".btn-entrar");
botaoEntrar.addEventListener("click", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    if (email === "") {
        alert("Preencha o e-mail!");
        return;
    } else if (!email.includes("@")) {
        alert("Digite um e-mail válido!");
        return;
    }

    let senha = document.getElementById("senha").value;
    if (senha === "") {
        alert("Preencha a senha!");
        return;
    } else if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }

    let dados = localStorage.getItem("usuario");
    if (!dados) {
        alert("Nenhum usuário cadastrado!");
        return;
    }
    let usuario = JSON.parse(dados);

    if (email === usuario.email && senha === usuario.senha) {
    
    alert("Login realizado com sucesso!");
    window.location.href ="/index.html";
    } else {
    alert("E-mail ou senha incorretos!");
    }
});