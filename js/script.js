// nav
const nav = document.querySelector('nav');
document.querySelector('.burger').addEventListener('click', function() {
	this.classList.toggle('active');
	nav.classList.toggle('active');	
});
//scroling menu

	// const btn1 = document.querySelector('.btn-1');
	// const btn2 = document.querySelector('.btn-2');
	// const btn3 = document.querySelector('.btn-3');
	// const btn4 = document.querySelector('.btn-4');
	// const btn5 = document.querySelector('.btn-5');

	// const beginningWelcome = document.querySelector('.welcome').offsetTop;
	// const beginningAboutUs = document.querySelector('.about-us').offsetTop;
	// const beginningBanner = document.querySelector('.banner').offsetTop;
	// const beginningGallery = document.querySelector('.gallery').offsetTop;
	// const beginningContact = document.querySelector('.contact').offsetTop;

	// btn1.addEventListener('click', function() {
	// 	beginningWelcome.scrollTop()
	// 	})
// window.addEventListener('click', clickButton)



$('.btn-1').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.welcome').offset().top
	}, 500)
})
$('.btn-2').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.about-us').offset().top
	}, 500)
})
$('.btn-3').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.banner').offset().top
	}, 500)
})
$('.btn-4').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.gallery').offset().top
	}, 500)
})
$('.btn-5').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.contact').offset().top
	}, 500)
})	

//menu
function changeColor() {
	const sizeScroll = window.scrollY;

	const btn1 = document.querySelector('.btn-1');
	const btn2 = document.querySelector('.btn-2');
	const btn3 = document.querySelector('.btn-3');
	const btn4 = document.querySelector('.btn-4');
	const btn5 = document.querySelector('.btn-5');

	const heightWelcome = document.querySelector('.welcome').offsetHeight;
	const heightAboutUs = document.querySelector('.about-us').clientHeight;
	const heightBanner = document.querySelector('.banner').offsetHeight;
	const heightGallery = document.querySelector('.gallery').clientHeight;
	const heightContact = document.querySelector('.contact').clientHeight;

	const beginningWelcome = document.querySelector('.welcome').offsetTop;
	const beginningAboutUs = document.querySelector('.about-us').offsetTop;
	const beginningBanner = document.querySelector('.banner').offsetTop;
	const beginningGallery = document.querySelector('.gallery').offsetTop;
	const beginningContact = document.querySelector('.contact').offsetTop;

	if(sizeScroll < heightWelcome) {
		btn1.style.color = "#c4bdff";
		btn2.style.removeProperty('color');
		btn3.style.removeProperty('color');
		btn4.style.removeProperty('color');
		btn5.style.removeProperty('color');
	}
	else if(sizeScroll < heightAboutUs + beginningAboutUs) {
		btn2.style.color = "#957bff";
		btn1.style.removeProperty('color');	
		btn3.style.removeProperty('color');	
	}
	else if(sizeScroll < heightBanner + beginningBanner) {
		btn3.style.color = "#7449ff";
		btn2.style.removeProperty('color');	
		btn4.style.removeProperty('color');	
	}
	else if(sizeScroll < heightGallery +beginningGallery) {
		btn4.style.color = "#5127e5";
		btn3.style.removeProperty('color');
		btn5.style.removeProperty('color');
		btn1.style.removeProperty('color');
	}
	else if(sizeScroll < heightContact + beginningContact) {
		btn5.style.color = "#421eb2";
		btn4.style.removeProperty('color');
		btn1.style.removeProperty('color');
	}
}
window.addEventListener('scroll', changeColor)

// banner
let activeElement = 0;
let timeChange = 4000;

const bannerImgHtml = document.querySelector('.banner-image img');
const bannerImgMiniHtml = document.querySelector('.banner-image-mini img')
const bannerTxtHtml = document.querySelector('.banner-text h1');
const arrowLeftHtml = document.querySelector('div.arrow-left i');
const arrowRightHtml = document.querySelector('div.arrow-right i');

const images = ['images/banner/1.jpg', 'images/banner/2.jpg', 'images/banner/3.jpg', 'images/banner/4.jpg', 'images/banner/5.jpg', 'images/banner/6.jpg', 'images/banner/7.jpg'];
const imagesMini = ['images/banner/1mini.jpg', 'images/banner/2mini.jpg', 'images/banner/3mini.jpg', 'images/banner/4mini.jpg', 'images/banner/5mini.jpg', 'images/banner/6mini.jpg', 'images/banner/7mini.jpg'];
const txt = ['bukiety okolicznościowe', 'słodkie bukiety', 'dekoracja aut', 'dekoracja sal weselnych', 'wieńce pogrzebowe', 'stroiki świąteczne', 'ciekawe kompozycje'];

//change slider
function changeElement() {
	activeElement++;
	if (activeElement == images.length) {
		activeElement = 0;
	}
	bannerImgHtml.src = images[activeElement];
	bannerImgMiniHtml.src = imagesMini[activeElement];	
	bannerTxtHtml.textContent = txt[activeElement];	
}
setInterval(changeElement, timeChange)

arrowRightHtml.addEventListener('click', function() {
	activeElement++;
	if (activeElement == images.length) {
		activeElement = 0;
	} 
	bannerImgHtml.src = images[activeElement];
	bannerImgMiniHtml.src = imagesMini[activeElement];
	bannerTxtHtml.textContent = txt[activeElement];
	}
) 

arrowLeftHtml.addEventListener('click', function() {
	activeElement--;
	if (activeElement == -1) {
		activeElement = images.length-1;
	} 
	bannerImgHtml.src = images[activeElement];
	bannerImgMiniHtml.src = imagesMini[activeElement];
	bannerTxtHtml.textContent = txt[activeElement];
	}
) 

//add map
function initMap () {
  const place = {lat: 52.742879, lng: 23.583948};
  var map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 15, 
      	center: place
      });
  var marker = new google.maps.Marker({
  	position: place, 
  	map: map
  });
}