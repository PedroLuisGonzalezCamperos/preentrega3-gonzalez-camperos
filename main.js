
let inventario = [ 

    {

    nombre: "Polos",
    disponibilidad:10

    },

    {

    nombre: "Pantalones",
    disponibilidad:18
    
    },

    {

    nombre: "Chaquetas",
    disponibilidad:32
        
    },

    {

    nombre: "Sudaderas",
    disponibilidad:29
            
    },

    {

    nombre: "Shorts",
    disponibilidad:29
                
    },
    
     ];





function cantidad(nombreProducto) {

const producto = inventario.find(el=> el.nombre===nombreProducto);

if (producto) {

    document.getElementById('muestrapantalla').textContent = "Buenos días Señor "+document.getElementById("primernU").value + "  "+document.getElementById("primeraU").value +"  Hay  "+ producto.disponibilidad + "  unidades de  " + producto.nombre;

}

else {

    document.getElementById('muestrapantalla').textContent = 'Producto no encontrado.';

}

}

//Cantidad de artículos que no están en inventario guardados en localStorage


localStorage.setItem("articulos", 34);


function articulosdemas() {

    const valor = localStorage.getItem("articulos");

    document.getElementById("muestrapantalla").textContent ="La cantidad de artículos que no están en inventario son  " + valor;

}


//Uso de JSON para guardar un producto de inventario sin especificar 

const inventariodesconocido =
    {

    nombre: "desconocido 1",

    cantidad: 25}



const articuloDesconocidos = JSON.stringify(inventariodesconocido);

localStorage.setItem("inventariodesconocido",articuloDesconocidos);