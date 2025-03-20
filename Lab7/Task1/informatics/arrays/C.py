n = int(input())
arr = list(map(int, input().split())) 

couner = 0
for i in arr:
    if(i > 0):
        couner+=1


print(couner)