const testimonialsData = [
  {
    title: "...",
    content:
      "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”",
    imgSrc: "./assets/Sea-plant.png",
    clientName: "Deena Levies, Mission Bay",
  },
  {
    title: "...",
    content:
      "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”",
    imgSrc: "./assets/Sea-plant.png",
    clientName: "Tom Smithenson, Parkmerced",
  },
  {
    title: "...",
    content:
      "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”",
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
