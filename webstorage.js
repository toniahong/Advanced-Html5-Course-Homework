$(function(){

    $("#addButton").click(function(){
    var key = $('#key').val();
    var value = $('#value').val();
    localStorage.setItem(key, value);
    addItemToDOM(key, value);
    })


function addItemToDOM(key, value) {
    var items = document.getElementById('items');
    var item = document.createElement('li');
    item.setAttribute("id", key);
    var span = document.createElement('span');
    span.setAttribute("class", "note");
    span.innerHTML = key + ":" + value;
    item.appendChild(span);
    items.appendChild(item);
}

$("#removeItem").click(function(){
    var key = $('#key').val();
    localStorage.removeItem(key);
    removeItemFromDOM(key);
    })


function removeItemFromDOM(key) {
    var item = $(key);
    item.parentNode.removeChild(item);
}

  $("#clearButton").click(function(){
    localStorage.clear();
    var ul = document.getElementById("items");
    var items = ul.childNodes;
    for (var i = items.length - 1; i >= 0; i--) {
        ul.removeChild(items[i]);
    }
    })

});
