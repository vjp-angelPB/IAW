# Realiza una función que solicite el nombre de un alumno y lo elimine si existe. Si no existe, debe mostrar un mensaje por pantalla. 

def eliminar_alumno(nombre_archivo):
    # Solicitar el nombre del alumno que se desea eliminar
    nombre_alumno = input("Ingrese el nombre del alumno que desea eliminar: ")

    # Abrir el archivo en modo lectura para verificar si el nombre existe
    with open(nombre_archivo, "r") as archivo:
        lineas = archivo.readlines()
    
    encontrado = False  # Una bandera para indicar si se encontró el nombre

    # Abrir el archivo en modo escritura para reescribir el archivo sin el nombre del alumno
    with open(nombre_archivo, "w") as archivo:
        for linea in lineas:
            nombre_existente, _ = linea.strip().split(",")
            if nombre_existente == nombre_alumno:
                encontrado = True  # Marcar como encontrado
            else:
                archivo.write(linea)

    # Verificar si el nombre se encontró o no
    if encontrado:
        print(f"El alumno '{nombre_alumno}' ha sido eliminado del fichero.")
    else:
        print(f"El alumno '{nombre_alumno}' no se encontró en el fichero.")

# Llamar a la función para eliminar un alumno (especifica el nombre del archivo)
nombre_archivo = "alumnos.txt"
eliminar_alumno(nombre_archivo)
