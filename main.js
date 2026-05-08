// WORKSHOP DATA - EASILY UPDATEABLE
// Simply add your workshop images and names here

const workshops = [
  {
    name: "Assam Science Society",

    // Thumbnail image
    image:
      "/Assam Science Society Folder/5c0e8944-7211-4d2c-b074-602b53b420d8.jpg",

    // Multiple popup images
    fullImages: [
      "/Assam Science Society Folder/e6ec5874-3df5-4f21-90be-43f2abc77afd.jpg",

      "/Assam Science Society Folder/5c0e8944-7211-4d2c-b074-602b53b420d8.jpg"
    ]
  },

  {
    name: "Awareness of Millet on Health at SSB Camp",

    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",

    fullImage:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    name: "Medical Awareness Session",

    image:
      "https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=400",

    fullImage:
      "https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    name: "National Nutrition Month at Anganwadis",

    image:
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",

    fullImage:
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    name: "National Nutrition Week Celebration",

    image:
      "https://images.pexels.com/photos/3807570/pexels-photo-3807570.jpeg?auto=compress&cs=tinysrgb&w=400",

    fullImage:
      "https://images.pexels.com/photos/3807570/pexels-photo-3807570.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    name: "Nutrition Demonstration Workshops by Smile Foundation",

    image:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400",

    fullImage:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    name: "Spell Champs (Spelling Contest and Diet Session for Kids)",

    image:
      "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400",

    fullImage:
      "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    name: "SSB Kajalgaon",

    image:
      "https://images.pexels.com/photos/3807572/pexels-photo-3807572.jpeg?auto=compress&cs=tinysrgb&w=400",

    fullImage:
      "https://images.pexels.com/photos/3807572/pexels-photo-3807572.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    name: "Swagat Hospital & Research Centre",

    image:
      "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=400",

    fullImage:
      "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    name:
      "Women's Health Programmes at Different Educational & Work Places",

    image:
      "https://images.pexels.com/photos/3807521/pexels-photo-3807521.jpeg?auto=compress&cs=tinysrgb&w=400",

    fullImage:
      "https://images.pexels.com/photos/3807521/pexels-photo-3807521.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];


// Populate gallery with workshop data

function populateGallery() {

  const galleryGrid =
    document.querySelector('.gallery-grid');

  galleryGrid.innerHTML = '';

  workshops.forEach(workshop => {

    const galleryItem =
      document.createElement('div');

    galleryItem.className = 'gallery-item';

    // Support both fullImage and fullImages
    galleryItem.dataset.src =
      workshop.fullImages
        ? workshop.fullImages[0]
        : workshop.fullImage;

    galleryItem.dataset.name =
      workshop.name;

    galleryItem.innerHTML = `
      <img src="${workshop.image}" alt="${workshop.name}">

      <div class="overlay">
        <i class="fas fa-expand"></i>
      </div>

      <div class="gallery-name">
        ${workshop.name}
      </div>
    `;

    galleryGrid.appendChild(galleryItem);

  });

  // Re-attach lightbox event listeners
  const newGalleryItems =
    document.querySelectorAll('.gallery-item');

  newGalleryItems.forEach(item => {

    item.addEventListener('click', () => {

      const src = item.dataset.src;
      const name = item.dataset.name;

      lightboxContent.src = src;
      lightboxContent.alt = name;

      lightbox.classList.add('active');

    });

  });

}


// Mobile menu

const hamburger =
  document.getElementById('hamburger');

const navMenu =
  document.getElementById('navMenu');

const navLinks =
  document.querySelectorAll('.nav-link');


hamburger.addEventListener('click', () => {

  navMenu.classList.toggle('active');

  hamburger.classList.toggle('active');

});


navLinks.forEach(link => {

  link.addEventListener('click', () => {

    navMenu.classList.remove('active');

    hamburger.classList.remove('active');

    navLinks.forEach(l =>
      l.classList.remove('active')
    );

    link.classList.add('active');

  });

});


// Sticky navbar

window.addEventListener('scroll', () => {

  const navbar =
    document.getElementById('navbar');

  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      '0 4px 16px rgba(0,0,0,0.12)';

  } else {

    navbar.style.boxShadow =
      '0 2px 12px rgba(0,0,0,0.08)';
  }

});


// Gallery lightbox

const lightbox =
  document.getElementById('lightbox');

const lightboxContent =
  lightbox.querySelector('.lightbox-content');

const closeBtn =
  lightbox.querySelector('.close');


// Populate gallery on page load

populateGallery();


// Close lightbox

closeBtn.addEventListener('click', () => {

  lightbox.classList.remove('active');

});


// Close when clicking outside image

lightbox.addEventListener('click', (e) => {

  if (e.target === lightbox) {

    lightbox.classList.remove('active');

  }

});


// Scroll to top

const scrollTop =
  document.getElementById('scrollTop');


window.addEventListener('scroll', () => {

  if (window.scrollY > 300) {

    scrollTop.classList.add('show');

  } else {

    scrollTop.classList.remove('show');

  }

});


scrollTop.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});


// Contact form

const contactForm =
  document.getElementById('contactForm');

const formNote =
  document.getElementById('formNote');


contactForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const name =
    document.getElementById('name').value;

  const email =
    document.getElementById('email').value;

  const message =
    document.getElementById('message').value;


  if (!name || !email || !message) {

    formNote.textContent =
      'Please fill all required fields';

    formNote.style.color =
      '#e74c3c';

    return;
  }


  formNote.textContent =
    'Sending...';

  formNote.style.color =
    '#f39c12';


  setTimeout(() => {

    contactForm.reset();

    formNote.textContent =
      'Message sent successfully! We'll respond within 24 hours.';

    formNote.style.color =
      '#27ae60';


    setTimeout(() => {

      formNote.textContent = '';

    }, 3000);

  }, 1000);

});


// Keyboard navigation for lightbox

document.addEventListener('keydown', (e) => {

  if (
    lightbox.classList.contains('active')
    && e.key === 'Escape'
  ) {

    lightbox.classList.remove('active');

  }

});
