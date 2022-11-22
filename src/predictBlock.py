import pickle

import numpy as np
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

encoding = {
    'phase': {
        'Gas':0,
        'Liquid':1,
        'Solid' :2
    },
   
    'Radioactive' : {
        'Highly Unstable' : 0,
        'Slightly Unstable' : 1,
        'Stable' : 2,
        'Unstable' : 3
    },
   
    'Element Color' : {
        'Black' : 0,
        'Colorless' : 1,
        'Copper' : 2,
        'Gold' : 3,
        'Gray' : 4,
        'Red' : 5,
        'Silver' : 6,
        'SlateGray' : 7,
        'Unknown' : 8,
        'Yellow' : 9
    },
   
    'Element Electrical Type': {
        'Conductor' : 0,
        'Insulator' : 1,
        'Semiconductor' : 2,
        'Unknown' : 3
    },
   
    'crystal_structure' : {
       'Unknown' : 0,
       'body-centered cubic (bcc)' : 1,
       'cubic' : 2,
       'double hexagonal close-packed (dhcp)' : 3,
       'face-centered cubic (fcc)': 4,
       'face-centered diamond-cubic': 5,
       'hexagonal': 6,
       'hexagonal close-packed (hcp)':7,
       'monoclinic':8,
       'orthorhombic':9,
       'rhombohedral':10,
       'tetragonal':11
       
    },
   
}



inverse_encoding ={
    'phase': {
         0: 'Gas',
        1: 'Liquid' ,
        2: 'Solid'
    },
   
    'Radioactive' : {
        0: 'Highly Unstable',
        1: 'Slightly Unstable' ,
        2: 'Stable'  ,
        3: 'Unstable'
    },
   
    'Element Color' : {
        0: 'Black' ,
        1: 'Colorless' ,
        2: 'Copper' ,
        3: 'Gold' ,
        4: 'Gray' ,
        5: 'Red' ,
        6: 'Silver' ,
        7: 'SlateGray' ,
        8: 'Unknown' ,
        9: 'Yellow'
    },
   
    'Element Electrical Type': {
        0: 'Conductor',
        1: 'Insulator' ,
        2: 'Semiconductor' ,
        3: 'Unknown'  
    },
   
    'crystal_structure' : {
       0: 'Unknown'  ,
       1: 'body-centered cubic (bcc)' ,
       2: 'cubic' ,
       3: 'double hexagonal close-packed (dhcp)' ,
       4: 'face-centered cubic (fcc)' ,
       5: 'face-centered diamond-cubic' ,
       6: 'hexagonal' ,
       7: 'hexagonal close-packed (hcp)' ,
       8: 'monoclinic' ,
       9: 'orthorhombic' ,
       10: 'rhombohedral' ,
       11: 'tetragonal'        
    },
   
}


def guess_the_block(properties):
    values = []
    names = list(encoding.keys())
    for i in range(len(encoding.keys())):
        values.append(encoding[names[i]][properties[i]])
        print(properties[i])
    file = open("trained_model_rfc.obj",'rb')
    model = pickle.load(file)
    file.close()
   
    probabilities = pd.DataFrame()
    probabilities["Probability"] = np.array((model.predict_proba([values]))*100).tolist()[0]
    probabilities["Blocks"] = ["S", "P", "D", "F"]
    fig = px.bar(probabilities, x='Probability', y="Blocks", color='Blocks', title='Block Probability', hover_name='Blocks')
   
   
    return fig