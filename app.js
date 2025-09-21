//variables 
let listaAmigos = [];
// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Validaciones
    if (!nombreAmigo) {
        alert('Por favor ingresa un nombre válido');
        return;
    }

    
    // Agregar a la lista
    listaAmigos.push(nombreAmigo);
    
    // Actualizar la lista visual
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombreAmigo;
    listaAmigosElement.appendChild(nuevoAmigo);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Habilitar el botón de sortear si hay amigos
    actualizarBotonSortear();
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }
    
    const resultadoElement = document.getElementById('resultado');
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    
    // Mostrar resultado con estilo
    resultadoElement.innerHTML = '';
    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultadoItem.style.color = '#FE652B';
    resultadoItem.style.fontWeight = 'bold';
    resultadoItem.style.fontSize = '24px';
    resultadoItem.style.animation = 'fadeIn 0.5s ease-in';
    
    resultadoElement.appendChild(resultadoItem);
}

// Función para actualizar estado del botón de sortear
function actualizarBotonSortear() {
    const botonSortear = document.querySelector('.button-draw');
    botonSortear.disabled = listaAmigos.length === 0;
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Configurar evento para Enter en el input
    document.getElementById('amigo').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Deshabilitar inicialmente el botón de sortear
    actualizarBotonSortear();
});