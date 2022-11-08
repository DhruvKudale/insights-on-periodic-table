var elementsdata = []

fetch("./elements.json").then(response => {
   return response.json();
})
.then(data => elementsdata = data);

function loadTileDetails(i) {
    data = elementsdata[i-1];
    document.getElementById("desc-name").innerHTML = data['Name'];
    document.getElementById("desc-state").innerHTML = data['StandardState'];
    document.getElementById("desc-atomic-mass").innerHTML = data['AtomicMass'];
    document.getElementById("desc-electronic-configuration").innerHTML = data['ElectronConfiguration'];
    document.getElementById("desc-melting-point").innerHTML = data['MeltingPoint'];
    document.getElementById("desc-boiling-point").innerHTML = data['BoilingPoint'];
    document.getElementById("desc-year").innerHTML = data['YearDiscovered'];
 	document.getElementById("desc-table").removeAttribute("hidden")
}

function getColourFromBlock(block) {
   return "black";
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

function displayTrends() {
   for(i=1; i<=118; i++) {
      data = elementsdata[i-1];
      elementid = "z" + String(i);
      color = getColourFromState(data['StandardState']);
      document.getElementById(elementid).style.backgroundColor = color;
   }
}