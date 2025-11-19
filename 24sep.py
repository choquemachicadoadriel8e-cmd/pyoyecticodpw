# Procedimiento
def LlenarVector(V):
    for i in range(len(V)):
        V[i] = int(input("Ingrese el valor: "))

# Función
def SumaElem(V):
    suma = 0
    for i in range(len(V)):
        suma = suma + V[i]
    return suma

# Principal
def main():
    # Tamaño del vector
    n = int(input("Ingrese la cantidad de sueldos: "))
    # Declarar el vector Sueldo de tamaño n
    Sueldo = [0] * n
    LlenarVector(Sueldo)  # Llenar el vector Sueldo
    SumaSueldo = SumaElem(Sueldo)  # Sumar los elementos del vector Sueldo
    print("El vector sueldo es: ")
    print(Sueldo)  # Mostrar los elementos del vector Sueldo
    print("La suma de los sueldos es:", SumaSueldo)  # Mostrar la suma de los sueldos

# Ejecutar la función principal
if __name__ == "__main__":
    main()