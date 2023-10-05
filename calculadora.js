/*Creo la función para cambiar a la calculadora científica y que se muestre el botón "elevar" */
function cambiarcientifico(){
    let accionelevar = document.getElementById('botonelevar');
    accionelevar.disabled=true;
};

/*Creo la función para cambiar a la calculadora normal y que se oculte el botón "elevar" */
function cambiarnormal(){
    let accionocultar = document.getElementById('botonelevar')
    accionocultar.disabled=false;
};


/*Creo la función que hace que se pongan por defecto el valor 0 en todos los input para 
volver a introducir nuevos datos */
function Restaurar(){
    if (document.getElementById("textoverde")!=null){
        document.getElementById("seccion-operaciones-id")
    }
};

function Lupa(){

};