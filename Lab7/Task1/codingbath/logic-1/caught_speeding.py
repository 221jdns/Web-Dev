def caught_speeding(speed, is_birthday):
  if(is_birthday == False):
    if( 60 >= speed):
      return 0
    elif( 61<= speed <=80):
      return 1
    else:
      return 2
  else:
    if( 66 >= speed):
      return 0
    elif( 66<= speed <=85):
      return 1
    else:
      return 2
