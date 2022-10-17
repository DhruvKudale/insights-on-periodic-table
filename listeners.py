from js import document
from pyodide import create_proxy

def button_click(event):
    document.getElementById("z36").innerHTML = 'BC'

def setup():
	# The page is ready, clear the "page loading"
	document.getElementById("z36").innerHTML = ''
 
	# Create a JsProxy for the callback function
	click_proxy = create_proxy(button_click)
 
	# Set the listener to the callback
	e = document.getElementById("z1")
	e.addEventListener("click", click_proxy)
 
setup()