// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.25)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .experience-card, .education-card, .contact-card"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.style.color = "#aab4bf";

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.style.color = "#61dafb";

        }

    });

});


// ================================
// CLOSE MOBILE NAVIGATION
// ================================

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.style.color = "#aab4bf";
        });

        link.style.color = "#61dafb";

    });

});


// ================================
// EMAIL BUTTON
// ================================

const emailButtons = document.querySelectorAll(
    'a[href^="mailto:"]'
);

emailButtons.forEach((button) => {

    button.addEventListener("click", () => {

        console.log("Opening email application...");

    });

});


// ================================
// EXTERNAL LINKS
// ================================

const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
);

externalLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log("Opening:", link.href);

    });

});


// ================================
// CURRENT YEAR
// ================================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Dommaraju Ganesh Raju`;

}