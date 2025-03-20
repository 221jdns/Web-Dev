def make_bricks(small, big, goal):
  big_inches = big * 5
  dif = goal - big_inches
  if(goal > big_inches):
    if (small>=dif):
      return True
    else:
      return False
  else:
    sm = goal % 5
    if(small >= sm):
      return True
    else:
      return False