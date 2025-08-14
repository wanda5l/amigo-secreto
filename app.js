// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];
let resultado = document.getElementById('resultado');
let amigoSorteado;

function agregarAmigo(){
    let amigo = document.querySelector('#amigo');
    if(amigo.value === ""){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo.value);
    }

    limpiarCaja();
    lista();
}

function limpiarCaja(){
    document.querySelector('#amigo').value="";
}

function lista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i];            
        listaAmigos.appendChild(li);           
    }
}

function sortearAmigo(){
    if(amigos.length == 0 || amigos.length== 1){
        alert('Por favor, inserte al menos dos nombres.');
    } else {
        let indice = Math.floor(Math.random()*amigos.length);
        amigoSorteado=amigos[indice];

        listaAmigos.innerHTML= "";
        resultado.innerHTML= `¡El amigo sorteado es ${amigoSorteado}!`;
    }
}