# 5. Realiza una función que ordene alfabéticamente las líneas del fichero. Puedes hacer uso de la función sorted() que ordena las líneas alfabéticamente. Ejemplo: lineas_ordenadas = sorted(lineas).

def ordenar_lineas_alfabeticamente(nombre_archivo):
    # Abrir el archivo en modo lectura
    with open(nombre_archivo, "r") as archivo:
        lineas = archivo.readlines()    
        # Ordenar las líneas alfabéticamente
        lineas_ordenadas = sorted(lineas)
    
    # Abrir el archivo en modo escritura para sobrescribir las líneas ordenadas
    with open(nombre_archivo, "w") as archivo:
        archivo.writelines(lineas_ordenadas)
        print("Las líneas del fichero han sido ordenadas alfabéticamente.")

# Llamar a la función para ordenar las líneas alfabéticamente (especifica el nombre del archivo)
nombre_archivo = "alumnos.txt"
ordenar_lineas_alfabeticamente(nombre_archivo)
