def sum13(nums):
  count = 0 
  if(len(nums) == 0):
    return 0
  else:
    for i in range(len(nums) - 1):
      if(nums[i] == 13):
        nums[i + 1] = 0
      else:
        count += nums[i]
  if(nums[-1] != 13):
    count+= nums[-1]
  return count
      