// GOOGLE REVIEWS DATA
const googleReviews = [
  {
    "author": "Nikita Das",
    "rating": "5 stars",
    "text": "I am so greatful and thankful to ritumoni ba for her help and guidance with managing my irregular periods.Her dietary advice really made a difference. I got my regular periods. At first i started taking homeopathetic medicines for regular periods but it was just a temporary solution. Like if i don't take medicines i don't get my periods. I was so stressed about it .Then i contacted her and her response was so good. Since then i stopped taking medincines and started following her diet chart and after following almost 2 weeks of her diet plan i got my regular periods. Apart from that i also see differences in my body and i feel better now."
  },
  {
    "author": "Jayanta Roy",
    "rating": "5 stars",
    "text": "Ritumoni Ma’am’s 2-month diet program has made a huge difference in my life! 😍 I lost nearly 8 kg, and my bloating issues are completely gone. She helped me understand the fundamentals of nutrition, introduced me to powerful superfoods, and showed me how small, consistent changes can create a big impact. Her guidance has been incredibly supportive and effective. I highly recommend her program to anyone looking for sustainable weight loss and a healthier, happier lifestyle! 💡✨"
  },
  {
    "author": "Debakshi Dutta",
    "rating": "5 stars",
    "text": "I am thankful to Ritumoni for guiding me throughout the past 2 months. I am going through an extremely challenging situation right now but with her easy diet plans ,stress management programs I am able to cope well with my current situation.Her unique approach to holistic health care has helped me a lot. She has really transformed me not only with diet plans but also my way of looking life has changed a lot.I look up to her for any guidance necessary for my physical and mental well being.You are a precious soul and I wish you all the best for everything.Lots of love to you."
  },
  {
    "author": "panchali borthakur",
    "rating": "5 stars",
    "text": "My 90 days IBS diet journey with Dietecian Ritumani great, as mother of two it wasn't easy fir me to follow the patern & it was her who constantly pushed & motivated me to successfully achieve me pursuing my lost self care goals , my ibs symptoms not only subsided but also had achieved weight loss , gained energy & i received many compliments for my changed appearance. Thankyou Ritumoni & i am looking forward for more challanges with you 🙏🙏"
  },
  {
    "author": "sarmistha acharjee",
    "rating": "5 stars",
    "text": "Ritumoni has been an incredible source of support over the past month, providing me with the tools I need to tackle a difficult situation. Her easy-to-follow diet plans and stress management programs have made a significant difference in my ability to cope. I have great admiration for her knowledge and expertise, and I'm greatful to have her guidance as I prioritize my physical and mental health. I wish her all the best in her future endeavors."
  },
  {
    "author": "Anandsmita Dey",
    "rating": "5 stars",
    "text": "I had joined the 6 weeks 'Flourish Feminine💕' program. I'm so glad and grateful that I came across her. In a very short period of time with her guidance and support I got back to live a healthier life. With the help of her tips and motivation alot of changes I could see in myself. Be it physical health or mental health. Mostly the direction of meditation helped me alot other than the diet. Her diet are so familiar and easy to keep up with. Just patience and self management is what we need to have. Thank you so much Ritumoni Dii..for helping and listening throughout..other than this her behaviour is so overwhelming..her patience taught me to be patient with myself..Thank you is not enough to sum up how you helped..looking forward to interact with you more..and work on myself..😇"
  },
  {
    "author": "SUPRIYA SARKAR",
    "rating": "5 stars",
    "text": "Inspite of following a healthy routine I still suffered from health issues for long...to solve this puzzle, when i knocked your clinic ..l did not thought that it will change my life..you made me understand that, how food and its proper timing is an important factor of life. when I went through your valuable suggestions under your guidance, it gave me a new direction. Not only eating habit, it also improved my mental and physical health. After a session of 1 month I feel focused ,more confident and full of happiness within, I was eagerly waiting to spend such a life. I have words to be grateful, your behaviour and patience fasinated me a lot...I enjoyed your company very much. Thank you again for such a great experience🙏🙏😍"
  },
  {
    "author": "Jiya Sutradhar",
    "rating": "5 stars",
    "text": "I joined two months wellness group program with dietician Ritumoni Saha ma'am.Firstly I would like to thankyou ma'am for ur love n support n through this wellness program you always motivated us for achieve our health goal.Before joined this program I tried several times to lose weight n fat but not worked.But through this wellness program I lost almost 4 kg weight n also my extra belly fat and also able to change my habits, with better eating, sleeping 😴 and I also recovered from my gas problem.Now I feel so active n my energy level has increased 😍.Your diet tips are really helpful and so easy to follow 😍😍❤️❤️. overall my experience was great during this wellness program 👍👍❤️❤️eat local n seasonal n stay healthy n active👍👍❤️. Go ahead our sweet ma'am ❤️❤️👍👍🙏🙏."
  },
  {
    "author": "Ujwala Bhattacharjee",
    "rating": "5 stars",
    "text": "I thought I ate healthy and everything that I used to do was on point. That was until I met ma'am who completely changed the way I thought about food. Ma'am has given me a lot of great recipe ideas and had made some great suggestions on how to overcome various instances in life. I am truly grateful to ma'am for her guidance and support. The secret of eating on time has really helped. Thank you once again for your guidance."
  },
  {
    "author": "Sorojini Basumatary",
    "rating": "5 stars",
    "text": "Thank you so much Ritumoni madam for your guidance.I feel more energetic and focused now.Thank you for the diet plans with simple and local foods.I have been suffering from hypothyroidism problem and now I have lost 3kgs weight in 2weeks and have improved overall health under your guidance.Thank you again ma'am.🙏❤️"
  },
  {
    "author": "Bipasha Dey",
    "rating": "5 stars",
    "text": "I recently participated in the Flourish Feminine Programme with Ritumoni Ma'am and she listens carefully and offers great guidance. Her diet plans helped me reduce junk food cravings and develop healthier eating habits.. Thank You Ritumoni Ma'am 😊"
  },
  {
    "author": "Durga",
    "rating": "5 stars",
    "text": "I have taken 3 month counselling with Ritumoni and it was great help, before January2025 I was going through so many health issues, bloating, breathing issues, frequent headaches, anxiety, depression and so on… I even went to psychiatrist and they asked me to go on medications. I am glad and feel lucky to connect with Ritumoni, she understand my issues and helped me resolve them one by one, she helped me understand what I was doing wrong and how with proper diet I can fix as many problems related to my health. Thanks Ritumoni for guiding me to right path🙏🏻"
  },
  {
    "author": "Garima Baid",
    "rating": "5 stars",
    "text": "I just wanted to express my deepest gratitude for the impact you’ve had on my life. Working with you didn’t just change the way I eat — it completely changed the way I live. Before meeting you, I saw healthy eating as a chore or a temporary fix. But you helped me understand the importance of nourishing my body with intention and balance. You made nutrition approachable, sustainable, and most importantly, life-changing. I feel more energized, confident, and connected to my body than ever before. You’ve given me tools and knowledge that I’ll carry for the rest of my life, and for that, I’m sincerely thankful. You haven’t just helped me improve my diet — you’ve helped me transform my mindset, my habits, and my overall well-being. That’s a priceless gift. Thank you for your guidance, patience, and support. You’ve truly made a difference."
  },
  {
    "author": "Khushi Sethi",
    "rating": "5 stars",
    "text": "Thank you so much for your guidance which helped me overcome my health issues. It was a really good experience and I enjoyed following your diet plans. Nothing seemed difficult throughout, as the diet plans were very mindfully made."
  },
  {
    "author": "GAURI BORA",
    "rating": "5 stars",
    "text": "My association with dietitian Ritumoni Saha had been very very pleasant. I was under her supervision for a period of 3 months. And this has entirely changed my awareness about getting healthy with local and seasonal food. I joined her for weight loss, but in the process my periods have also got synchronised. Her personal guidance and close follow up is incredible. I am indebted to her for making me healthier and wiser. Thank you so much Local Food Wisdom!! You have a long way to go."
  },
  {
    "author": "Rashmi biswas",
    "rating": "5 stars",
    "text": "Thank you so much Ritumoni ma'am for your guidance .I feel more energetic and focused now.Thank you for the diet plans with simple and local foods. My periods got regular and also have lost 8 kgs in 3 months and have improved overall health under your guidance. Thank u again💗"
  },
  {
    "author": "Dr. Suman Jain",
    "rating": "5 stars",
    "text": "I have started my healthy diet journey  for 3 months with her after suggestion by Gynaecologist Dr. Lucky Basumatary , swagat hospital, Bongaigaon. Started in June and ended in September the course duration was completed. During this journey she took care of not only diet but overall well-being. In this short span of time, she was not only dietician to me but also a friend. She took care and emphasize on small things in my diet which actually i know as good for health but was not aware about that small change would have very big impact on my health. Yes she helped me in my journey and I got good results. My hormonal imbalances are under control. I would recommend everyone who are having chronic or long time suffering from a health issue do counsel her. Lots of Love to her. And I would like to mention that she had given me diet chart as per my food preferences and varieties too."
  },
  {
    "author": "rumpa dey",
    "rating": "5 stars",
    "text": "I am very satisfied by Joining 6 week program  with Flourish Feminine group by Ritumoni Saha. I reduce 2kgs of weight within 6 week with the help of this program,Her guidance is well explained and clear.I feel lot of energy now a days ,a very very thanks to Ritumoni Saha for her support.."
  },
  {
    "author": "Ashad Rahman",
    "rating": "5 stars",
    "text": "I went there with the plan to lose fats and weight. At first it was tough to lose any fats but Ritumoni ma'am did not give up on me and with time, I was able to not just lose 6 kgs of weight and body fats but also learned a lot of valuable lessons pertaining to food and the importance of variety in meals and which foods are good for what situations. Overall, it was a very pleasant experience and i recommend anyone looking to lose weight and fats to give it a shot. It might require time but the end result will be worth it."
  },
  {
    "author": "Wasif Hussain",
    "rating": "5 stars",
    "text": "I consulted Ritumoni Saha when my gut health was at its worst. She helped me recover step by step, using simple, local foods. I struggled to digest even basic meals, but her guidance on using everyday ingredients made a big difference. I mean who knew poita bhat had so much benifites. Often, we overlook the health benefits of common household items cumin seeds,coriender seeds,pumpkin seeds but when used correctly, they can work wonders. She not only told me what to eat but also how and when to eat it for the best results. Her practical approach and expertise truly transformed my health, and I’ll definitely be seeking her help again. I encourage you to do the same."
  }
];

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
const lightboxContent = lightbox.querySelector('.lightbox-content');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCounter = document.getElementById('lightboxCounter');
const closeBtn = lightbox.querySelector('.close');
const prevBtn = document.getElementById('lightboxPrev');
const nextBtn = document.getElementById('lightboxNext');

// Update image and captions in the lightbox
function updateLightboxImage() {
  const workshop = workshops[currentWorkshopIndex];
  const images = workshop.fullImages || [workshop.image];
  const src = images[currentImageIndex];

  // Apply a smooth transition
  lightboxContent.style.opacity = '0';
  
  setTimeout(() => {
    lightboxContent.src = src;
    lightboxContent.alt = `${workshop.name} - Image ${currentImageIndex + 1}`;
    lightboxCaption.textContent = workshop.name;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;

    // Adjust visibility based on whether the folder has multiple images
    if (images.length <= 1) {
      lightbox.classList.add('single-image');
    } else {
      lightbox.classList.remove('single-image');
    }
    
    lightboxContent.style.opacity = '1';
  }, 150);
}

function showNextImage() {
  const workshop = workshops[currentWorkshopIndex];
  const images = workshop.fullImages || [workshop.image];
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateLightboxImage();
}

function showPrevImage() {
  const workshop = workshops[currentWorkshopIndex];
  const images = workshop.fullImages || [workshop.image];
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateLightboxImage();
}

// Populate gallery with workshop data
function populateGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
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
      lightbox.classList.add('active');
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
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  } else if (e.key === 'ArrowRight') {
    showNextImage();
  } else if (e.key === 'ArrowLeft') {
    showPrevImage();
  }
});


// Testimonials Slider Logic
const track = document.getElementById('testimonialsTrack');
const prevBtnSlider = document.getElementById('testimonialsPrev');
const nextBtnSlider = document.getElementById('testimonialsNext');
const dotsContainer = document.getElementById('testimonialsDots');

if (track && googleReviews && googleReviews.length > 0) {
  track.innerHTML = '';
  googleReviews.forEach(review => {
    const authorName = (review.author || 'User').trim();
    const initials = authorName.split(/\s+/).map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const colors = ['#4CAF50', '#2E7D32', '#F4A261', '#E9C46A', '#81C784', '#F06292', '#2196F3', '#9C27B0'];
    const bgColor = colors[review.author.length % colors.length];
    
    // Truncate logic
    const maxLength = 180;
    let textHTML = `<p class="review-text">"${review.text}"</p>`;
    let btnHTML = '';
    
    if (review.text.length > maxLength) {
      const truncated = review.text.substring(0, maxLength) + '...';
      textHTML = `
        <p class="review-text">
          <span class="truncated-text">"${truncated}"</span>
          <span class="full-text" style="display: none;">"${review.text}"</span>
        </p>
      `;
      btnHTML = `<button class="read-more-btn">Read more</button>`;
    }
    
    const div = document.createElement('div');
    div.className = 'testimonial';
    div.innerHTML = `
      <div class="review-content">
        <div class="stars" style="color: #ffc107; display: flex; gap: 4px; margin-bottom: 8px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        ${textHTML}
        ${btnHTML}
      </div>
      <div class="client">
        <div class="client-avatar" style="background-color: ${bgColor}; color: white; display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">${initials}</div>
        <div>
          <strong>${review.author}</strong>
          <span>Verified Google Review</span>
        </div>
      </div>
    `;
    track.appendChild(div);
  });

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
}

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

    function getMaxIndex() {
      return Math.max(0, testimonials.length - getVisibleCardsCount());
    }

    // Setup/Render indicator dots
    function setupDots() {
      dotsContainer.innerHTML = '';
      const visibleCount = getVisibleCardsCount();
      const stepsCount = testimonials.length - visibleCount + 1;
      
      for (let i = 0; i < stepsCount; i++) {
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

    // Update slider position & state
    function updateSlider() {
      const visibleCount = getVisibleCardsCount();
      const maxIdx = getMaxIndex();
      
      // Ensure index bounds are safe
      if (currentIndex > maxIdx) {
        currentIndex = maxIdx;
      }
      
      const card = testimonials[0];
      const cardWidth = card.getBoundingClientRect().width;
      const gap = 24; // gap between cards
      const offset = currentIndex * (cardWidth + gap);
      
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
      
      nextBtnSlider.style.opacity = currentIndex === maxIdx ? '0.5' : '1';
      nextBtnSlider.style.pointerEvents = currentIndex === maxIdx ? 'none' : 'auto';
    }

    // Event Listeners for Arrows
    prevBtnSlider.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
        resetAutoplay();
      }
    });

    nextBtnSlider.addEventListener('click', () => {
      if (currentIndex < getMaxIndex()) {
        currentIndex++;
        updateSlider();
        resetAutoplay();
      }
    });

    // Autoplay functionality
    function startAutoplay() {
      autoplayInterval = setInterval(() => {
        const maxIdx = getMaxIndex();
        if (currentIndex < maxIdx) {
          currentIndex++;
        } else {
          currentIndex = 0; // loop back
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
