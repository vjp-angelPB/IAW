# Realiza una función que solicite el nombre y la calificación de un alumno y lo inserte al final del fichero. Debe comprobar primero si el nombre ya existe

def agregar_alumno(nombre_archivo):
    # Solicitar el nombre y la calificación del alumno
    nombre_alumno = input("Ingrese el nombre del alumno: ")
    calificacion_alumno = input("Ingrese la calificación del alumno: ")

    # Abrir el archivo en modo lectura para verificar si el nombre ya existe
    with open(nombre_archivo, "r") as archivo:
        lineas = archivo.readlines()
        for linea in lineas:
            # Dividir cada línea en nombre y calificación
            nombre_existente, _ = linea.strip().split(",")
            if nombre_existente == nombre_alumno:
                print("El nombre del alumno ya existe en el fichero.")
                return

    # Si el nombre no existe, abrir el archivo en modo escritura para agregar el nuevo alumno
    with open(nombre_archivo, "a") as archivo:
        archivo.write(f"{nombre_alumno},{calificacion_alumno}\n")
        print("El alumno ha sido agregado al fichero con éxito.")

# Llamar a la función para agregar un nuevo alumno (especifica el nombre del archivo)
nombre_archivo = "alumnos.txt"
agregar_alumno(nombre_archivo)
