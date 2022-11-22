fp = open("elements.txt", 'r')
elements = []
for ele in fp:
	elements.append(ele[:-1])

for i in range(len(elements)):
	ele = str(i + 1) + " - " + elements[i]
	id = str(i + 1)
	option = "<option value=\"" + id + "\">" + ele + "</option>"
	print(option)
