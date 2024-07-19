let menuElem = document.getElementById('list');
let list_nameElem = menuElem.querySelector('.list_name');

alert("Привет");
list_nameElem.onclick = function(){
    menuElem.classList.toggle('open');
};



