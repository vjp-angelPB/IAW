#  Realiza una función que solicite el nombre y la calificación de un alumno y si no existe, lo inserte en el fichero por orden alfabético.

def agregar_alumno_ordenado(nombre_archivo):
    # Solicitar el nombre y la calificación del alumno
    nombre_alumno = input("Ingrese el nombre del alumno: ")
    calificacion_alumno = input("Ingrese la calificación del alumno: ")

    # Abrir el archivo en modo lectura para leer las líneas existentes
    with open(nombre_archivo, "r") as archivo:
        lineas = archivo.readlines()

    # Crear una lista de tuplas (nombre, calificación) a partir de las líneas
    alumnos = [linea.strip().split(",") for linea in lineas]

    # Verificar si el nombre ya existe en la lista
    for alumno in alumnos:
        if alumno[0] == nombre_alumno:
            print("El nombre del alumno ya existe en el fichero.")
            return

    # Agregar el nuevo alumno a la lista y ordenarla alfabéticamente por nombre
    alumnos.append([nombre_alumno, calificacion_alumno])
    alumnos.sort(key=lambda x: x[0])

    # Abrir el archivo en modo escritura para sobrescribir las líneas ordenadas
    with open(nombre_archivo, "w") as archivo:
        for alumno in alumnos:
            archivo.write(f"{alumno[0]},{alumno[1]}\n")

    print("El alumno ha sido agregado al fichero por orden alfabético.")

# Llamar a la función para agregar un nuevo alumno (especifica el nombre del archivo)
nombre_archivo = "alumnos.txt"
agregar_alumno_ordenado(nombre_archivo)

