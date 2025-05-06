        document.addEventListener('DOMContentLoaded', function() {
            const reviews = [
                {
                    stars: '★★★★★',
                    text: 'Airfolio has been instrumental in showcasing my design portfolio. Their UI/UX design services are top-notch and their Webflow development has taken my website to the next level.',
                    name: 'John Doe',
                    title: 'Graphic Designer, ABC Company',
                    logo: 'images/black.png'
                },
                {
                    stars: '★★★★★',
                    text: 'Exceptional service! The team at Airfolio went above and beyond to make sure my website looked exactly how I envisioned it.',
                    name: 'Jane Smith',
                    title: 'Marketing Director, XYZ Inc',
                    logo: 'images/black.png'
                },
                {
                    stars: '★★★★★',
                    text: 'Working with Airfolio was a game-changer for my business. Their UI/UX expertise helped us create a user-friendly website that converts visitors into customers.',
                    name: 'Emily Johnson',
                    title: 'CEO, TechStart',
                    logo: 'images/black.png'
                },
                {
                    stars: '★★★★★',
                    text: 'Incredible team! They transformed my ideas into a stunning website. Their attention to detail and professionalism is unmatched.',
                    name: 'Michael Brown',
                    title: 'Product Manager, Innovate',
                    logo: 'images/black.png'
                },
                {
                    stars: '★★★★★',
                    text: 'Airfolio exceeded my expectations in every way. Their design process is efficient and the end result is a beautiful, functional website that represents my brand perfectly.',
                    name: 'David Wilson',
                    title: 'Founder, CreativeDesign',
                    logo: 'images/black.png'
                }
            ];

            const reviewElement = document.querySelector('.review');
            const prevButton = document.querySelector('.prev');
            const nextButton = document.querySelector('.next');
            const dots = document.querySelectorAll('.dot');
            let currentIndex = 0;

            function updateReview() {
                const currentReview = reviews[currentIndex];
                reviewElement.querySelector('.stars').textContent = currentReview.stars;
                reviewElement.querySelector('.review-text').textContent = currentReview.text;
                reviewElement.querySelector('.reviewer-name').textContent = currentReview.name;
                reviewElement.querySelector('.reviewer-title').textContent = currentReview.title;
                reviewElement.querySelector('.reviewer-logo').src = currentReview.logo;

                // Update active dot
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }

            prevButton.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
                updateReview();
            });

            nextButton.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % reviews.length;
                updateReview();
            });

            // Dots navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    currentIndex = index;
                    updateReview();
                });
            });

            // Auto-slide every 5 seconds
            setInterval(function() {
                currentIndex = (currentIndex + 1) % reviews.length;
                updateReview();
            }, 5000);
        });


        document.addEventListener('DOMContentLoaded', function() {
            const myNameElement = document.querySelector('.myname');
            const text = 'Hi there, My name is Edison Biju';
            let i = 0;

            function typeWriter() {
                if (i < text.length) {
                    myNameElement.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 60);
                }
            }

            typeWriter();
        });


        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add visible class when element comes into view
                    entry.target.classList.add('visible');
                    // Unobserve element after animation completes
                    observer.unobserve(entry.target);
                }
            });
        };

        // Create Intersection Observer
        const observerOptions = {
            root: null,         // Use viewport as root
            rootMargin: '0px',  // No margin around root
            threshold: 0.2      // Trigger when 20% of element is visible
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        // Observe all elements with class 'Showcase'
        document.querySelectorAll('.Showcase').forEach(element => {
            observer.observe(element);
        });


        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add visible class when element comes into view
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,  // Trigger when 10% of element is visible
            rootMargin: '-50px 0px 0px 0px'  // Adjust detection area
        });

        // Observe all matching elements
        document.querySelectorAll('section.services section.wrapper section.middle ul li').forEach(element => {
            observer2.observe(element);
        });

        // Add delay between animations for better visual effect
        const lis = document.querySelectorAll('section.services section.wrapper section.middle ul li');
        lis.forEach((li, index) => {
            setTimeout(() => {
                if (li.classList.contains('visible')) {
                    li.classList.remove('visible');
                    void li.offsetWidth; // Trigger reflow
                    li.classList.add('visible');
                }
            }, index * 100);
        });



        