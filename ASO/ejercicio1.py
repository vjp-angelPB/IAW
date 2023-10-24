fichero=open("ejercicio1.txt", "w+")
fichero.write("Este es el ejercicio 1")
fichero.seek(0)
print(fichero.read())
contenido = fichero.read()
fichero.close()
print(contenido)





