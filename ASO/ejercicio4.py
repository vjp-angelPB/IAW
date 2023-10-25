#Escribe una función que pida dos números n y m entre 1 y 10, lea el fichero tabla-n.txt con la tabla de multiplicar de ese número, y muestre por pantalla la línea m del fichero. Si el fichero no existe debe mostrar un mensaje por pantalla informando de ello.

def pedir_dos_numeros():
    num = int(input("Introduce un número entero entre 1 y 10: "))
    num2 = int(input("Introduce un número entero entre 1 y 10: "))

    try:
        if 1 <= num <=10 and 1 <= num2 <=10:
            fichero=open(f"tabla_{num}.txt","r")

    # leo el número de líneas que tiene el fichero con el primer número q le paso y 
    # muestro por pantalla la línea del segundo número que le paso
            lineas=fichero.readlines()
            print(lineas[num2-1])

        else:
            print("El número no está dentro del rango")

    except FileNotFoundError:
        print("El archivo no existe")


pedir_dos_numeros()