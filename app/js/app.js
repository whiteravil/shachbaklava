import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'slick-carousel'
import Inputmask from "inputmask"
import autosize from "autosize"

document.addEventListener('DOMContentLoaded', () => {

	let prodSliderCanMove = true;

	let prodContentSlider = $('.our-production-info-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		asNavFor: '.our-production-images-slider',
		draggable: false,
		speed: 700,
		infinite: false
	});

	let prodImagesSlider = $('.our-production-images-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		asNavFor: '.our-production-info-slider',
		draggable: false,
		infinite: false
	});

	prodContentSlider.on('afterChange', function() {
		prodSliderCanMove = true
	});

	$('.slider-nav-prev').on('click', function() {
		if ( prodSliderCanMove ) {
			prodSliderCanMove = false;
			prodImagesSlider.slick('slickPrev')
		}
	});

	$('.slider-nav-next').on('click', function() {
		if ( prodSliderCanMove ) {
			prodSliderCanMove = false;
			prodImagesSlider.slick('slickNext')
		}
	});

	let phoneMask = new Inputmask({
  	mask: "+7 999 999 99 99",
  	showMaskOnHover: false
  });

  phoneMask.mask('.phone-mask');

  autosize(document.querySelectorAll('textarea.form-control'));

  $('.up-link').on('click', function(e) {
  	e.preventDefault();
  	$('html, body').animate({
  		scrollTop: 0
  	}, 400)
  });

})
