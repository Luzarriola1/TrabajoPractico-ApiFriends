fetch("cities.json")
.then(res => res.json())
.then(capitulos => {
    crearInfo(capitulos);
})
.catch(error => console.error("Error al cargar los datos:", error));

function crearInfo(capitulos) {
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// Buscar el capítulo correspondiente
const capituloBuscado = capitulos.find(capitulo => capitulo.id == id);
const contenedor = document.querySelector(".container_info");

if (capituloBuscado) {
    contenedor.innerHTML = `
        <div class="column">
            <h2>${capituloBuscado.titulo}</h2>
            <img src="${capituloBuscado.imagen}" alt="${capituloBuscado.titulo}">
        </div>
        <div class="column">
            <h3>${capituloBuscado.temporada}</h3>
            <h3>${capituloBuscado.capitulo}</h3>
            <p>${capituloBuscado.resumen}</p> <!-- Asegúrate de que 'informacion' existe en tu JSON -->
        </div>`;
} else {
    contenedor.innerHTML = `<p>Capítulo no encontrado</p>`;
}
}
