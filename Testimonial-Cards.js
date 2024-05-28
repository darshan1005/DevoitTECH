const testimonialsData = [
  {
    title: "...",
    content: "Devoit's expertise transformed our systems seamlessly. Their dedication and innovation boosted our competitiveness.",
    imgSrc: "./assets/Sea-plant.png",
    clientName: "Deena Levies, Mission Bay",
  },
  {
    title: "...",
    content: "Impressed by Devoit's automation tools, our productivity soared. Their support is swift and comprehensive, making our processes agile.",
    imgSrc: "./assets/Sea-plant.png",
    clientName: "Tom Smithenson, Parkmerced",
  },
  {
    title: "...",
    content: "Devoit's holistic data engineering empowered us effectively. Their tailored solutions enhanced our software capabilities, driving growth.",
    imgSrc: "./assets/Sea-plant.png",
    clientName: "Tilly Green, Hayes Valley",
  },
  {
    title: "...",
    content: "Devoit's holistic data engineering empowered us effectively. Their tailored solutions enhanced our software capabilities, driving growth.",
    imgSrc: "./assets/Sea-plant.png",
    clientName: "Tilly Green, Hayes Valley",
  },
];

function createTestimonialCard(testimonial) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("cards-testimonials");

  cardElement.innerHTML = `
    <div class="card-head">
      <h1>${testimonial.title}</h1>
    </div>
    <p class="card-testimonial-content">${testimonial.content}</p>
    <div class="card-footer">
      <img class="sea-plants" src="${testimonial.imgSrc}" alt="Sea Plant">
      <p class="client-name">${testimonial.clientName}</p>
    </div>
  `;

  return cardElement;
}

const testimonialsContainer = document.getElementById("clientTestimonials");
testimonialsData.forEach((testimonial) => {
  const cardElement = createTestimonialCard(testimonial);
  testimonialsContainer.appendChild(cardElement);
});

const testimonialTrack = document.querySelector('.testimonials-carousel-track');
const testimonialSlides = Array.from(testimonialTrack.children);

let testimonialIndex = 0;

function updateTestimonialPosition() {
  const slideWidth = testimonialSlides[0].getBoundingClientRect().width + 20; // Adding margin-right
  testimonialTrack.style.transform = 'translateX(' + (-slideWidth * testimonialIndex) + 'px)';
}

function moveTestimonialLeft() {
  if (testimonialIndex > 0) {
    testimonialIndex--;
    updateTestimonialPosition();
  }
}

function moveTestimonialRight() {
  const slideWidth = testimonialSlides[0].getBoundingClientRect().width + 20;
  const trackWidth = testimonialTrack.getBoundingClientRect().width;
  const visibleSlides = Math.floor(trackWidth / slideWidth);
  if (testimonialIndex < testimonialSlides.length - visibleSlides) {
    testimonialIndex++;
    updateTestimonialPosition();
  }
}

window.addEventListener('resize', updateTestimonialPosition);
