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
 	document.getElementById("desc-table").removeAttribute("hidden")
}