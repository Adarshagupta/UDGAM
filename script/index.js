document.addEventListener('DOMContentLoaded', function () {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const aboutRight = document.querySelector('.about-content-right');
                const srmLeft = document.querySelector('.srm-left');

                aboutRight.classList.add('flip');
                setTimeout(() => {
                    srmLeft.classList.add('flip');
                }, 600);

                observer.unobserve(entry.target);
            }
        });
    }, options);

    const srmSection = document.querySelector('.srm-section');
    observer.observe(srmSection);
});

document.addEventListener('DOMContentLoaded', function () {
    // Enhanced smooth scroll function
    function smoothScroll(target, duration = 1500) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;

        const targetPosition = targetElement.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const headerOffset = 80;
        const distance = targetPosition - headerOffset;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing function for smoother animation
            const ease = function (t) {
                return t < 0.5 ? 4 * t * t * t :
                    (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            }

            window.scrollTo(0, startPosition + (distance * ease(progress)));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Apply smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Smooth scroll on navigation menu clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Smooth scroll for any element with data-scroll attribute
    document.querySelectorAll('[data-scroll]').forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('data-scroll');
            smoothScroll(target);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const eventsSection = document.querySelector('.events-section');
    const bgPattern = document.querySelector('.events-bg-pattern');
    const eventsHeader = document.querySelector('.events-header');
    const eventsGrid = document.querySelector('.events-grid');
    const eventsCta = document.querySelector('.events-cta');
    const cards = document.querySelectorAll('.event-card');

    let lastScrollTop = window.pageYOffset;
    let ticking = false;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                const rect = eventsSection.getBoundingClientRect();
                const scrolled = window.pageYOffset;
                const speed = (scrolled - lastScrollTop) * 0.05;

                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const sectionProgress = 1 - (rect.top / window.innerHeight);

                    bgPattern.style.transform = `translateZ(-50px) translateY(${speed * -2}px)`;
                    eventsHeader.style.transform = `translateZ(50px) translateY(${speed}px)`;
                    eventsGrid.style.transform = `translateZ(20px) translateY(${speed * 0.5}px)`;
                    eventsCta.style.transform = `translateZ(30px) translateY(${speed * 0.8}px)`;

                    cards.forEach((card, index) => {
                        const delay = index * 0.1;
                        const scale = 1 + (sectionProgress * 0.05);
                        card.style.transform = `translateZ(${20 + (sectionProgress * 20)}px) scale(${scale})`;
                    });
                }

                lastScrollTop = scrolled;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Mouse move parallax effect
    eventsSection.addEventListener('mousemove', function (e) {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                const rect = eventsSection.getBoundingClientRect();
                const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
                const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

                cards.forEach((card, index) => {
                    const depth = 1 + (index * 0.1);
                    card.style.transform = `translateX(${mouseX * 20 * depth}px) translateY(${mouseY * 20 * depth}px) translateZ(20px)`;
                });

                bgPattern.style.transform = `translateX(${mouseX * -30}px) translateY(${mouseY * -30}px) translateZ(-50px)`;

                ticking = false;
            });
            ticking = true;
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Initialize custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const dot = document.createElement('div');
    dot.classList.add('cursor-dot');
    document.body.appendChild(dot);

    let cursorVisible = true;
    let cursorEnlarged = false;

    // Update cursor position with smooth movement
    const positionCursor = (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;

        cursor.style.transform = `translate3d(${mouseX - cursor.clientWidth / 2}px, ${mouseY - cursor.clientHeight / 2}px, 0)`;
        dot.style.transform = `translate3d(${mouseX - dot.clientWidth / 2}px, ${mouseY - dot.clientHeight / 2}px, 0)`;
    }

    window.addEventListener('mousemove', positionCursor);

    // Handle cursor visibility
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = 1;
        dot.style.opacity = 1;
        cursorVisible = true;
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = 0;
        dot.style.opacity = 0;
        cursorVisible = false;
    });

    // Handle cursor over clickable elements
    const clickables = document.querySelectorAll('a, button, .event-card, .feature-item');
    clickables.forEach((el) => {
        el.addEventListener('mouseover', () => {
            cursor.style.transform += ' scale(1.5)';
            cursorEnlarged = true;
        });

        el.addEventListener('mouseout', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
            cursorEnlarged = false;
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const gallerySection = document.querySelector('.gallery-section');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const bgPattern = document.querySelector('.gallery-bg-pattern');

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateParallax() {
        const sectionRect = gallerySection.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - sectionRect.top) / (window.innerHeight + sectionRect.height);

        if (scrollProgress > 0 && scrollProgress < 1) {
            galleryItems.forEach(item => {
                const speed = parseFloat(item.getAttribute('data-speed'));
                const yPos = (scrollProgress - 0.5) * speed * 100;
                const scale = 1 + Math.abs(scrollProgress - 0.5) * 0.1;
                const rotation = (scrollProgress - 0.5) * speed * 5;

                item.style.transform = `
                    translateY(${yPos}px) 
                    scale(${scale}) 
                    rotateX(${rotation}deg) 
                    translateZ(${yPos * 2}px)
                `;
            });

            bgPattern.style.transform = `
                translateZ(-50px) 
                translateY(${scrollProgress * -30}px) 
                rotateX(${scrollProgress * 10}deg)
            `;
        }
    }

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Mouse move effect
    gallerySection.addEventListener('mousemove', (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const rect = gallerySection.getBoundingClientRect();
                const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
                const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

                galleryItems.forEach(item => {
                    const speed = parseFloat(item.getAttribute('data-speed'));
                    item.style.transform += `
                        rotateY(${mouseX * 10 * speed}deg) 
                        rotateX(${-mouseY * 10 * speed}deg)
                    `;
                });

                ticking = false;
            });
            ticking = true;
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuClose = document.querySelector('.menu-close');
    const menuLinks = document.querySelectorAll('.menu-nav-link');

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close menu
    menuClose.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu on link click
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

function updateCountdown() {
    // Set the target date (February 16, 2025 00:00:00)
    const targetDate = new Date('2025-02-16T00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML elements with a fade effect
    const elements = {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };

    for (let [id, value] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element.textContent !== value.toString().padStart(2, '0')) {
            element.classList.add('changing');
            element.textContent = value.toString().padStart(2, '0');
            setTimeout(() => element.classList.remove('changing'), 300);
        }
    }

    // If countdown is finished
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<div class="countdown-finished">Event Has Started!</div>';
    }
}

// Update countdown immediately and then every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);


document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.main-background-image');
    const unmuteButton = document.createElement('button');
    unmuteButton.textContent = 'Unmute';
    unmuteButton.className = 'unmute-button';
    document.body.appendChild(unmuteButton);

    unmuteButton.addEventListener('click', function () {
        if (video.muted) {
            video.muted = false;
            unmuteButton.textContent = 'Mute';
        } else {
            video.muted = true;
            unmuteButton.textContent = 'Unmute';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.main-background-image');
    const cursor = document.querySelector('.custom-cursor');

    function updateCursor() {
        if (video.muted) {
            cursor.classList.add('unmute');
        } else {
            cursor.classList.remove('unmute');
        }
    }

    video.addEventListener('volumechange', updateCursor);
    updateCursor();
});
gsap.registerPlugin(CustomEase, Flip )

CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1")

gsap.defaults({
  ease: "osmo-ease",
  duration: 0.8,
});

function initFlipButtons() {
  let wrappers = document.querySelectorAll('[data-flip-button="wrap"]');
  
  wrappers.forEach((wrapper) => {
    let buttons = wrapper.querySelectorAll('[data-flip-button="button"]');
    let bg = wrapper.querySelector('[data-flip-button="bg"]');
    
    buttons.forEach(function (button) {
      // Handle mouse enter
      button.addEventListener("mouseenter", function () {
        const state = Flip.getState(bg);
        this.appendChild(bg);
        Flip.from(state, {
          duration: 0.4,
        });
      });

      // Handle focus for keyboard navigation
      button.addEventListener("focus", function () {
        const state = Flip.getState(bg);
        this.appendChild(bg);
        Flip.from(state, {
          duration: 0.4,
        });
      });

      // Handle mouse leave
      button.addEventListener("mouseleave", function () {
        const state = Flip.getState(bg);
        const activeLink = wrapper.querySelector(".active");
        activeLink.appendChild(bg);
        Flip.from(state, {
          duration: 0.4,
        });
      });

      // Handle blur to reset background for keyboard navigation
      button.addEventListener("blur", function () {
        const state = Flip.getState(bg);
        const activeLink = wrapper.querySelector(".active");
        activeLink.appendChild(bg);
        Flip.from(state, {
          duration: 0.4,
        });
      });
    });
  });
}

function initTabSystem(){
  let wrappers = document.querySelectorAll('[data-tabs="wrapper"]')
  
  wrappers.forEach((wrapper) => {
    let nav = wrapper.querySelector('[data-tabs="nav"]')
    let buttons = nav.querySelectorAll('[data-tabs="button"]')
    let contentWrap = wrapper.querySelector('[data-tabs="content-wrap"]')
    let contentItems = contentWrap.querySelectorAll('[data-tabs="content-item"]')
    let visualWrap = wrapper.querySelector('[data-tabs="visual-wrap"]')
    let visualItems = visualWrap.querySelectorAll('[data-tabs="visual-item"]')

    let activeButton = buttons[0];
    let activeContent = contentItems[0];
    let activeVisual = visualItems[0];
    let isAnimating = false;

    function switchTab(index, initial = false) {
      if (!initial && (isAnimating || buttons[index] === activeButton)) return; // ignore click if the clicked button is already active 
      isAnimating = true; // keep track of whether or not one is moving, to prevent overlap

      const outgoingContent = activeContent;
      const incomingContent = contentItems[index];
      const outgoingVisual = activeVisual;
      const incomingVisual = visualItems[index];

      let outgoingLines = outgoingContent.querySelectorAll("[data-tabs-fade]") || [];
      let incomingLines = incomingContent.querySelectorAll("[data-tabs-fade]");

      const timeline = gsap.timeline({
        defaults:{
          ease:"power3.inOut"
        },
        onComplete: () => {
          if(!initial){
            outgoingContent && outgoingContent.classList.remove("active");
            outgoingVisual && outgoingVisual.classList.remove("active");            
          }
          activeContent = incomingContent;
          activeVisual = incomingVisual;
          isAnimating = false;
        },
      });

      incomingContent.classList.add("active");
      incomingVisual.classList.add("active");

      timeline
        .to(outgoingLines, { y: "-2em", autoAlpha:0 }, 0)
        .to(outgoingVisual, { autoAlpha: 0, xPercent: 3 }, 0)
        .fromTo(incomingLines, { y: "2em", autoAlpha:0 }, { y: "0em", autoAlpha:1, stagger: 0.075 }, 0.4)
        .fromTo(incomingVisual, { autoAlpha: 0, xPercent: 3 }, { autoAlpha: 1, xPercent: 0 }, "<");

      activeButton && activeButton.classList.remove("active");
      buttons[index].classList.add("active");
      activeButton = buttons[index];
    }

    switchTab(0, true); // on page load
 
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => switchTab(i)); 
    });

    contentItems[0].classList.add("active");
    visualItems[0].classList.add("active");
    buttons[0].classList.add("active");    
    
  })
  
}

document.addEventListener("DOMContentLoaded", () =>{
  initTabSystem()
  initFlipButtons()
})

