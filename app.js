//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    //let textoBotaoAmigo = document.getElementById('amigo').value
    let inputBotaoAmigo = document.querySelector('.input-name');
    let textoBotaoAmigo = inputBotaoAmigo.value.trim();

    if (textoBotaoAmigo) {
        amigos.push(textoBotaoAmigo);
        inputBotaoAmigo.value = '';
        atualizarListaAmigo();
    } else {
        alert('Por favor, insira um nome.')
    }

    console.log(amigos);
}

// function atualizarListaAmigo() {
//     let listaAmigos = document.querySelector('#listaAmigos');
//     listaAmigos.innerHTML = '';
//     let cont = 0;
//     while(cont<amigos.length){
//         let li = document.createElement('li');
//         li.textContent = amigos[cont]
//         listaAmigos.appendChild(li);
//         cont++;

//     }

// }

function atualizarListaAmigo() {
    let ulTagListaAmigos = document.querySelector('#listaAmigos');
    ulTagListaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        ulTagListaAmigos.appendChild(li);

    })

}

function sortearAmigo() {
    if (amigos.length <= 1) {
        alert('Adicione ao menos dois amigos antes de sortear');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let ulTagResultado = document.getElementById('resultado');
    ulTagResultado.innerHTML = `<li>O amigo sorteado foi: ${amigoSorteado}</li>`;


}