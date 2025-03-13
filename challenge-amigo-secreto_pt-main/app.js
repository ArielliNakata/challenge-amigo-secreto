//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  //let textoBotaoAmigo = document.getElementById('amigo').value
    let inputBotaoAmigo = document.querySelector('.input-name')
    let textoBotaoAmigo = inputBotaoAmigo.value.trim()
    
    if(textoBotaoAmigo){
        amigos.push(textoBotaoAmigo)
        inputBotaoAmigo.value = ''

    }else{
        alert('Por favor, insira um nome.')
    }
        
    console.log(amigos);
}