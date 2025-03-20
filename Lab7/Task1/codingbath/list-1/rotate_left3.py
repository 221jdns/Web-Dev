def rotate_left3(nums):
  som = nums[0]
  i = 0
  while(i != 2):
    nums[i] = nums[i+1]
    i+=1
  
  nums[-1] = som
  return nums