def lone_sum(a, b, c):
  sim = 0
  if(a == b == c):
    return 0
  elif( a == b):
    return c
  elif(a == c):
    return b
  elif(b ==c):
    return a
  else:
    return a + b +c 