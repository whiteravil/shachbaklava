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
		infinite: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
        
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }
    ]
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

  function close_modal(modal = false) {
    modal.fadeOut()
  }

  function show_modal(modal_id) {
    let modal = $(modal_id);

    modal.fadeIn()

    let modal_body = modal.find('.modal-body');

    if (modal_body.length) {
      setTimeout(function () {
        modal_body.addClass('active');
      },300)
    }

    modal.find('.close-button').on('click', function () {
      close_modal(modal);
      if (modal_body.length) {
        setTimeout(function () {
          modal_body.removeClass('active');
        },300)
      }
    })
  }

  $('.open-popup').on('click', function (e) {
    e.preventDefault();

    let $this = $(this);

    let id = $this.attr('href');

    show_modal(id);
  });

  $('.open-menu-btn').on('click', function() {
    $('.header-right').addClass('opened')
  });

  $('.menu-close').on('click', function() {
    $('.header-right').removeClass('opened')
  });

  $(document).on('click', function(e) {
    if ( !$(e.target).closest('.header-right').length && !$(e.target).closest('.open-menu-btn').length ) {
      $('.header-right').removeClass('opened')
    }
  });

})
