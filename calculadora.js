/*Creo la función para cambiar a la calculadora científica y que se muestre el botón "elevar" */
function cambiarcientifico(){
    let accionelevar = document.getElementById('botonelevar');
    accionelevar.disabled=false;
};


/*Creo la función para cambiar a la calculadora normal y que se oculte el botón "elevar" */
function cambiarnormal(){
    let accionocultar = document.getElementById('botonelevar')
    accionocultar.disabled=true;
};


/*Creo la función que suma los 2 números introducidor por el usuario */
function sumar(){
    
    var numero1 = document.getElementById("num1").value;
    
    var numero2 = document.getElementById("num2").value;

    var resultado = eval(numero1 + "+" + numero2);
     
    document.getElementById("num3").value = resultado;

    /* OTRA FORMA DE HACERLO SIN EVAL */ 
    /*var numero1 = partseInt(document.getElementById("num1").value);
    
    var numero2 = partseInt(document.getElementById("num2").value);

    var resultado = numero1 + numero2; */

};


/*Creo la función que resta los 2 números introducidor por el usuario */
function restar(){
    
    var numero1 = document.getElementById("num1").value;
    
    var numero2 = document.getElementById("num2").value;

    var resultado = numero1 - numero2;

    document.getElementById("num3").value = resultado;
};


/*Creo la función que multiplica los 2 números introducidor por el usuario */
function multiplicar(){
    
    var numero1 = document.getElementById("num1").value;
    
    var numero2 = document.getElementById("num2").value;

    var resultado = numero1 * numero2;

    document.getElementById("num3").value = resultado;
};


/*Creo la función que divide los 2 números introducidor por el usuario */
function dividir(){
    
    var numero1 = document.getElementById("num1").value;
    
    var numero2 = document.getElementById("num2").value;

    var resultado = numero1 / numero2;

    document.getElementById("num3").value = resultado;
};


/*Creo la función que eleva los 2 números introducidor por el usuario*/
function elevar(){
    
    var numero1 = document.getElementById("num1").value;
    
    var numero2 = document.getElementById("num2").value;

    var resultado = numero1 ** numero2;
    
    document.getElementById("num3").value = resultado;
};


/*Creo la función que hace que se pongan por defecto el valor 0 en todos los input para 
volver a introducir nuevos datos */
function Restaurar(){

    document.getElementById("num1").value = "0";
   
    document.getElementById("num2").value = "0";

    document.getElementById("num3").value = "0";
};


/*Creo la función Lupa que se activará cuando se pulse el botón de "Lupa" */
function Lupa(){

    let mostrarLupa = document.getElementById('inputLupa')
    let mostrardivlupa = document.getElementById('divLupa')

    if (mostrarLupa.style.visibility == 'visible'){
        // Instrucciones si se cumple la condición
        alert ('La lupa ya era visible');
    } 
    else {
        // Instrucciones si no se cumple la condición
        mostrardivlupa.style.visibility='visible';
    };

    document.getElementById('inputLupa').value = document.getElementById('num3').value;
};


var numero = document.getElementById('num3').value
if (numero > 0){
    numero.style.color = 'green';
    numero.style.fontWeigth = 'bold';
}

else if (numero < 0) {
    numero.style.color = 'red';
    numero.style.fontWeigth = 'bold';
}

/*Creo la función SalirLupa que se activará cuando se pulse el botón de "Salir" */
function SalirLupa(){

    let ocultarLupa = document.getElementById('salirlupa')
    let ocultardivlupa = document.getElementById('divLupa')

    if (ocultarLupa.style.visibility == 'hidden'){
        // Instrucciones si se cumple la condición    
        alert ('El div ya estaba oculto');
    }
    else {
        // Instrucciones si no se cumple la condición
        ocultardivlupa.style.visibility='hidden';
    }

};



