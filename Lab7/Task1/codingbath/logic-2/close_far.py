def close_far(a, b, c):
  diff = abs(a-b)
  diff_2 = abs(a - c)
  diff_3 = abs(b -c)
  
  if((diff <= 1 and diff_2 > 1 and diff_3 >1) or (diff_2 <= 1 and diff > 1 and diff_3 > 1) ):
    return True
  else:
    return False
