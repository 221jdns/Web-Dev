def make_chocolate(small, big, goal):
  big_kilos = big  *5
  if(goal >= big_kilos):
    sm = goal - big_kilos
    if(small >= sm):
      return sm
    else:
      return -1
  else:
    dg = goal % 5
    if(small >= dg):
      return dg
    else:
      return -1
