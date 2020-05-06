(function(){
let openingBtn = document.querySelector('.sidebar__hamburger');
let closingBtn = document.querySelector('.sidebar__close');
let sidebar = document.querySelector('.sidebar');
openingBtn.onclick = function(a){
	a.preventDefault();
	sidebar.classList.toggle('sidebar-opened');
}
closingBtn.onclick = function(a){
	a.preventDefault();
	sidebar.classList.toggle('sidebar-opened');
}
}())

