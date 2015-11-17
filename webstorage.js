window.onload = init;

function init(){
	var addButton=document.getElementById('addButton');
	addButton.onclick = addItem;

	var removeButton = document.getElementById('removeButton');
	removeButton.onclick = removeItem;

	var clearButton = document.getElementById('clearButton');
	clearButton.onclick = clearItem;

	for (var key in localStorage) {
        addItemToDOM(key, localStorage[key]);
    }

}

function addItem(e){
	var key = document.getElementById("key").value;
	var value = document.getElementById("value").value;
	localStorage.setItem(key,value);
	addItemToDOM(key,value);
}

function addItemToDOM(key,value){
	var items = document.getElementById("items");
	var item = document.createElement('li');
	item.setAttribute("id",key);
	var span = document.createElement('span');
	span.setAttribute("class","note");
	span.innerHTML = key + ":" + value;

	item.appendChild(span);
	items.appendChild(item);
}

function removeItemFromDOM(key){
	var item=document.getElementById(key);
	item.parentNode.removeChild(item);
}

function removeItem(e){
	var key = document.getElementById("key").value;
	//var value = document.getElementById("value").value;
	localStorage.setItem(key);
	removeItemFromDOM(key);
}

function clearItem(){
	localStorage.clear();
	var ul=document.getElementById("items");
	var items=ul.childNodes;
	for (var i = items.length - 1; i >= 0; i--) {
		ul.removeChild(items[i]);
	};
}