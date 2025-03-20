def near_ten(num):
  mod = num % 10
  if( 0 <= mod <=2 or 8 <=mod<= 10):
    return True
  else:
    return False
