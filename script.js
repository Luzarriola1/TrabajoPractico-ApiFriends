const contenedorCards = document.getElementById("contenedor_cards");
const inputBuscar = document.getElementById("buscar");

let capitulosFiltrados = [];

// Cargar datos desde el archivo JSON
fetch("cities.json")
    .then(res => res.json())
    .then(capitulos => {
        capitulosFiltrados = capitulos;
        crearTarjetas(capitulosFiltrados);
    })
    .catch(error => console.error("Error al cargar los datos:", error));

function crearTarjetas(capitulos) {
    contenedorCards.innerHTML = "";  // Limpiar tarjetas previas

    for (const capitulo of capitulos) {
        const tarjetaHTML = `
        <div class="card">
            <img src="${capitulo.imagen}" alt="${capitulo.titulo}">
            <p><b>${capitulo.titulo}</b></p>
            <p>${capitulo.temporada}</p>
            <a class="btn btn-danger" href="./info.html?id=${capitulo.id}">Más info</a>
        </div>
        `;
        contenedorCards.innerHTML += tarjetaHTML;
    }
}

// Filtrar por título o temporada
inputBuscar.addEventListener('input', () => {
    const textoBusqueda = inputBuscar.value.toLowerCase();
    const resultadosFiltrados = capitulosFiltrados.filter(capitulo =>
        capitulo.titulo.toLowerCase().includes(textoBusqueda) ||
        capitulo.temporada.toLowerCase().includes(textoBusqueda)
    );
    
    if (resultadosFiltrados.length === 0) {
        contenedorCards.innerHTML = "<h2>Sin Resultados</h2>";
    } else {
        crearTarjetas(resultadosFiltrados);
    }
});

