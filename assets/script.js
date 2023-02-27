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
]

const carousel = document.querySelector('#banner');
const prevButton = carousel.querySelector('.arrow_left');
const nextButton = carousel.querySelector('.arrow_right');
const image = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');

let currentSlide = 0;
let activeDot = 0;

// Récupération du conteneur de points
const dotContainer = document.querySelector('.dots');

// Ajout d'un point pour chaque diapositive
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dotContainer.appendChild(dot);
}

// Récupération des points
const dots = dotContainer.querySelectorAll('.dot');

// Ajout de la classe "dot_selected" sur le premier point
dots[activeDot].classList.add('dot_selected');

// Événement pour le clic sur le bouton gauche
prevButton.addEventListener('click', () => {
  console.log('Clic sur le bouton précédent');
  
  // On retire la classe "dot_selected" sur le point actif
  dots[activeDot].classList.remove('dot_selected');

  // On décrémente l'indice du slide actif
  currentSlide--;
  if (currentSlide < 0) {
    // Si on arrive au début des slides, on va à la fin
    currentSlide = slides.length - 1;
  }

  // On décrémente l'indice du point actif
  activeDot--;
  if (activeDot < 0) {
    // Si on arrive au début des points, on va à la fin
    activeDot = dots.length - 1;
  }

  // On met à jour l'image et le texte correspondant
  image.src = 'assets/images/slideshow/' + slides[currentSlide].image;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  // On ajoute la classe "dot_selected" sur le nouveau point actif
  dots[activeDot].classList.add('dot_selected');
});

// Événement pour le clic sur le bouton droit
nextButton.addEventListener('click', () => {
  console.log('Clic sur le bouton suivant');

  // On retire la classe "dot_selected" sur le point actif
  dots[activeDot].classList.remove('dot_selected');

  // On incrémente l'indice du slide actif
  currentSlide++;
  if (currentSlide === slides.length) {
    // Si on arrive à la fin des slides, on revient au début
    currentSlide = 0;
  }

  // On incrémente l'indice du point actif
  activeDot++;
  if (activeDot === dots.length) {
    // Si on arrive à la fin des points, on revient au début
    activeDot = 0;
  }

  // On met à jour l'image et le texte correspondant
  image.src = 'assets/images/slideshow/' + slides[currentSlide].image;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  // On ajoute la classe "dot_selected" sur le nouveau point actif
  dots[activeDot].classList.add('dot_selected');
});



/*
// JavaScript pour ajouter des événements sur les flèches du carousel
const carousel = document.querySelector('#banner');
const prevButton = carousel.querySelector('.arrow_left');
const nextButton = carousel.querySelector('.arrow_right');
const image = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');


let currentSlide = 0;
let activeDots = 0;


// Récupération du conteneur de points
const dotContainer = document.querySelector('.dots');

// Ajout d'un point pour chaque diapositive
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('dots');
  dot.classList.add('dot');
  dotContainer.appendChild(dot);
}


// Événement pour le clic sur le bouton gauche
prevButton.addEventListener('click', () => {
  console.log('Clic sur le bouton précédent');// On décrémente l'indice du bullet actif
  dotContainer[activeDots].classList.remove('dot_selected');
  activeDots++;
  if (activeDots === dots.length) {
    // Si on arrive à la fin des dots, on revient au début
    activeDots = 0;
  }
  // On incrémente l'indice du slide actif
  currentSlide++;
  if (currentSlide === slides.length) {
    // Si on arrive à la fin des slides, on revient au début
    currentSlide = 0;
  }
  // On met à jour l'image et le texte correspondant
  image.src = 'assets/images/slideshow/' + slides[currentSlide].image;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  dotContainer[activeDots].classList.add('dot_selected');

});

// Événement pour le clic sur le bouton droit
nextButton.addEventListener('click', () => {
	console.log('Clic sur le bouton suivant');
	// On décrémente l'indice du bullet actif
	dotContainer[activeDots].classList.remove('dot_selected');
	activeDots++;
	if (activeDots === dots.length) {
	  // Si on arrive à la fin des dots, on revient au début
	  activeDots = 0;
	}
	// On décrémente l'indice du slide actif
	currentSlide--;
	if (currentSlide < 0) {
	  // Si on arrive au début des slides, on va à la fin
	  currentSlide = slides.length - 1;
	}
	// On met à jour l'image et le texte correspondant
	image.src = 'assets/images/slideshow/' + slides[currentSlide].image;
	tagLine.innerHTML = slides[currentSlide].tagLine;

	dotContainer[activeDots].classList.add('dot_selected');

  });*/







