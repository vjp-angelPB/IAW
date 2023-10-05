function mostrarDatosPersonales(){
var nombre="Michael Jordan";
var altura=1.99;

document.write("Mi nombre es: " + nombre + " y mi altura es: " + altura);
}

function mostrarDiv(){
let miDiv = document.getElementById('seccion-estilos-enlace-id')

    if (miDiv.style.visibility == 'visible'){
        // Instrucciones si se cumple la condición
        alert ('El div ya era visible');
    } 
    else {
        // Instrucciones si no se cumple la condición
        miDiv.style.visibility='visible';
    };
            };

function ocultarDiv(){
let miDiv = document.getElementById('seccion-estilos-enlace-id')
if (miDiv.style.visibility == 'hidden'){
    // Instrucciones si se cumple la condición    
    alert ('El div ya estaba oculto');
}
else {
    // Instrucciones si no se cumple la condición
    miDiv.style.visibility='hidden';
}
};

// Comentario de una sola línea

/*
Comentario
de más de una
línea
*/

function saludar(nombre){
    document.write("Hola " + nombre);

}
