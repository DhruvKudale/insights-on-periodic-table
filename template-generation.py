import sys 
def generateTileTemplate(i):
    tile = "<td id=\"z" + str(i) + "\" onclick=\"loadTileDetails(" + str(i) + ")\">"
    tile = tile + "\n\t<sup><py-script>getElement(" + str(i) + ")['AtomicNumber']</py-script></sup>"
    tile = tile + "\n\t<py-script>getElement(" + str(i) + ")['Symbol']</py-script>"
    tile = tile + "\n\t<p id=\"tile-caption\"><py-script>getElement(" + str(i) + ")['Name']</py-script></p>"
    tile = tile + "\n\t<p id=\"tile-value" + str(i) + "\"></p>"
    tile = tile + "\n</td>"
    print(tile)

def generatePeriodElements(l, u):
    for i in range(l, u + 1):
        generateTileTemplate(i)

# Lower Atomic Number
#l = int(sys.argv[1])
# Upper Atomic Number
#u = int(sys.argv[2])
#generatePeriodElements(l, u)

def print_line(f):
     print("<option value=\"" + f + "\">" + f + "</option>\n")


allowed_for_line_graph = [ 'Element Ionization Energies', 'Element Abundance in Earth\'s Crust',
       'Element Color', 'Element Abundance in Humans',
       'Element Abundance in Oceans', 'Element Atomic Weight', 'Element Block',
       'Element Absolute Boiling Point', 'Element Absolute Melting Point',
       'Element Category', 'Element Country of Discovery',
       'Element Year of Discovery', 'Element Density',
       'Element Electrical Conductivity', 'Element Electrical Type',
       'Element Electron Affinity',
       'Element Electronegativity (Pauling)', 'Radioactive',
       'Element Mass Magnetic Susceptibility', 'Element Magnetic Type',
       'van_der_waals_radius',  'Element Valence',
       'period', 'phase']


allowed_for_bar_graph = [
       'Element Ionization Energies', 'Element Abundance in Earth\'s Crust',
       'Element Color', 'Element Abundance in Humans',
       'Element Abundance in Oceans', 'Element Atomic Weight', 'Element Block',
       'Element Absolute Boiling Point', 'Element Absolute Melting Point',
       'Element Category', 'Element Country of Discovery',
         'Element Density',
       'Element Electrical Conductivity', 'Element Electrical Type',
       'Element Electron Affinity',
       'Element Electronegativity (Pauling)', 'Radioactive',
       'Element Mass Magnetic Susceptibility', 'Element Magnetic Type',
       'van_der_waals_radius', 'Element Valence', 
]


allowed_for_sunburst = [
       'Element Color', 
       'Element Category', 'Element Country of Discovery',
       'Element Year of Discovery',  'Element Electrical Type',
        'Radioactive',
        'Element Magnetic Type',
       'van_der_waals_radius', 'crystal_structure', 'Element Valence',
       'period', 'phase' ]


allowed_for_scatter =[
       'Element Ionization Energies', 'Element Abundance in Earth\'s Crust',
         'Element Abundance in Humans',
       'Element Abundance in Oceans', 'Element Atomic Weight',  
       'Element Absolute Boiling Point', 'Element Absolute Melting Point',
       'Element Density',
       'Element Electrical Conductivity', 
       'Element Electron Affinity',
       'Element Electronegativity (Pauling)',     
]

all_features = allowed_for_line_graph + allowed_for_bar_graph + allowed_for_sunburst + allowed_for_scatter
features = list(set(all_features))

for f in features:
    print_line(f)

