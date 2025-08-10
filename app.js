// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim()
    if (nombreAmigo === "") {
        alert('Por favor, inserte un nombre.')
    }
    else {
        Amigos.push(nombreAmigo);
        actualizarLista();
        input.value = "";
        return
    }
    limpiarCaja();
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}


function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    Amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("name-item");
        lista.appendChild(li);
    });
}

function sortearAmigo () {
    if (Amigos.length < 2) {
        alert ('Digite al menos dos amigos para hacer el sorteo.');
    }

    let nombres = [...Amigos];
    for (let i = nombres.length - 1; i = 0; i --) {
        let j = Math.floor(Math.random() * (i+1));
        [nombres[i], nombres[j]] = [nombres[j], nombres[i]]; 
    }

        let asignaciones = {};
    for (let i = 0; i < nombres.length; i++) {
        asignaciones[nombres[i]] = nombres[(i + 1) % nombres.length];
    }

    mostrarResultados(asignaciones);
}

function mostrarResultados(asignaciones) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    document.getElementById("listaAmigos").style.display = "none";

    for (let nombres in asignaciones) {
        const li = document.createElement('li');
        li.textContent = `El amigo secreto sorteado es ${asignaciones[nombres]}`;
        li.classList.add('result-item');
        resultado.appendChild(li);
        break; // Se detiene el juego luego de arrojar el resultado sorteado.
    }
}

function reiniciarJuego() {
    Amigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('listaAmigos').style.display = "block"; // Mostrar la lista nuevamente
}