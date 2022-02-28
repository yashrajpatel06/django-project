mtdict = {
    "fast" : " in a quick manner ",
    "yash":" is a coder",
    "boy": "ladka",
    "man":"adami",
    "leg":"pair"
    }
#print(mtdict)
#print list from dict
#print(mtdict.items())
#print list through for loop 
# mtdict.item returns a list of key value tuples.
#for a ,b in mtdict.items():
  #  print (a,":",b)
key = input("Entre the key")
if(mtdict.get(key)== None):
    print("Value not found")
else:
    print("the value of the key is",mtdict.get(key))
