A = int(input("Длина стороны квадрата: "))
R = int(input("Радиус окружности: "))
x = int(input("Точка X: "))
y = int(input("Точка Y: "))

def check(x, y, A, R):
    if (x in range(-(A//2), (A//2)+1)) and (y in range(-(A//2), (A//2)+1)):
        if (x-(A//2))**2 + (y-(A//2))**2 == R**2:
            print(__file__)
            return 0
        else:
            print("return 1")
            return 1
    else:
        print("asad")

if check(x, y, A, R):
    print("Точка принадлежит заштрихованной области")
else:
    print("Точка не принадлежит заштрихованной области")