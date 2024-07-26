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
const dots = document.querySelector(".dots"); 
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner > p");
let index = 0;

// affichage des dots 
function createDots() {
	for (let i = 0; i < slides.length; i++) {  //tant que index et inf à la longueur du tableau on ajoute i++
		const dot = document.createElement("div");  //création d'un dot pour chaque élément du tableau
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {  // pour qu'un dot soit marqué
			dot.classList.add("dot_selected");
		}  
	}
}
createDots();


// changement d'image et de texte au click droit
function clickRight() {
	arrowRight.addEventListener ("click", () => {
		index++;
		console.log(index);
		bannerImg.src =  slides[index].image ('./assets/images/slideshow');
		bannerText.innerHTML = slides[index].tagLine;
	});
}
clickRight ();


// changement d'image et de text au click gauche
function clickLeft() {
	arrowLeft.addEventListener ("click", () => {
		index--;
		bannerImg.src = './assets/images/slideshow/$ {slides[index -1].image}';
		bannerText.innerHTML = slides[index - 1].tagLine;
	});	
}
clickLeft ();
	


