  const companiesData = [
    { imgSrc: './assets/Meta-Definer.webp', imgAlt: 'Meta Definer' },
    { imgSrc: './assets/Delta Tech.webp', imgAlt: 'Delta Tech' },
    { imgSrc: './assets/Techmed.webp', imgAlt: 'Techmed' },
    { imgSrc: './assets/power core.webp', imgAlt: 'Power Core' },
    // { imgSrc: './assets/strongest link.webp', imgAlt: 'Strongest Link' },
    // { imgSrc: './assets/cog industry.webp', imgAlt: 'Cog Industry' },
    // { imgSrc: './assets/A T Motion.webp', imgAlt: 'A T Motion' },
    // { imgSrc: './assets/Bond.webp', imgAlt: 'Bond' }
];

function createCompanyLogo(company) {
    const imgElement = document.createElement('img');
    imgElement.classList.add('hidden', 'fade-right');
    imgElement.src = company.imgSrc;
    imgElement.alt = company.imgAlt;
    return imgElement;
}

const companiesContainer = document.getElementById('companiesImages');
companiesData.forEach(company => {
    const imgElement = createCompanyLogo(company);
    companiesContainer.appendChild(imgElement);
});

function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-right');
    const windowHeight = window.innerHeight;

     fadeElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            element.classList.add('fade-in');
        }
    });
}

 // Event listener for scroll to trigger fade-in effect
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);