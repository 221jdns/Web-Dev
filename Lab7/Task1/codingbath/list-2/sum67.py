def sum67(nums):
    count = 0
    i = 0  
    while i < len(nums):
        if nums[i] == 6:
            if 7 in nums[i+1:]:
                index = nums[i+1:].index(7) + (i+1)
                del nums[i:index + 1] 
                continue  
        i += 1 

    return sum(nums)