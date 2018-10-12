// nav
const nav = document.querySelector('nav');
document.querySelector('.burger').addEventListener('click', function() {
	this.classList.toggle('active');
	nav.classList.toggle('active');	
});

// banner
let activeElement = 0;
let timeChange = 4000;

const bannerImgHtml = document.querySelector('.banner-image img');
const bannerTxtHtml = document.querySelector('.banner-text h1');

const images = ['../images/banner/2.jpg', '../images/banner/3.jpg', '../images/banner/4.jpg', '../images/banner/5.jpg', '../images/banner/6.jpg', '../images/banner/7.jpg'];
const txt = [' słodkie bukiety', 'dekoracja aut', 'dekoracja sal weselnych', 'wieńce pogrzebowe', 'stroiki świąteczne', 'ciekawe kompozycje'];

function changeElement() {
	activeElement++;
	if (activeElement == images.length) {
		activeElement = 0;
	}
	bannerImgHtml.src = images[activeElement];	
	bannerTxtHtml.textContent = txt[activeElement];	
}
setInterval(changeElement, timeChange)

