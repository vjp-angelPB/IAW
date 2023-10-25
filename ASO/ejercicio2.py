# Escribe una función que pida un número entero entre 1 y 10 y guarde en un fichero con el nombre tabla_n.txt la tabla de multiplicar de ese número, donde n es el número introducido.
# A continuación, lee el contenido del fichero creado y muéstralo por pantalla

def tabla_multiplicar():
    num = int(input("Introduce un número entero entre 1 y 10: "))

     # abro el fichero y si no existe lo creo   
    fichero=open(f"tabla_{num}.txt","w+")

    for i in range(1,11):
        fichero.write(f"{num} x {i} = {i*num}\n")
    
    # me situo al principio del código y muestro por pantalla el contenido
    fichero.seek(0)
    print(fichero.read())

# llamo a la función
tabla_multiplicar() 