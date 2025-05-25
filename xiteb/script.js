// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Function to get a quote
function getQuote() {
    alert("Get a quote functionality coming soon!");
}

// Image slider functionality
let slideIndex = 0; // Start at the first slide
showSlides(slideIndex); // Show the first slide

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Loop through all slides and hide them
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Loop through all dots and remove the 'active' class
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Show the current slide and set the corresponding dot as active
    slides[n].style.display = "block";  
    dots[n].classList.add("active");
}

// Add click event listeners to each dot
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index; // Update the slide index
        showSlides(slideIndex); // Show the selected slide
    });
});

document.querySelector('.button').addEventListener('click', function() {
    alert('More about us!');
});

document.querySelectorAll('.service-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('More information coming soon!');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const stats = [
        { value: 890, element: document.querySelector('.stat:nth-child(1) h2') },
        { value: 137, element: document.querySelector('.stat:nth-child(2) h2') },
        { value: 740, element: document.querySelector('.stat:nth-child(3) h2') },
        { value: 600, element: document.querySelector('.stat:nth-child(4) h2') }
    ];

    const animateStats = () => {
        stats.forEach(stat => {
            let count = 0;
            const target = stat.value;
            const increment = Math.ceil(target / 100); // Increment value
            const duration = 2000; // Duration of the animation in milliseconds
            const stepTime = Math.abs(Math.floor(duration / target)); // Time per step

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    if (count > target) count = target; // Ensure it doesn't exceed the target
                    stat.element.textContent = count;
                    setTimeout(updateCount, stepTime); // Call the function again
                }
            };

            updateCount(); // Start counting
        });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats(); // Animate stats when in view
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    });

    // Observe the stats section
    const statsSection = document.querySelector('.stats-section');
    const targetElement = document.querySelector('.stats-section');
    if (targetElement) {
        observer.observe(targetElement);
    } else {
        console.error('Element not found:', targetElement);
    }

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            // Toggle the display of the content
            if (content.style.display === "block") {
                content.style.display = "none";
                header.querySelector('.accordion-toggle').textContent = "+"; // Change toggle icon
            } else {
                content.style.display = "block";
                header.querySelector('.accordion-toggle').textContent = "-"; // Change toggle icon
            }
        });
    });
});

let currentSlide = 0;

function changeSlide(direction) {
    const testimonials = document.querySelectorAll('.testimonial');
    const totalSlides = testimonials.length;

    // Update the current slide index
    currentSlide += direction;

    // Loop back to the start or end
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Move the carousel
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

let testimonialIndex = 0; // Start at the first testimonial
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active'); // Hide all testimonials
    });
    testimonials[index].classList.add('active'); // Show the current testimonial
}

function moveTestimonial(direction) {
    testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length; // Loop through testimonials
    showTestimonial(testimonialIndex); // Show the current testimonial
}

// Automatic transition every 5 seconds
setInterval(() => {
    moveTestimonial(1); // Move to the next testimonial
}, 5000); // Change every 5 seconds

// Initialize the first testimonial
showTestimonial(testimonialIndex);

document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling; // Get the details element
        if (details.style.display === "block") {
            details.style.display = "none"; // Hide details
            button.textContent = "+"; // Change button text
        } else {
            details.style.display = "block"; // Show details
            button.textContent = "-"; // Change button text
        }
    });
});

let currentNewsIndex = 0;
const newsItems = document.querySelectorAll('.news-item');
const dots = document.querySelectorAll('.news-dot');

function showNewsSlide(index) {
    newsItems.forEach((item, i) => {
        item.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            item.classList.add('active');
            dots[i].classList.add('active');
        }
    });
    currentNewsIndex = index;
}

function autoSlideNews() {
    currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
    showNewsSlide(currentNewsIndex);
}

setInterval(autoSlideNews, 5000); // Slide every 5 seconds

document.addEventListener('DOMContentLoaded', () => {
    const targetElement = document.querySelector('.your-selector');
    if (targetElement) {
        observer.observe(targetElement);
    } else {
        console.error('Element not found:', targetElement);
    }
});


