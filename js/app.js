//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//Contenedor para los resultados
const resultado = document.querySelector("#resultado");

//Craer objeto con los parámetros de búsqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(); //Muestra los autos al cargar la página
  llenarSelect(); //Llena las opciones de años
});

//Event listener para los select de búsqueda

marca.addEventListener("change", e => {
  datosBusqueda.marca = e.target.value;
});

year.addEventListener("change", e => {
  datosBusqueda.year = e.target.value;
})

minimo.addEventListener("change", e => {
  datosBusqueda.minimo = e.target.value;
})

maximo.addEventListener("change", e => {
  datosBusqueda.maximo = e.target.value;
})

puertas.addEventListener("change", e => {
  datosBusqueda.puertas = e.target.value;
})

transmision.addEventListener("change", e => {
  datosBusqueda.transmision = e.target.value;
})

color.addEventListener("change", e => {
  datosBusqueda.color = e.target.value;
  console.log(datosBusqueda);
})

//Funciones
function mostrarAutos() {
  autos.forEach((auto) => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;
    /**El código que estás viendo se llama "destructuring" en JavaScript. Es una forma conveniente de extraer valores de un objeto o elementos de un arreglo y asignarlos a variables individuales. En este caso, se están extrayendo las propiedades marca, modelo, year, precio, puertas, color y transmision del objeto auto y se están asignando a variables con los mismos nombres. Esto permite acceder a cada propiedad de forma más directa y legible en el código. */
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
    Marca: ${marca} - Modelo: ${modelo} - Año: ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} - Transmisión: ${transmision}
    `;
    resultado.appendChild(autoHTML);
  });
}

//Genera los años del select
function llenarSelect() {
  const currentYear = new Date().getFullYear();

  for (let i = currentYear; i >= currentYear - 10; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
}
