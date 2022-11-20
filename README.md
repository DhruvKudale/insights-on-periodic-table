# Insights On Periodic Table
CS 699 Software Lab Project

There are currently known 118 elements each of which has a variety of physical and chemical properties. As a part of this project, we have developed a utility that could help students understand the similarities and differences between the elements (properties) in a better way. We have shown the visual gradation/trends of the elements concerning their properties using customized drop-downs on a dashboard along with relevant graphs. This is is a web application that can be hosted locally by starting a simple HTTP server. We recommend using Python to start the web server which can be accessed on your local network. Similarly, Chrome or Firefox usage is encouraged as the corresponding browser interface. 

# Contributor Details
Kishan Maharaj 22m2122@iitb.ac.in <br />
Dhruv Kudale 22m2116@iitb.ac.in <br />
November 2022

# Steps to Run Locally:
    1. Start the python http server in the project directory where index.html is present
        $ python3 -m http.server 8000

    2. Access http://0.0.0.0:8000/ on browser (Chrome or Firefox is preferred) 

# Datasets
We have used the PubChem National Library of Medicine [2] as a reference and its corresponding
Periodic Table dataset [3] to retrieve the physical and chemical properties of elements. We will also
be referring to Kaggle Periodic Table dataset [1]. The cleaned dataset is available in the repository in the elements.json file
Our data preprocessing using Python3 involves the removal of unwanted attributes, handling miss-
ing values (extrapolation for boiling points), calculating derived attributes (for example, determining
valence electrons from the electronic configuration), and making the data consistent overall.

# Methodology
After preprocessing, we have represented the trends in the selected property (from drop-down) on the
rendered periodic table as a correlation heat map. The color intensity variation helps the user get
visual cues about how the concerned property is clustered or varies over the periodic table. We have
also used graphs to display trends in physical properties like melting point, boiling point, etc. We have
further focused on the direction of making the dashboard more intuitive and simpler to interpret.


# Technical Requirements
We have used the following tools and libraries for the implementation of this project as described in the following
Table. Apart from the previously mentioned tools, we have used additional JavaScript libraries and
frameworks for designing the dashboard which namely includes PyScript and Chroma. PyScript is
a framework which allows users to create Python applications in the browser using a combination of
Python alongside standard HTML. Chroma is a JavaScript library used for colour conversions and
manipulations.

    | TOOL    |  PURPOSE or EXAMPLE                             |
    | :-----: | :---------------------------------------------: |
    | Git     |  For collaborative development                  |
    | IDE     |  Visual Studios and PyCharm                     |
    | Python3 |  For backend development and data preprocessing |
    | PyPlot  |  For creating and displaying relevant graphs    |
    | HTML    |  For developing the dashboard                   |
    | Latex   |  For documentation purposes                     |


# Dashboard Design
Our dashboard has a tabular component as well as a visualization component. The tabular component
renders the periodic table displaying all the 118 elements in the standard convention. Each element tile
displays the atomic number (superscript), the symbol of the element, the corresponding name of the
element, and optionally the value of interest below it. The value of interest chosen is from the custom
drop-down present at the top right of the web page. Currently, the project supports basic physical and
chemical properties which include boiling point, melting point, chemical block the element belongs to,
standard physical state, etc.


# References
[1] Kaggle Periodic table dataset. https://www.kaggle.com/datasets/psycon/periodic?select=periodic_table.csv.
[2] PubChem National library overview. https://pubchem.ncbi.nlm.nih.gov/.
[3] PubChem Periodic table dataset. https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/CSV/?response_type=display.
