const cardData = [
  {
      imgSrc: './assets/Work-Flow.webp',
      imgAlt: 'WorkFlows',
      title: 'WorkFlow That Work',
      content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
  },
  {
      imgSrc: './assets/All-in-one.webp',
      imgAlt: 'All-In-One Solution',
      title: 'All-In-One Solution',
      content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
  },
  {
      imgSrc: './assets/Comprehensive.webp',
      imgAlt: 'Comprehensive',
      title: 'Comprehensive Customer Support',
      content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
  },
  {
      imgSrc: './assets/Smart Automation.webp',
      imgAlt: 'Automation',
      title: 'Smart Automation Tools',
      content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
  },
];

function createCard(card){
  const cardElement = document.createElement('div');
  cardElement.classList.add('cards-content');

  cardElement.innerHTML = `
    <img src="${card.imgSrc}" alt="${card.imgAlt}">
    <div class="title-contents">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-subcontent">${card.content}</p>
    </div>
  `;
  return cardElement;
}

const cardContainer = document.getElementById('weOfferCards');
cardData.forEach(card => {
  const cardElement = createCard(card);
  cardContainer.appendChild(cardElement);
});