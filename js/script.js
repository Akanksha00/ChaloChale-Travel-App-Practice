// ===== AI Travel Recommendation System =====
const aiRecommendations = {
    budget: {
        adventure: ["Vietnam", "Nepal", "Thailand", "Goa"],
        relaxation: ["Goa", "Kerala", "Bali", "Sri Lanka"],
        cultural: ["Vietnam", "Cambodia", "Nepal", "India"],
        romantic: ["Goa", "Kerala", "Udaipur", "Bali"]
    },
    moderate: {
        adventure: ["Thailand", "Bali", "Peru", "South Africa"],
        relaxation: ["Maldives", "Bali", "Thailand", "Greece"],
        cultural: ["Thailand", "Japan", "Vietnam", "Greece"],
        romantic: ["Maldives", "Greece", "Bali", "Italy"]
    },
    luxury: {
        adventure: ["Switzerland", "New Zealand", "Peru", "Iceland"],
        relaxation: ["Maldives", "Santorini", "Bora Bora", "Seychelles"],
        cultural: ["Italy", "Japan", "Egypt", "Morocco"],
        romantic: ["Maldives", "Santorini", "Paris", "Italy"]
    }
};

// AI Recommendation Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const aiForm = document.getElementById('aiRecommendationForm');
    if (aiForm) {
        aiForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const budget = document.getElementById('budget').value;
            const travelStyle = document.getElementById('travelStyle').value;
            const duration = document.getElementById('duration').value;
            
            // Show loading state
            const aiResult = document.getElementById('aiResult');
            const aiText = document.getElementById('aiRecommendationText');
            
            aiResult.classList.remove('d-none');
            aiText.innerHTML = '<div class="ai-loading"><div class="spinner"></div><p>Analyzing your preferences...</p></div>';
            
            // Simulate AI processing
            setTimeout(() => {
                const recommendations = aiRecommendations[budget][travelStyle];
                const randomDestination = recommendations[Math.floor(Math.random() * recommendations.length)];
                
                let durationText = '';
                if (duration === 'short') durationText = '3-5 days';
                else if (duration === 'medium') durationText = '6-10 days';
                else durationText = '10+ days';
                
                aiText.innerHTML = `
                    <p class="mb-2"><strong>Based on your preferences, we recommend:</strong></p>
                    <h4 class="text-primary mb-3">${randomDestination}</h4>
                    <p>Perfect for ${travelStyle} with a ${budget} budget. Ideal for a ${durationText} trip. This destination offers exactly what you're looking for - amazing experiences, beautiful scenery, and unforgettable memories.</p>
                    <a href="destinations.html" class="btn btn-warning btn-sm mt-2">Explore ${randomDestination}</a>
                `;
            }, 1500);
        });
    }
});

// ===== Destination Filtering System =====
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const regionFilter = document.getElementById('regionFilter');
    const typeFilter = document.getElementById('typeFilter');
    const budgetFilter = document.getElementById('budgetFilter');
    const destinationsGrid = document.getElementById('destinationsGrid');
    const noResults = document.getElementById('noResults');
    
    if (destinationsGrid) {
        function filterDestinations() {
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            const region = regionFilter ? regionFilter.value : 'all';
            const type = typeFilter ? typeFilter.value : 'all';
            const budget = budgetFilter ? budgetFilter.value : 'all';
            
            const destinationItems = destinationsGrid.querySelectorAll('.destination-item');
            let visibleCount = 0;
            
            destinationItems.forEach(item => {
                const itemRegion = item.dataset.region;
                const itemType = item.dataset.type;
                const itemBudget = item.dataset.budget;
                const itemText = item.textContent.toLowerCase();
                
                const matchesSearch = itemText.includes(searchTerm);
                const matchesRegion = region === 'all' || itemRegion === region;
                const matchesType = type === 'all' || itemType === type;
                const matchesBudget = budget === 'all' || itemBudget === budget;
                
                if (matchesSearch && matchesRegion && matchesType && matchesBudget) {
                    item.style.display = 'block';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            
            if (noResults) {
                noResults.classList.toggle('d-none', visibleCount > 0);
            }
        }
        
        if (searchInput) searchInput.addEventListener('input', filterDestinations);
        if (regionFilter) regionFilter.addEventListener('change', filterDestinations);
        if (typeFilter) typeFilter.addEventListener('change', filterDestinations);
        if (budgetFilter) budgetFilter.addEventListener('change', filterDestinations);
    }
});

// ===== Package Filtering System =====
document.addEventListener('DOMContentLoaded', function() {
    const packageFilters = document.querySelectorAll('.package-filter');
    const packagesGrid = document.getElementById('packagesGrid');
    const noPackageResults = document.getElementById('noPackageResults');
    
    if (packagesGrid && packageFilters.length > 0) {
        packageFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Update active state
                packageFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.dataset.filter;
                const packageItems = packagesGrid.querySelectorAll('.package-item');
                let visibleCount = 0;
                
                packageItems.forEach(item => {
                    const itemCategory = item.dataset.category;
                    
                    if (category === 'all' || itemCategory === category) {
                        item.style.display = 'block';
                        visibleCount++;
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                if (noPackageResults) {
                    noPackageResults.classList.toggle('d-none', visibleCount > 0);
                }
            });
        });
    }
});

// ===== Booking Form Multi-Step System =====
let currentStep = 1;

function nextStep(step) {
    // Validate current step before proceeding
    if (step === 2) {
        const step1Form = document.getElementById('bookingStep1');
        if (step1Form && !step1Form.checkValidity()) {
            step1Form.reportValidity();
            return;
        }
    }
    
    if (step === 3) {
        const step2Form = document.getElementById('bookingStep2');
        if (step2Form && !step2Form.checkValidity()) {
            step2Form.reportValidity();
            return;
        }
    }
    
    // Hide all steps
    document.getElementById('step1').classList.add('d-none');
    document.getElementById('step2').classList.add('d-none');
    document.getElementById('step3').classList.add('d-none');
    
    // Show target step
    document.getElementById('step' + step).classList.remove('d-none');
    
    // Update step indicators
    for (let i = 1; i <= 3; i++) {
        const indicator = document.getElementById('step' + i + 'Indicator');
        if (indicator) {
            if (i <= step) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        }
    }
    
    currentStep = step;
    
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevStep(step) {
    nextStep(step);
}

// Booking form submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingStep3 = document.getElementById('bookingStep3');
    if (bookingStep3) {
        bookingStep3.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Generate booking reference
            const bookingRef = 'CC' + new Date().getFullYear() + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            document.getElementById('bookingRef').textContent = bookingRef;
            
            // Hide form and show success
            document.getElementById('step3').classList.add('d-none');
            document.getElementById('bookingSuccess').classList.remove('d-none');
            
            // Hide step indicators
            document.querySelector('.booking-steps').style.display = 'none';
        });
    }
});

// ===== Contact Form Handler =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            alert('Thank you for your message! Our team will get back to you within 24 hours.');
            contactForm.reset();
        });
    }
});

// ===== Login Form Handler =====
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate login
            alert('Login successful! Welcome back to ChaloChale.');
            window.location.href = 'index.html';
        });
    }
});

// ===== Signup Form Handler =====
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate signup
            alert('Account created successfully! Welcome to ChaloChale.');
            window.location.href = 'index.html';
        });
    }
});

// ===== Search Form Handler =====
document.addEventListener('DOMContentLoaded', function() {
    const searchForms = document.querySelectorAll('.search-box form');
    searchForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'destinations.html';
        });
    });
});

// ===== Newsletter Form Handler =====
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing! You will receive travel tips and exclusive deals.');
            form.reset();
        });
    });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});

// ===== Animation on Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.destination-card, .package-card, .feature-box, .testimonial-card, .team-card');
    animatedElements.forEach(el => observer.observe(el));
});

// ===== Dynamic Booking Summary Update =====
document.addEventListener('DOMContentLoaded', function() {
    const adultsSelect = document.getElementById('adultsCount');
    const childrenSelect = document.getElementById('childrenCount');
    
    if (adultsSelect) {
        adultsSelect.addEventListener('change', updateBookingSummary);
    }
    if (childrenSelect) {
        childrenSelect.addEventListener('change', updateBookingSummary);
    }
    
    function updateBookingSummary() {
        const adults = adultsSelect ? parseInt(adultsSelect.value) : 2;
        const children = childrenSelect ? parseInt(childrenSelect.value) : 0;
        
        const summaryAdults = document.getElementById('summaryAdults');
        const summaryChildren = document.getElementById('summaryChildren');
        
        if (summaryAdults) summaryAdults.textContent = adults;
        if (summaryChildren) summaryChildren.textContent = children;
        
        // Update total (example calculation)
        const basePrice = 45000; // Example base price
        const total = (basePrice * adults) + (basePrice * 0.5 * children);
        const taxes = total * 0.1;
        const discount = total * 0.05;
        const finalTotal = total + taxes - discount;
        
        const summaryBasePrice = document.getElementById('summaryBasePrice');
        const summaryTotal = document.getElementById('summaryTotal');
        
        if (summaryBasePrice) summaryBasePrice.textContent = '₹' + total.toLocaleString();
        if (summaryTotal) summaryTotal.textContent = '₹' + Math.round(finalTotal).toLocaleString();
    }
});

// ===== Toast Notification System =====
function showToast(message, type = 'success') {
    const toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.style.borderLeftColor = type === 'success' ? '#28a745' : '#dc3545';
    toast.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2" 
               style="color: ${type === 'success' ? '#28a745' : '#dc3545'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.querySelector('.toast-container').appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.5s ease reverse';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('ChaloChale Travel App Initialized');
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
