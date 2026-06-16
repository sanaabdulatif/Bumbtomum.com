document.addEventListener("DOMContentLoaded", function() {

    // 1. HERO SLIDESHOW: Cycles cleanly through box1, box2, box3, box4
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentHeroSlide = 0;
    const heroIntervalTime = 3500; // Transitions smoothly every 3.5 seconds

    function nextHeroSlide() {
        if(heroSlides.length === 0) return;
        heroSlides[currentHeroSlide].classList.remove('active');
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        heroSlides[currentHeroSlide].classList.add('active');
    }
    
    if(heroSlides.length > 0) {
        setInterval(nextHeroSlide, heroIntervalTime);
    }


    // 2. GIFT BOX GALLERY: Automatically transitions items horizontally
    const galleryTrack = document.getElementById('galleryTrack');
    let scrollPosition = 0;
    const galleryIntervalTime = 3000; // Continuous elegant rotation loop

    function autoRotateGallery() {
        const galleryCards = document.querySelectorAll('.gallery-card');
        if(galleryCards.length === 0 || !galleryTrack) return;

        const cardWidth = galleryCards[0].offsetWidth + 30; // Matches card width + layout gaps
        const maxScrollableWidth = galleryTrack.scrollWidth - galleryTrack.parentElement.offsetWidth;
        
        scrollPosition += cardWidth;
        
        if (scrollPosition > maxScrollableWidth + 10) {
            scrollPosition = 0;
        }
        
        galleryTrack.style.transform = `translateX(-${scrollPosition}px)`;
    }
    
    if(galleryTrack) {
        setInterval(autoRotateGallery, galleryIntervalTime);
    }


    // 3. MOBILE MENU COLLAPSIBLE INTERACTION
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if(mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if(navMenu.classList.contains('active')) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });

        // Autoclose navigation panel upon linking
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = "fa-solid fa-bars";
            });
        });
    }
});
