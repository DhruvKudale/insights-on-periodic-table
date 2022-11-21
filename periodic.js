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