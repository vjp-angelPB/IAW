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

    var resultado = eval(numero1 + "+" + numero2); */

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


function Lupa(){

    

};