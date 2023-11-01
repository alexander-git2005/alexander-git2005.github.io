// Obtener referencias a los elementos HTML
const tipoInput = document.getElementById('tipo');
const rarezaInput = document.getElementById('rareza');
const buscarBtn = document.getElementById('buscarBtn');
const resultadosDiv = document.getElementById('resultados');

// Datos de hoteles (puedes cargar estos datos desde una API en lugar de definirlos aquí)
const cartas = [
    { nombre: 'Mago oscuro', tipo: 'Monstruo', rareza: "ul", precio: 100, imagen: 'img1.jpg' },
    { nombre: 'Monstruo renacido', tipo: 'Magica', rareza: "ul", precio: 150, imagen: 'ma8.webp' },
    { nombre: 'Cilindro magico', tipo: 'Trampa', rareza: "sr", precio: 120, imagen: 't4.webp' },
    { nombre: 'Dragón Negro de Ojos Rojos', tipo: 'Monstruo', rareza: "sr", precio: 100, imagen: 'img2.jpg' },
    { nombre: 'fusion definitiva', tipo: 'Magica', rareza: "r", precio: 150, imagen: 'ma2.webp' },
    { nombre: 'Virus aplastacartas', tipo: 'Trampa', rareza: "r", precio: 120, imagen: 't1.webp' },
    // Agrega más hoteles según tus necesidades
];

// Función para realizar la búsqueda de hoteles
function buscarCarta() {
    const tipo = tipoInput.value.toLowerCase();
    const rarezaPersonas = rarezaInput.value.toLowerCase();

    const resultados = cartas.filter(carta => {
        return carta.tipo.toLowerCase().includes(tipo) && carta.rareza.toLowerCase().includes(rarezaPersonas);
    });

    mostrarResultados(resultados);
}

// Función para mostrar los resultados en el HTML
function mostrarResultados(resultados) {
    resultadosDiv.innerHTML = '';

    if (resultados.length===0 || tipoInput.value==="" || rarezaInput.value==="") {
        resultadosDiv.innerHTML = '<p>No se encontraron las cartas que buscas.</p>';
    } else {
        resultados.forEach(carta => {
            resultadosDiv.innerHTML += `
                <div class="hotel-card">
                    <img src="${carta.imagen}" alt="${carta.nombre}">
                    <p>Nombre: ${carta.nombre}</p>
                    <p>Tipo de carta: ${carta.tipo}</p>
                    <p>Frecuencia: ${carta.rareza}</p>
                    <p>Precio: $${carta.precio}</p>
                </div>
            `;
        });
    }

    resultadosDiv.style.display = 'block';
}

// Agregar un evento al botón de búsqueda
buscarBtn.addEventListener('click', buscarCarta);
