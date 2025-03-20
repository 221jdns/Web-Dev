def xor(a , b):
    if(a == b):
        return 0
    else:
        return 1



a, b = input().split()
a = int(a)
b = int(b)

print(xor(a,b))