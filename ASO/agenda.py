# Iniciamos una lista vacía para almacenar los contactos
agenda = []

import os

# Creamos una función para que limpie la pantalla cada vez que se termina de ejecutar una opción
def limpiar_pantalla():
    os.system('cls' if os.name == 'nt' else 'clear')

# Creamos una función para agregar un contacto con un nombre, apellidos, teléfono e Instagram
def agregar_contacto():
    nombre = input("Introduce el nombre del contacto: ")
    apellidos = input("Introduce los apellidos del contacto: ")
    telefono = input("Introduce el nuevo número de teléfono (9 dígitos): ")
    while len(telefono) != 9:
        telefono = input("Error, intenta volver a escribir el nuevo número de teléfono (9 dígitos): ")

    instagram = input("Introduce tu Instagram: ")
    # Hacemos un bucle que mientras que no pongamos el @ nos siga preguntando
    while not instagram.startswith('@'):
        instagram = input("El Instagram debe empezar con '@'. Introduce tu Instagram: ")

    profesion = input("Introduce tu profesión: ")

    contacto = {
        "Nombre": nombre,
        "Apellidos": apellidos,
        "Teléfono": telefono,
        "Instagram": instagram,
        "Profesión": profesion
    }

    agenda.append(contacto)
    print("El contacto se añadió con éxito.")
    input("Presiona enter para continuar...")

# Creamos una función para buscar un contacto
def buscar_contacto():
    if not agenda:
        print("La agenda está vacía.")
        input("Presiona enter para continuar...")
        return

    nombre_contacto = input("Introduce el nombre del contacto que quieres buscar: ")
    encontrado = False
    for i, contacto in enumerate(agenda):
        if contacto["Nombre"].lower() == nombre_contacto.lower():
            print(f"Contacto encontrado en la posición {i}:")
            print("Nombre:", contacto["Nombre"])
            print("Apellidos:", contacto["Apellidos"])
            print("Teléfono:", contacto["Teléfono"])
            print("Instagram:", contacto["Instagram"])
            print("Profesión:", contacto["Profesión"])
            encontrado = True
            break

    if not encontrado:
        print(f"No se encontró el contacto: {nombre_contacto}")
    input("Presiona enter para continuar...")

# Creamos una función para borrar un contacto
def borrar_contacto():
    if not agenda:
        print("La agenda está vacía.")
        input("Presiona enter para continuar...")
        return

    nombre = input("Introduce el nombre del contacto que quieras borrar: ")
    encontrado = False
    for contacto in agenda.copy():
        if contacto["Nombre"].lower() == nombre.lower():
            agenda.remove(contacto)
            print(f"El contacto {nombre} ha sido eliminado.")
            encontrado = True

    if not encontrado:
        print(f"No se encontró el contacto: {nombre}")
    input("Presiona enter para continuar...")

# Creamos una función para mostrar la lista completa de contactos que tenemos
def mostrar_lista_completa():
    if not agenda:
        print("La agenda está vacía.")
    else:
        print("Lista completa de contactos:")
        for i, contacto in enumerate(agenda):
            print(f"Contacto {i}:")
            print("Nombre:", contacto["Nombre"])
            print("Apellidos:", contacto["Apellidos"])
            print("Teléfono:", contacto["Teléfono"])
            print("Instagram:", contacto["Instagram"])
            print("Profesión:", contacto["Profesión"])
            print()
    input("Presiona enter para continuar")

# Creamos una función para mostrar el tamaño de la agenda
def tamaño_de_la_agenda():
    print(f"El número de contactos en la agenda es: {len(agenda)}")
    input("Presiona enter para continuar...")

# Creamos una función para mostrar todos los contactos con la misma profesión
def mostrar_por_profesion():
    if not agenda:
        print("La agenda está vacía.")
        input("Presiona enter para continuar...")
        return

    trabajo = input("Introduce una profesión: ")
    encontrados = False
    for contacto in agenda:
        if trabajo == contacto["Profesión"]:
            print(f"Contacto con la profesión '{trabajo}':")
            print("Nombre:", contacto["Nombre"])
            print("Apellidos:", contacto["Apellidos"])
            print("Teléfono:", contacto["Teléfono"])
            print("Instagram:", contacto["Instagram"])
            print("Profesión:", contacto["Profesión"])
            print("***************************************")
            encontrados = True

    if not encontrados:
        print(f"No existe un contacto con la profesión: {trabajo}")
    input("Presiona enter para continuar...")

# Creamos una función para cambiar la profesión de un contacto
def cambiar_profesion():
    if not agenda:
        print("La agenda está vacía.")
        input("Presiona enter para continuar...")
        return

    nombre_contacto = input("Introduce el nombre de un contacto: ")

    encontrado = False
    for contacto in agenda:
        if nombre_contacto == contacto["Nombre"]:
            nueva_profesion = input("Cambia su profesión a: ")
            contacto["Profesión"] = nueva_profesion
            print(f"Profesión de {nombre_contacto} cambiada a '{nueva_profesion}'.")
            encontrado = True

    if not encontrado:
        print(f"No se encontró un contacto con el nombre {nombre_contacto}.")
    input("Presiona Enter para continuar...")

def main():
    while True:
        limpiar_pantalla()
        print("Menú: ")
        print("1. Añadir contacto")
        print("2. Buscar contacto")
        print("3. Borrar contacto")
        print("4. Lista de contactos")
        print("5. Tamaño de la agenda")
        print("6. Mostrar por profesión")
        print("7. Cambiar de profesión")
        print("8. Salir del programa")

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
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida. Por favor, seleccione una opción válida.")

if __name__ == "__main__":
    main()