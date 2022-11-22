# -*- coding: utf-8 -*-

import numpy as np
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

data = pd.read_csv("elements.csv")

all_features = ['Element Atomic Number', 'Element Symbol', 'Element Name',
       'Element Ionization Energies', 'Element Abundance in Earth\'s Crust',
       'Element Color', 'Element Abundance in Humans',
       'Element Abundance in Oceans', 'Element Atomic Weight', 'Element Block',
       'Element Absolute Boiling Point', 'Element Absolute Melting Point',
       'Element Category', 'Element Country of Discovery',
       'Element Year of Discovery', 'Element Density',
       'Element Electrical Conductivity', 'Element Electrical Type',
       'ElectronConfiguration', 'Element Electron Affinity',
       'Element Electronegativity (Pauling)', 'Radioactive',
       'Element Mass Magnetic Susceptibility', 'Element Magnetic Type',
       'van_der_waals_radius', 'crystal_structure', 'Element Valence',
       'Discovered_by', 'period', 'phase', 'bohr_model_3d', 'summary']


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

def get_df(features, features_names):
    
    df = pd.DataFrame()
    for i in range(len(features_names)):
        df[features_names[i]] = features[i]
    
    return df


def get_indexes(variable_name):
    
    indexes =  ~(np.array(data[variable_name]=="Unknown") | np.array(data[variable_name].isnull()))
    return indexes

def get_data_variable_wise(variable_name):
    
    index = get_indexes(variable_name)
    
    values = data[index][variable_name]
    try:
        values = values.values.astype('float')
    except:
        values = values
        
    
    symbols = data[index]['Element Symbol']
    atomic_no = list(data[index]['Element Atomic Number'])
    block = data[index]['Element Block']
    
    data_variable = pd.DataFrame()
    data_variable[variable_name] = values
    data_variable['Element Symbol'] = symbols
    data_variable['Element Atomic Number'] = atomic_no
    data_variable['Element Block'] = block
    
    return data_variable



class Graphs:
    def __init__(self, variable_name):
        self.variable_name = variable_name
     
    
    def line_plot(self, logarithm = False):

        variable_name = self.variable_name
        
        if variable_name not in allowed_for_line_graph:
            return "Line Graph is not applicable for the given Feature"
        
        data_variable = get_data_variable_wise(variable_name)

        x = data_variable['Element Atomic Number']
        y=data_variable[variable_name]
        hover_text=data_variable['Element Symbol']
        title = variable_name


        fig = go.Figure()

        if logarithm:
            y = np.log(np.array(y).astype(float)) 


        fig.add_trace(go.Scatter(x=x, y=y,

                        mode='lines+markers',

                        hovertext=hover_text))


        fig.update_layout(
            template="simple_white",
            xaxis_title="Atomic Number",
            yaxis_title=title,

        title={
            'text': title,
            'y':0.9,
            'x':0.5,
            'xanchor': 'center',
            'yanchor': 'top'})

        return fig

    def bar_plot(self):
        
        variable_name = self.variable_name
        
        if variable_name not in allowed_for_bar_graph:
            return "Bar Plot is not applicable for the given Feature"
        
        
        df = get_data_variable_wise(variable_name)
        fig = px.bar(df, x='Element Atomic Number', y=variable_name, color=variable_name, title=variable_name, hover_name='Element Symbol')
        
        return fig
    
    
    
    def sunburst_plot(self):
        
        variable_name = self.variable_name
        
        if variable_name not in allowed_for_sunburst:
            return "Sun Burst Plot is not applicable for the given Feature"
 
        df_sunburst = get_data_variable_wise(variable_name)
        fig = px.sunburst(df_sunburst, path=[variable_name, 'Element Block', 'Element Symbol'],width=1000, height=1000)
        return fig
    
    
    
    def scatter_plot(self):
        
        variable_name = self.variable_name
        
        if variable_name not in allowed_for_scatter:
            return "Scatter Plot is not applicable for the given Feature"
        
        df_pie = get_data_variable_wise(variable_name)
        fig = px.scatter(df_pie, x='Element Atomic Number', y=variable_name,
          size=variable_name, color='Element Block',
                     hover_name='Element Symbol', log_x=False,  size_max=20)

        return fig

# g = Graphs(variable_name='Element Color')

# g.line_plot()

# g.scatter_plot()

# g.bar_plot()

# g.sunburst_plot()
