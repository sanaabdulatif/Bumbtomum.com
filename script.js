document.addEventListener("DOMContentLoaded", function() {

    // 1. HERO SLIDESHOW: Automatic fading transitions
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentHeroSlide = 0;
    const heroIntervalTime = 4000; // Change slide every 4 seconds

    function nextHeroSlide() {
        heroSlides[currentHeroSlide].classList.remove('active');
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        heroSlides[currentHeroSlide].classList.add('active');
    }
    
    if(heroSlides.length > 0) {
        setInterval(nextHeroSlide, heroIntervalTime);
    }


    // 2. GIFT BOX CAROUSEL: Automatic horizontal rolling loop
    const galleryTrack = document.getElementById('galleryTrack');
    let scrollPosition = 0;
    const galleryIntervalTime = 3500; // Rotate card focus every 3.5 seconds

    function autoRotateGallery() {
        const galleryCards = document.querySelectorAll('.gallery-card');
        if(galleryCards.length === 0) return;

        // Dynamically compute layout metrics
        const cardWidth = galleryCards[0].offsetWidth + 30; // Card width + CSS flex gap
        const maxScrollableWidth = galleryTrack.scrollWidth - galleryTrack.parentElement.offsetWidth;
        
        scrollPosition += cardWidth;
        
        // Loop back smoothly if reached the layout's edge bounds
        if (scrollPosition > maxScrollableWidth + 10) {
            scrollPosition = 0;
        }
        
        galleryTrack.style.transform = `translateX(-${scrollPosition}px)`;
    }
    
    if(galleryTrack) {
        setInterval(autoRotateGallery, galleryIntervalTime);
    }


    // 3. MOBILE MOBILE NAVIGATION DRAWER TOGGLE
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if(mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger icon appearance
            const icon = mobileMenuBtn.querySelector('i');
            if(navMenu.classList.contains('active')) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });

        // Close menu panel automatically when clicking any link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = "fa-solid fa-bars";
            });
        });
    }
});
