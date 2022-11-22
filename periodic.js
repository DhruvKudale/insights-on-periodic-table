var elementsdata = []

fetch("./elements.json").then(response => {
   return response.json();
})
.then(data => elementsdata = data);

fetch("./colorconfig.json").then(response => {
   return response.json();
})
.then(data => colordata = data);

function loadTileDetails(i) {
    data = elementsdata[i-1];
    document.getElementById("desc-name").innerHTML = data['Element Name'];
    document.getElementById("desc-z").innerHTML = data['Element Atomic Number'];
    document.getElementById("desc-symbol").innerHTML = data['Element Symbol'];
    document.getElementById("desc-state").innerHTML = data['phase'];
    document.getElementById("desc-atomic-mass").innerHTML = data['Element Atomic Weight'];
    document.getElementById("desc-electronic-configuration").innerHTML = data['ElectronConfiguration'];
    document.getElementById("desc-melting-point").innerHTML = data['Element Absolute Melting Point'];
    document.getElementById("desc-boiling-point").innerHTML = data['Element Absolute Boiling Point'];
    document.getElementById("desc-block").innerHTML = data['Element Category'];
    document.getElementById("desc-year").innerHTML = data['Element Year of Discovery'];
 	document.getElementById("desc-table").removeAttribute("hidden")
}

function getDisplayFromGroup(block) {
   if(block == "Other Nonmetal")
      return "Non Metal";
   else if(block == "Noble Gas")
      return "Noble Gas";
   else if(block == "Alkali Metal")
      return "Alkali Metal";
   else if(block == "Alkaline Earth Metal")
      return "Alkaline Earth Metal";
   else if(block == "Metalloid")
      return "Metalloid";
   else if(block == "Halogens")
      return "Halogen";
   else if(block == "Post Transition Metal")
      return "Post-Transition";
   else if(block == "Transition Metal")
      return "Transition Metal";
   else if(block == "Actinide")
      return "Actinide";
   else if(block == "Lanthanide")
      return "Lanthanide";
   else 
      return "Unknown";
}

function getColourFromUtility(property, value) {
   if (value == "Unknown" || value == "Ancient") {
      return colordata[property]["Unknown"];
   }
   max_val = colordata[property]["max"];
   min_val = colordata[property]["min"];
   max_col = colordata[property]["max_color"];
   min_col = colordata[property]["min_color"];
   gradient = chroma.scale([min_col, max_col]);
   diff = max_val - min_val;
   scaled_value = (value - min_val)/diff;
   color = gradient(scaled_value);
   return color;
}

function displayTrends() {
   dropdown = document.getElementById("property-dropdown")
   property = dropdown.value
   console.log(property);
   for(i=1; i<=118; i++) {
      data = elementsdata[i-1];
      elementid = "z" + String(i);
      displayelementid = "tile-value" + String(i);
      
      if(property == "Element Block" || property == "Element Category" || property == "phase") {
         //discrete values
         value = data[property]
         if(property == "Element Category") {
            value_to_display = getDisplayFromGroup(value);
         }
         else {
            value_to_display = value;
         }
         document.getElementById(displayelementid).innerHTML = value_to_display;
         document.getElementById(elementid).style.backgroundColor = colordata[property][value];
      }
      else {
         //continuous values
         value = data[property];
         color = getColourFromUtility(property, value);
         document.getElementById(displayelementid).innerHTML = value;
         document.getElementById(elementid).style.backgroundColor = color;
      }
   }
}

function loadElementData() {
   element = document.getElementById("ele-dropdown").value
   id = Number(element);
   data = elementsdata[id - 1];
   document.getElementById("ele-name").innerHTML = data['Element Name'];
   document.getElementById("ele-z").innerHTML = data['Element Atomic Number'];
   document.getElementById("ele-symbol").innerHTML = data['Element Symbol'];
   document.getElementById("ele-state").innerHTML = data['phase'];
   document.getElementById("ele-atomic-mass").innerHTML = data['Element Atomic Weight'];
   document.getElementById("ele-electronic-configuration").innerHTML = data['ElectronConfiguration'];
   document.getElementById("ele-melting-point").innerHTML = data['Element Absolute Melting Point'];
   document.getElementById("ele-boiling-point").innerHTML = data['Element Absolute Boiling Point'];
   document.getElementById("ele-category").innerHTML = data['Element Category'];
   document.getElementById("ele-year").innerHTML = data['Element Year of Discovery'];
   document.getElementById("ele-ionization-energy").innerHTML = data['Element Ionization Energies'];
   document.getElementById("ele-abundance").innerHTML = data['Element Abundance in Earth\'s Crust'];
   document.getElementById("ele-color").innerHTML = data['Element Color'];
   document.getElementById("ele-block").innerHTML = data['Element Block'];
   document.getElementById("ele-density").innerHTML = data['Element Density'];
   document.getElementById("ele-valence").innerHTML = data['Element Valence'];
   document.getElementById("ele-affinity").innerHTML = data['Element Electron Affinity'];
   document.getElementById("ele-negativity").innerHTML = data['Element Electronegativity (Pauling)'];
   document.getElementById("ele-country").innerHTML = data['Element Country of Discovery']; 
   document.getElementById("ele-discovered").innerHTML = data['Discovered_by'];
   document.getElementById("ele-summary").innerHTML = data['summary'];
   document.getElementById("ele-model").setAttribute("src", data['bohr_model_3d']);
   document.getElementById("ele-model").removeAttribute("hidden");
 	document.getElementById("ele-table").removeAttribute("hidden");
}