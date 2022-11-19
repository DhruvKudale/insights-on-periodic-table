var elementsdata = []

fetch("./elements.json").then(response => {
   return response.json();
})
.then(data => elementsdata = data);

function loadTileDetails(i) {
    data = elementsdata[i-1];
    document.getElementById("desc-name").innerHTML = data['Name'];
    document.getElementById("desc-z").innerHTML = data['AtomicNumber'];
    document.getElementById("desc-symbol").innerHTML = data['Symbol'];
    document.getElementById("desc-state").innerHTML = data['StandardState'];
    document.getElementById("desc-atomic-mass").innerHTML = data['AtomicMass'];
    document.getElementById("desc-electronic-configuration").innerHTML = data['ElectronConfiguration'];
    document.getElementById("desc-melting-point").innerHTML = data['MeltingPoint'];
    document.getElementById("desc-boiling-point").innerHTML = data['BoilingPoint'];
    document.getElementById("desc-block").innerHTML = data['GroupBlock'];
    document.getElementById("desc-year").innerHTML = data['YearDiscovered'];
 	document.getElementById("desc-table").removeAttribute("hidden")
}

function getColourFromState(state) {
   if(state == "Solid")
      return "#ed8a8a";
   else if(state == "Liquid")
      return "#73a3f0";
   else if(state == "Gas")
      return "#b8f073";
   else 
      return "#c7c3c3";
}

function getDisplayFromState(state) {
   if(state == "Solid")
      return "Solid";
   else if(state == "Liquid")
      return "Liquid";
   else if(state == "Gas")
      return "Gas";
   else 
      return "NA";
}

function getColourFromBlock(block) {
   if(block == "Nonmetal")
      return "#e7f57f";
   else if(block == "Noble gas")
      return "#9785f2";
   else if(block == "Alkali metal")
      return "#7facf5";
   else if(block == "Alkaline earth metal")
      return "#f57f7f";
   else if(block == "Metalloid")
      return "#f285b8";
   else if(block == "Halogen")
      return "#f5c47f";
   else if(block == "Post-Transition Metal")
      return "#7fd0f5";
   else if(block == "Transition Metal")
      return "#7ff59d";
   else 
      return "#c7c3c3";
}

function getDisplayFromGroup(block) {
   if(block == "Nonmetal")
      return "Non Metal";
   else if(block == "Noble gas")
      return "Noble Gas";
   else if(block == "Alkali metal")
      return "Alkali Metal";
   else if(block == "Alkaline earth metal")
      return "Alkaline Earth Metal";
   else if(block == "Metalloid")
      return "Metalloid";
   else if(block == "Halogen")
      return "Halogen";
   else if(block == "Post-Transition Metal")
      return "Post-Transition";
   else if(block == "Transition Metal")
      return "Transition Metal";
   else if(block == "Actinide")
      return "Actinide";
   else if(block == "Lanthanide")
      return "Lanthanide";
   else 
      return "NA";
}

function getColourFromYear(year) {
   if(year == "Ancient") {
      return "#d7d8f4";
   }
   else {
      numyear = Number(year)
      gradient = chroma.scale(['#cccff2', '#676fd7'])
      oldest = 1600
      recent = 2010
      diff = recent - oldest
      scaled = (numyear -1600) / diff;
      return gradient(scaled);
   }
}

function belongsTo(x, a, b) {
   if (x < b && x >= a) {
      return true;
   }
   else {
      return false;
   }
}

function getColourFromMP(value) {
   if(value == "NA") {
      return "#c7c3c3";
   }
   max_mp = 3825;
   gradient = chroma.scale(['#ddf6de', '#32bf34']);
   scaled = value/max_mp;
   return gradient(scaled);
}

function getColourFromBP(value) {
   if(value == "NA") {
      return "#c7c3c3";
   }
   max_bp = 5830;
   gradient = chroma.scale(['#f9e7e7', '#cf4545']);
   scaled = value/max_bp;
   return gradient(scaled);
}

function displayTrends() {
   dropdown = document.getElementById("property-dropdown")
   propertyselcted = dropdown.value
   for(i=1; i<=118; i++) {
      data = elementsdata[i-1];
      elementid = "z" + String(i);
      displayelementid = "tile-value" + String(i);
      
      //dropdown selection logic
      if(propertyselcted == "standard-state") {
         value = data['StandardState']
         color = getColourFromState(value);
         document.getElementById(displayelementid).innerHTML = getDisplayFromState(value);
         document.getElementById(elementid).style.backgroundColor = color;
      }
      else if (propertyselcted == "melting-point") {
         value = data['MeltingPoint']
         color = getColourFromMP(value);
         document.getElementById(displayelementid).innerHTML = value;
         document.getElementById(elementid).style.backgroundColor = color;
      }
      else if (propertyselcted == "boiling-point") {
         value = data['BoilingPoint']
         color = getColourFromBP(value);
         document.getElementById(displayelementid).innerHTML = value;
         document.getElementById(elementid).style.backgroundColor = color;
      }
      else if (propertyselcted == "year") {
         value = data['YearDiscovered']
         color = getColourFromYear(value);
         document.getElementById(displayelementid).innerHTML = value;
         document.getElementById(elementid).style.backgroundColor = color;
      }
      else if (propertyselcted == "chemical-block") {
         value = data['GroupBlock']
         color = getColourFromBlock(value);
         document.getElementById(displayelementid).innerHTML = getDisplayFromGroup(value);
         document.getElementById(elementid).style.backgroundColor = color;
      }
      else {
         value = data['GroupBlock']
         color = getColourFromBlock(value);
         document.getElementById(displayelementid).innerHTML = "";
         document.getElementById(elementid).style.backgroundColor = color;
      }
      
   }
}