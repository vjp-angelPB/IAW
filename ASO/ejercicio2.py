# Escribe una función que pida un número entero entre 1 y 10 y guarde en un fichero con el nombre tabla_n.txt la tabla de multiplicar de ese número, donde n es el número introducido.
# A continuación, lee el contenido del fichero creado y muéstralo por pantalla

def tabla_multiplicar():

    num = input("Introduce un número entero entre 1 y 10: ")
    
    fichero=open("tabla_",num,".txt")
    fichero.seek(0)

    for i in range(1,11):
        fichero.write((num+'x'+ str(i+1) + (i*num)))
    
    contenido = fichero.read()
    fichero.close()
    print(contenido)

print(tabla_multiplicar())