function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}


function addNewItem(list,item1,item2) {
	var newListItem = document.createElement("li");
	newListItem.innerHTML = item1 + "     " + item2 + 'g';
	list.appendChild(newListItem);
	console.log("new item added");
}

function completeItem(target) {
	addNewItem(donelist,target.innerHTML);
	target.parentNode.removeChild(target);
}

var btnNew = document.getElementById("newButton");
var todos = document.getElementById("to-do-list");


todos.onclick = function(event) {
	var target = getEventTarget(event);
	completeItem(target);
}


btnNew.onclick = function() {
	var newToDo = document.getElementById("what-to-do").value;
	var newWeight = document.getElementById("amount").value;
	addNewItem(todos,newToDo,newWeight);
	document.getElementById("what-to-do").value = "";
	document.getElementById("amount").value = "";
}