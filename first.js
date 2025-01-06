document.addEventListener("DOMContentLoaded", () => {
    // Handle shop section animations
    const shopBoxes = document.querySelectorAll(".shop-section .box");
    shopBoxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.transform = "scale(1.1)";
            box.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });
        box.addEventListener("mouseout", () => {
            box.style.transform = "scale(1)";
            box.style.boxShadow = "none";
        });
    });

    // Handle form validation
    const form = document.querySelector(".form-container form");
    form.addEventListener("submit", (event) => {
        const inputs = form.querySelectorAll("input");
        let isValid = true;

        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                isValid = false;
                input.style.borderColor = "red";
                input.placeholder = "This field is required!";
            } else {
                input.style.borderColor = "#ccc";
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            alert("Please fill out all fields!");
        }
    });

    // Reset placeholder and border color on input focus
    const formInputs = form.querySelectorAll("input");
    formInputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.placeholder = "";
            input.style.borderColor = "#ccc";
        });

        input.addEventListener("blur", () => {
            if (input.value.trim() === "") {
                input.style.borderColor = "red";
                input.placeholder = "This field is required!";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollText = document.querySelector(".scroll-text a");
    scrollText.addEventListener("mouseover", () => scrollText.style.color = "yellow");
    scrollText.addEventListener("mouseout", () => scrollText.style.color = "white");
});


// Create the main container
const mainContainer = document.createElement('div');

// Function to create a product container
function createProductContainer(product) {
    const productContainer = document.createElement('div');
    productContainer.className = 'product-container';

    // Create image container
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = product.imageSrc || ''; // Default to empty string if undefined
    image.alt = product.imageAlt || 'Product image'; // Provide a default alt text
    imageContainer.appendChild(image);

    // Create product text container
    const productTextContainer = document.createElement('div');
    productTextContainer.className = 'product-text';

    const heading = document.createElement('h1');
    heading.textContent = product.heading || 'No heading available'; // Fallback for missing heading

    const paragraph = document.createElement('p');
    paragraph.textContent = product.description || 'No description available'; // Fallback for missing description

    productTextContainer.appendChild(heading);
    productTextContainer.appendChild(paragraph);

    // Create service container
    const serviceContainer = document.createElement('div');
    serviceContainer.className = 'service-container';

    // Check if services exist and are an array
    if (Array.isArray(product.services)) {
        product.services.forEach(service => {
            const subImageContainer = document.createElement('div');
            subImageContainer.className = 'sub-image-container';

            const subImageLink = document.createElement('a');
            subImageLink.className = 'sub-image';

            const subImage = document.createElement('img');
            subImage.className = 'sub-img';
            subImage.src = service.imageSrc || ''; // Default to empty string if undefined
            subImage.alt = service.imageAlt || 'Service image'; // Provide default alt text
            subImage.style.height = '120px';
            subImage.style.width = '126px';

            subImageLink.appendChild(subImage);
            subImageContainer.appendChild(subImageLink);

            const imgText = document.createElement('div');
            imgText.className = 'img-text';
            imgText.textContent = service.text || 'Service detail unavailable'; // Fallback for missing service text

            subImageContainer.appendChild(imgText);
            serviceContainer.appendChild(subImageContainer);
        });
    } else {
        // Fallback if services are not available or invalid
        const noServicesText = document.createElement('p');
        noServicesText.textContent = 'No services available for this product.';
        serviceContainer.appendChild(noServicesText);
    }

    productTextContainer.appendChild(serviceContainer);

    // Append image and text containers to product container
    if (product.imageFirst) {
        productContainer.appendChild(imageContainer);
        productContainer.appendChild(productTextContainer);
    } else {
        productContainer.appendChild(productTextContainer);
        productContainer.appendChild(imageContainer);
    }

    return productContainer;
}

// Define product data
const products = [
    {
        imageSrc: 'https://www.buzzmeeh.com/images/mobile-9801.webp',
        imageAlt: '',
        heading: 'Mobile Repair',
        description: 'Get Convenient, Transparent, and Affordable Mobile Repairs right at your doorstep, completely hassle-free.'}]


        // Check for document ready status
document.addEventListener('DOMContentLoaded', function () {
    // Function to initialize hover effect on brand logo images
    function setHoverEffectOnBrandLogos() {
        const logos = document.querySelectorAll('.brand-logo img');
        
        logos.forEach(logo => {
            // Adding hover event listener to each logo image
            logo.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.1)'; // Slight zoom effect on hover
                this.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition
            });
            logo.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1)'; // Reset zoom effect
            });
        });
    }

    // Function to lazy load images as they come into view
    function lazyLoadImages() {
        const images = document.querySelectorAll('.brand-logo img');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src; // Set source for the image
                        img.removeAttribute('data-src'); // Remove data-src once image is loaded
                    }
                    observer.unobserve(img); // Stop observing once the image is loaded
                }
            });
        });

        images.forEach(image => {
            observer.observe(image);
        });
    }

    // Call the functions when the document is ready
    setHoverEffectOnBrandLogos();
    lazyLoadImages();
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll behavior for anchor links within the footer
    const anchorLinks = document.querySelectorAll('footer a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to change the background color of footer when hovered
    const footer = document.querySelector('footer');
    footer.addEventListener('mouseover', () => {
        
    });

    footer.addEventListener('mouseout', () => {
        footer.style.backgroundColor = ''; // Reset to original color
    });

    // Handle "Back to Top" functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Back to Top';
    backToTopButton.className = 'back-to-top-btn';
    document.body.appendChild(backToTopButton);

    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 20px';
    backToTopButton.style.backgroundColor = '#4CAF50';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none'; // Initially hidden

    // Scroll event to show or hide back to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.querySelector('.menu-icon').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

document.querySelector('.search-icon').addEventListener('click', () => {
    const searchInput = document.querySelector('.search-input');
    alert(`Searching for: ${searchInput.value}`);
});


// Toggle main menu on mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('open');
});

// Toggle dropdowns
document.querySelectorAll('.nav-item > a').forEach(item => {
    item.addEventListener('click', (e) => {
        const dropdown = e.target.nextElementSibling;
        if (dropdown && dropdown.classList.contains('dropdown')) {
            e.preventDefault();
            dropdown.classList.toggle('open');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
});

