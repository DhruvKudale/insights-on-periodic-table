import sys 
def generateTileTemplate(i):
    tile = "<td id=\"z" + str(i) + "\" onclick=\"loadTileDetails(" + str(i) + ")\">"
    tile = tile + "\n\t<sup><py-script>getElement(" + str(i) + ")['AtomicNumber']</py-script></sup>"
    tile = tile +  "\n\t<py-script>getElement(" + str(i) + ")['Symbol']</py-script>"
    tile = tile +  "\n\t<p id=\"tile-caption\"><py-script>getElement(" + str(i) + ")['Name']</py-script></p>"
    tile = tile + "\n</td>"
    print(tile)

def generatePeriodElements(l, u):
    for i in range(l, u + 1):
        generateTileTemplate(i)

# Lower Atomic Number
l = int(sys.argv[1])
# Upper Atomic Number
u = int(sys.argv[2])
generatePeriodElements(l, u)