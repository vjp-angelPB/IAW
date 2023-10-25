#Escribe una función que pida un número entero entre 1 y 10, lea el fichero tabla_n.txt con la tabla de multiplicar de ese número, donde n es el número introducido, y la muestre por pantalla. Si el fichero no existe debe mostrar un mensaje por pantalla informando de ello.

def pedir_numero():
    num = int(input("Introduce un número entero entre 1 y 10: "))

    try:
        fichero=open(f"tabla_{num}.txt","r")
        contenido=fichero.read()
        print(contenido)

    except FileNotFoundError:
        print("El archivo no existe")


# llamo a la función
pedir_numero()

