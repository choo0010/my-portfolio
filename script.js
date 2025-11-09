// Gallery data with your local images - organized by category
const galleries = {
    gallery1: {
        title: "All Works",
        description: "Complete collection of all my projects",
        images: []
        // This will be populated with all images from other galleries
    },
    gallery2: {
        title: "Posters",
        description: "Event and promotional poster designs",
        images: [
            // Bliss Bake house posters
            { src: "images/Bliss Bake house/Poster - Bliss bake house.png", desc: "Bliss Bake House Brand Poster" },
            { src: "images/Bliss Bake house/Poster - Seasonal Delights.png", desc: "Seasonal Delights Poster" },
            { src: "images/Bliss Bake house/Poster - Seasonal Flavors Available!.png", desc: "Seasonal Flavors Poster" },
            
            // Other posters
            { src: "images/works-image/bro.png", desc: "Furniture Company Brochure" },
            { src: "images/posters/aday.png", desc: "A Day Poster" },
            { src: "images/posters/Instagram Post - Discover the beauty of organic skincare today.png", desc: "Organic Skincare Post" },
            { src: "images/posters/Instagram Post - Happy World Design Day.png", desc: "World Design Day Post" },
            { src: "images/posters/Poster - 19 October 2025.png", desc: "19 October 2025 Poster" },
            { src: "images/posters/Poster - Art through Words.png", desc: "Art through Words Poster" },
            { src: "images/posters/Poster - Breaking Barriers (1).png", desc: "Breaking Barriers Poster" },
            { src: "images/posters/Poster - Breaking Barriers.png", desc: "Breaking Barriers Poster" },
            { src: "images/posters/Poster - Celebrate Our Cultural Heritage.png", desc: "Cultural Heritage Poster" },
            { src: "images/posters/Poster - Creative Expression through Collage.png", desc: "Creative Expression Poster" },
            { src: "images/posters/Poster - Creative Showcase.png", desc: "Creative Showcase Poster" },
            { src: "images/posters/Poster - Cultural Fest Extravaganza.png", desc: "Cultural Fest Poster" },
            { src: "images/posters/Poster - Date 19 October 2025.png", desc: "19 October 2025 Date Poster" },
            { src: "images/posters/Poster - Electric Vibes.png", desc: "Electric Vibes Poster" },
            { src: "images/posters/Poster - Our Planet, Our Responsibility.png", desc: "Our Planet Poster" },
            { src: "images/posters/Poster - Run for Charity.png", desc: "Run for Charity Poster" },
            { src: "images/posters/Poster - The Future of Technology (1).png", desc: "Future of Technology Poster" },
            { src: "images/posters/Poster - The Future of Technology.png", desc: "Future of Technology Poster" },
            { src: "images/posters/Poster - Words Shape Our Reality.png", desc: "Words Shape Reality Poster" },
            { src: "images/posters/Poster - Workshop Event.png", desc: "Workshop Event Poster" }
        ]
    },
    gallery3: {
        title: "Company Ads",
        description: "Advertising campaigns for various businesses",
        images: [
            { src: "images/company ads/-zarassales.com (1).png", desc: "Zara Sales Ad" },
            { src: "images/works-image/bro.png", desc: "Furniture Company Brochure" },
            { src: "images/company ads/Bold FLAVOR. real taste. FLAVOUR FULL BITES 2- FOR 1 TODAY.png", desc: "Flavor Bites Ad" },
            { src: "images/company ads/La Pasta Bella TASTE ITALY IN EVERY BITE. TODAY'S CHEF SPECIAL!.png", desc: "La Pasta Bella Ad" },
            { src: "images/company ads/SPECIAL DEAL.png", desc: "Special Deal Ad" }
        ]
    },
    gallery4: {
        title: "Cover Images",
        description: "Social media and content cover designs",
        images: [
            { src: "images/cover images/clg1.jpg", desc: "College Life Cover" },
            { src: "images/cover images/clg2.jpg", desc: "College Life Cover 2" },
            { src: "images/cover images/city-life.jpg", desc: "City Life Cover" },
            { src: "images/cover images/self-care.jpg", desc: "Self-Care Cover" },
            { src: "images/cover images/night1.jpg", desc: "Night Routine Cover" },
            { src: "images/cover images/night2.jpg", desc: "Night Routine Cover 2" },
            { src: "images/cover images/travel-day1.jpg", desc: "Travel Cover" },
            { src: "images/cover images/movie-1.jpg", desc: "Anime Review Cover" },
            { src: "images/cover images/ANIME MOVIE REWIEW.png", desc: "Anime Movie Review Cover" },
            { src: "images/cover images/anime.png", desc: "Anime Cover" },
            { src: "images/cover images/anime-review.jpg", desc: "Anime Warrior Cover" },
            { src: "images/cover images/anime-2.jpg", desc: "Futuristic Anime Cover" },
            { src: "images/cover images/Untitled design (1).png", desc: "Untitled Design 1" },
            { src: "images/cover images/Untitled design (2).png", desc: "Untitled Design 2" }
        ]
    },
    gallery5: {
        title: "UX/UI Design & Web Designs",
        description: "User experience and web design projects",
        images: [
            { src: "images/works-image/auto nest.png", desc: "Auto Nest App Design" },
            { src: "images/works-image/bliss.png", desc: "Bliss Bakehouse Branding" },
            { src: "images/works-image/coffee.png", desc: "My Coffee House Website" },
            { src: "images/works-image/imdx.png", desc: "IMD Showcase 2023" },
            { src: "images/works-image/mcd.png", desc: "MCD Crew App" },
            { src: "images/works-image/orange art.png", desc: "Orange Art Gallery Website" },
            { src: "images/works-image/service.png", desc: "Plumbing Services Website" },
            { src: "images/works-image/shop.png", desc: "Gangsdevirt Shopify Store" },
            { src: "images/works-image/story.png", desc: "Heavenly Stories Bookstore App" },
            { src: "images/works-image/Screenshot 2025-02-03 195705.png", desc: "Web Design Project" }
        ]
    },
    gallery6: {
        title: "Logos",
        description: "Logo and branding designs",
        images: [
            { src: "images/business cards/Screenshot 2025-07-07 035750.png", desc: "Business Card Design" }
            // Add more logo images here as needed
        ]
    }
};

// Combine all images for the "All Works" gallery
galleries.gallery1.images = [
    ...galleries.gallery2.images,
    ...galleries.gallery3.images,
    ...galleries.gallery4.images,
    ...galleries.gallery5.images,
    ...galleries.gallery6.images
];

// Modal state variables
let currentGalleryId = '';
let currentImageIndex = 0;
let isZoomed = false;

// Initialize galleries
function initializeGalleries() {
    // Create thumbnails for each gallery
    for (const galleryId in galleries) {
        const gallery = galleries[galleryId];
        const thumbnailsContainer = document.getElementById(`thumbnails${galleryId.slice(-1)}`);
        
        gallery.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.className = 'thumbnail';
            thumbnail.src = image.src;
            thumbnail.alt = image.desc;
            thumbnail.addEventListener('click', () => openModal(galleryId, index));
            thumbnailsContainer.appendChild(thumbnail);
        });
    }
}

// Open modal with specific image
function openModal(galleryId, index) {
    currentGalleryId = galleryId;
    currentImageIndex = index;
    isZoomed = false;
    
    const modal = document.getElementById('galleryModal');
    const gallery = galleries[galleryId];
    const image = gallery.images[index];
    
    // Update modal content
    document.getElementById('modalImage').src = image.src;
    document.getElementById('modalTitle').textContent = gallery.title;
    document.getElementById('modalDescription').textContent = image.desc;
    document.getElementById('modalCounter').textContent = `${index + 1} / ${gallery.images.length}`;
    
    // Reset zoom state
    document.getElementById('modalImage').classList.remove('zoomed');
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal
function closeModal() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Navigate to next image in modal
function nextImage() {
    const gallery = galleries[currentGalleryId];
    currentImageIndex = (currentImageIndex + 1) % gallery.images.length;
    updateModalImage();
}

// Navigate to previous image in modal
function prevImage() {
    const gallery = galleries[currentGalleryId];
    currentImageIndex = (currentImageIndex - 1 + gallery.images.length) % gallery.images.length;
    updateModalImage();
}

// Update modal image and info
function updateModalImage() {
    const gallery = galleries[currentGalleryId];
    const image = gallery.images[currentImageIndex];
    
    // Update modal content
    document.getElementById('modalImage').src = image.src;
    document.getElementById('modalDescription').textContent = image.desc;
    document.getElementById('modalCounter').textContent = `${currentImageIndex + 1} / ${gallery.images.length}`;
    
    // Reset zoom state
    isZoomed = false;
    document.getElementById('modalImage').classList.remove('zoomed');
}

// Zoom in/out functionality
function toggleZoom() {
    isZoomed = !isZoomed;
    document.getElementById('modalImage').classList.toggle('zoomed', isZoomed);
}

// Zoom in
function zoomIn() {
    isZoomed = true;
    document.getElementById('modalImage').classList.add('zoomed');
}

// Zoom out
function zoomOut() {
    isZoomed = false;
    document.getElementById('modalImage').classList.remove('zoomed');
}

// Switch between galleries
function switchGallery(galleryId) {
    // Hide all galleries
    document.querySelectorAll('.gallery-container').forEach(container => {
        container.classList.remove('active');
    });
    
    // Show selected gallery
    document.getElementById(galleryId).classList.add('active');
    
    // Update active tab
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.gallery-tab[data-gallery="${galleryId}"]`).classList.add('active');
}

// Works Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');
const moreBtn = document.getElementById('moreBtn');
const lessBtn = document.getElementById('lessBtn');
const worksGridContainer = document.getElementById('worksGridContainer');
const worksShadow = document.getElementById('worksShadow');
let currentFilter = 'all';
let isExpanded = false;

// Set initial state - show exactly 4 items (1.5 rows in a 3-column grid)
function limitItems() {
    let visibleItems = 0;
    workItems.forEach(item => {
        if (visibleItems < 4 && !item.classList.contains('hidden')) {
            item.style.display = 'block';
            visibleItems++;
        } else {
            item.style.display = 'none';
        }
    });
    
    // Show/hide more button and shadow based on whether there are more items to show
    const totalVisibleItems = Array.from(workItems).filter(item => !item.classList.contains('hidden')).length;
    if (totalVisibleItems > 4) {
        moreBtn.style.display = 'block';
        lessBtn.style.display = 'none';
        worksShadow.style.display = 'block';
        worksGridContainer.classList.remove('expanded');
    } else {
        moreBtn.style.display = 'none';
        lessBtn.style.display = 'none';
        worksShadow.style.display = 'none';
        worksGridContainer.classList.add('expanded');
    }
}

// Show all items
function expandItems() {
    workItems.forEach(item => {
        if (!item.classList.contains('hidden')) {
            item.style.display = 'block';
        }
    });
    moreBtn.style.display = 'none';
    lessBtn.style.display = 'block';
    worksShadow.style.display = 'none';
    worksGridContainer.classList.add('expanded');
    isExpanded = true;
}

// Collapse to show only 4 items
function collapseItems() {
    limitItems();
    isExpanded = false;
}

// Filter works
function filterWorks(filterValue) {
    currentFilter = filterValue;
    isExpanded = false;
    
    workItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        
        if (filterValue === 'all' || categories.includes(filterValue)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
    
    limitItems();
}

// More button functionality
moreBtn.addEventListener('click', expandItems);
lessBtn.addEventListener('click', collapseItems);

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        filterWorks(filterValue);
    });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Event listeners for galleries and modal
document.addEventListener('DOMContentLoaded', () => {
    // Initialize galleries
    initializeGalleries();
    
    // Initialize works section
    filterWorks('all');
    
    // Tab click events
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const galleryId = tab.getAttribute('data-gallery');
            switchGallery(galleryId);
        });
    });
    
    // Modal event listeners
    document.getElementById('galleryModal').addEventListener('click', (e) => {
        if (e.target.id === 'galleryModal') {
            closeModal();
        }
    });
    
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal-next-btn').addEventListener('click', nextImage);
    document.querySelector('.modal-prev-btn').addEventListener('click', prevImage);
    document.getElementById('zoomInBtn').addEventListener('click', zoomIn);
    document.getElementById('zoomOutBtn').addEventListener('click', zoomOut);
    document.getElementById('modalImage').addEventListener('click', toggleZoom);
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('galleryModal');
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === ' ') {
                toggleZoom();
            }
        }
    });
});