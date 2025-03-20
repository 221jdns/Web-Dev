n = int(input())
arr = list(map(int, input().split())) 
max = arr[0]
max_index = 0
for i in range(n):
    if(arr[i] > max):
        max = arr[i]



arr = [x for x in arr if x!= max]

max = arr[0]
max_index = 0
for i in range(len(arr)):
    if(arr[i] > max):
        max = arr[i]
        
print(max)
