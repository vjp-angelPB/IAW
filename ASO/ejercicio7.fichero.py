# Realiza una función que solicite dos números enteros entre 0 y 10 y liste todos los alumnos y sus calificaciones que estén comprendidas entre dichos números. Puedes hacer uso de la función split( ).

def listar_alumnos_por_calificacion(nombre_archivo):
    # Solicitar dos números enteros entre 0 y 10
    while True:
        try:
            min_calificacion = int(input("Ingrese la calificación mínima (entre 0 y 10): "))
            max_calificacion = int(input("Ingrese la calificación máxima (entre 0 y 10): "))

            if 0 <= min_calificacion <= 10 and 0 <= max_calificacion <= 10:
                break
            else:
                print("Los números deben estar entre 0 y 10.")
        except ValueError:
            print("Ingrese números enteros válidos.")

    # Abrir el archivo en modo lectura
    with open(nombre_archivo, "r") as archivo:
        for linea in archivo:
            nombre, calificacion = linea.strip().split(",")
            calificacion = int(calificacion)

            if min_calificacion <= calificacion <= max_calificacion:
                print(f"Nombre: {nombre}, Calificación: {calificacion}")

# Llamar a la función para listar alumnos por calificación (especifica el nombre del archivo)
nombre_archivo = "alumnos.txt"
listar_alumnos_por_calificacion(nombre_archivo)

