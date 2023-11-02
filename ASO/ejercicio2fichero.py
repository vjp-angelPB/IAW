#Realiza una función que devuelva el número de alumnos que hay en el fichero.

def num_alumnos():
    with open("alumnos.txt",'r') as archivo:
        lineas = archivo.readlines()
        num_linea = len(lineas)        
        print(f"Hay un total de {num_linea} alumnos.")

num_alumnos()