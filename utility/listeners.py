# from js import document
# from pyodide import create_proxy
# from getData import *

# def button_click(event):
# 	id = event.target.id
# 	document.getElementById("desc-name").innerHTML = getElementDataById(id)['Name']
# 	document.getElementById("desc-table").removeAttribute("hidden")

# def setup():
# 	document.getElementById("desc-table").setAttribute("hidden", "hidden")
# 	# Create a JsProxy for the callback function
# 	click_proxy = create_proxy(button_click)
 
# 	# Set the listener to the callback
# 	elements = document.querySelectorAll('[id^="z"]')
# 	for e in elements:
# 		e.addEventListener("click", click_proxy)
 
# setup()