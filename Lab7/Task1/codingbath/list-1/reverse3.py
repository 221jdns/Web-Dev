def reverse3(nums):
  reverse = []
  for i in range(len(nums) -1 , -1 , -1 ):
    reverse.append(nums[i])
    
  return reverse