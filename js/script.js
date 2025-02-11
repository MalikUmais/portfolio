const skills = [
    {
        skillName: 'HTML5',
        skillPercent: '78',
        skillBackground: 'red',
    },
    {
        skillName: 'CSS3',
        skillPercent: '68',
        skillBackground: '#0946f9',
    },
    {
        skillName: 'JS',
        skillPercent: '60',
        skillBackground: 'yellow',
    },
    {
        skillName: 'Light Room',
        skillPercent: '89',
        skillBackground: 'rgb(10 10 169)',
    },
    {
        skillName: 'Word Press',
        skillPercent: '80',
        skillBackground: '#4378a3b7',
    },
];

const edu = [
    {
        education: 'Matriculation',
        detils: "Alpine School of Sciences Khanpur, (2019-2021). Completed matriculation with a strong academic foundation, majoring in Biology, Mathematics, Chemistry, and Physics. Developed analytical thinking and problem-solving skills during this period, excelling in core science subjects."
    },
    {
        education: 'Intermediate',
        detils: 'FSC (Pre-Engineering) Alpine Degree College, Khanpur (2021-2023). Pursued pre-engineering with a focus on Physics, Chemistry, and Mathematics. This phase honed my technical aptitude and prepared me for higher education in the field of engineering and technology.'
    },
    {
        education: 'Graduation',
        detils: ' Currently enrolled in the BS Computer Science program in Quaid-e-Azam University, Islamabad (2023-2027). Building a strong foundation in computing, programming, and software development. This program equips me with the skills and knowledge required to excel in the ever-evolving field of technology.'
    },
];

const projects = [
    {
        pImg: 'assets/images/Spotify.png',
        pTitle: 'Spotify Prototype Frontend',
        pLink: 'https://github.com/MalikUmais/Spotify-Prototype-Frontend-UI-',
    },
    {
        pImg: 'assets/images/Ecom.png',
        pTitle: 'Ecommmerece Website(Frontend)',
        pLink: 'https://github.com/MalikUmais/KhareedLo-Shopping-Web-Frontend-UI-',
    },
    {
        pImg: 'assets/images/portfolio.png',
        pTitle: 'Portfolio',
        pLink: 'https://github.com/MalikUmais/portfolio',
    },
    {
        pImg: 'assets/images/todo.png',
        pTitle: 'Todo Web App',
        pLink: 'https://github.com/MalikUmais/todo-webApp',
    },
    {
        pImg: 'assets/images/neflix.png',
        pTitle: 'Netflix Landing Ppage(Frontend)',
        pLink: 'https://github.com/MalikUmais/netflix-landing-page-UI',
    }
];

function genProjects() {
    const NewProject = document.querySelector('.projectsSection');
    let newHTML = '';
    projects.forEach(project => {
        newHTML += `<div class="p">
            <div class="p_img" style="background: url(${project.pImg});"></div>
            <div class="p_info">
                <span class="p_title">${project.pTitle}</span>
                <a href="${project.pLink}"><button class="s_code">View Code</button></a>
            </div>
        </div>`;
    });
    NewProject.innerHTML = newHTML;
}

function genSKILL() {
    const NewSkill = document.querySelector('.skill-bars');
    let newHTML = '';
    skills.forEach(skill => {
        newHTML += `
            <div>
                <div class="skill-info">
                    <span class="skill-name">${skill.skillName}</span>
                    <span class="skill-percent">${skill.skillPercent}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${skill.skillPercent}%; background: ${skill.skillBackground};"></div>
                </div>
            </div>`;
    });
    NewSkill.innerHTML = newHTML;
}
function genEdu() {
    const NewEducation = document.querySelector('.box');
    let newHTML = '';
    edu.forEach(EDU => {
        newHTML += `
            <div class="row">
                ${EDU.education}
                <img class='icon' src="assets/svgs/logo4.svg" alt="">
            </div>
            <div class="rowInfo">
                <p>${EDU.detils}</p>
            </div>`;
    });
    NewEducation.innerHTML = newHTML;
}


function initializeEducationClicks() {
    const rows = document.querySelectorAll('.row');
    let activeRow = null;

    rows.forEach(row => {
        row.addEventListener('click', () => {
            const info = row.nextElementSibling;
            const icon = row.querySelector('.icon');

            // If clicking the same row that's already open, close it
            if (activeRow === row) {
                info.style.display = 'none';
                info.classList.remove('active');
                icon.src = 'assets/svgs/logo4.svg';
                row.style.background = '#f2f3f7';
                row.style.color = 'black';
                row.style.border = '1px solid #e6e6e6';
                activeRow = null;
                return;
            }

            // Close previously active row if exists
            if (activeRow) {
                const activeInfo = activeRow.nextElementSibling;
                const activeIcon = activeRow.querySelector('.icon');
                activeInfo.style.display = 'none';
                activeInfo.classList.remove('active');
                activeIcon.src = 'assets/svgs/logo4.svg';
                activeRow.style.background = '#f2f3f7';
                activeRow.style.color = 'black';
                activeRow.style.border = '1px solid #e6e6e6';
            }

            // Open clicked row
            info.style.display = 'block';
            info.classList.add('active');
            icon.src = 'assets/svgs/logo5.svg';
            row.style.background = '#2c98f0';
            row.style.color = 'white';
            row.style.border = 'none';

            // Add smooth scroll to the clicked row
            row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            activeRow = row;
        });
    });
}


// Add this to your existing script.js
const carouselImages = [
    'assets/images/RightImg1.jpg',
    'assets/images/Picsart_25-01-29_15-17-44-063.jpg',
    'assets/images/Picsart_25-01-31_20-20-52-045.jpg',
    
    // Add more image paths as needed
];

function initializeCarousel() {
    const imageSec = document.querySelector('.image-sec');
    
    // Create carousel container
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';
    
    // Create dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    
    let currentImageIndex = 0;
    let intervalId = null;
    let isTransitioning = false;

    // Create slides
    carouselImages.forEach((imagePath) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.backgroundImage = `url(${imagePath})`;
        carouselContainer.appendChild(slide);
    });

    // Add title/text overlay (preserve your existing h1)
    const textOverlay = document.querySelector('.image-sec h1').cloneNode(true);
    imageSec.innerHTML = ''; // Clear existing content
    imageSec.appendChild(carouselContainer);
    imageSec.appendChild(textOverlay);
    imageSec.appendChild(dotsContainer);

    // Create dots
    carouselImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            if (!isTransitioning) switchImage(index);
        });
        dotsContainer.appendChild(dot);
    });

    function switchImage(index) {
        if (currentImageIndex === index || isTransitioning) return;
        
        isTransitioning = true;
        
        // Update dots
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelectorAll('.dot')[index].classList.add('active');
        
        // Slide to new image
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
        
        currentImageIndex = index;
        
        // Reset transition lock
        setTimeout(() => {
            isTransitioning = false;
        }, 800); // Match the CSS transition duration

        // Reset interval
        if (intervalId) clearInterval(intervalId);
        startAutoSwitch();
    }

    function startAutoSwitch() {
        intervalId = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % carouselImages.length;
            switchImage(nextIndex);
        }, 3500);
    }

    // Hover handlers
    imageSec.addEventListener('mouseenter', () => {
        if (intervalId) clearInterval(intervalId);
    });

    imageSec.addEventListener('mouseleave', () => {
        if (!isTransitioning) startAutoSwitch();
    });

    // Start carousel
    startAutoSwitch();
}

// Add this to your onLOAD function
function onLOAD() {
    genSKILL();
    genEdu();
    genProjects();
    initializeEducationClicks();
    initializeCarousel(); // Add this line
}

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        scroller: ".right",
        markers: false
    });
    gsap.set(".right", {
        height: "100vh",
        overflowY: "auto",
        position: "relative"
    });

    const animateElement = (selector, animationProps, triggerProps = {}) => {
        gsap.from(selector, {
            ...animationProps,
            scrollTrigger: {
                trigger: selector,
                ...triggerProps,
            },
        });
    };

    // Initial animation for home section
    animateElement('.image-sec h1', { y: 30, opacity: 0, duration: 1, delay: 0.3 });

    // Sections with h2 and p animations
    const sectionAnimations = [
        { section: '#about', start: "top 70%", h2: true, p: true },
        { section: '#skills', start: "top 70%", h2: true, p: true },
        { section: '#education', start: "top 70%", h2: true },
        { section: '#projects', start: "top 70%", h2: true },
        { section: '#contact', start: "top 70%", h2: true },
    ];

    sectionAnimations.forEach(({ section, start, h2, p }) => {
        if (h2) animateElement(`${section} h2`, { y: 30, opacity: 0, duration: 0.8 }, { start });
        if (p) animateElement(`${section} p`, { x: -50, opacity: 0, duration: 0.8 }, { start: "top 80%" });
    });

    // Cards and rows animations
    const animateItems = (selector, direction = "x", offset = 50) => {
        gsap.utils.toArray(selector).forEach((item, index) => {
            const offsetValue = index % 2 === 0 ? -offset : offset;
            animateElement(item, { [direction]: offsetValue, opacity: 0, duration: 0.8 }, { start: "top 85%" });
        });
    };

    animateItems('.cont > div');
    animateItems('.skill-bars > div');
    animateItems('.row', "x", 50);
    animateItems('.p', "x", 50);

    // Contact section specific animations
    animateElement('.information-left', { x: -50, opacity: 0, duration: 0.8 }, { start: "top 85%" });
    animateElement('.information-right', { x: 50, opacity: 0, duration: 0.8 }, { start: "top 85%" });
});


// for hemburger
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const leftPanel = document.querySelector('.left');
    const overlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.nav ul li a');

    // Toggle menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        leftPanel.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    // Close menu
    function closeMenu() {
        hamburger.classList.remove('active');
        leftPanel.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });
    const typed = new Typed('#animee', {
        strings: ['UMAIS', 'Web Developer', 'UG Student', 'Digital Creator', 'Photographer'],
        typeSpeed: 70,
        loop: true,
    });
});
onLOAD();
