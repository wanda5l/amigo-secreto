// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];

function agregarAmigo(){
    let amigo = document.querySelector('#amigo');
    if(amigo.value === ""){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo.value);
    }
    console.log(amigos); //borrar luego

    limpiarCaja();
    lista();
}

function limpiarCaja(){
    document.querySelector('#amigo').value="";
}

function lista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i];            
        listaAmigos.appendChild(li);           
    }
}
