function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

function addNewItem(list,item) {
	var newListItem = document.createElement("li");
	newListItem.innerHTML = item;
	list.appendChild(newListItem);
	console.log("new item added");
}


var btnNew = document.getElementById("permission");
var preNew = document.getElementById("prefButton");
var todos = document.getElementById("to-do-list");
var on = false;


preNew.onclick = function() {
	var newToDo = document.getElementById("what-to-do").value;
	addNewItem(todos,newToDo);
	document.getElementById("what-to-do").value = "";
} 

btnNew.onclick = function() {
	if(on)document.getElementById('switch').src="off.png";
	else document.getElementById('switch').src="on.png";
	on = !on;
}