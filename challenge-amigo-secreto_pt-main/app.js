//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  //let textoBotaoAmigo = document.getElementById('amigo').value
    let inputBotaoAmigo = document.querySelector('.input-name');
    let textoBotaoAmigo = inputBotaoAmigo.value.trim();
    
    if(textoBotaoAmigo){
        amigos.push(textoBotaoAmigo);
        inputBotaoAmigo.value = '';
        atualizarListaAmigo();

    }else{
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
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo =>{
        let li = document.createElement('li');
        li.textContent = amigo;
        ulTagListaAmigos.appendChild(li);

    })

    let li = document.createElement('li');
        li.textContent = amigos[cont]
        listaAmigos.appendChild(li);
        cont++;

    }