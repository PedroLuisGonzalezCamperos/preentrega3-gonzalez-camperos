
//Valores de la tabla de inventario

let valoresTabla = document.getElementsByTagName("td");



let inventario = [
  {
    nombre: "Polos",
    disponibilidad: 10,
    precio: 4,
  },

  {
    nombre: "Pantalones",
    disponibilidad: 18,
    precio: 9,
  },

  {
    nombre: "Chaquetas",
    disponibilidad: 32,
    precio: 12,
  },

  {
    nombre: "Sudaderas",
    disponibilidad: 20,
    precio: 3,
  },

  {
    nombre: "Shorts",
    disponibilidad: 29,
    precio: 7,
  },
];

x = document.getElementById("ip1").value;

console.log(x);


valoresTabla[0].innerHTML=parseInt(inventario[0].precio);
valoresTabla[3].innerText=inventario[1].precio
valoresTabla[6].innerText=inventario[2].precio
valoresTabla[9].innerText=inventario[3].precio
valoresTabla[12].innerText=inventario[4].precio
//función para hallar cantidad de artículos

function cantidad(nombreProducto) {

  const producto = inventario.find((el) => el.nombre === nombreProducto);

  if (producto) {

    document.getElementById("muestrapantalla").textContent =
      "Buenos días Señor " +
      document.getElementById("primernU").value +
      "  " +
      document.getElementById("primeraU").value +
      "  Hay  " +
      producto.disponibilidad +
      "  unidades de  " +
      producto.nombre;

  } else {
    document.getElementById("muestrapantalla").textContent =
      "Producto no encontrado.";
  }
}

//función para hallar precios de artículos

function precios(nombreProducto) {

    const costo= inventario.find((el) => el.nombre === nombreProducto);
  
    if (costo) {
  
      document.getElementById("muestrapantalla2").textContent =
        "Buenos días Señor " +
        document.getElementById("primernU").value +
        "  " +
        document.getElementById("primeraU").value +
        "  el precio de  " +
        costo.nombre +
        "  es  " + costo.precio;
        
  
    } else {
      document.getElementById("muestrapantalla2").textContent =
        "Producto no encontrado.";
    }
  }


  //función que suma el monto total de los productos escogidos

function suma() {

let producto1 = parseFloat(document.getElementById("polo").value);

let producto2 = parseFloat(document.getElementById("pantalon").value);

let producto3 = parseFloat(document.getElementById("chaqueta").value);

let producto4 = parseFloat(document.getElementById("sudadera").value);

let producto5 = parseFloat(document.getElementById("short").value);


let suma = producto1*inventario[0].precio+producto2*inventario[1].precio+producto3*inventario[2].precio+producto4*inventario[3].precio+producto5*inventario[4].precio;

document.getElementById("textoTotal").innerText="El total a pagar por los productos escogidos es  "+suma+"  dólares";

 }





//Cantidad de artículos que no están en inventario guardados en localStorage

localStorage.setItem("articulos", 34);

function articulosdemas() {
  const valor = localStorage.getItem("articulos");

  document.getElementById("muestrapantalla").textContent =
    "La cantidad de artículos que no están en inventario son  " + valor;
}

//Uso de JSON para guardar un producto de inventario sin especificar

const inventariodesconocido = {
  nombre: "desconocido 1",

  cantidad: 25,
};

const articuloDesconocidos = JSON.stringify(inventariodesconocido);

localStorage.setItem("inventariodesconocido", articuloDesconocidos);
