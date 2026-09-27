if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const languageButton = document.getElementById("language-btn");

let currentLanguage = localStorage.getItem("styles-language") || "EN";

const translations = {
    EN: {
        navWork: "Work",
        navServices: "Services",
        navAbout: "About",
        navContact: "Contact",

        heroSmall: "STYLES DESIGN",
        heroTitle: "WE DESIGN.<br>WE CREATE.<br>WE DELIVER.",
        heroDescription: "Creative and digital design solutions built around your ideas, your brand and your vision.",
        heroButton: "EXPLORE DESIGN",

        offerSmall: "WHAT WE OFFER",
        offerTitle: "DESIGN<br>WITHOUT<br>LIMITS.",

        digital: "DIGITAL",
        web: "WEB",
        webDescription: "Modern and responsive websites designed to represent your brand and give your audience a great experience.",

        identity: "IDENTITY",
        branding: "BRANDING",
        brandingDescription: "Logos, visual identities and branding systems created to give your project a unique and recognizable identity.",

        graphics: "GRAPHICS",
        graphic: "GRAPHIC",
        graphicDescription: "Banners, flyers, social media graphics, promotional material and custom designs.",

        moreServices: "MORE DESIGN SERVICES",
        everythingVisual: "EVERYTHING<br>VISUAL.",
        moreDescription: "We can create the visual material your project needs, from a single graphic to a complete visual identity.",

        logos: "LOGOS",
        banners: "BANNERS",
        flyers: "FLYERS",
        socialMedia: "SOCIAL MEDIA",
        presentations: "PRESENTATIONS",
        videoEditing: "VIDEO EDITING",
        customDesigns: "CUSTOM DESIGNS",
        contentDesign: "CONTENT DESIGN",

        ourWork: "OUR WORK",
        madeToStandOut: "MADE TO<br>STAND OUT.",

        all: "ALL",
        webFilter: "WEB",
        brandingFilter: "BRANDING",
        graphicsFilter: "GRAPHICS",
        presentationsFilter: "PRESENTATIONS",

        webDesign: "WEB DESIGN",
        brandIdentity: "BRAND IDENTITY",
        graphicDesign: "GRAPHIC DESIGN",
        presentationDesign: "PRESENTATION DESIGN",
        projectName: "Project Name",

        howItWorks: "HOW IT WORKS",
        ideaDesignResult: "IDEA.<br>DESIGN.<br>RESULT.",
        processDescription: "We keep the process simple and focused so you always know what's happening with your project.",

        tellIdea: "YOU TELL US THE IDEA",
        developConcept: "WE DEVELOP THE CONCEPT",
        refineDesign: "WE REFINE THE DESIGN",
        finalResult: "YOU GET THE FINAL RESULT",

        startDesignProject: "START A DESIGN PROJECT",
        haveIdea: "HAVE AN<br>IDEA?",
        contactDescription: "Tell us what you need and let's turn your idea into something real.",
        startProject: "START PROJECT",

        explore: "EXPLORE",
        home: "Home",
        footerWork: "Work",
        footerServices: "Services",

        styles: "STYLES",
        footerDesign: "Design",
        footerAcademy: "Academy",
        footerServicesLink: "Services",

        footerDescription: "Creative. Digital. Design.",
        copyright: "© 2026 STYLES. ALL RIGHTS RESERVED.",
        backTop: "BACK TO TOP ↑"
    },

    ES: {
        navWork: "Trabajo",
        navServices: "Servicios",
        navAbout: "Nosotros",
        navContact: "Contacto",

        heroSmall: "STYLES DESIGN",
        heroTitle: "DISEÑAMOS.<br>CREAMOS.<br>ENTREGAMOS.",
        heroDescription: "Soluciones de diseño creativo y digital creadas alrededor de tus ideas, tu marca y tu visión.",
        heroButton: "EXPLORAR DISEÑO",

        offerSmall: "LO QUE OFRECEMOS",
        offerTitle: "DISEÑO<br>SIN<br>LÍMITES.",

        digital: "DIGITAL",
        web: "WEB",
        webDescription: "Sitios web modernos y responsivos diseñados para representar tu marca y brindar una gran experiencia a tu audiencia.",

        identity: "IDENTIDAD",
        branding: "BRANDING",
        brandingDescription: "Logos, identidades visuales y sistemas de branding creados para darle a tu proyecto una identidad única y reconocible.",

        graphics: "GRÁFICOS",
        graphic: "GRÁFICO",
        graphicDescription: "Banners, flyers, gráficos para redes sociales, material promocional y diseños personalizados.",

        moreServices: "MÁS SERVICIOS DE DISEÑO",
        everythingVisual: "TODO<br>VISUAL.",
        moreDescription: "Creamos el material visual que tu proyecto necesita, desde un solo gráfico hasta una identidad visual completa.",

        logos: "LOGOS",
        banners: "BANNERS",
        flyers: "FLYERS",
        socialMedia: "REDES SOCIALES",
        presentations: "PRESENTACIONES",
        videoEditing: "EDICIÓN DE VIDEO",
        customDesigns: "DISEÑOS PERSONALIZADOS",
        contentDesign: "DISEÑO DE CONTENIDO",

        ourWork: "NUESTROS TRABAJOS",
        madeToStandOut: "HECHO PARA<br>DESTACAR.",

        all: "TODO",
        webFilter: "WEB",
        brandingFilter: "BRANDING",
        graphicsFilter: "GRÁFICOS",
        presentationsFilter: "PRESENTACIONES",

        webDesign: "DISEÑO WEB",
        brandIdentity: "IDENTIDAD DE MARCA",
        graphicDesign: "DISEÑO GRÁFICO",
        presentationDesign: "DISEÑO DE PRESENTACIONES",
        projectName: "Nombre del proyecto",

        howItWorks: "CÓMO FUNCIONA",
        ideaDesignResult: "IDEA.<br>DISEÑO.<br>RESULTADO.",
        processDescription: "Mantenemos el proceso simple y enfocado para que siempre sepas qué está pasando con tu proyecto.",

        tellIdea: "TÚ NOS CUENTAS LA IDEA",
        developConcept: "DESARROLLAMOS EL CONCEPTO",
        refineDesign: "PERFECCIONAMOS EL DISEÑO",
        finalResult: "RECIBES EL RESULTADO FINAL",

        startDesignProject: "INICIA UN PROYECTO DE DISEÑO",
        haveIdea: "¿TIENES UNA<br>IDEA?",
        contactDescription: "Cuéntanos lo que necesitas y convirtamos tu idea en algo real.",
        startProject: "INICIAR PROYECTO",

        explore: "EXPLORAR",
        home: "Inicio",
        footerWork: "Trabajo",
        footerServices: "Servicios",

        styles: "STYLES",
        footerDesign: "Diseño",
        footerAcademy: "Academia",
        footerServicesLink: "Servicios",

        footerDescription: "Creativo. Digital. Diseño.",
        copyright: "© 2026 STYLES. TODOS LOS DERECHOS RESERVADOS.",
        backTop: "VOLVER ARRIBA ↑"
    }
};


/* =========================
   HELPER
========================= */

function setText(element, text) {
    if (element) {
        element.textContent = text;
    }
}

function setHTML(element, html) {
    if (element) {
        element.innerHTML = html;
    }
}


/* =========================
   CHANGE LANGUAGE
========================= */

function changeLanguage() {

    const t = translations[currentLanguage];


    /* NAVBAR */

    const navLinks = document.querySelectorAll(".nav-links a");

    if (navLinks[0]) setText(navLinks[0], t.navWork);
    if (navLinks[1]) setText(navLinks[1], t.navServices);
    if (navLinks[2]) setText(navLinks[2], t.navAbout);
    if (navLinks[3]) setText(navLinks[3], t.navContact);


    /* HERO */

    setText(
        document.querySelector(".hero-small"),
        t.heroSmall
    );

    setHTML(
        document.querySelector(".hero h1"),
        t.heroTitle
    );

    setText(
        document.querySelector(".hero-description"),
        t.heroDescription
    );

    setHTML(
        document.querySelector(".hero-content .hero-button"),
        t.heroButton + ' <span>→</span>'
    );


    /* SERVICES */

    const servicesHeading =
        document.querySelector(".services .section-heading");

    if (servicesHeading) {

        setText(
            servicesHeading.querySelector("p"),
            t.offerSmall
        );

        setHTML(
            servicesHeading.querySelector("h2"),
            t.offerTitle
        );
    }


    const serviceCards =
        document.querySelectorAll(".services-grid .service-card");


    if (serviceCards[0]) {

        const top =
            serviceCards[0].querySelectorAll(".service-top span");

        if (top[1]) setText(top[1], t.digital);

        setText(
            serviceCards[0].querySelector("h3"),
            t.web
        );

        setText(
            serviceCards[0].querySelector(".service-content p:last-child"),
            t.webDescription
        );
    }


    if (serviceCards[1]) {

        const top =
            serviceCards[1].querySelectorAll(".service-top span");

        if (top[1]) setText(top[1], t.identity);

        setText(
            serviceCards[1].querySelector("h3"),
            t.branding
        );

        setText(
            serviceCards[1].querySelector(".service-content p:last-child"),
            t.brandingDescription
        );
    }


    if (serviceCards[2]) {

        const top =
            serviceCards[2].querySelectorAll(".service-top span");

        if (top[1]) setText(top[1], t.graphics);

        setText(
            serviceCards[2].querySelector("h3"),
            t.graphic
        );

        setText(
            serviceCards[2].querySelector(".service-content p:last-child"),
            t.graphicDescription
        );
    }


    /* =========================
       MORE DESIGN SERVICES
    ========================= */

    const aboutSections =
        document.querySelectorAll("section.about");


    if (aboutSections[0]) {

        const section = aboutSections[0];

        setText(
            section.querySelector(".about-header p"),
            t.moreServices
        );

        setHTML(
            section.querySelector(".about-content h2"),
            t.everythingVisual
        );

        setText(
            section.querySelector(".about-text > p"),
            t.moreDescription
        );


        const listItems =
            section.querySelectorAll(".design-list p");


        const listTranslations = [
            t.logos,
            t.banners,
            t.flyers,
            t.socialMedia,
            t.presentations,
            t.videoEditing,
            t.customDesigns,
            t.contentDesign
        ];


        listItems.forEach((item, index) => {

            if (listTranslations[index]) {
                setText(
                    item,
                    listTranslations[index]
                );
            }

        });
    }


    /* =========================
       PORTFOLIO
    ========================= */

    const portfolioHeading =
        document.querySelector(".portfolio .section-heading");


    if (portfolioHeading) {

        setText(
            portfolioHeading.querySelector("p"),
            t.ourWork
        );

        setHTML(
            portfolioHeading.querySelector("h2"),
            t.madeToStandOut
        );
    }


    const filters =
        document.querySelectorAll(".portfolio-filters .filter-btn");


    if (filters[0]) setText(filters[0], t.all);
    if (filters[1]) setText(filters[1], t.webFilter);
    if (filters[2]) setText(filters[2], t.brandingFilter);
    if (filters[3]) setText(filters[3], t.graphicsFilter);
    if (filters[4]) setText(filters[4], t.presentationsFilter);


    /* PROJECTS */

    const projectCards =
        document.querySelectorAll(".project-card");


    const projectTypes = [
        t.webDesign,
        t.brandIdentity,
        t.graphicDesign,
        t.presentationDesign
    ];


    projectCards.forEach((project, index) => {

        const type =
            project.querySelector(".project-info p");

        const name =
            project.querySelector(".project-info h3");


        if (type && projectTypes[index]) {
            setText(
                type,
                projectTypes[index]
            );
        }


        if (name) {
            setText(
                name,
                t.projectName
            );
        }

    });


    /* =========================
       HOW IT WORKS
    ========================= */

    if (aboutSections[1]) {

        const section = aboutSections[1];

        setText(
            section.querySelector(".about-header p"),
            t.howItWorks
        );

        setHTML(
            section.querySelector(".about-content h2"),
            t.ideaDesignResult
        );

        setText(
            section.querySelector(".about-text > p"),
            t.processDescription
        );


        const processItems =
            section.querySelectorAll(".design-list p");


        const processTranslations = [
            t.tellIdea,
            t.developConcept,
            t.refineDesign,
            t.finalResult
        ];


        processItems.forEach((item, index) => {

            if (processTranslations[index]) {
                setText(
                    item,
                    processTranslations[index]
                );
            }

        });
    }


    /* =========================
       CONTACT
    ========================= */

    const contactHeading =
        document.querySelector(".contact-heading");


    if (contactHeading) {

        setText(
            contactHeading.querySelector("p"),
            t.startDesignProject
        );

        setHTML(
            contactHeading.querySelector("h2"),
            t.haveIdea
        );
    }


    const contactText =
        document.querySelector(".contact .about-text");


    if (contactText) {

        setText(
            contactText.querySelector("p"),
            t.contactDescription
        );

        setHTML(
            contactText.querySelector(".hero-button"),
            t.startProject + ' <span>→</span>'
        );
    }


    /* =========================
       FOOTER
    ========================= */

    const footerBrand =
        document.querySelector(".footer-brand");


    if (footerBrand) {

        setText(
            footerBrand.querySelector("p"),
            t.footerDescription
        );
    }


    const footerColumns =
        document.querySelectorAll(".footer-links > div");


    /* EXPLORE */

    if (footerColumns[0]) {

        const links =
            footerColumns[0].querySelectorAll("a");

        setText(
            footerColumns[0].querySelector(".footer-title"),
            t.explore
        );

        if (links[0]) setText(links[0], t.home);
        if (links[1]) setText(links[1], t.footerWork);
        if (links[2]) setText(links[2], t.footerServices);
    }


    /* STYLES */

    if (footerColumns[1]) {

        const links =
            footerColumns[1].querySelectorAll("a");

        setText(
            footerColumns[1].querySelector(".footer-title"),
            t.styles
        );

        if (links[0]) setText(links[0], t.footerDesign);
        if (links[1]) setText(links[1], t.footerAcademy);
        if (links[2]) setText(links[2], t.footerServicesLink);
    }


    /* COPYRIGHT */

    const footerBottom =
        document.querySelector(".footer-bottom");


    if (footerBottom) {

        const copyright =
            footerBottom.querySelector("p");

        const backTop =
            footerBottom.querySelector("a");

        setText(
            copyright,
            t.copyright
        );

        setText(
            backTop,
            t.backTop
        );
    }


    /* LANGUAGE BUTTON */

    if (languageButton) {

        languageButton.textContent =
            currentLanguage === "EN"
                ? "ES"
                : "EN";
    }


    /* SAVE LANGUAGE */

    localStorage.setItem(
        "styles-language",
        currentLanguage
    );
}


/* =========================
   LANGUAGE BUTTON
========================= */

if (languageButton) {

    languageButton.addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "EN"
                ? "ES"
                : "EN";

        changeLanguage();

    });

}


/* =========================
   PORTFOLIO FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        projectCards.forEach(project => {

            const category =
                project.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                project.classList.remove("hidden");

            } else {

                project.classList.add("hidden");

            }

        });

    });

});


/* =========================
   START
========================= */

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