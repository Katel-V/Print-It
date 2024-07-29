const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
console.log(slides);

// les variables 
const dotContainer = document.querySelector(".dots"); 
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector(".banner-img");
let currentIndex = 0;
const dots = document.querySelectorAll(".dot");


// mettre à jour les dots
function updateDots (index) {
	dots.forEach ((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected'); //ajout de la class au point actuel
		} else {
			dot.classList.remove('dot_selected'); //supprime la class aux autres points
		}
	});
}

// mettre à jour les dots, l'image et le texte
function updateCarrousel (index, direction) {
	if (currentIndex === -1 && direction === 'left') {
		currentIndex = slides.length -1;
	} else if (currentIndex === slides.length && direction ==='right') {
		currentIndex = 0;
	}

	// mettre à jour l'image
	const imagePath = 'assets/images/slideshow/${slides[currentIndex].image}';
	bannerImg.scr = imagePath;
	bannerImg.alt = 'Slide ${currentIndex + 1}';

	// mettre à jours le texte
	const tagLine = slides[currentIndex].tagLine;
	document.querySelector('p').innerHTML = tagLine;

	console.log('clic surla flèche ${direction}');
}

// action sur le clic de la flèche de droite
arrowRight.addEventListener ('click', function () {
	currentIndex = (currentIndex + 1);
	updateCarrousel (currentIndex, 'right');
	updateDots (currentIndex); 
});

// action sur le clic de la flèche de gauche
arrowLeft.addEventListener ('click', function () {
	currentIndex = (currentIndex - 1);
	updateCarrousel (currentIndex, 'left');
	updateDots (currentIndex); 
});
