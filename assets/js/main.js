


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';


$(document).ready(function ($) {
	$body = $('body');
	if (devStatus) {
		pageWidget(['index']);
		pageWidget(['profile']);
		pageWidget(['product']);
		pageWidget(['cart']);
		pageWidget(['coin']);
		pageWidget(['history']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	if($('#map')[0]) {
		map();
	}
	if(windowWidth < mediaPoint1) {
		burgerMobile();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		// var vh2 = document.documentElement.clientHeight * 0.01;

		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: transparent'].join(';');
var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';

// console.info('%c%s', styles, message);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.create({
  
  trigger: ".observer#cocomber",
  
  start: '-=10% center',   
    
  onEnter: () => {
    gsap.to('.products_cat', { duration: 0.4, delay: 0.0, scrollTo: {x: "#cocomber-link", offsetX: 50}, ease: "none"} );
  },
  
  onLeaveBack: () => {
    gsap.to('.products_cat', { duration: 0.4, delay: 0.0, scrollTo: {x: "#up-link", offsetX: 0}, ease: "none"} );
  }

})

ScrollTrigger.create({
  
  trigger: ".observer#naggets",
  
  start: '-=10% center',   
    
  onEnter: () => {
    gsap.to('.products_cat', { duration: 0.5, delay: 0.0, scrollTo: {x: "#naggets-link", offsetX: 0}, ease: "none"} );
  },
  
  onLeaveBack: () => {
    gsap.to('.products_cat', { duration: 0.5, delay: 0.0, scrollTo: {x: "#up-link", offsetX: 0}, ease: "none"} );
  }

})












const heroSlider = new Swiper('.hero_slider ', {
	speed: 600,
	breakpoints: {
    320: {
      slidesPerView: 3.5,
      spaceBetween: 10,
			freeMode: false,
    },
    480: {
      slidesPerView: 6,
      spaceBetween: 10,
			freeMode: false,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 13
    }
	},
	navigation: {
		nextEl: '.other_btn--next',
		prevEl: '.other_btn--prev'
	}
});






	//-------------------------------------------------popup

$(document).ready(function() {

	let popup = $('.popup');
	$('.header_delivery').click(function() {
		$('.address_popup').each(function() {
				$(this).toggleClass('active');
				console.log('Good', this);
				$(this).each(function() {
					$('.close_btn').click(function() {
						$(this).closest('.popup').removeClass('active');
						console.log(this)
					})
					$('.popup_bg').click(function() {
						$(this).closest('.popup').removeClass('active');
						console.log(this)
					})
				})
		})
	})
	/////////////
	$('.header_burger').click(function() {
			$(popup).removeClass('active')
		$('.burger_popup').each(function() {
				$(this).toggleClass('active');
				console.log('Good', this);
				$(this).each(function() {
					$('.close').click(function() {
						$(this).closest('.popup').removeClass('active');
						console.log(this)
					})
					$('.popup_bg').click(function() {
						$(this).closest('.popup').removeClass('active');
						console.log(this)
					})
				})
		})
	})

	$('.cart_btnPay').click(function() {
		event.preventDefault();
		$(popup).removeClass('active')
	$('.phone_submit ').each(function() {
			$(this).toggleClass('active');
			console.log('Good', this);
			$(this).each(function() {
				$('.close').click(function() {
					$(this).closest('.popup').removeClass('active');
					console.log(this)
				})
				$('.popup_bg').click(function() {
					$(this).closest('.popup').removeClass('active');
					console.log(this)
				})
			})
	})
})

$('.phone_submit--medium>p').click(function() {
	$('.phone_code').removeClass('active')
$('.phone_submit').each(function() {
		$(this).toggleClass('active');
		$(this).each(function() {
			$('.close').click(function() {
				$(this).closest('.popup').removeClass('active');
				console.log(this)
			})
			$('.popup_bg').click(function() {
				$(this).closest('.popup').removeClass('active');
				console.log(this)
			})
		})
})
})

$('.phone_submit--bottom').click(function() {
	event.preventDefault();
	$('.phone_submit').removeClass('active')
	$(popup).removeClass('active')
$('.phone_code').each(function() {
		$(this).toggleClass('active');
		console.log('Good', this);
		$(this).each(function() {
			$('.close').click(function() {
				$(this).closest('.popup').removeClass('active');
				console.log(this)
			})
			$('.popup_bg').click(function() {
				$(this).closest('.popup').removeClass('active');
				console.log(this)
			})
		})
})
})

	$('.lisence_type--list li:first').trigger('click');
	$('.action_btn, .popup_sub--btn').click(function() {
		$(popup).removeClass('active');
		succes('.succes');
	})
	/////////////
	$('.trigger_details').click(function() {
		$('.products_detailsContentWrapper ').each(function() {
				$(this).toggleClass('active');
				$(this).each(function() {
					$('.productsDetails_bg').click(function() {
						$(this).closest('.products_detailsContentWrapper').removeClass('active');
					})
				})
		})
	})

})



	//-------------------------------------------------popup###







// tabs
// function tabs(link, block) {
// 	let linkSelector = $(link),
// 		blockSelector = $(block);

// 	$(linkSelector).on('click', function (e) {
// 		e.preventDefault();

// 		let $this = $(this),
// 			currentData = $(this).data('tab');

// 		$(blockSelector).removeClass('active');
// 		$(linkSelector).removeClass('active');

// 		$(block + '[data-tab="' + currentData + '"]').addClass('active');
// 		$this.addClass('active');

// 	});
// }

// tabs('.lisence_item--link', '.lisence_item');

function burgerMobile() {
	$('.header_nav, .popup_burger--list>li>a, .popup_burger--bg').click(function() {
		$('.popup_burger').toggleClass('active');
		$('.close_btn').click(function() {
			$(this).closest('.popup_burger').removeClass('active');
		})
	})
}


$(document).ready(function() {
	let card = $('.products_card');
	let triggerCard = $('.products_qtyTrigger');

	$(card).each(function() {
		$(triggerCard).click(function() {
			$(this).closest(card).addClass('active');
			if($(this).closest(card).hasClass('active')) {
				$(this).closest(card).siblings().removeClass('active');
			}
		})
	})

})

// tabs
// function tabs(link, block) {
// 	let linkSelector = $(link),
// 		blockSelector = $(block);

// 	$(linkSelector).on('click', function (e) {
// 		e.preventDefault();

// 		let $this = $(this),
// 			currentData = $(this).data('tab');

// 		$(blockSelector).removeClass('active_tab');
// 		$(linkSelector).removeClass('active_tab');

// 		$(block + '[data-tab="' + currentData + '"]').addClass('active_tab');
// 		$this.addClass('active_tab');

// 	});
// }

// tabs('.products_catLink', '.products_tabItem');

 

function map() {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
						center: [60.144095, 29.930985],
						zoom: 16,
						scroll: false,
				}, {
						searchControlProvider: 'yandex#search'
				}),
	
				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
						balloonContent: 'ул. Петровская, 53 Санкт-Петербург, Россия'
				}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/logo.jpg',
						iconImageSize: [33, 33],
						iconImageOffset: [-5, -38]
				});
	
		myMap.geoObjects
				.add(myPlacemark)
	});
}




const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)




window.onload = function() {
  var sec = 60;
  setInterval(function() {
    document.getElementById("rocket").innerHTML = "00 : " + sec;
    sec--;
    if (sec == 00) {
      sec = 60;
    }
  }, 1000);
}




const root = document.documentElement;

function getCustomPropertyValue(name) {
  const styles = getComputedStyle(root);
  return styles.getPropertyValue(name);
}

/* 
  SMS Code input logic

  
  Disclaimer: this «pen» was made for presentational pruposes.
  It's not a production-ready solution, because it lacks of many best UX and a11y
  practices. Let it inspire you and I hope you will enjoy it :) 
*/
$(document).ready(function() {
	const fieldset = document.querySelector(".fieldset");
	const fields = document.querySelectorAll(".field");
	const boxes = document.querySelectorAll(".box");
	
	function handleInputField({ target }) {
		const value = target.value.slice(0, 1);
		target.value = value;
	
		const step = value ? 1 : -1;
		const fieldIndex = [...fields].findIndex((field) => field === target);
		const focusToIndex = fieldIndex + step;
	
		if (focusToIndex < 0 || focusToIndex >= fields.length) return;
	
		fields[focusToIndex].focus();
	}
	fields.forEach((field) => {
		field.addEventListener("input", handleInputField);
	});
})


/* End SMS Code input logic */

// Controls 
// const successBtn = document.querySelector(".success-btn");
// const failureBtn = document.querySelector(".failure-btn");
// const resetBtn = document.querySelector(".reset-btn");

// successBtn.addEventListener("click", (event) => {
//   fieldset.classList.add("animate-success");
// });
// resetBtn.addEventListener("click", (event) => {
//   fieldset.classList.remove("animate-failure");
//   fieldset.classList.remove("animate-success");
// });
// failureBtn.addEventListener("click", (event) => {
//   function getDelay() {
//     const firstStepDuration = getCustomPropertyValue(
//       "--transition-duration-step-1"
//     );
//     const secondStepDuration = getCustomPropertyValue(
//       "--transition-duration-step-2"
//     );

//     return parseInt(firstStepDuration) + parseInt(secondStepDuration);
//   }
  
//   function animateFailure() {
//     fieldset.classList.add("animate-failure");
//     const delay = getDelay();

//     setTimeout(() => {
//       fieldset.classList.remove("animate-failure");
//     }, delay);
//   }
  
//   if (fieldset.classList.contains("animate-success")) {
//     fieldset.classList.remove("animate-success");
    
//     const delay = parseInt(getCustomPropertyValue("--transition-duration-step-1"))
    
//     setTimeout(() => {
//       animateFailure();
//     }, delay)
    
//     return;
//   } 
  
//   animateFailure();
// });

// const inputs = document.querySelectorAll(".settings-controls__input");

// function setAnimationDuration({ target }) {
//   const {
//     value,
//     dataset: { step }
//   } = target;
//   const safeValue = parseInt(value);
//   const propertyValue = Number.isNaN(safeValue) ? null : safeValue + "ms";

//   root.style.setProperty(`--transition-duration-step-${step}`, propertyValue);
// }
// inputs.forEach((node) => {
//   node.addEventListener("input", setAnimationDuration);
// });

$(document).ready(function() {
	
	$('.products_cat>li>a').bind("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 80
		}, 100);
		e.preventDefault();
	});
		var lastId,
		topMenu = $(".products_cat>li"),
		topMenuHeight = topMenu.outerHeight()+150,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
		});
	// Bind to scroll


	$(window).scroll(function(){
	 // Get container scroll position
	 var fromTop = $(this).scrollTop()+topMenuHeight;
	
	 // Get id of current scroll item
	 var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
			 return this;
	 });
	// Get the id of the current element
	cur = cur[cur.length-1];
	var id = cur && cur.length ? cur[0].id : "";
	
	if (lastId !== id) {
	 lastId = id;
	 // Set/remove active class
	 menuItems
		 .parent().removeClass("active")
		 .end().filter("[href='#"+id+"']").parent().addClass("active");

	}
	});

})










































