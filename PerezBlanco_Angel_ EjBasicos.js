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

function frutos(fruto) {
	if ((fruto == "Manzana") || (fruto == "naranja")) {
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

function coche(carretera, velocidad, matricula) {
	//carretera
	//velocidad
	//matricula
	switch (carretera) {

		case "Urbana": {
			if ((velocidad > 0) && (velocidad < 30)) {
				console.log("El vehículo con" + matricula + "circula a una velocidad apropiada para la vía")
			}
			else if (velocidad < 0) {
				console.log("El vehículo con" + matricula + "circula a una velocidad inferior a" + 0 + "km/h")
			}
			else if (velocidad > 30) {
				console.log("El vehículo con" + matricula + "circula a una velocidad superior a" + 30 + "km/h")
			}
		}

		case "Comarcal": {
			if ((velocidad > 45) && (velocidad < 90)) {
				console.log("El vehículo con" + matricula + "circula a una velocidad apropiada para la vía")
			}
			else if (velocidad < 45) {
				console.log("El vehículo con" + matricula + "circula a una velocidad inferior a" + 45 + "km/h")
			}
			else if (velocidad > 90) {
				console.log("El vehículo con" + matricula + "circula a una velocidad superior a" + 90 + "km/h")
			}
		}

		case "Nacional": {
			if ((velocidad > 50) && (velocidad < 100)) {
				console.log("El vehículo con" + matricula + "circula a una velocidad apropiada para la vía")
			}
			else if (velocidad < 50) {
				console.log("El vehículo con" + matricula + "circula a una velocidad inferior a" + 50 + "km/h")
			}
			else if (velocidad > 100) {
				console.log("El vehículo con" + matricula + "circula a una velocidad superior a" + 100 + "km/h")
			}
		}

		case "Autovia": {
			if ((velocidad > 60) && (velocidad < 120)) {
				console.log("El vehículo con" + matricula + "circula a una velocidad apropiada para la vía")
			}
			else if (velocidad < 60) {
				console.log("El vehículo con " + matricula + "circula a una velocidad inferior a" + 60 + "km/h")
			}
			else if (velocidad > 120) {
				console.log("El vehículo con" + matricula + "circula a una velocidad superior a" + 120 + "km/h")
			}
		}

		case "Autopista": {
			if ((velocidad > 60) && (velocidad < 120)) {
				console.log("El vehículo con" + matricula + "circula a una velocidad apropiada para la vía")
			}
			else if (velocidad < 60) {
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
function mostrar_mesesaño() {
	meses_del_ano = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

	for (let i = 0; i < meses_del_ano.length; i++) {
		console.log(meses_del_ano[i]);
	}
}

// b 
function mostrar_mesesaño_linea() {
	meses_del_ano = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
	let j = "";
	for (let i = 0; i < meses_del_ano.length; i++) {
		j = j + meses_del_ano[i] + ", ";
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

//a   NO FUNCIONA "REVISAR"
function calcularPromedioHoras() {
	horas_estudio = [30, 25, 40, 35, 20, 15, 30, 35, 40, 35, 25, 30];

	// Inicio total horas de estudio 
	let total_horas = 0;

	// Iterar a través del array para las horas de estudio
	for (let i = 0; i < horas_estudio.length; i++) {
		total_horas = total_horas + horas_estudio[i];
	}
	promedio_horas = total_horas / 12
	console.log("El promedio de horas de estudio en el año es: " + promedio_horas);
}

// b
function calcularMesMayorHorasEstudio() {
	horasDeEstudio = [50, 60, 45, 70, 80, 90, 75, 65, 55, 100, 110, 95];

	// Inicio las variables para el mes con más horas de estudio y el máximo de horas
	let mesMaxHoras = 0;
	let maxHoras = horasDeEstudio[0];

	// Iterar a través del array para encontrar el mes con más horas de estudio
	for (let i = 1; i < horasDeEstudio.length; i++) {
		if (horasDeEstudio[i] > maxHoras) {
			maxHoras = horasDeEstudio[i]; // máximo de horas dentro del array
			mesMaxHoras = i; //Posición con el mes máximo de horas
		}
	}

	// Sumamos 1 para tener el mes real porque empieza desde la posición 0
	let mesConMasHoras = mesMaxHoras + 1;

	console.log("El mes con más horas de estudio es el mes " + mesConMasHoras + " con " + maxHoras + " horas de estudio.");
}

// c
function calcularMesMayorHorasEstudio() {
	horasDeEstudio = [50, 60, 45, 70, 80, 90, 75, 65, 55, 100, 110, 95];

	// Inicio las variables para el mes con más horas de estudio y el máximo de horas
	let mesMinHoras = 0;
	let MinHoras = horasDeEstudio[0];

	// Iterar a través del array para encontrar el mes con más horas de estudio
	for (let i = 1; i < horasDeEstudio.length; i++) {
		if (horasDeEstudio[i] < MinHoras) {
			MinHoras = horasDeEstudio[i]; // máximo de horas dentro del array
			mesMinHoras = i; //Posición con el mes máximo de horas
		}
	}

	// Sumamos 1 para tener el mes real porque empieza desde la posición 0
	let mesConMenosHoras = mesMinHoras + 1;

	console.log("El mes con más horas de estudio es el mes " + mesConMenosHoras + " con " + MinHoras + " horas de estudio.");
}

// d
function mostrarArraydiferente() {
	horasDeEstudio = [50, 60, 45, 70, 80, 90, 75, 65, 55, 100, 110, 95];
	console.log("HORAS DE ESTUDIO: ");
	// Iterar a través del array para las horas de estudio
	for (let i = 0; i < horasDeEstudio.length; i++) {
		msg = "";
		// Creo un switch para cada mes del año
		switch (i) {
			case 0: {
				msg = "ENERO: "
				break;
			}
			case 1: {
				msg = "FEBRERO: "
				break;
			}
			case 2: {
				msg = "MARZO: "
				break;
			}
			case 3: {
				msg = "ABRIL: "
				break;
			}
			case 4: {
				msg = "MAYO: "
				break;
			}
			case 5: {
				msg = "JUNIO: "
				break;
			}
			case 6: {
				msg = "JULIO: "
				break;
			}
			case 7: {
				msg = "AGOSTO: "
				break;
			}
			case 8: {
				msg = "SEPTIEMBRE: "
				break;
			}
			case 9: {
				msg = "OCTUBRE: "
				break;
			}
			case 10: {
				msg = "NOVIEMBRE: "
				break;
			}
			case 11: {
				msg = "DICIEMBRE: "
				break;
			}
		}
		// Muestro por pantalla el mensaje de cada mes, más el numero de horas
		console.log(msg + horasDeEstudio[i] + " h");
	}
}


/* 5.- Si el orden de los 10 primeros pilotos de la F1 en la temporada 22-23 fue:
Verstappen, Hamilton, Alonso, Sainz, Norris, Leclerc, Russell, Piastri, Gasly, Stroll
a) Almacenar los pilotos en un array según el orden indicado.
b) Muestra por pantalla los pilotos según la posición en la que terminaron la temporada.
c) Escribe el listado de pilotos al revés.
*/

// a y b
function ordenarpilotos() {
	// Creo el array de la parrilla
	ordenpilotos = ["Verstappen", "Hamilton", "Alonso", "Norris", "Leclerc", "Russell", "Piastri", "Gasly", "Stroll"]

	// Creo el for para que recorra el array y muestre los pilotos
	for (let i = 0; i < ordenpilotos.length; i++) {
		posicion = i;
		console.log("Piloto " + i + ": " + ordenpilotos[i]);
	}
}

// c
function pilotosreverso() {
	// Creo el array de la parrilla
	ordenpilotos = ["Verstappen", "Hamilton", "Alonso", "Norris", "Leclerc", "Russell", "Piastri", "Gasly", "Stroll"]
	
	// Creo el for para que los recorra pero a la inversa diciendo que i tiene que ser mayor que 0 y que le vaya restando 1 cada vez.
	for (let i = ordenpilotos.length - 1; i >= 0; i--) {
		console.log(ordenpilotos[i]);
	}
}


/* 6.- Si la clasificación para uno de los grandes premios de la temporada fue la siguiente:
Línea 1:
Alonso, 
Sainz,
Línea 2:
Hamilton,
Leclerc,
Linea 3:
Bottas,
Russell,

y partimos de un array que almacena la parrilla de esta forma [Alonso, Sainz, Hamilton, Leclerc, Bottas,  Russell] --Es decir, cada 2 pilotos tendremos una línea completa de la parrilla --

Procesa el array para que la salida sea la que se indica a continuación:
Línea 1:
Alonso, 
Sainz [La coma que había aquí desaparece]
[Línea en blanco]
Línea 2:
Hamilton,
Leclerc[La coma que había aquí desaparece]
[Línea en blanco]
Linea 3:
Bottas,
Russell 
[La coma que había aquí desaparece]
*/
function premios() {
	// Creo la parrilla
	parrilla = ["Alonso", "Sainz", "Hamilton", "Leclerc", "Bottas", "Russell"]

	// Igualo la var linea a 0
	linea = 0;

	// Recorro el array con un for 
	for (let i = 0; i < parrilla.length; i += 2) {
		piloto1 = parrilla[i];
		piloto2 = parrilla[i + 1];
		linea++;

		// Sumo 1 a la línea y al piloto 2 y muestro por pantalla los pilotos agrupados de 2 en 2
		console.log("Línea " + linea + ":")
		console.log(piloto1);
		console.log(piloto2);
		console.log("");
	}
}


/* 7.- Partiendo de la clasificación del ejercicio anterior, debes hacer que los pilotos de una línea de la parrilla se muestren uno a continuación del otro en el mismo renglón.

Línea 1: Alonso, Sainz
Línea 2: Hamilton, Leclerc
Línea 3: Bottas, Russell
*/
function clasificacion() {
	// Creo la parrilla
	parrilla = ["Alonso", "Sainz", "Hamilton", "Leclerc", "Bottas", "Russell"]

	// Igualo la var linea a 0
	linea = 0;

	// Itero por cada dos pilotos de la parrilla
	for (let i = 0; i < parrilla.length; i += 2) {
		piloto1 = parrilla[i];
		piloto2 = parrilla[i + 1];

		//Le sumo uno a cada línea para que vaya de uno a uno
		linea++;

		// Imprime el nombre de los dos pilotos en la misma línea
		console.log("Línea " + linea + ": " + piloto1, piloto2);
	}
}


/* 8.- Plantea una solución para las siguientes tareas propuestas:
a) Debes crear un array bidimensional para los módulos del ciclo de ASIR. La primera dimensión del array serán los módulos del primer curso. La segunda dimensión serán los módulos del segundo curso.
b) Debes crear un array bidimensional para almacenar las notas de los módulos del ciclo de ASIR de tal manera que exista una correspondencia en las posiciones de los módulos y sus notas, es decir: si el módulo IAW está localizado en la segunda posición del vector del segundo curso, la nota del módulo que corresponda a IAW debe también ocupar la misma posición en el vector de notas.
c) Procesar los dos arrays bidimensionales anteriores para mostrar la información de la siguiente forma:

Notas en el ciclo de ASIR del alumno XXXXXX:
Primer curso:
LMSGI: 7,5; ABD: 8.0; ...
Segundo curso:
IAW: 8.5; ....

MEJORA: ¿Sabrías calcular el promedio de notas por curso? ¿y el promedio de todo el curso? Muestra tres líneas adicionales después del listado de módulos y notas en las que se indiquen el promedio de notas por curso y la nota promedio de todo el ciclo como se indica a continuación:

Promedio notas primer curso: 8.33
Promedio notas segundo curso 2: 7.89
nota promedio ciclo: 8,11
*/

// a b y c
/*
for de modulos[i]
	for de j modulos[i].lenght
	arraymodulos[i][j] + arranotas[i][j]
*/
function asir() {
	// Definir arrays bidimensionales para módulos y notas
	const modulos = [
	  ["ISO", "LMSGI", "GBD", "FOL", "PARE", "FHW"],
	  ["SAD", "EIE", "ASGBD", "ASO", "SRI", "IAW"]
	];
	const notas = [
	  [8, 7, 9, 8, 8, 9],
	  [8, 8, 7, 9, 8, 7]
	];
  
	// Muestro por pantalla el nombre del alumno
	console.log("Notas en el ciclo de ASIR del alumno Ángel Pérez Blanco:");
  
	// Variables para almacenar las notas medias
	let promedioPrimerCurso = 0;
	let promedioSegundoCurso = 0;
  
	for (let i = 0; i < modulos.length; i++) {
	  if (i === 0) {
		console.log("Primer curso:");
	  } else {
		console.log("Segundo curso:");
	  }
  
	  // Variable para almacenar todas las notas y módulos en una sola línea
	  let linea = "";
  
	  for (let j = 0; j < modulos[i].length; j++) {
		linea += modulos[i][j] + ": " + notas[i][j] + " ";
		// Sumar las notas para calcular el promedio del curso
		if (i === 0) {
		  promedioPrimerCurso += notas[i][j];
		} else {
		  promedioSegundoCurso += notas[i][j];
		}
	  }
  
	  console.log(linea);
	}
  
	// Calcular y mostrar los promedios
	promedioPrimerCurso /= modulos[0].length;
	promedioSegundoCurso /= modulos[1].length;
	promedioCiclo = (promedioPrimerCurso + promedioSegundoCurso) / 2;
  
	console.log("");
	console.log("Promedio notas primer curso: " + promedioPrimerCurso);
	console.log("Promedio notas segundo curso: " + promedioSegundoCurso);
	console.log("Nota promedio ciclo: " + promedioCiclo);
}


/* 9.- Implementar un algoritmo que dada la frase "implantación de aplicaciones web es un módulo del segundo curso del ciclo administración de sistemas informáticos en red" la convierta a la frase:
"Implantación de Aplicaciones Web es un Módulo del segundo curso del ciclo de ASIR".

NOTA ejercicio 9: La solución se debe realizar procesando la frase original y, en ningún caso, creando una nueva cadena de caracteres que contenga la frase deseada.
*/

function fraseASIR() {
    let frase = "implantación de aplicaciones web es un módulo del segundo curso del ciclo administración de sistemas informáticos en red";

    // Reemplazar "aplicaciones web" por "Aplicaciones Web"
    frase = frase.replace("implantación de aplicaciones web", "Implantación de Aplicaciones Web");

    // Reemplazar "módulo del segundo curso" por "Módulo del segundo curso"
    frase = frase.replace("módulo del segundo curso", "Módulo del segundo curso");

    // Reemplazar "administración de sistemas informáticos en red" por "ASIR"
    frase = frase.replace("administración de sistemas informáticos en red", "ASIR");

    // Mostrar la frase modificada
    console.log(frase);
}

  

/* SOLUCION DE EJERCICIO DE PRUEBA DE CLASE (FUNCIÓN DE EJERCICIO 9) */

/*
* Función que trnasforma las palabras de una cadena de caracteres pasando su primer caracter a mayúsculas.
* Pej: "uno dos catorce" pasará a "Uno Dos Catorce"
*/
function transformarCadena(cadena) {
	let cadenaRetorno; // Contendrá la cadena de entreda con la inicial de todas sus palabras en mayúscula.
	let vCadena = cadena.split(" "); // Generación de un array de palabras. Pej: Si partimos de la cadena "uno dos catorce" el array que se conseguiría es: ["uno", "dos", "catorce"]
	for (let i = 0; i < vCadena.length; i++) {  // Iteramos en cada una de las posiciones del array
		// Tratamiento de la palabra
		vCadena[i] = transformarPalabra(vCadena[i]); // Guardamos la palabra actual ya con el primer caracter en mayúscula
	}

	cadenaRetorno = vCadena.toString().replaceAll(",", " "); // Convertimos de array a String reemplazando las comas que mete el toString por espacios en blanco
	return cadenaRetorno;
}

/*
* Función que transforma una palabra que le llega por parámetro.
* La transformación consiste en pasar el primer caracter a mayúsculas
*/
function transformarPalabra(palabra) {
	// Tratamiento de la palabra actual
	let vPalabraActual = palabra.split(""); // Vector con los caracteres de la palabra actual. Pej: de "uno" su vector será: ["u", "n", "o"]
	vPalabraActual[0] = vPalabraActual[0].toUpperCase(); // Convertimos a mayúsculas el primer caracter de la palabra actual
	palabra = vPalabraActual.toString().replaceAll(",", ""); // Convertimos de array a String eliminando las comas que aparecen en el toString
	return palabra;
}

