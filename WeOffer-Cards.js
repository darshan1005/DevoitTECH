const cardData = [
  {
      imgSrc: './assets/Work-Flow.webp',
      imgAlt: 'Engineering Services & Support',
      title: 'Engineering Services & Support',
  },
  {
      imgSrc: './assets/All-in-one.webp',
      imgAlt: 'Data Engineering & Business Intelligence',
      title: 'Data Engineering & Business Intelligence',
  },
  {
      imgSrc: './assets/Comprehensive.webp',
      imgAlt: 'Comprehensive',
      title: 'Comprehensive Customer Support',
  },
  {
      imgSrc: './assets/Smart Automation.webp',
      imgAlt: 'Automation',
      title: 'E2E Automation',
  },
];

function createCard(card) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('cards-content');

  cardElement.innerHTML = `
    <img src="${card.imgSrc}" alt="${card.imgAlt}">
    <div class="title-contents">
      <h5 class="card-title">${card.title}</h5>
    </div>
  `;
  return cardElement;
}

const cardContainer = document.getElementById('weOfferCards');
cardData.forEach(card => {
  const cardElement = createCard(card);
  cardContainer.appendChild(cardElement);
});

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

let currentIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width + 20; // Adding margin-right
  track.style.transform = 'translateX(' + (-slideWidth * currentIndex) + 'px)';
}

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
}

function moveRight() {
  const slideWidth = slides[0].getBoundingClientRect().width + 20;
  const trackWidth = track.getBoundingClientRect().width;
  const visibleSlides = Math.floor(trackWidth / slideWidth);
  if (currentIndex < slides.length - visibleSlides) {
    currentIndex++;
    updateSlidePosition();
  }
}

window.addEventListener('resize', updateSlidePosition);
