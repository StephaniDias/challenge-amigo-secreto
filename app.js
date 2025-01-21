//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Insira um nome válido!");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi inserido, tente outro!");
        nomeInput.value = "";
        return;
    }

    listaAmigos.push(nome);
    limparCampo();
    atualizarLista();
}

function atualizarLista() {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultadoDiv = document.getElementById("resultado");

    if (listaAmigos.length < 4) {

        mensagemResultado();
        resultadoDiv.classList.add("erro");
        resultadoDiv.classList.remove("sorteio");
    } else {

        let tamanho = listaAmigos.length;
        let indiceSorteado = Math.floor(Math.random() * tamanho);
        let nomeSorteado = listaAmigos[indiceSorteado];

        let p = document.createElement("p");
        p.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;

        resultado(p);
    }

}

function limparCampo() {
    let nomeInput = document.getElementById("amigo");
    nomeInput.value = "";
}

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemResultado() {
    exibirTextoTela("#resultado", "Adicione pelo menos 4 amigos antes de sortear");
}

function resultado(p) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    resultadoDiv.appendChild(p);

    resultadoDiv.classList.remove("erro");
    resultadoDiv.classList.add("sorteio");

}

function reiniciarSorteio() {
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = ""
    document.getElementById("resultado").innerHTML = ""
    alert("Sorteio Reiniciado!");
}
