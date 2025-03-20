def centered_average(nums):
  maxi = nums[0]
  mini = nums[0]
  count = 0
  for i in range(len(nums)):
    count +=nums[i]
    if(nums[i] >= maxi):
      maxi = nums[i]
    elif(nums[i] <= mini):
      mini = nums[i]
  
  count -= (maxi + mini)
  index = len(nums) - 2 
  return count / index