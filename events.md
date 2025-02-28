<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Udgam Events - Sports Competitions</title>
    <meta content="Udgam Events - Sports Competitions and Registration" name="description" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link href="https://testfiles-udgam-six.vercel.app/img/UDGAM%20(1).png" rel="shortcut icon" type="image/x-icon" />
    <link href="https://testfiles-udgam-six.vercel.app/img/UDGAM%20(1).png" rel="apple-touch-icon" />
    <link href="https://cdn.prod.website-files.com/66db7f57ef9c0c7a7026f696/css/ovo-sekiro.webflow.fc8722cf9.min.css"
        rel="stylesheet" type="text/css" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <meta charset="utf-8" />
    <title>Sekiro- Webflow HTML website template</title>
    <meta content="Udgam- Webflow HTML website template" name="description" />
    <meta content="Udgam- Webflow HTML website template" property="og:title" />
    <meta content="Udgam- Webflow HTML website template" property="og:description" />
    <meta content="U- Webflow HTML website template" property="twitter:title" />
    <meta content="Sekiro- Webflow HTML website template" property="twitter:description" />
    <meta property="og:type" content="website" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="Webflow" name="generator" />
    <link href="https://cdn.prod.website-files.com/66db7f57ef9c0c7a7026f696/css/ovo-sekiro.webflow.fc8722cf9.min.css"
        rel="stylesheet" type="text/css" />
    <script
        type="text/javascript">!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);</script>
    <link href="https://testfiles-udgam-six.vercel.app/img/UDGAM%20(1).png" rel="shortcut icon" type="image/x-icon" />
    <link href="https://testfiles-udgam-six.vercel.app/img/UDGAM%20(1).png" rel="apple-touch-icon" />
    <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="/styles/events.css">
<style>

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #000;
  font-family: 'Anton', sans-serif;
}

.nav-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100000;
  display: flex;
  gap: 10px;
  background-color: #87CEEB;
  padding: 20px;
    cursor: pointer;
  color: white;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 10001;
}

.hamburger span {
  width: 100%;
  height: 3px;
  background: #ffffff;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  transform-origin: top right;
  /* Expand from the top-right corner */
  transform: scale(0);
  /* Start with the menu scaled down */
  opacity: 0;
  /* Start with the menu invisible */
  transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 1000;
}

.menu.active {
  transform: scale(1);
  /* Expand the menu to full size */
  opacity: 1;
  /* Make the menu visible */
}

.menu.closing {
  transform: scale(0);
  /* Shrink the menu back */
  opacity: 0;
  /* Fade out the menu */
}

.menu-logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  /* Adjust logo size as needed */
  height: auto;
}

.menu-image {
  width: 60%;
  height: 80%;
  background-image: url('https://riviera.vit.ac.in/images/nav-img.svg');
  /* Sample image URL */
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}

.menu-items {
  width: 50%;
  text-align: right;
}

.menu-items a {
  color: white;
  text-decoration: none;
  font-size: 48px;
  /* Decreased font size */
  line-height: 1.2;
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
  transition: color 0.3s ease;
  margin: 10px 0;
  /* Added spacing between menu items */
}

.menu-items a:hover {
  color: #2ce6ff;
}

.menu-items a.home {
  color: #00e5ff;
}

.footer-text {
  position: absolute;
  bottom: 40px;
  right: 5%;
  color: white;
  font-size: 24px;
  /* Decreased font size */
  letter-spacing: 1px;
}

.photo-credit {
  position: absolute;
  bottom: 15px;
  right: 5%;
  color: #666;
  font-size: 12px;
  font-family: Arial, sans-serif;
}

/* Logo styles */
.brand {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 100000;
    display: flex;
    align-items: center;
}

.nav-logo {
    width: 150px;
    height: 70px;
    object-fit: contain;
}

/* Sports Section Styles */
.sports-categories {
    padding: 80px 0;
    background: linear-gradient(to bottom, #000000, #1a1a1a);
}

.categories-header {
    text-align: center;
    margin-bottom: 60px;
}

.hero-tag {
    color: #00bfff;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.hero-title {
    color: #fff;
    font-size: 48px;
    margin-bottom: 40px;
}

.tabs-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
}

.tab-button {
    background: rgba(0, 191, 255, 0.1);
    border: 1px solid rgba(0, 191, 255, 0.3);
    color: #fff;
    padding: 15px 30px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.tab-button i {
    font-size: 18px;
}

.tab-button.active,
.tab-button:hover {
    background: rgba(0, 191, 255, 0.2);
    transform: translateY(-2px);
}

.search-container {
    max-width: 600px;
    margin: 0 auto;
}

.search-bar {
    position: relative;
    width: 100%;
}

.search-input {
    width: 100%;
    padding: 15px 20px 15px 50px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: #fff;
    font-size: 16px;
}

.search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #00bfff;
}

/* Sport Card Styles */
.sport-section {
    margin-bottom: 40px;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(0, 191, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sport-section:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px rgba(0, 191, 255, 0.1);
}

.sport-content {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 30px;
    padding: 25px;
    align-items: center;
    max-height: 400px;
}

.sport-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-right: 20px;
}

.sport-tag {
    display: inline-block;
    padding: 6px 12px;
    background: rgba(0, 191, 255, 0.1);
    color: #00bfff;
    border-radius: 15px;
    font-size: 12px;
    margin-bottom: 15px;
}

.sport-title {
    color: #fff;
    font-size: 28px;
    margin-bottom: 15px;
    line-height: 1.2;
}

.sport-description {
    color: #888;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
    max-height: 80px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #00bfff rgba(0, 191, 255, 0.1);
}

.sport-description::-webkit-scrollbar {
    width: 4px;
}

.sport-description::-webkit-scrollbar-track {
    background: rgba(0, 191, 255, 0.1);
    border-radius: 2px;
}

.sport-description::-webkit-scrollbar-thumb {
    background: #00bfff;
    border-radius: 2px;
}

.sport-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-bottom: 20px;
}

.feature {
    display: flex;
    align-items: center;
    gap: 10px;
}

.feature-icon {
    width: 40px;
    height: 40px;
    background: rgba(0, 191, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #00bfff;
}

.feature-info h4 {
    color: #fff;
    font-size: 14px;
    margin-bottom: 3px;
}

.feature-info p {
    color: #888;
    font-size: 12px;
}

.registration-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}

.price-tag {
    display: flex;
    flex-direction: column;
}

.price {
    color: #00bfff;
    font-size: 24px;
    font-weight: bold;
}

.per-team {
    color: #888;
    font-size: 12px;
}

.register-button {
    padding: 12px 25px;
    background: linear-gradient(45deg, #00bfff, #0077ff);
    border-radius: 25px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: transform 0.3s ease;
}

.register-button:hover {
    transform: translateY(-2px);
}

.sport-image-wrapper {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    height: 300px;
}

.sport-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sport-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, rgba(0, 191, 255, 0.2), transparent);
}

@media screen and (max-width: 991px) {
    .sport-content {
        grid-template-columns: 1fr;
        max-height: none;
    }

    .sport-info {
        padding-right: 0;
    }

    .sport-image-wrapper {
        height: 250px;
    }

    .sport-features {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 767px) {
    .sport-content {
        padding: 20px;
    }

    .sport-features {
        grid-template-columns: 1fr;
    }

    .sport-image-wrapper {
        height: 200px;
    }
}
</style>
</head>

<body>
    <!-- Add logo -->
    <a href="index.html" class="brand" style="width: 150px; height: 70px;">
        <img src="https://testfiles-udgam-six.vercel.app/img/UDGAM%20(1).png" loading="lazy" alt="" class="nav-logo"/>
    </a>

    <div class="nav-btn">
        <div class="hamburger" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    
    <nav class="menu">
        <!-- Logo in the top-left corner -->
        <img src="https://testfiles-udgam-six.vercel.app/img/UDGAM%20(1).png" alt="Logo" class="menu-logo" />
    
        <div class="menu-image"></div>
        <div class="menu-items">
          <a href="home.html" class="home">HOME</a>
          <a href="about.html" class="about">ABOUT</a>
          <a href="teams.html">Teams</a>
          <a href="events.html">EXTERNAL EVENTS</a>
          <a href="events.html">INTERNAL EVENTS</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-text">RHYTHM OF REALM</div>
        <div class="photo-credit">Photo Credits - The Photography Club VIT</div>
    </nav>

    <!-- Updated Navbar -->


    <!-- Updated Fullscreen Menu -->

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.querySelector('.menu-toggle');
            const menuClose = document.querySelector('.menu-close');
            const fullscreenMenu = document.querySelector('.fullscreen-menu');
            const menuLinks = document.querySelectorAll('.menu-link');
            const navbar = document.querySelector('.navbar');

            // Toggle menu
            menuToggle.addEventListener('click', () => {
                fullscreenMenu.classList.add('active');
                menuToggle.classList.add('active');
                document.body.style.overflow = 'hidden';
                navbar.classList.add('hidden');

                // Animate menu links
                menuLinks.forEach((link, index) => {
                    link.style.animationDelay = `${0.1 * (index + 1)}s`;
                });
            });

            // Close menu
            menuClose.addEventListener('click', () => {
                fullscreenMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
                navbar.classList.remove('hidden');
            });

            // Close menu when clicking a link
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    fullscreenMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                    navbar.classList.remove('hidden');
                });
            });

            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        });
    </script>

    <!-- Add this section after the hero section and before the individual sports sections -->
    <section class="sports-categories" id="events">
        <div class="container">
            <div class="categories-header">
                <div class="hero-tag">Categories</div>
                <h2 class="hero-title">Sports Events</h2>
                <div class="tabs-container">
                    <button class="tab-button active" data-tab="external">
                        <i class="fas fa-globe"></i>
                        External Sports
                    </button>
                    <button class="tab-button" data-tab="internal">
                        <i class="fas fa-school"></i>
                        Internal Sports
                    </button>
                    <button class="tab-button" data-tab="esports">
                        <i class="fas fa-gamepad"></i>
                        E-Sports
                    </button>
                </div>

                <!-- Add Search Bar -->
                <div class="search-container">
                    <div class="search-bar">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" id="sportSearch" placeholder="Search for sports..." class="search-input">
                    </div>
                </div>
            </div>

            <!-- Add styles for search -->
            <!-- Update search functionality -->
            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    const searchInput = document.getElementById('sportSearch');
                    const tabButtons = document.querySelectorAll('.tab-button');
                    const tabContents = document.querySelectorAll('.tab-content');

                    // Function to show active tab
                    function showActiveTab(tabId) {
                        tabContents.forEach(content => {
                            if (content.id === tabId) {
                                content.classList.add('active');
                            } else {
                                content.classList.remove('active');
                            }
                        });
                    }

                    // Tab switching functionality
                    tabButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            tabButtons.forEach(btn => btn.classList.remove('active'));
                            button.classList.add('active');
                            const tabId = `${button.dataset.tab}-tab`;
                            showActiveTab(tabId);
                            
                            // Re-run search if there's a search term
                            if (searchInput.value.trim()) {
                                performSearch(searchInput.value.trim().toLowerCase());
                            }
                        });
                    });

                    // Search functionality
                    function performSearch(searchTerm) {
                        // Get the active tab
                        const activeTab = document.querySelector('.tab-content.active');
                        if (!activeTab) return;

                        // Get all sport sections within the active tab
                        const sportSections = activeTab.querySelectorAll('.sport-section');

                        sportSections.forEach(section => {
                            const searchableContent = [
                                section.querySelector('.sport-title')?.textContent || '',
                                section.querySelector('.sport-description')?.textContent || '',
                                section.querySelector('.sport-tag')?.textContent || '',
                                ...Array.from(section.querySelectorAll('.feature-info p')).map(p => p.textContent || ''),
                                section.querySelector('.price')?.textContent || ''
                            ].join(' ').toLowerCase();

                            if (searchTerm === '' || searchableContent.includes(searchTerm)) {
                                section.style.display = '';
                                section.style.opacity = '1';
                            } else {
                                section.style.display = 'none';
                                section.style.opacity = '0';
                            }
                        });
                    }

                    // Search input handler with debounce
                    let searchTimeout;
                    searchInput.addEventListener('input', function() {
                        clearTimeout(searchTimeout);
                        const searchTerm = this.value.trim().toLowerCase();
                        
                        searchTimeout = setTimeout(() => {
                            performSearch(searchTerm);
                        }, 300);
                    });

                    // Clear search when switching tabs
                    tabButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            if (!searchInput.value.trim()) {
                                const tabId = `${button.dataset.tab}-tab`;
                                const sportSections = document.querySelector(`#${tabId}`).querySelectorAll('.sport-section');
                                sportSections.forEach(section => {
                                    section.style.display = '';
                                    section.style.opacity = '1';
                                });
                            }
                        });
                    });
                });
            </script>

            <!-- External Sports Tab -->
            <div class="tab-content active" id="external-tab">
                <div class="tab-header">
                    <h3>External Sports</h3>
                    <p>Open to all university students across India</p>
                </div>
                <!-- Individual Sport Sections -->
                <div class="sport-bg-pattern"></div>
                <div class="container">
                    <div class="sport-content">
                        <div class="sport-info">
                            <div class="sport-tag">Team Sport</div>
                            <h2 class="sport-title">Cricket Tournament</h2>
                            <p class="sport-description">Experience the thrill of T20 cricket at its finest. Compete
                                against the best teams from colleges across India in our state-of-the-art cricket
                                stadium. Show your batting prowess, bowling expertise, and fielding excellence.</p>
                            <div class="sport-features">
                                <div class="feature">
                                    <div class="feature-icon">👥</div>
                                    <div class="feature-info">
                                        <h4>Team Size</h4>
                                        <p>11 Players + 4 Substitutes</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="feature-icon">🏆</div>
                                    <div class="feature-info">
                                        <h4>Prize Pool</h4>
                                        <p>₹1,00,000</p>
                                    </div>
                                </div>
                            </div>
                            <div class="registration-info">
                                <div class="price-tag">
                                    <span class="price">₹2,000</span>
                                    <span class="per-team">per team</span>
                                </div>
                                <a href="#" class="register-button" disabled>Registration Closed</a>
                            </div>
                        </div>
                        <div class="sport-image-wrapper">
                            <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif"
                                alt="Cricket Tournament" class="sport-image">
                            <div class="sport-image-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Internal Sports Tab -->
            <div class="tab-content" id="internal-tab">
                <div class="tab-header">
                    <h3>Internal Sports</h3>
                    <p>Exclusive for SRM AP University students</p>
                </div>
                <!-- Individual Sport Sections -->
                <div class="sport-bg-pattern"></div>
                <div class="container">
                    <div class="sport-content">
                        <div class="sport-info">
                            <div class="sport-tag">Team Sport</div>
                            <h2 class="sport-title">IPL Auction</h2>
                            <p class="sport-description">Experience the thrill of IPL-style cricket auction! Build your
                                dream team by strategically bidding on players. Test your team management skills and cricket
                                knowledge in this unique event.</p>
                            <div class="sport-features">
                                <div class="feature">
                                    <div class="feature-icon">👥</div>
                                    <div class="feature-info">
                                        <h4>Team Size</h4>
                                        <p>4 Players</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="feature-icon">🏆</div>
                                    <div class="feature-info">
                                        <h4>Prize Pool</h4>
                                        <p>₹7,000</p>
                                    </div>
                                </div>
                            </div>
                            <div class="registration-info">
                                <div class="price-tag">
                                    <span class="price">₹50</span>
                                    <span class="per-team">per person</span>
                                </div>
                                <a href="#" class="register-button" disabled>Registration Closed</a>
                            </div>
                        </div>
                        <div class="sport-image-wrapper">
                            <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif"
                                alt="IPL Auction" class="sport-image">
                            <div class="sport-image-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="sport-section DodgeBall-section">
                <div class="sport-bg-pattern"></div>
                <div class="container">
                    <div class="sport-content">
                        <div class="sport-info">
                            <div class="sport-tag">Team Sport</div>
                            <h2 class="sport-title">DodgeBall</h2>
                            <p class="sport-description">Dodgeball is an exciting, fast-paced team sport where players aim
                                to eliminate opponents by hitting them with soft, lightweight balls while avoiding being hit
                                themselves. It's popular in schools, recreational leagues, and competitive settings,
                                offering a mix of agility, strategy, and teamwork.</p>
                            <div class="sport-features">
                                <div class="feature">
                                    <div class="feature-icon">👥</div>
                                    <div class="feature-info">
                                        <h4>Team Size</h4>
                                        <p>6 Players</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="feature-icon">📅</div>
                                    <div class="feature-info">
                                        <h4>Duration</h4>
                                        <p>1 Day Tournament</p>
                                    </div>
                                </div>
                            </div>
                            <div class="registration-info">
                                <div class="price-tag">
                                    <span class="price">Free</span>
                                    <span class="per-team">registration</span>
                                </div>
                                <a href="#" class="register-button" disabled>Registration Closed</a>
                            </div>
                        </div>
                        <div class="sport-image-wrapper">
                            <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif"
                                alt="Dodgeball Tournament" class="sport-image">
                            <div class="sport-image-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sport-section HandWrestling-section">
                <div class="sport-bg-pattern"></div>
                <div class="container">
                    <div class="sport-content">
                        <div class="sport-info">
                            <div class="sport-tag">Individual Sport</div>
                            <h2 class="sport-title">Hand Wrestling</h2>
                            <p class="sport-description">Hand Wrestling is a competitive game of strength and technique
                                played between two people. The objective is to pin your opponent's hand onto the surface
                                while keeping your own arm stable. It's a popular activity in schools, gyms, and
                                competitions worldwide.</p>
                            <div class="sport-features">
                                <div class="feature">
                                    <div class="feature-icon">👥</div>
                                    <div class="feature-info">
                                        <h4>Format</h4>
                                        <p>Single Players</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="feature-icon">📅</div>
                                    <div class="feature-info">
                                        <h4>Duration</h4>
                                        <p>1 Day Tournament</p>
                                    </div>
                                </div>
                            </div>
                            <div class="registration-info">
                                <div class="price-tag">
                                    <span class="price">Free</span>
                                    <span class="per-team">registration</span>
                                </div>
                                <a href="#" class="register-button" disabled>Registration Closed</a>
                            </div>
                        </div>
                        <div class="sport-image-wrapper">
                            <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif"
                                alt="Hand Wrestling" class="sport-image">
                            <div class="sport-image-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sport-section TugOfWar-section">
                <div class="sport-bg-pattern"></div>
                <div class="container">
                    <div class="sport-content">
                        <div class="sport-info">
                            <div class="sport-tag">Team Sport</div>
                            <h2 class="sport-title">Tug Of War</h2>
                            <p class="sport-description">Tug of War is a traditional and dynamic team game that tests
                                strength, teamwork,
                                and strategy. The game involves two teams pulling on opposite ends of a heavy rope, with the
                                objective of dragging the opposing team across a designated center line.Players grip the
                                rope
                                tightly and coordinate their pulling efforts to maximize force, often digging their heels
                                into the
                                ground for extra leverage.</p>
                            <div class="sport-features">
                                <div class="feature">
                                    <div class="feature-icon">👥</div>
                                    <div class="feature-info">
                                        <h4>Team Composition</h4>
                                        <p class="team-size">10 Players</p>
                                        <p class="slots-info">16 Teams Maximum</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="feature-icon">📅</div>
                                    <div class="feature-info">
                                        <h4>Duration</h4>
                                        <p>1 Day Tournament</p>
                                    </div>
                                </div>
                            </div>
                            <div class="registration-info">
                                <div class="price-tag">
                                    <span class="price">Free</span>
                                    <span class="per-team">registration</span>
                                </div>
                                <a href="#" class="register-button" disabled>Registration Closed</a>
                            </div>
                        </div>
                        <div class="sport-image-container">
                            <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif?token=GHSAT0AAAAAACYQVEC6DBANXW633SXP4HFMZ4P3YPA"
                                alt="Cricket Tournament" class="sport-image">
                            <div class="image-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sport-section HumanSack-section">
                <div class="sport-bg-pattern"></div>
                <div class="container">
                    <div class="sport-content">
                        <div class="sport-info">
                            <div class="sport-tag">Team Sport</div>
                            <h2 class="sport-title">Human Sack</h2>
                            <p class="sport-description">Human Sack Race is a lively and entertaining activity often seen at
                                sports days, picnics, or
                                family gatherings. Participants hop to the finish line while standing inside a sack or bag,
                                making for a fun
                                and challenging race that emphasizes balance, coordination, and determination.</p>
                            <div class="sport-features">
                                <div class="feature">
                                    <div class="feature-icon">👥</div>
                                    <div class="feature-info">
                                        <h4>Solo Composition</h4>
                                        <p class="team-size">Single Player</p>
                                        <p class="slots-info">16 Teams Maximum</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="feature-icon">📅</div>
                                    <div class="feature-info">
                                        <h4>Duration</h4>
                                        <p>1 Day Tournament</p>
                                    </div>
                                </div>
                            </div>
                            <div class="registration-info">
                                <div class="price-tag">
                                    <span class="price">Free</span>
                                    <span class="per-team">registration</span>
                                </div>
                                <a href="#" class="register-button" disabled>Registration Closed</a>
                            </div>
                        </div>
                        <div class="sport-image-container">
                            <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif?token=GHSAT0AAAAAACYQVEC6DBANXW633SXP4HFMZ4P3YPA"
                                alt="Cricket Tournament" class="sport-image">
                            <div class="image-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sport-section SevenStonesGame-section">
                <div class="sport-bg-pattern"></div>
                <div class="container">
                    <div class="sport-content">
                        <div class="sport-info">
                            <div class="sport-tag">Team Sport</div>
                            <h2 class="sport-title">Seven Stones Game</h2>
                            <p class="sport-description">Seven Stones is a traditional outdoor game popular in South Asia.
                                It combines strategy,
                                teamwork, and agility and is played by two teams with a ball and seven flat stones stacked
                                on top of each
                                other. The game is a mix of aiming, running, and dodging, making it exciting and engaging
                                for players of
                                all ages.</p>
                            <div class="sport-features">
                                <div class="feature">
                                    <div class="feature-icon">👥</div>
                                    <div class="feature-info">
                                        <h4>Team Composition</h4>
                                        <p class="team-size">7 Players</p>
                                        <p class="slots-info">16 Teams Maximum</p>
                                    </div>
                                </div>
                            </div>
                            <div class="registration-info">
                                <div class="price-tag">
                                    <span class="price">Free</span>
                                    <span class="per-team">registration</span>
                                </div>
                                <a href="cricket.html" class="register-button">Register Team</a>
                            </div>
                        </div>
                        <div class="sport-image-container">
                            <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif?token=GHSAT0AAAAAACYQVEC6DBANXW633SXP4HFMZ4P3YPA"
                                alt="Cricket Tournament" class="sport-image">
                            <div class="image-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sport-section DodgeBall-section">
                <div class="sport-bg-pattern"></div>
                <div class="container">
                    <div class="sport-content">
                        <div class="sport-info">
                            <div class="sport-tag">Team Sport</div>
                            <h2 class="sport-title">Sports Quiz</h2>
                            <p class="sport-description">Test your sports knowledge with our exciting Sports Quiz! Whether
                                you're a die-hard fan or just enjoy a good game, this quiz covers everything from iconic
                                moments to legendary athletes across various sports. Challenge yourself and compete against
                                friends to see who knows their sports trivia best. Get ready to score big with our Sports
                                Quiz!</p>
                            <div class="sport-features">
                                <div class="feature">
                                    <div class="feature-icon">👥</div>
                                    <div class="feature-info">
                                        <h4>Team Composition</h4>
                                        <p class="team-size">3 Players</p>
                                        <p class="slots-info">16 Teams Maximum</p>
                                    </div>
                                </div>
                            </div>
                            <div class="registration-info">
                                <div class="price-tag">
                                    <span class="price">Free</span>
                                    <span class="per-team">registration</span>
                                </div>
                                <a href="cricket.html" class="register-button">Register Team</a>
                            </div>
                        </div>
                        <div class="sport-image-container">
                            <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif?token=GHSAT0AAAAAACYQVEC6DBANXW633SXP4HFMZ4P3YPA"
                                alt="Cricket Tournament" class="sport-image">
                            <div class="image-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- E-Sports Tab -->
        <div class="tab-content" id="esports-tab">
            <div class="tab-header">
                <h3>E-Sports</h3>
                <p>Open to all gaming enthusiasts</p>
            </div>
            <!-- Individual Sport Sections -->
            <div class="sport-bg-pattern"></div>
            <div class="container">
                <div class="sport-content">
                    <div class="sport-info">
                        <div class="sport-tag">Individual</div>
                        <h2 class="sport-title">FREE FIRE</h2>
                        <p class="sport-description">Get ready to battle it out in Garena Free Fire! Assemble your squad
                            of 4 players and showcase your skills in an action-packed survival shooter. With multiple
                            rounds and thrilling gameplay, only the best team will emerge victorious. Bring your own
                            devices, play fair, and aim for glory. Do you have what it takes to survive and conquer? Let
                            the games begin!</p>
                        <div class="sport-features">
                            <div class="feature">
                                <div class="feature-icon">👥</div>
                                <div class="feature-info">
                                    <h4>Team Composition</h4>
                                    <p class="team-size">4 Players & No Substitutes</p>
                                    <p class="slots-info">16 Teams Maximum</p>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature-icon">🏆</div>
                                <div class="feature-info">
                                    <h4>Prize Pool</h4>
                                    <p>₹7,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="registration-info">
                            <div class="price-tag">
                                <span class="price">₹50</span>
                                <span class="per-team">per player</span>
                            </div>
                            <a href="cricket.html" class="register-button">Register Team</a>
                        </div>
                    </div>
                    <div class="sport-image-container">
                        <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif?token=GHSAT0AAAAAACYQVEC6DBANXW633SXP4HFMZ4P3YPA"
                            alt="Cricket Tournament" class="sport-image">
                        <div class="image-overlay"></div>
                    </div>
                </div>
            </div>
        </div>

        <section class="sport-section BGMI-section">
            <div class="sport-bg-pattern"></div>
            <div class="container">
                <div class="sport-content">
                    <div class="sport-info">
                        <div class="sport-tag">Team Sport</div>
                        <h2 class="sport-title">BGMI</h2>
                        <p class="sport-description">Gear up for the ultimate battleground! Compete in teams of 4 in an
                            intense and strategic BGMI showdown. With multiple rounds, every kill and placement matters
                            as you fight to claim the coveted Winner Winner Chicken Dinner.</p>
                        <div class="sport-features">
                            <div class="feature">
                                <div class="feature-icon">👥</div>
                                <div class="feature-info">
                                    <h4>Team Size</h4>
                                    <p>4 Players</p>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature-icon">🏆</div>
                                <div class="feature-info">
                                    <h4>Prize Pool</h4>
                                    <p>₹7,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="registration-info">
                            <div class="price-tag">
                                <span class="price">₹50</span>
                                <span class="per-team">per person</span>
                            </div>
                            <a href="#" class="register-button">
                                /
                                <i class="fas fa-arrow-right button-icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="sport-image-wrapper">
                        <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif"
                            alt="BGMI Tournament" class="sport-image">
                        <div class="sport-image-overlay"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="sport-section FIFA-section">
            <div class="sport-bg-pattern"></div>
            <div class="container">
                <div class="sport-content">
                    <div class="sport-info">
                        <div class="sport-tag">Individual Sport</div>
                        <h2 class="sport-title">FIFA</h2>
                        <p class="sport-description">Step onto the virtual pitch and showcase your football skills in
                            the FIFA tournament! This is a solo competition where players go head-to-head in legendary
                            matches. With precision, strategy, and flair, battle through multiple rounds to claim
                            ultimate glory.</p>
                        <div class="sport-features">
                            <div class="feature">
                                <div class="feature-icon">👥</div>
                                <div class="feature-info">
                                    <h4>Format</h4>
                                    <p>Single Player</p>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature-icon">🏆</div>
                                <div class="feature-info">
                                    <h4>Prize Pool</h4>
                                    <p>₹7,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="registration-info">
                            <div class="price-tag">
                                <span class="price">₹100</span>
                                <span class="per-team">per player</span>
                            </div>
                            <a href="#" class="register-button">
                                /
                                <i class="fas fa-arrow-right button-icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="sport-image-wrapper">
                        <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif"
                            alt="FIFA Tournament" class="sport-image">
                        <div class="sport-image-overlay"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="sport-section codm-section">
            <div class="sport-bg-pattern"></div>
            <div class="container">
                <div class="sport-content">
                    <div class="sport-info">
                        <div class="sport-tag">Team Sport</div>
                        <h2 class="sport-title">Call Of Duty Mobile</h2>
                        <p class="sport-description">Join the ultimate mobile gaming showdown in Call of Duty Mobile!
                            Team up with your squad for intense multiplayer battles. Show your tactical prowess, gunplay
                            skills, and teamwork as you compete for glory.</p>
                        <div class="sport-features">
                            <div class="feature">
                                <div class="feature-icon">👥</div>
                                <div class="feature-info">
                                    <h4>Team Size</h4>
                                    <p>5 Players</p>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature-icon">🏆</div>
                                <div class="feature-info">
                                    <h4>Prize Pool</h4>
                                    <p>₹7,000</p>
                                </div>
                            </div>
                        </div>
                            <div class="registration-info">
                                <div class="price-tag">
                                    <span class="price">₹50</span>
                                    <span class="per-team">per person</span>
                                </div>
                                <a href="#" class="register-button">
                                    /
                                    <i class="fas fa-arrow-right button-icon"></i>
                                </a>
                            </div>
                        </div>
                        <div class="sport-image-wrapper">
                            <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif"
                                alt="CODM Tournament" class="sport-image">
                            <div class="sport-image-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="sport-section Valorant-section">
            <div class="sport-bg-pattern"></div>
            <div class="container">
                <div class="sport-content">
                    <div class="sport-info">
                        <div class="sport-tag">Individual</div>
                        <h2 class="sport-title">Valorant Tournament</h2>
                        <p class="sport-description">Prepare for a tactical showdown in the Valorant tournament! Teams
                            of 5 will go head-to-head in intense matches, combining strategy, precision, and teamwork to
                            claim victory. With agents and weapons from the official pool, only the sharpest minds and
                            best players will rise to the top. Bring your PCs, follow the rules, and prove your
                            dominance in this action-packed competition. The stage is set—are you ready to clutch the
                            win?</p>
                        <div class="sport-features">
                            <div class="feature">
                                <div class="feature-icon">👥</div>
                                <div class="feature-info">
                                    <h4>Team Composition</h4>
                                    <p class="team-size">5 Players & No Substitutes</p>
                                    <p class="slots-info">16 Teams Maximum</p>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature-icon">🏆</div>
                                <div class="feature-info">
                                    <h4>Prize Pool</h4>
                                    <p>₹7,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="registration-info">
                            <div class="price-tag">
                                <span class="price">₹50</span>
                                <span class="per-team">per player</span>
                            </div>
                            <a href="cricket.html" class="register-button">Register Team</a>
                        </div>
                    </div>
                    <div class="sport-image-container">
                        <img src="https://raw.githubusercontent.com/Adarshagupta/testfiles_udgam/refs/heads/main/UD_06.gif"
                            alt="Valorant Tournament" class="sport-image">
                        <div class="sport-image-overlay"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
    </div>
    </section>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons and contents
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('active'));

                    // Add active class to clicked button and corresponding content
                    button.classList.add('active');
                    const tabId = `${button.dataset.tab}-tab`;
                    document.getElementById(tabId).classList.add('active');
                });
            });
        });
    </script>

    <!-- Custom Cursor -->
    <div class="custom-cursor"></div>
    <div class="cursor-dot"></div>

    <!-- Scripts -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const cursor = document.querySelector('.custom-cursor');
            const dot = document.querySelector('.cursor-dot');

            document.addEventListener('mousemove', function (e) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                dot.style.left = e.clientX + 'px';
                dot.style.top = e.clientY + 'px';
            });

            // Hover effect on interactive elements
            const interactiveElements = document.querySelectorAll('a, .event-card');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                    cursor.style.backgroundColor = 'rgba(0, 191, 255, 0.1)';
                });

                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursor.style.backgroundColor = 'transparent';
                });
            });

            // Parallax effect on scroll
            window.addEventListener('scroll', function () {
                const scrolled = window.pageYOffset;
                const cards = document.querySelectorAll('.event-card');

                cards.forEach((card, index) => {
                    const speed = 1 + (index * 0.1);
                    card.style.transform = `translateY(${scrolled * 0.1 * speed}px)`;
                });
            });
        });
    </script>

    <!-- Footer Section -->
    <footer class="footer-section">
        <div class="footer-bg-pattern"></div>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo-section">
                    <img src="https://testfiles-udgam-six.vercel.app/img/UDGAM%20(1).png" alt="UDGAM Logo"
                        class="footer-logo">
                    <p class="footer-tagline">Experience the thrill of competition</p>
                    <div class="social-links">
                        <a href="https://www.instagram.com/srmuap.udgam/" class="social-link"><i
                                class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="footer-links-grid">
                    <div class="footer-links-column">
                        <h4>Quick Links</h4>
                        <a href="/">Home</a>
                        <a href="#About">About</a>
                        <a href="events.html">Events</a>
                        <a href="/#Gallery">Gallery</a>
                        <a href="/">Register</a>
                    </div>
                    <div class="footer-links-column">
                        <h4>Contact Us</h4>
                        <p>SRM University AP</p>
                        <p>Andhra Pradesh</p>
                        <p>Email: udgam@srmap.edu.in</p>
                        <p>Phone: +91 1234567890</p>
                    </div>
                    <div class="footer-links-column">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter for updates</p>
                        <form class="newsletter-form">
                            <input type="email" placeholder="Enter your email" class="newsletter-input">
                            <button type="submit" class="newsletter-button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright">© 2024 UDGAM. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <style>
        /* Footer Styles */
        .footer-section {
            background-color: #0a0a0a;
            padding: 80px 0 40px;
            position: relative;
            overflow: hidden;
            border-top: 1px solid rgba(0, 191, 255, 0.2);
        }

        .footer-bg-pattern {
            position: absolute;
            inset: 0;
            background:
                radial-gradient(circle at 20% 20%, rgba(0, 191, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(0, 191, 255, 0.05) 0%, transparent 50%);
            opacity: 0.5;
            pointer-events: none;
        }

        .footer-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 60px;
            margin-bottom: 60px;
        }

        .footer-logo-section {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
        }

        .footer-logo {
            width: 180px;
            height: auto;
        }

        .footer-tagline {
            color: #888;
            font-size: 16px;
            line-height: 1.6;
        }

        .social-links {
            display: flex;
            gap: 20px;
        }

        .social-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(0, 191, 255, 0.1);
            border: 1px solid rgba(0, 191, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            background: rgba(0, 191, 255, 0.2);
            transform: translateY(-3px);
        }

        .footer-links-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
        }

        .footer-links-column {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .footer-links-column h4 {
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .footer-links-column a {
            color: #888;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-links-column a:hover {
            color: #00bfff;
        }

        .footer-links-column p {
            color: #888;
            font-size: 14px;
            line-height: 1.6;
        }

        .newsletter-form {
            display: flex;
            gap: 10px;
        }

        .newsletter-input {
            flex: 1;
            padding: 12px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            color: #fff;
            font-size: 14px;
        }

        .newsletter-button {
            padding: 12px 24px;
            background: rgba(0, 191, 255, 0.1);
            border: 1px solid rgba(0, 191, 255, 0.3);
            border-radius: 4px;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .newsletter-button:hover {
            background: rgba(0, 191, 255, 0.2);
            transform: translateY(-2px);
        }

        .footer-bottom {
            padding-top: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .copyright {
            color: #666;
            font-size: 14px;
        }

        .footer-bottom-links {
            display: flex;
            gap: 20px;
        }

        .footer-bottom-links a {
            color: #666;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
            color: #00bfff;
        }

        @media screen and (max-width: 991px) {
            .footer-content {
                grid-template-columns: 1fr;
                gap: 40px;
            }

            .footer-logo-section {
                align-items: center;
                text-align: center;
            }

            .footer-links-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media screen and (max-width: 767px) {
            .footer-section {
                padding: 60px 0 30px;
            }

            .footer-links-grid {
                grid-template-columns: 1fr;
            }

            .footer-bottom {
                flex-direction: column;
                gap: 20px;
                text-align: center;
            }
        }
    </style>

    <!-- Add Font Awesome for social icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

</body>
<script>
    function toggleMenu() {
      const menu = document.querySelector('.menu');
      const hamburger = document.querySelector('.hamburger');
      if (menu.classList.contains('active')) {
        // Add closing animation
        menu.classList.add('closing');
        hamburger.classList.remove('active');
        setTimeout(() => {
          menu.classList.remove('active', 'closing');
        }, 500); // Match the duration of the closing animation
      } else {
        // Open the menu with expanding animation
        menu.classList.add('active');
        hamburger.classList.add('active');
      }
    }
</script>
</html>