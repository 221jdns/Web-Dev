def cat_dog(str):
  if(count(str, "cat") == count(str, "dog")):
    return True
  else:
    return False
  
 
def count(str, sub):
  con = 0
  for i in range(len(str) - 2):
    if(str[i] == sub[0] and str[i+1] == sub[1] and str[i + 2] == sub[2]):
      con+=1
  
  return con