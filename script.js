// WORKSHOP DATA - EASILY UPDATEABLE
// Map directly to actual converted files in the public subfolders

const workshops = [
  {
    name: "National Nutrition Month at Anganwadis",
    image: "./Anganwadis/thumbnail.png",
    fullImages: [
      "./Anganwadis/thumbnail.png"
    ]
  },
  {
    name: "Assam Science Society",
    image: "./Assam Science Society Folder/thumbnail.jpg",
    fullImages: [
      "./Assam Science Society Folder/thumbnail.jpg",
      "./Assam Science Society Folder/e6ec5874-3df5-4f21-90be-43f2abc77afd.jpg"
    ]
  },
  {
    name: "Medical Awareness Session",
    image: "./Medical Awareness Session/thumbnail.jpg",
    fullImages: [
      "./Medical Awareness Session/thumbnail.jpg"
    ]
  },
  {
    name: "Awareness of Millet on Health at SSB Camp",
    image: "./Millet SSB Camp/thumbnail.jpg",
    fullImages: [
      "./Millet SSB Camp/thumbnail.jpg",
      "./Millet SSB Camp/13134144-b0e5-454b-a69c-5fcf3fe27ff3.jpg",
      "./Millet SSB Camp/146c8af3-0174-4766-88da-3c89af4c5da5.jpg",
      "./Millet SSB Camp/240f8fe0-6f97-4152-acb1-c71db1dd3388.jpg"
    ]
  },
  {
    name: "National Nutrition Week Celebration",
    image: "./National Nutrition Week Celebration/thumbnail.jpg",
    fullImages: [
      "./National Nutrition Week Celebration/thumbnail.jpg",
      "./National Nutrition Week Celebration/7094c517-ff8a-4112-a6d8-f034d852ff3d.jpg",
      "./National Nutrition Week Celebration/IMG_3876.jpg"
    ]
  },
  {
    name: "Nutrition Demonstration Workshops by Smile Foundation",
    image: "./Smile Foundation/thumbnail.jpg",
    fullImages: [
      "./Smile Foundation/thumbnail.jpg",
      "./Smile Foundation/2f37208c-83c6-4261-9deb-36e44d8e56a5.jpg",
      "./Smile Foundation/IMG_7864.jpg"
    ]
  },
  {
    name: "Spell Champs (Spelling Contest and Diet Session for Kids)",
    image: "./Spell Champs/thumbnail.jpg",
    fullImages: [
      "./Spell Champs/thumbnail.jpg",
      "./Spell Champs/IMG_3758.PNG",
      "./Spell Champs/IMG_7658.jpg"
    ]
  },
  {
    name: "SSB Kajalgaon",
    image: "./SSB Kajalgaon/thumbnail.jpg",
    fullImages: [
      "./SSB Kajalgaon/thumbnail.jpg",
      "./SSB Kajalgaon/ca596702-70df-4b81-b5a2-9fe7839ab598.jpg",
      "./SSB Kajalgaon/ff65dd81-cd08-488b-9d3d-fa32f23e48b2.jpg"
    ]
  },
  {
    name: "Swagat Hospital & Research Centre",
    image: "./Swagat Hospital & Research Centre/thumbnail.jpg",
    fullImages: [
      "./Swagat Hospital & Research Centre/thumbnail.jpg"
    ]
  },
  {
    name: "Women's Health Programmes at Different Educational & Work Places",
    image: "./Womens Health Programme/thumbnail.jpg",
    fullImages: [
      "./Womens Health Programme/thumbnail.jpg",
      "./Womens Health Programme/4F64EC78-B22F-4E26-B34C-2626D87B5F68.jpg",
      "./Womens Health Programme/IMG_0749.jpg",
      "./Womens Health Programme/IMG_1155.jpg",
      "./Womens Health Programme/IMG_1591.jpg",
      "./Womens Health Programme/IMG_6187.JPG",
      "./Womens Health Programme/IMG_6203.jpg"
    ]
  }
];

// Active Lightbox State Tracker
let currentWorkshopIndex = 0;
let currentImageIndex = 0;

const lightbox = document.getElementById('lightbox');
const lightboxContent = lightbox ? lightbox.querySelector('.lightbox-content') : null;
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCounter = document.getElementById('lightboxCounter');
const closeBtn = lightbox ? lightbox.querySelector('.close') : null;
const prevBtn = document.getElementById('lightboxPrev');
const nextBtn = document.getElementById('lightboxNext');

// Update image and captions in the lightbox
function updateLightboxImage() {
  const workshop = workshops[currentWorkshopIndex];
  if (!workshop) return;
  const images = workshop.fullImages || [workshop.image];
  const src = images[currentImageIndex];

  // Apply a smooth transition
  if (lightboxContent) {
    lightboxContent.style.opacity = '0';
    
    setTimeout(() => {
      lightboxContent.src = src;
      lightboxContent.alt = `${workshop.name} - Image ${currentImageIndex + 1}`;
      if (lightboxCaption) lightboxCaption.textContent = workshop.name;
      if (lightboxCounter) lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;

      // Adjust visibility based on whether the folder has multiple images
      if (lightbox) {
        if (images.length <= 1) {
          lightbox.classList.add('single-image');
        } else {
          lightbox.classList.remove('single-image');
        }
      }
      
      lightboxContent.style.opacity = '1';
    }, 150);
  }
}

function showNextImage() {
  const workshop = workshops[currentWorkshopIndex];
  if (!workshop) return;
  const images = workshop.fullImages || [workshop.image];
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateLightboxImage();
}

function showPrevImage() {
  const workshop = workshops[currentWorkshopIndex];
  if (!workshop) return;
  const images = workshop.fullImages || [workshop.image];
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateLightboxImage();
}

// Populate gallery with workshop data
function populateGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;
  galleryGrid.innerHTML = '';

  workshops.forEach((workshop, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.dataset.index = index;

    galleryItem.innerHTML = `
      <img src="${workshop.image}" alt="${workshop.name}" loading="lazy">
      <div class="overlay">
        <i class="fas fa-expand"></i>
      </div>
      <div class="folder-caption">
        ${workshop.name}
      </div>
    `;

    galleryGrid.appendChild(galleryItem);
  });

  // Re-attach lightbox event listeners to the dynamic cards
  const newGalleryItems = document.querySelectorAll('.gallery-item');
  newGalleryItems.forEach(item => {
    item.addEventListener('click', () => {
      currentWorkshopIndex = parseInt(item.dataset.index, 10);
      currentImageIndex = 0;
      updateLightboxImage();
      if (lightbox) lightbox.classList.add('active');
    });
  });
}

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Sticky navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
  } else {
    navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
  }
});

// Populate gallery on page load
populateGallery();

// Close lightbox
if (closeBtn) closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Close when clicking outside image
if (lightbox) lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target.classList.contains('lightbox-wrapper')) {
    lightbox.classList.remove('active');
  }
});

// Navigation button clicks
if (prevBtn) prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showPrevImage();
});

if (nextBtn) nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showNextImage();
});


// Scroll to top

const scrollTop =
  document.getElementById('scrollTop');


window.addEventListener('scroll', () => {
  if (scrollTop) {
    if (window.scrollY > 300) {
      scrollTop.classList.add('show');
    } else {
      scrollTop.classList.remove('show');
    }
  }
});


if (scrollTop) scrollTop.addEventListener('click', () => {

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


if (contactForm) contactForm.addEventListener('submit', (e) => {

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
      'Message sent successfully! We\'ll respond within 24 hours.';

    formNote.style.color =
      '#27ae60';


    setTimeout(() => {

      formNote.textContent = '';

    }, 3000);

  }, 1000);

});


// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
  if (!lightbox || !lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  } else if (e.key === 'ArrowRight') {
    showNextImage();
  } else if (e.key === 'ArrowLeft') {
    showPrevImage();
  }
});


// Testimonials Slider Logic

  // Attach read more logic
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const content = e.target.closest('.review-content');
      const truncated = content.querySelector('.truncated-text');
      const full = content.querySelector('.full-text');
      if (full.style.display === 'none') {
        full.style.display = 'inline';
        truncated.style.display = 'none';
        e.target.textContent = 'Show less';
      } else {
        full.style.display = 'none';
        truncated.style.display = 'inline';
        e.target.textContent = 'Read more';
      }
    });
  });

const track = document.getElementById('testimonialsTrack');
const prevBtnSlider = document.getElementById('testimonialsPrev');
const nextBtnSlider = document.getElementById('testimonialsNext');
const dotsContainer = document.getElementById('testimonialsDots');

if (track && prevBtnSlider && nextBtnSlider && dotsContainer) {
  const testimonials = Array.from(track.children);
  
  if (testimonials.length > 0) {
    let currentIndex = 0;
    let autoplayInterval;
    
    // Calculate visible cards based on screen size
    function getVisibleCardsCount() {
      if (window.innerWidth <= 600) return 1;
      if (window.innerWidth <= 992) return 2;
      return 3;
    }

    // Calculate total pages dynamically
    function getPageCount() {
      return Math.ceil(testimonials.length / getVisibleCardsCount());
    }

    // Setup/Render indicator dots matching total pages
    function setupDots() {
      dotsContainer.innerHTML = '';
      const pageCount = getPageCount();
      
      for (let i = 0; i < pageCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateSlider();
          resetAutoplay();
        });
        dotsContainer.appendChild(dot);
      }
    }

    // Update slider position & state (page-by-page translation)
    function updateSlider() {
      const visibleCount = getVisibleCardsCount();
      const pageCount = getPageCount();
      
      // Keep page index within bounds
      if (currentIndex >= pageCount) {
        currentIndex = Math.max(0, pageCount - 1);
      }
      
      // Calculate aligned card index (cap to prevent overflow empty space at the end)
      const cardIndex = Math.min(currentIndex * visibleCount, testimonials.length - visibleCount);
      
      const card = testimonials[0];
      const cardWidth = card.getBoundingClientRect().width;
      const gap = 24; // gap between cards
      const offset = cardIndex * (cardWidth + gap);
      
      track.style.transform = `translateX(-${offset}px)`;
      
      // Update dots active class
      const dots = Array.from(dotsContainer.children);
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      // Disable buttons at bounds
      prevBtnSlider.style.opacity = currentIndex === 0 ? '0.5' : '1';
      prevBtnSlider.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
      
      nextBtnSlider.style.opacity = currentIndex === pageCount - 1 ? '0.5' : '1';
      nextBtnSlider.style.pointerEvents = currentIndex === pageCount - 1 ? 'none' : 'auto';
    }

    // Event Listeners for Arrows (page transition)
    prevBtnSlider.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
        resetAutoplay();
      }
    });

    nextBtnSlider.addEventListener('click', () => {
      const pageCount = getPageCount();
      if (currentIndex < pageCount - 1) {
        currentIndex++;
        updateSlider();
        resetAutoplay();
      }
    });

    // Autoplay functionality page-by-page
    function startAutoplay() {
      autoplayInterval = setInterval(() => {
        const pageCount = getPageCount();
        if (currentIndex < pageCount - 1) {
          currentIndex++;
        } else {
          currentIndex = 0; // loop back to first page
        }
        updateSlider();
      }, 4500);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    // Hover states to pause autoplay
    const sliderContainer = document.querySelector('.testimonials-slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoplay);
      sliderContainer.addEventListener('mouseleave', startAutoplay);
    }
    if (dotsContainer) {
      dotsContainer.addEventListener('mouseenter', stopAutoplay);
      dotsContainer.addEventListener('mouseleave', startAutoplay);
    }

    // Resize handler with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setupDots();
        updateSlider();
      }, 150);
    });

    // Init
    setupDots();
    updateSlider();
    startAutoplay();
  }
}

// Mobile Hamburger Menu Logic
const mobileHamburger = document.getElementById('hamburger');
const mobileNavMenu = document.getElementById('navMenu');
const mobileNavLinks = document.querySelectorAll('.nav-link');

if (mobileHamburger && mobileNavMenu) {
  // Toggle menu open/close on click
  mobileHamburger.addEventListener('click', () => {
    mobileHamburger.classList.toggle('active');
    mobileNavMenu.classList.toggle('active');
  });

  // Close menu when any nav link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileHamburger.classList.remove('active');
      mobileNavMenu.classList.remove('active');
    });
  });
}

// Initialize gallery
populateGallery();
