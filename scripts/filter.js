(function(){

	let elem = document.querySelector('.product__list');
	let iso = new Isotope( elem, {
  // options
  itemSelector: '.product__item',
  filter: '.popular'
});

	let classActive = "filter__item-active";
	let filterLinks = document.querySelectorAll('.filter__link');
	filterLinks.forEach(function(filterLink){
		let dataAttribute = filterLink.getAttribute("data-filter");
		filterLink.onclick = function(a){
			filterLinks.forEach(function(link){
				link.closest('.filter__item').classList.remove(classActive);
			})
			a.preventDefault();
			filterLink.closest('.filter__item').classList.add(classActive);

			iso.arrange({
				filter: `.${dataAttribute}`
			})
		}
	})
} ())