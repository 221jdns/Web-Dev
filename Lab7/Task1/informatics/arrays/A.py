n = int(input())
arr = list(map(int, input().split())) 

for a in range(0 , n , 2):
    print(arr[a], end = " ")
