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
    telefono = int(input("Introduce el nuevo número de teléfono: "))
    instagram = input("Introduce tu Instagram: ")

# Hacemos un bucle que mientras que no pongamos el @ nos siga preguntando
    while instagram[0] != '@':
        instagram = input("Introduce tu nombre Instagram: ")

    contacto = [nombre, apellidos, telefono, instagram]
    agenda.append(contacto)
    print("El contacto se añadió con exito.")
    input("Presiona enter para continuar...")

# Creamos una función para buscar un contacto
def buscar_contacto():
    nombre_contacto = input("Introduce el nombre del contacto que quieres buscar: ")
    for i,contacto in agenda:
        if contacto["Nombre"].lower() == nombre.lower():
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
    input("Presiona enter para continuar")

# Creamos una función para mostrar el tamaó de la agenda
def tamaño_de_la_agenda():
    print(f"El número de contactos en la agenda es: {len(agenda)}")
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
        print("6. Salir del programa ")

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
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida. Por favor, seleccione una opción válida.")

if __name__ == "__main__":
    main()