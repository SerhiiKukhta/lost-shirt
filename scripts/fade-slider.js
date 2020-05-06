(function(){

let slides = document.querySelectorAll('.fade-slider__item');
let index = 0;
let activeClass = "fade-slider__item-visible"
console.log(slides.length);
	setInterval(function(){
		slides[index].classList.remove(activeClass);
		index++;
		if (index + 1 > slides.length) {
			index = 0;
		}
		slides[index].classList.add(activeClass);
	}, 5000);
}());