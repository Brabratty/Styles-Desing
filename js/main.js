if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projects.forEach(project => {
            const category = project.dataset.category;

            if (filter === "all" || category === filter) {
                project.classList.remove("hidden");
            } else {
                project.classList.add("hidden");
            }
        });
    });
});

const languageButton = document.getElementById("language-btn");

let currentLanguage = localStorage.getItem("styles-language") || "EN";

const translations = {
    EN: {
        navWork: "Work",
        navServices: "Services",
        navAbout: "About",
        navContact: "Contact",
        heroSmall: "CREATIVE & DIGITAL SERVICES",
        heroDescription: "We turn ideas into digital experiences, creative designs and meaningful solutions.",
        heroButton: "EXPLORE STYLES",
        servicesSmall: "WHAT WE DO",
        servicesTitle: "ONE BRAND.<br>MULTIPLE WORLDS.",
        designType: "CREATIVE",
        designTitle: "DESIGN",
        designDescription: "Websites, logos, banners, presentations, branding and digital experiences.",
        academyType: "EDUCATION",
        academyTitle: "ACADEMY",
        academyDescription: "Mathematics tutoring, academic support and personalized learning.",
        professionalType: "PROFESSIONAL",
        professionalTitle: "SERVICES",
        professionalDescription: "Accounting and other professional services tailored to your needs.",
        portfolioSmall: "SELECTED WORK",
        portfolioTitle: "BUILT WITH<br>PURPOSE.",
        all: "ALL",
        web: "WEB",
        branding: "BRANDING",
        graphics: "GRAPHICS",
        presentations: "PRESENTATIONS",
        aboutSmall: "ABOUT STYLES",
        aboutTitle: "MORE THAN<br>JUST A SERVICE.",
        aboutText1: "Styles is a creative and digital project focused on turning ideas into real solutions.",
        aboutText2: "From websites and visual identities to academic support and professional services, everything starts with understanding what you need.",
        aboutButton: "LET'S WORK TOGETHER →",
        contactSmall: "START A PROJECT",
        contactTitle: "WHAT CAN<br>WE CREATE?",
        nameLabel: "YOUR NAME",
        emailLabel: "EMAIL",
        serviceLabel: "WHAT DO YOU NEED?",
        messageLabel: "TELL US ABOUT IT",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        servicePlaceholder: "Select a service",
        messagePlaceholder: "Tell us what you have in mind...",
        sendButton: "SEND REQUEST",
        footerDescription: "Creative. Digital. Educational.",
        backTop: "BACK TO TOP ↑"
    },

    ES: {
        navWork: "Trabajo",
        navServices: "Servicios",
        navAbout: "Nosotros",
        navContact: "Contacto",
        heroSmall: "SERVICIOS CREATIVOS Y DIGITALES",
        heroDescription: "Convertimos ideas en experiencias digitales, diseños creativos y soluciones reales.",
        heroButton: "EXPLORAR STYLES",
        servicesSmall: "LO QUE HACEMOS",
        servicesTitle: "UNA MARCA.<br>MÚLTIPLES MUNDOS.",
        designType: "CREATIVO",
        designTitle: "DISEÑO",
        designDescription: "Sitios web, logos, banners, presentaciones, branding y experiencias digitales.",
        academyType: "EDUCACIÓN",
        academyTitle: "ACADEMIA",
        academyDescription: "Tutorías de matemáticas, apoyo académico y aprendizaje personalizado.",
        professionalType: "PROFESIONAL",
        professionalTitle: "SERVICIOS",
        professionalDescription: "Contabilidad y otros servicios profesionales adaptados a tus necesidades.",
        portfolioSmall: "TRABAJOS DESTACADOS",
        portfolioTitle: "CREADO CON<br>PROPÓSITO.",
        all: "TODO",
        web: "WEB",
        branding: "BRANDING",
        graphics: "GRÁFICOS",
        presentations: "PRESENTACIONES",
        aboutSmall: "SOBRE STYLES",
        aboutTitle: "MÁS QUE<br>UN SERVICIO.",
        aboutText1: "Styles es un proyecto creativo y digital enfocado en convertir ideas en soluciones reales.",
        aboutText2: "Desde sitios web e identidades visuales hasta apoyo académico y servicios profesionales, todo comienza entendiendo lo que necesitas.",
        aboutButton: "TRABAJEMOS JUNTOS →",
        contactSmall: "INICIA UN PROYECTO",
        contactTitle: "¿QUÉ PODEMOS<br>CREAR?",
        nameLabel: "TU NOMBRE",
        emailLabel: "CORREO",
        serviceLabel: "¿QUÉ NECESITAS?",
        messageLabel: "CUÉNTANOS SOBRE EL PROYECTO",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@correo.com",
        servicePlaceholder: "Selecciona un servicio",
        messagePlaceholder: "Cuéntanos qué tienes en mente...",
        sendButton: "ENVIAR SOLICITUD",
        footerDescription: "Creativo. Digital. Educativo.",
        backTop: "VOLVER ARRIBA ↑"
    }
};

function changeLanguage() {
    const t = translations[currentLanguage];

    document.querySelector(".nav-links a:nth-child(1)").textContent = t.navWork;
    document.querySelector(".nav-links a:nth-child(2)").textContent = t.navServices;
    document.querySelector(".nav-links a:nth-child(3)").textContent = t.navAbout;
    document.querySelector(".nav-links a:nth-child(4)").textContent = t.navContact;

    document.querySelector(".hero-small").textContent = t.heroSmall;
    document.querySelector(".hero-description").textContent = t.heroDescription;
    document.querySelector(".hero-button").innerHTML = t.heroButton + ' <span>→</span>';

    document.querySelector(".services .section-heading p").textContent = t.servicesSmall;
    document.querySelector(".services .section-heading h2").innerHTML = t.servicesTitle;

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards[0].querySelector(".service-top span:nth-child(2)").textContent = t.designType;
    serviceCards[0].querySelector("h3").textContent = t.designTitle;
    serviceCards[0].querySelector(".service-content p:last-child").textContent = t.designDescription;

    serviceCards[1].querySelector(".service-top span:nth-child(2)").textContent = t.academyType;
    serviceCards[1].querySelector("h3").textContent = t.academyTitle;
    serviceCards[1].querySelector(".service-content p:last-child").textContent = t.academyDescription;

    serviceCards[2].querySelector(".service-top span:nth-child(2)").textContent = t.professionalType;
    serviceCards[2].querySelector("h3").textContent = t.professionalTitle;
    serviceCards[2].querySelector(".service-content p:last-child").textContent = t.professionalDescription;

    if (currentLanguage === "ES") {
        serviceCards[0].querySelector("h3").style.fontSize = "clamp(38px, 4.5vw, 60px)";
        serviceCards[1].querySelector("h3").style.fontSize = "clamp(34px, 4vw, 55px)";
        serviceCards[2].querySelector("h3").style.fontSize = "clamp(34px, 4vw, 55px)";
    } else {
        serviceCards[0].querySelector("h3").style.fontSize = "";
        serviceCards[1].querySelector("h3").style.fontSize = "";
        serviceCards[2].querySelector("h3").style.fontSize = "";
    }

    document.querySelector(".portfolio .section-heading p").textContent = t.portfolioSmall;
    document.querySelector(".portfolio .section-heading h2").innerHTML = t.portfolioTitle;

    document.querySelector('[data-filter="all"]').textContent = t.all;
    document.querySelector('[data-filter="web"]').textContent = t.web;
    document.querySelector('[data-filter="branding"]').textContent = t.branding;
    document.querySelector('[data-filter="graphics"]').textContent = t.graphics;
    document.querySelector('[data-filter="presentations"]').textContent = t.presentations;

    document.querySelector(".about-header p").textContent = t.aboutSmall;
    document.querySelector(".about-content h2").innerHTML = t.aboutTitle;
    document.querySelector(".about-text p:nth-child(1)").textContent = t.aboutText1;
    document.querySelector(".about-text p:nth-child(2)").textContent = t.aboutText2;
    document.querySelector(".about-button").textContent = t.aboutButton;

    document.querySelector(".contact-heading p").textContent = t.contactSmall;
    document.querySelector(".contact-heading h2").innerHTML = t.contactTitle;

    document.querySelector('label[for="name"]').textContent = t.nameLabel;
    document.querySelector('label[for="email"]').textContent = t.emailLabel;
    document.querySelector('label[for="service"]').textContent = t.serviceLabel;
    document.querySelector('label[for="message"]').textContent = t.messageLabel;

    document.getElementById("name").placeholder = t.namePlaceholder;
    document.getElementById("email").placeholder = t.emailPlaceholder;
    document.getElementById("message").placeholder = t.messagePlaceholder;

    document.querySelector("#service option[value='']").textContent = t.servicePlaceholder;

    document.querySelector(".submit-button").innerHTML = t.sendButton + ' <span>→</span>';

    document.querySelector(".footer-brand p").textContent = t.footerDescription;
    document.querySelector(".footer-bottom a").textContent = t.backTop;

    languageButton.textContent = currentLanguage === "EN" ? "ES" : "EN";

    localStorage.setItem("styles-language", currentLanguage);
}

languageButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "EN" ? "ES" : "EN";
    changeLanguage();
});

changeLanguage();

/* =========================
   THEME TOGGLE
========================= */

const themeButton = document.getElementById("theme-btn");

let currentTheme =
    localStorage.getItem("styles-theme") || "dark";

function applyTheme() {

    if (currentTheme === "light") {
        document.body.classList.add("light-theme");

        if (themeButton) {
            themeButton.textContent = "☀";
        }

    } else {
        document.body.classList.remove("light-theme");

        if (themeButton) {
            themeButton.textContent = "◐";
        }
    }

    localStorage.setItem(
        "styles-theme",
        currentTheme
    );
}


if (themeButton) {

    themeButton.addEventListener("click", () => {

        currentTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        applyTheme();

    });

}


applyTheme();