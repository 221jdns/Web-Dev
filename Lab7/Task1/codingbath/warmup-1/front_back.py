def front_back(str):
  if len(str) <= 1:
    return str
  front = str[-1:]
  middle = str[1:len(str)-1]
  end = str[:1]
  return front + middle + end