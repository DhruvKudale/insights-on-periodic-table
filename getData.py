import json

def getElement(i):
    return ele[i-1]

# Opening JSON file
f = open('elements.json')
ele = json.load(f)