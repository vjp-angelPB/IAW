#Crea un programa que te pida el nombre de un fichero y una palabra por teclado:
#Si existe el fichero, tiene que buscar cuantas veces aparece la palabra y en qué posición.
#Si no existe el fichero, mostrará un mensaje indicándolo.


def programa():
    nombre_del_fichero=input("Introduce el nombre del archivo: ")
    palabra=input("Introduce una palabra: ")


    try:
        with open(nombre_del_fichero, 'r') as archivo:
            contenido = archivo.read()
            cantidad = archivo.count(palabra)   
            posicion = archivo.tell(palabra) 

        if cantidad > 0:   
            print(f"La palabra {palabra} aparece {cantidad} veces en el archivo y está en la posicion {posicion}")
    
        else:
            print("La palabra ",palabra,"no se ha encontrado en el archivo.")

    except FileNotFoundError:
        print(f"El archivo {nombre_del_fichero} no existe")


# Llamo a la función
programa()


