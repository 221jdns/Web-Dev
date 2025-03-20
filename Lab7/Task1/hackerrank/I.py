a = str(input())

str = ""
for i in a:
    if i == 'a' or i == 'z': 
        str += chr(ord(i) - 32)  
    else:
        str += chr(ord(i) + 32) 

print(str)