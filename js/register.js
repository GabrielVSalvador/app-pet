let campoNome = document.getElementById("nome");
let campoSobrenome = document.getElementById("sobrenome");
let campoTelefone = document.getElementById("telefone");
let campoEndereco = document.getElementById("endereco");
let campoCPF = document.getElementById("cpf");
let campoEmail = document.getElementById("email");
let campoSenha = document.getElementById("senha");

let botaoCadastrar = document.querySelector(".btn-entrar");

botaoCadastrar.addEventListener("click", function(event) {
    event.preventDefault();

    let nome = campoNome.value;
    if (nome === "") {
    alert("Preencha o nome!");
    return;
    } else if (nome.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres!");
    return;
    }
    let sobrenome = campoSobrenome.value;
    if (sobrenome === "") {
    alert("Preencha o sobrenome!");
    return;
    } else if (sobrenome.length < 3) {
    alert("O sobrenome deve ter pelo menos 3 caracteres!");
    return;
    }
    let telefone = campoTelefone.value;
    if (telefone === "") {
    alert("Preencha o telefone!");
    return;
    } else if (telefone.length < 10) {
    alert("O telefone deve ter pelo menos 10 dígitos!");
    return;
    }
    let endereco = campoEndereco.value;
    if (endereco === "") {
    alert("Preencha o endereço!");
    return;
    } else if (endereco.length < 5) {
    alert("O endereço deve ter pelo menos 5 caracteres!");
    return;
    }
    let cpf = campoCPF.value;
    if (cpf === "") {
    alert("Preencha o CPF!");
    return;
    } else if (cpf.length < 11) {
    alert("O CPF deve ter pelo menos 11 dígitos!");
    return;
    }
    let email = campoEmail.value;
    if (email === "") {
    alert("Preencha o e-mail!");
    return;
    } else if (!email.includes("@")) {
    alert("Digite um e-mail válido!");
    return;
    }
    let senha = campoSenha.value;
    if (senha === "") {
    alert("Preencha a senha!");
    return;
    } else if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    return;
    }

    let usuario = {
    nome: nome,
    sobrenome: sobrenome,
    telefone: telefone,
    endereco: endereco,
    cpf: cpf,
    email: email,
    senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "./login.html";
});