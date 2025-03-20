def in1to10(n, outside_mode):
  if(outside_mode == False):
    if( 1 <= n <= 10):
      return True
    else:
      return False
  else:
    if( 10 <= n or 1>=n):
      return True
    else:
      return False
