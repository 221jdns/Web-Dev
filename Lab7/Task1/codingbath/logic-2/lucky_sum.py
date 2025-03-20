def lucky_sum(a, b, c):
  if((a == 13 and b == 13 and c == 13) or (a == 13 and b == 13) or (a == 13 and c == 13)):
    return 0
  elif(a == 13):
    return 0
  elif(b == 13):
    return a
  elif(c == 13):
    return a + b 
  else:
    return a + b + c