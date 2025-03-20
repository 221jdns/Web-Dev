def big_diff(nums):
  maxi = nums[0]
  mini = nums[0]
  for i in range(len(nums) ):
    if(nums[i] >= maxi):
      maxi = nums[i]
    elif(nums[i] <= mini):
      mini = nums[i]
  
  return maxi - mini