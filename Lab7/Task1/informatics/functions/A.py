def smallest(arr):
    min_value = arr[0]
    for i in range(4):
        if(arr[i] < min_value):
            min_value = arr[i]
    
    return min_value


arr = list(map(int, input().split()))  

print(smallest(arr))