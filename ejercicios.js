/* 1.- Escribir una función JavaScript que dado un fruto que reciba por parámetro como una cadena de caracteres, muestre por la consola del navegador el periodo del año en el que se supone que es la temporada de dicho fruto.
Las frutas y temporadas a tener en cuenta son las siguientes:
fruto - Temporada
Manzana - Invierno
Naranja - Invierno
Fresa - Primavera
Cereza - Primavera
Melocoton - Verano
Cualquier otro fruto se considerará que es de Otoño.
*/

function frutos(fruto){
	
	if ((fruto=="Manzana") || (fruto == "naranja")) {
		console.log("Es de la temporada de Invierno");
	}
	
	else if ((fruto == "fresa") || (fruto == "cereza")) {
		console.log("Es de la temporada de Primavera");
	}
	
	else if (fruto == "melocotón") {
		console.log("Es de la temporada de Verano");
	}
	
	else {
		console.log("Es de la temporada de Otoño");
	}
}

//Para comprobar: frutos("cereza");


/* 2.- Escribir una función JavaScript que reciba tres parámetros que representan el tipo de carretera, la velocidad de un vehículo y la matrícula del vehículo. Dicha función deberá mostrar por pantalla si el vehículo circula dentro de los límites legales según el tipo de carretera.
Los límites legales que se han de considerar son los siguientes:
Tipo Carretera - Límite Inferior - Límite Superior
Urbana - 0 - 30
Comarcal - 45 - 90
Nacional - 50 - 100
Autovia - 60 - 120
Autopista - 60 -120

Si el vehículo circula a velocidad inferior de la establecida para la vía, deberá mostrar un mensaje con el siguiente formato:
El vehículo con matrícula {matrícula} circula a una velocidad inferior a {velocidad mínima para la vía} km/h

Si el vehículo circula a velocidad superior de la establecida para la vía, deberá mostrar un mensaje con el siguiente formato:

El vehículo con matrícula {matrícula} circula a una velocidad superior a {velocidad mínima para la vía} km/h

Si el vehículo circula dentro de los límites legales para la vía, el mensaje a mostrar será:
El vehículo con matrícula {matrícula} circula a una velocidad apropiada para la vía
*/

// switch y dentro de cada case un if else

function coche(carretera, velocidad, matricula){


//carretera
//velocidad
//matricula
	switch(carretera){
		
		case "Urbana": {
			if ((velocidad > 0 ) && (velocidad < 30)){
				console.log("El vehículo con" + matricula + "circula a una velocidad apropiada para la vía")
			}
			else if (velocidad < 0 ) {
				console.log("El vehículo con" + matricula + "circula a una velocidad inferior a" + 0 + "km/h")
			}
			else if (velocidad > 30) {
				console.log("El vehículo con" + matricula + "circula a una velocidad superior a" + 30 + "km/h")
			}
		}
		
		case "Comarcal": {
			if ((velocidad > 45 ) && (velocidad < 90)){
				console.log("El vehículo con" + matricula + "circula a una velocidad apropiada para la vía")
			}
			else if (velocidad < 45 ) {
				console.log("El vehículo con" + matricula + "circula a una velocidad inferior a" + 45 + "km/h")
			}
			else if (velocidad > 90) {
				console.log("El vehículo con" + matricula + "circula a una velocidad superior a" + 90 + "km/h")
			}
		}
		
		
		case "Nacional": {
			if ((velocidad > 50 ) && (velocidad < 100)){
				console.log("El vehículo con" + matricula + "circula a una velocidad apropiada para la vía")
			}
			else if (velocidad < 50 ) {
				console.log("El vehículo con" + matricula + "circula a una velocidad inferior a" + 50 + "km/h")
			}
			else if (velocidad > 100) {
				console.log("El vehículo con" + matricula + "circula a una velocidad superior a" + 100 + "km/h")
			}
		}
		
		case "Autovia": {
			if ((velocidad > 60 ) && (velocidad < 120)){
				console.log("El vehículo con" + matricula + "circula a una velocidad apropiada para la vía")
			}
			else if (velocidad < 60 ) {
				console.log("El vehículo con " + matricula + "circula a una velocidad inferior a" + 60 + "km/h")
			}
			else if (velocidad > 120) {
				console.log("El vehículo con" + matricula + "circula a una velocidad superior a" + 120 + "km/h")
			}
		}
		
		case "Autopista": {
			if ((velocidad > 60 ) && (velocidad < 120)){
				console.log("El vehículo con" + matricula + "circula a una velocidad apropiada para la vía")
			}
			else if (velocidad < 60 ) {
				console.log("El vehículo con" + matricula + "circula a una velocidad inferior a" + 60 + "km/h")
			}
			else if (velocidad > 120) {
				console.log("El vehículo con" + matricula + "circula a una velocidad superior a" + 120 + "km/h")
			}
		}

	}

}
// Para comprobar: coche("Nacional", 188, "112345k");
// coche("Autovia", 23, "111111o");
// coche("Comarcal",60, "123467p"


/* 3.- Dado un array que almacene los doce meses del año, procesarlo con ayuda de bucles for para que:
a) muestre un mes por línea.
b) muestre los meses separados por comas en una única línea.
*/

// a
function mostrar_mesesaño(){
    meses_del_ano=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    
    for (let i=0; i<meses_del_ano.length; i++){
        console.log(meses_del_ano[i]);
    }
}

// b 
function mostrar_mesesaño_linea(){
    meses_del_ano=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let j = "";
    for (let i=0; i<meses_del_ano.length; i++){
        j= j + meses_del_ano[i] + ", ";
    }
    console.log(j);
}

/* 4.- En un array de doce posiciones que almacenarán el número de horas de estudio de un alumno de ASIR en un mes, se pide:
a) Calcula el promedio de horas en el año.
b) Indicar el mes que más horas de estudio ha tenido.
c) indicar el mes que menos horas de estudio ha tenido.
d) Muestra el contenido del array con el siguiente formato:
HORAS DE ESTUDIO:
ENERO: 15.7 h
FEBRERO: 30.8 h
MARZO: 22.2 h
...
d) ¿Qué pasa si en los apartados b) y c) hay más de un mes con el mismo número de horas?
*/

//a 
function calcularPromedioHoras() {
    horas_estudio=["36","20","42","18","12","11","18","13","13","25","48",]
    for (i=0;i<horas_estudio.length; i++){
        console.log(horas_estudio[i],":", (horas_estudio/12)," h")

    }
}














/*
* Función que trnasforma las palabras de una cadena de caracteres pasando su primer caracter a mayúsculas.
* Pej: "uno dos catorce" pasará a "Uno Dos Catorce"
*/
function transformarCadena(cadena){
    let cadenaRetorno; // Contendrá la cadena de entreda con la inicial de todas sus palabar en mayúscula.
    let vCadena=cadena.split(" "); // Generación de un array de palabras. Pej: Si partimos de la cadena "uno dos catorce" el array que se conseguiría es: ["uno", "dos", "catorce"]
    for(let i=0; i<vCadena.length; i++){  // Iteramos en cada una de las posiciones del array
        // Tratamiento de la palabra
        vCadena[i]=transformarPalabra(vCadena[i]); // Guardamos la palabra actual ya con el primer caracter en mayúscula
    }

    cadenaRetorno=vCadena.toString().replaceAll(",", " "); // Convertimos de array a String reemplazando las comas que mete el toString por espacios en blanco
    return cadenaRetorno;
}

/*
* Función que transforma una palabra que le llega por parámetro.
* La transformación consiste en pasar el primer caracter a mayúsculas
*/
function transformarPalabra(palabra){
    // Tratamiento de la palabra actual
    let vPalabraActual=palabra.split(""); // Vector con los caracteres de la palabra actual. Pej: de "uno" su vector será: ["u", "n", "o"]
    vPalabraActual[0]=vPalabraActual[0].toUpperCase(); // Convertimos a mayúsculas el primer caracter de la palabra actual
    palabra=vPalabraActual.toString().replaceAll(",",""); // Convertimos de array a String eliminando las comas que aparecen en el toString
    return palabra;
}







