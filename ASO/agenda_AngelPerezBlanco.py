# Iniciamos una lista vacía para almacenar los contactos
agenda = []

import os

# Creamos una función para que limpie pantalla cada vez que se termina de ejecutar una opción
def limpiar_pantalla():
    os.system('cls' if os.name == 'nt' else 'clear')

# Creamos una función para agregar un contacto con un nombre, apellido, teléfono e instagram
def agregar_contacto():
    nombre = input("Introduce el nombre del contacto: ")
    apellidos = input("Introduce los apellidos del contacto: ")
    # En telefono hago que mientras que el número de teléfono introducido no tenga de longitud 9 caracteres o sea de tipo int siga preguntando
    telefono = (input("Introduce el nuevo número de teléfono: "))
    while len(telefono) != 9 and telefono != int:
        telefono = (input("Error, intenta volver a escribir el nuevo número de teléfono: "))

    instagram = input("Introduce tu Instagram: ")
    # Hacemos un bucle que mientras que no pongamos el @ nos siga preguntando
    while instagram[0] != '@':
        instagram = input("Introduce tu Instagram: ")
    
    profesion = input("Introduce tu profesión: ")
    # En este campo compruebo si el contacto que estamos creando es amigo o no
    amigos= input("¿Este contacto es tu amigo, si o no?: ")
    while amigos != "si" and amigos != "Si" and amigos != "SI" and amigos != "No" and amigos != "no" and amigos != "NO":
        amigos= input("¿Este contacto es tu amigo, si o no?: ")

    if amigos == "si" or amigos == "Si" or amigos == "SI":
        amigos=True
    else :
        amigos=False

    contacto = [nombre, apellidos, telefono, instagram, profesion,amigos]
    agenda.append(contacto)
    print("El contacto se añadió con exito.")
    input("Presiona enter para continuar...")

# Creamos una función para buscar un contacto
def buscar_contacto():
    nombre_contacto = input("Introduce el nombre del contacto que quieres buscar: ")
    for i,contacto in agenda:
        if contacto["Nombre"].lower() == nombre_contacto.lower():
            print("El contacto",contacto," está en la posición",i)
            return
    input("Presiona enter para continuar...")

# Creamos una función para borrar un contacto
def borrar_contacto():
    nombre = input("Introduce el nombre del contacto que quieras borrar: ")
    for contacto in agenda:
        if contacto["Nombre"].lower() == nombre.lower():
            agenda.remove(contacto)
            print("El contacto",nombre,"ha sido eliminado")
            return
        print("No se encontró el contacto,nombre")
    input("Presiona enter para continuar...")

# Creamos una función para mostar la lista completa de contactos que tenemos
def mostrar_lista_completa():
    if len(agenda) == 0:
        print("La agenda está vacía.")
    else:
        print("Lista completa de contactos:")
        for contacto in agenda:
            print("Nombre:", contacto[0])
            print("Apellidos:", contacto[1])
            print("Teléfono:", contacto[2])
            print("Instagram:", contacto[3])
            print("Profesión: ",contacto[4])
            if contacto[5] == True:
                print("Amigos: Sí")
            else :
                print("Amigos: No")
    input("Presiona enter para continuar")

# Creamos una función para mostrar el tamaño de la agenda
def tamaño_de_la_agenda():
    print(f"El número de contactos en la agenda es: {len(agenda)}")
    input("Presiona enter para continuar...")

# Creamos una función para mostrar todos los contactos con la misma profesión
def mostrar_por_profesion():
    trabajo=input("Introduce tu profesión: ")
    for contacto in agenda:
        if trabajo == contacto[4]:
            print("Estos son todos los contactos que comparten la profesión: ")
            print("Nombre:", contacto[0])
            print("Apellidos:", contacto[1])
            print("Teléfono:", contacto[2])
            print("Instagram:", contacto[3])
            print("Profesión: ",contacto[4])
            if contacto[5] == True:
                print("Amigos: Sí")
            else :
                print("Amigos: No")
            print("***************************************")
        else: 
            print("No existe un contacto con esta profesión: ",trabajo)
    input("Presiona enter para continuar...")

# Creamos una función para cambiar de profesión
def cambiar_profesion():
    nombre_contac = input("Introduce el nombre de un contacto: ")
    
    for contacto in agenda:
        if nombre_contac == contacto[0]:
            nueva_profesion = input("Cambia su profesión a: ")
            contacto[4] = nueva_profesion
    input("Presiona enter para continuar...")

# En este ejercicio pido el nombre de un contacto y hago que para la agenda entera si el nombre que he introducido era amigo que muestre por pantalla que lo era, de lo contrario mostrará que ese contacto no tiene amigos
def mostrar_amigos():
    for contacto in agenda:
        while contacto[5] == True:
            print("El contacto:", contacto[0], "es tu amigo")
    input("Presiona enter para continuar...")

# En este ejercicio pido el nombre de un contacto y comparo ese nombre con todos los contactos de la agenda, y el que coincida hace: si era amigo lo cambia y hace que no sea amigo y lo muestra por pantaalla, y si no era amigo hace que sea amigo y lo muestra por pantalla
def cambiar_amistad():
    nombre_contac = input("Introduce el nombre del contacto para que sea tu amigo o deje de serlo: ")
    for contacto in agenda:
        if nombre_contac == contacto[0]:
            if contacto[5]==True:
                contacto[5]=False
                print("Este contacto ya no es tu amigo")
            elif contacto[5]==False:
                contacto[5]=True
                print("¡Enhorabuena has hecho un nuevo amigo!")
    input("Presiona enter para continuar...")


def main():
    agenda = []
    while True:
        limpiar_pantalla()
        print("Menú: ")
        print("1. Añadir contacto ")
        print("2. Buscar contacto ")
        print("3. Borrar contacto ")
        print("4. Lista de contactos ")
        print("5. Tamaño de la agenda ")
        print("6. Mostrar la profesión ")
        print("7. Cambiar de profesión ")
        print("8. Mostrar amigos ")
        print("9. Cambiar amistad ")
        print("10. Salir del programa ")

        opcion = input("Selecciona una opción: ")

        if opcion == "1":
            agregar_contacto()
        elif opcion == "2":
            buscar_contacto()
        elif opcion == "3":
            borrar_contacto()
        elif opcion == "4":
            mostrar_lista_completa()
        elif opcion == "5":
            tamaño_de_la_agenda()
        elif opcion == "6":
            mostrar_por_profesion()
        elif opcion == "7":
            cambiar_profesion()
        elif opcion == "8":
            mostrar_amigos()
        elif opcion == "9":
            cambiar_amistad()
        elif opcion == "10":
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida. Por favor, seleccione una opción válida.")

if __name__ == "__main__":
    main()