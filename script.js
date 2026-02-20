// Language translations
const translations = {
    en: {
        // Navigation
        "name": "Imen Hadj Yahya",
        "title": "Software Engineer",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.skills": "Skills",
        "nav.languages": "Languages",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.greeting": "Hi, I'm <span class='highlight'>Imen Hadj Yahya</span>",
        "hero.subtitle": "Software Engineer (FullStack Web Developer / Cloud & DevOps / AI Enthusiast)",
        "hero.cta": "Contact Me",
        
        // About Section
        "about.title": "About Me",
        "about.para1": "I am a passionate and recently graduated software engineer, with varied professional experience gained through several internships. My background combines both solid academic training and practical development experience in different environments.",
        "about.para2": "I communicate easily in French and English, allowing me to work effectively in international contexts. With great intellectual curiosity, I enjoy continuous learning and adapting to new technologies. My teamwork experience, reinforced by my associative commitment, has taught me the importance of collaboration and listening to lead projects to success.",
        "about.para3": "I am now looking to join a dynamic team where I can contribute to innovative projects while continuing to develop my skills in a stimulating and supportive environment.",
        "about.email": "Email:",
        "about.location": "Location:",
        "about.location.value": "Tunis, Tunisia",
        "about.availability": "Availability:",
        "about.availability.value": "Open to opportunities",
        
        // Experience Section
        "experience.title": "Professional Experience",
        "experience.internship": "Internship",
        "experience.achievements": "Key Achievements",
        
        // Job 1
       
        "experience.job1.title": "FullStack Web Developer Java (Spring Boot)/React",
        "experience.job1.company": "Attijari Bank / Internship, Tunis, Tunisia",
        "experience.job1.achievement1": "Designed and developed a customer satisfaction platform using a microservices architecture, enabling modular and scalable functionalities.",
        "experience.job1.achievement2": "Integrated an AI-based recommendation system using a Large Language Model (LLM) to suggest relevant questions and assist administrators in creating effective surveys.",
        "experience.job1.achievement3": "Developed the front-end using React, integrating with microservices and providing dynamic data visualization.",
        "experience.job1.achievement4": "Created interactive dashboards with Metabase to monitor survey responses and key performance indicators (KPIs).",
        "experience.job1.achievement5": "Deployed and orchestrated the platform on Kubernetes, managing Docker containers and CI/CD pipelines with GitHub Actions.",
        "experience.job1.achievement6": "Worked in an Agile SCRUM environment, collaborating closely with business teams through user stories, sprints, and regular meetings.",
        "experience.job1.achievement7": "Participated in functional testing, maintenance of services, and continuous improvements to ensure platform quality and scalability."
,

        // Job 2
       
        
        "experience.job2.title": "FullStack Web Developer Java (Spring Boot)/React",
        "experience.job2.company": "Legislative Amendments Management Application – ARP, Tunis, Tunisia",
        "experience.job2.achievement1": "Developed a Full Stack application for legislative amendments management, allowing creation, modification, and tracking of law project amendments.",
        "experience.job2.achievement2": "Implemented secure authentication via Google OAuth and secured endpoints with Spring Security.",
        "experience.job2.achievement3": "Front-end developed in React, with dynamic display of articles, legislative projects, and amendments.",
        "experience.job2.achievement4": "Added advanced search and filtering features to quickly find projects, articles, or amendments using multiple criteria.",
        "experience.job2.achievement5": "Enabled export of legislative data and reports in PDF and CSV formats, facilitating easy sharing and review.",
        "experience.job2.achievement6": "Applied Full Stack best practices: separation of front-end and back-end, state management with Context API, and REST API communication.",
        "experience.job2.achievement7": "Worked in Agile SCRUM environment, collaborating with business teams and adjusting based on user feedback.",
        "experience.job2.achievement8": "Participated in functional testing, application maintenance, and continuous improvements to ensure reliability and security."


,
        
        // Job 3
       
        "experience.job3.title": "System and Network Administrator",
        "experience.job3.company": " Tunisie Telecom, Tunis, Tunisia",
        "experience.job3.achievement1": "Configured and deployed Cisco switches to enhance the company's network infrastructure.",
        "experience.job3.achievement2": "Implemented network monitoring with Nagios to proactively manage and monitor network devices.",
        "experience.job3.achievement3": "Developed automation scripts for workstation configuration and deployment, reducing errors and improving efficiency.",
        "experience.job3.achievement4": "Assisted in network security setup, including VLANs and access policies.",
        "experience.job3.achievement5": "Collaborated with the IT team to ensure network availability and performance."
,

        // Job 4
        
        "experience.job4.title": "Final Year Project | Automated Traceability System",
        "experience.job4.company": "Visteon Corporation, Tunis, Tunisia",
        "experience.job4.achievement1": "Designed and implemented an automated traceability system based on QR code scanning to track products.",
        "experience.job4.achievement2": "Developed an application for reading and recording QR codes, enabling real-time tracking of components.",
        "experience.job4.achievement3": "Set up a database to centralize traceability information and facilitate workflow analysis.",
        "experience.job4.achievement4": "Automated tracking processes and generated reports to improve production efficiency and reduce errors.",
        "experience.job4.achievement5": "Managed the project using Agile methodology, including planning, testing, and full system documentation."
,

        // Education Section
        "education.title": "Education",
        "education.view-diploma": "View Diploma",
        "education.diploma3.alt": "Engineering Diploma",
        "education.diploma2.alt": "National Bachelor's Degree in Mechanical Engineering (Mechatronics)",
        "education.diploma1.alt": "Baccalaureate in Experimental Sciences",
        
        // Degree 1
        "education.degree1.title": "National Engineering Diploma in Computer Science",
        "education.degree1.school": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "education.degree1.details": "Specialty: Web Development | Honors: Very Good | GPA: 16.91",
        
        // Degree 2
        "education.degree2.title": "National Bachelor's Degree in Mechanical Engineering (Mechatronics)",
        "education.degree2.school": "Higher Institute of Technological Studies of Rades (ISET Rades)",
        "education.degree2.details": "Specialization: Mechatronics | Honors: Good | GPA: 13.86",

        // Degree 3
        "education.degree3.title": "Baccalaureate in Experimental Sciences",
        "education.degree3.school": "Bardo High School",
        "education.degree3.details": "Honors: Good | GPA: 12.53",
        
        // Skills Section
        "skills.title": "Skills",
        "skills.langages": "Programming Languages",
        "skills.frontend": "Frontend Development Frameworks",
        "skills.backend": "Backend Development Frameworks",
        "skills.BD": "Databases",
        "skills.devops": "Cloud, DevOps & CI/CD",
        "skills.administration": "System and Network Administration",
        "skills.agile": "Agile Methods",
        "skills.analyse": "Data Analysis",
        "skills.tests": "Testing & Quality Assurance",
        
        // Languages Section
        "languages.title": "Languages",
        "languages.arabic": "Arabic",
        "languages.french": "French",
        "languages.english": "English",
        "languages.level.native": "Native language",
        "languages.level.b2": "Level B2",
        "languages.Deutsch": "German",
        "languages.level.A1": "Level A1",
        // Projects Section
        "projects.title": "Academic Projects",
        "projects.description": "Project Description",
        "projects.achievements": "Technical Achievements",
        "projects.view.code": "View Code",
        "projects.view.github": "View Source Code",
        
        // Project 1
        "projects.project1.title": "CI/CD DevOps Pipeline with Jenkins",
        "projects.project1.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project1.description": "Implementation of a complete CI/CD pipeline for a Spring Boot application, automating integration, testing, security, containerization and deployment with real-time monitoring.",
        "projects.project1.achievement1": "Jenkins: Complete orchestration of the CI/CD pipeline.",
        "projects.project1.achievement2": "Git: Version management and continuous integration.",
        "projects.project1.achievement3": "JUnit: Automated unit tests with code coverage report.",
        "projects.project1.achievement4": "SonarQube: Static code analysis and continuous quality metrics.",
        "projects.project1.achievement5": "Docker: Containerization of the Spring Boot application.",
        "projects.project1.achievement6": "Docker Compose: Docker container orchestration.",
        "projects.project1.achievement7": "Nexus: Centralized management of artifacts and Docker images.",
        "projects.project1.achievement8": "Prometheus: Collection and monitoring of application metrics.",
        "projects.project1.achievement9": "Grafana: Visualization of performance and health dashboards.",
        "projects.project1.achievement10": "Trivy: Docker image security scanning.",
        
        // Project 2
       "projects.project2.title": "coConsult – Full Stack Application",
        "projects.project2.subtitle": "Academic Project",
        "projects.project2.description": "Development of a Full Stack application designed to facilitate the deployment and customization of ERP modules for small and medium-sized enterprises.",
        "projects.project2.achievement1": "Backend development using Spring Boot.",
        "projects.project2.achievement2": "Frontend development using Angular and Bootstrap.",
        "projects.project2.achievement3": "UML modeling and system design using StarUML.",
        "projects.project2.achievement4": "Project management and task organization using Trello.",
        "projects.project2.achievement5": "Version control and collaboration using GitHub.",
        "projects.project2.achievement6": "Full integration between frontend and backend.",
        // Project 3
        "projects.project3.title": "XperienceZone Web & Desktop – Full Stack Application",
        "projects.project3.subtitle": "Academic Project",
        "projects.project3.description": "Development of a web and desktop application to support the planning and management of events and sports activities.",
        "projects.project3.achievement1": "Web application development using Symfony.",
        "projects.project3.achievement2": "Desktop application development using Java.",
        "projects.project3.achievement3": "Database design and management using MySQL.",
        "projects.project3.achievement4": "Modern user interface development using Bootstrap.",
        "projects.project3.achievement5": "Version control and collaboration using GitHub.",
        
        
        // Contact Section
        "contact.title": "Contact Me",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.location": "Location",
        "contact.location.value": "Tunis, Tunisia",
        "contact.availability": "Availability",
        "contact.availability.value": "Open to Full-Stack, Cloud/DevOps and AI opportunities",
        "contact.note": "Feel free to contact me via email or LinkedIn to discuss collaborations or opportunities."
    },
    fr: {
        // Navigation (French text from HTML - included for completeness)
        "name": "Imen Hadj Yahya",
        "title": "Ingénieure Informatique",
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.experience": "Expérience",
        "nav.education": "Éducation",
        "nav.skills": "Compétences",
        "nav.languages": "Langues",
        "nav.projects": "Projets",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.greeting": "Bonjour, je suis <span class='highlight'>Imen Hadj Yahya</span>",
        "hero.subtitle": "Ingénieure Informatique (Développeuse FullStack Web / Cloud et Devops / Passionnée d'IA)",
        "hero.cta": "Contactez-moi",
        
        // About Section
        "about.title": "À propos de moi",
        "about.para1": "Je suis une jeune ingénieure informatique passionnée et récemment diplômée, avec une expérience professionnelle variée acquise à travers plusieurs stages en entreprise. Mon parcours combine à la fois une solide formation académique et une pratique concrète du développement dans différents environnements.",
        "about.para2": "Je communique facilement en français et en anglais, ce qui me permet de travailler efficacement dans des contextes internationaux. Dotée d'une grande curiosité intellectuelle, j'aime apprendre en continu et m'adapter aux nouvelles technologies. Mon expérience en travail d'équipe, renforcée par mon engagement associatif, m'a enseigné l'importance de la collaboration et de l'écoute pour mener des projets à succès.",
        "about.para3": "Je recherche aujourd'hui à rejoindre une équipe dynamique où je pourrais contribuer à des projets innovants tout en continuant à développer mes compétences dans un environnement stimulant et bienveillant.",
        "about.email": "Email:",
        "about.location": "Localisation:",
        "about.location.value": "Tunis, Tunisie",
        "about.availability": "Disponibilité:",
        "about.availability.value": "Ouverte aux opportunités",
        
        // Experience Section
        "experience.title": "Expérience Professionnelle",
        "experience.internship": "Stage",
        "experience.achievements": "Principales Réalisations",
        
        // Job 1
        "experience.job1.title": "Développeuse Web Full Stack Java (Spring Boot)/React",
        "experience.job1.company": "Attijari Bank, Tunis, Tunisie",
        "experience.job1.achievement1": "Conception et développement d'une plateforme de satisfaction client en architecture microservices, permettant une gestion modulable et scalable des fonctionnalités.",
        "experience.job1.achievement2": "Intégration d'un système de recommandation basé sur l'IA utilisant un modèle LLM pour proposer automatiquement des questions et aider l’administrateur à créer des enquêtes pertinentes.",
        "experience.job1.achievement3": "Développement du front-end en React, avec intégration des microservices et visualisation dynamique des données.",
        "experience.job1.achievement4": "Création de dashboards analytiques interactifs via Metabase pour le suivi des réponses et des indicateurs clés (KPI) de satisfaction client.",
        "experience.job1.achievement5": "Déploiement et orchestration de l’application sur Kubernetes, gestion des conteneurs Docker et pipelines CI/CD automatisés avec GitHub Actions.",
        "experience.job1.achievement6": "Travail en environnement Agile SCRUM, avec collaboration étroite avec les équipes métier à travers user stories, sprints et réunions régulières.",
        "experience.job1.achievement7": "Participation aux tests fonctionnels, maintenance des services et ajustements continus pour assurer la qualité et la scalabilité de la plateforme."
,
        // Job 2
        "experience.job2.title": "Développeuse Web Full Stack Java (Spring Boot)/React",
        "experience.job2.company": "Assemblée des Représentants du Peuple – ARP, Tunis, Tunisie",
        "experience.job2.achievement1": "Développement d’une application Full Stack pour la gestion des amendements législatifs, permettant de créer, modifier et suivre les amendements des projets de loi.",
        "experience.job2.achievement2": "Mise en place de l'authentification sécurisée via Google OAuth et sécurisation des endpoints avec Spring Security.",
        "experience.job2.achievement3": "Développement du front-end en React, avec affichage dynamique des articles, projets de loi et amendements.",
        "experience.job2.achievement4": "Ajout de fonctionnalités de recherche et de filtrage avancées pour retrouver rapidement les projets de loi, articles ou amendements selon des critères multiples.",
        "experience.job2.achievement5": "Export des données et rapports législatifs au format PDF et CSV, permettant un partage et une consultation faciles.",
        "experience.job2.achievement6": "Mise en œuvre de bonnes pratiques Full Stack : séparation front-end / back-end, gestion des états via Context API et communication via API REST.",
        "experience.job2.achievement7": "Travail en environnement Agile SCRUM, collaboration avec les équipes métier et ajustements selon les retours des utilisateurs.",
        "experience.job2.achievement8": "Participation aux tests fonctionnels, maintenance de l’application et améliorations continues pour garantir fiabilité et sécurité."
,
        // Job 3
        
        "experience.job3.title": "Administrateur Système et Réseau",
        "experience.job3.company": " Tunisie Telecom, Tunis, Tunisie",
        "experience.job3.achievement1": "Configuration et déploiement de switchs Cisco pour améliorer l'infrastructure réseau de l'entreprise.",
        "experience.job3.achievement2": "Mise en place d'une supervision réseau avec Nagios pour le monitoring et la gestion proactive des équipements réseau.",
        "experience.job3.achievement3": "Développement de scripts d'automatisation pour la configuration et le déploiement des postes de travail, facilitant la maintenance et réduisant les erreurs.",
        "experience.job3.achievement4": "Participation à l'installation et à la gestion de la sécurité réseau, incluant VLANs et politiques d'accès.",
        "experience.job3.achievement5": "Travail en collaboration avec l'équipe IT pour garantir la disponibilité et la performance du réseau."
,

        // Job 4
       
        "experience.job4.title": "Projet de fin d’études | Système automatisé de traçabilité",
        "experience.job4.company": "Visteon Corporation, Tunis, Tunisie",
        "experience.job4.achievement1": "Conception et réalisation d’un système de traçabilité automatisé basé sur la lecture de QR codes pour le suivi des produits.",
        "experience.job4.achievement2": "Développement de l’application pour la lecture et l’enregistrement des QR codes, permettant un suivi en temps réel des composants.",
        "experience.job4.achievement3": "Mise en place d’une base de données pour centraliser les informations de traçabilité et faciliter l’analyse des flux.",
        "experience.job4.achievement4": "Automatisation des processus de suivi et génération de rapports pour améliorer la production et réduire les erreurs.",
        "experience.job4.achievement5": "Gestion du projet selon les méthodes Agile, avec planification, tests et documentation complète du système."
,

        // Education Section
        "education.title": "Éducation",
        "education.view-diploma": "Voir le diplôme",
        "education.diploma3.alt": "Diplôme d'Ingénieur",
        "education.diploma2.alt": "Licence Nationale en Génie Mécanique (Mécatronique)",
        "education.diploma1.alt": "Baccalauréat Sciences Expérimentales",
        
        // Degree 1
        "education.degree1.title": "Diplôme National d'Ingénieur en Informatique",
        "education.degree1.school": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "education.degree1.details": "Spécialité: Développement Web, Cloud & DevOps | Mention: Très Bien | Moyenne : 16.03",
        
        // Degree 2
        "education.degree2.title": "Licence Nationale en Génie Mécanique (Mécatronique)",
        "education.degree2.school": "Institut Supérieur des Études Technologiques de Radès (ISET Radès)",
        "education.degree2.details": "Spécialité : Mécatronique | Mention : Bien | Moyenne : 13.86",

        // Degree 3
        "education.degree3.title": "Baccalauréat Sciences Expérimentales",
        "education.degree3.school": "Lycée Bardo",
        "education.degree3.details": "Mention: Bien | Moyenne 14.55",
        
        // Skills Section
        "skills.title": "Compétences",
        "skills.langages": "Langages de programmation",
        "skills.frontend": "Framework de développement Web Frontend",
        "skills.backend": "Framework de développement Web Backend",
        "skills.BD": "Bases de données",
        "skills.devops": "Cloud, DevOps & CI/CD",
        "skills.administration": "Administration système et réseau",
        "skills.agile": "Méthodes Agile",
        "skills.analyse": "Analyse des données",
        "skills.tests": "Tests & Assurance Qualité",
        
        // Languages Section
        "languages.title": "Langues",
        "languages.arabic": "Arabe",
        "languages.french": "Français",
        "languages.english": "Anglais",
        "languages.level.native": "Langue maternelle",
        "languages.level.b2": "Niveau B2",
        "languages.Deutsch": "allemand",
        "languages.level.A1": "Niveau A1",


        // Projects Section
        "projects.title": "Projets Académiques",
        "projects.description": "Description du projet",
        "projects.achievements": "Réalisations Techniques",
        "projects.view.code": "Voir le code",
        "projects.view.github": "Voir le code source",
        
        // Project 1
        "projects.project1.title": "Pipeline CI/CD DevOps avec Jenkins",
        "projects.project1.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project1.description": "Implémentation d'un pipeline CI/CD complet pour une application Spring Boot, automatisant l'intégration, les tests, la sécurité, la conteneurisation et le déploiement avec monitoring en temps réel.",
        "projects.project1.achievement1": "Jenkins : Orchestration complète du pipeline CI/CD.",
        "projects.project1.achievement2": "Git : Gestion de versions et intégration continue.",
        "projects.project1.achievement3": "JUnit : Tests unitaires automatisés avec rapport de couverture de code.",
        "projects.project1.achievement4": "SonarQube : Analyse statique de code et métriques de qualité en continu.",
        "projects.project1.achievement5": "Docker : Conteneurisation de l'application Spring Boot.",
        "projects.project1.achievement6": "Docker Compose : Orchestration du contenaire Docker.",
        "projects.project1.achievement7": "Nexus : Gestion centralisée des artefacts et image Docker.",
        "projects.project1.achievement8": "Prometheus : Collecte et monitoring des métriques applicatives.",
        "projects.project1.achievement9": "Grafana : Visualisation des dashboards de performance et santé.",
        "projects.project1.achievement10": "Trivy : Scan de sécurité de l'image Docker.",
        
        // Project 2
       "projects.project2.title": "coConsult – Application Full Stack",
        "projects.project2.subtitle": "Projet académique",
        "projects.project2.description": "Développement d’une application Full Stack facilitant le déploiement et la personnalisation de modules ERP adaptés aux besoins des PME.",
        "projects.project2.achievement1": "Conception et développement du backend avec Spring Boot.",
        "projects.project2.achievement2": "Développement de l’interface utilisateur avec Angular et Bootstrap.",
        "projects.project2.achievement3": "Modélisation UML et conception fonctionnelle avec StarUML.",
        "projects.project2.achievement4": "Gestion de projet et organisation des tâches avec Trello.",
        "projects.project2.achievement5": "Gestion de versions et collaboration avec GitHub.",
        "projects.project2.achievement6": "Intégration complète entre frontend et backend.",
        // Project 3
        "projects.project3.title": "XperienceZone Web & Desktop – Application Full Stack",
        "projects.project3.subtitle": "Projet académique",
        "projects.project3.description": "Développement d’une application web et desktop facilitant la planification et la gestion d’événements et d’activités sportives.",
        "projects.project3.achievement1": "Développement de l’application web avec Symfony.",
        "projects.project3.achievement2": "Développement de l’application desktop en Java.",
        "projects.project3.achievement3": "Conception et gestion de la base de données avec MySQL.",
        "projects.project3.achievement4": "Création d’interfaces modernes avec Bootstrap.",
        "projects.project3.achievement5": "Gestion de versions et collaboration avec GitHub.",
        "projects.project3.achievement6": "Modélisation UML et conception fonctionnelle avec StarUML.",

        
        
        // Contact Section
        "contact.title": "Contactez-moi",
        "contact.email": "Email",
        "contact.phone": "Téléphone",
        "contact.location": "Localisation",
        "contact.location.value": "Tunis, Tunisie",
        "contact.availability": "Disponibilité",
        "contact.availability.value": "Ouverte aux opportunités en développement Full-Stack, Cloud/DevOps et IA",
        "contact.note": "N'hésitez pas à me contacter par email ou LinkedIn pour discuter de collaborations ou opportunités."
    }
};

// Language switching function
// Language switching function - VERSION CORRIGÉE
function switchLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if the element is a nav link (contains an icon)
            if (element.closest('.nav-links')) {
                // For nav links, only update the text content of the span
                const span = element.querySelector('span');
                if (span) {
                    span.textContent = translations[lang][key];
                }
            } else {
                // For other elements, update normally
                const translation = translations[lang][key];
                if (translation.includes('<span') || translation.includes('<i>') || translation.includes('<br>')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        }
    });
    
    // Update form placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update image alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.alt = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update page title
    const name = document.querySelector('[data-i18n="name"]')?.textContent || 'Imen Hadj Yahya';
    const title = document.querySelector('[data-i18n="title"]')?.textContent || 'Ingénieure Informatique';
    document.title = `${name} | ${title}`;
    
    // Save preference to localStorage
    localStorage.setItem('preferred-language', lang);
}

// ===== YOUR EXISTING FUNCTIONALITY =====

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Update active link on scroll
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Form submission handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Get success message based on current language
            const currentLang = document.documentElement.lang || 'fr';
            const successMessages = {
                en: 'Thank you for your message! I\'ll get back to you soon.',
                fr: 'Merci pour votre message! Je vous répondrai bientôt.'
            };
            
            // Show appropriate success message
            alert(successMessages[currentLang] || successMessages.en);
            this.reset();
        });
    }
}

// Add animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements to animate
    document.querySelectorAll('.timeline-item, .education-card, .involvement-card, .cert-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations
function initHeroAnimation() {
    const hero = document.querySelector('.hero');
    if(hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 300);
    }
}

// ===== MAIN INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    initSmoothScrolling();
    initActiveNavOnScroll();
    initContactForm();
    initScrollAnimations();
    initHeroAnimation();
    initDiplomaLightbox();
    initJenkinsfileLightbox();
    initPDFDownloads(); 
    // Initialize language system
    // Check for saved language preference or default to French
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    
    // Set up language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Apply initial language
    switchLanguage(savedLang);
});

// Lightbox functionality for diploma photos
function initDiplomaLightbox() {
    const lightbox = document.getElementById('diploma-lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // Open lightbox when clicking on diploma thumbnails
    document.querySelectorAll('.photo-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const fullsizeImage = this.getAttribute('data-fullsize');
            const altText = this.querySelector('img').getAttribute('alt');
            
            lightboxImage.src = fullsizeImage;
            lightboxImage.alt = altText;
            lightboxCaption.textContent = altText;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            lightboxImage.src = '';
        }, 300);
    }
    
    // Close on X button click
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Close on mobile swipe down
    let touchStartY = 0;
    lightbox.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    });
    
    lightbox.addEventListener('touchend', function(e) {
        const touchEndY = e.changedTouches[0].clientY;
        if (touchEndY - touchStartY > 100) { // Swiped down
            closeLightbox();
        }
    });
}

// Fonction pour le lightbox du Jenkinsfile
function initJenkinsfileLightbox() {
    const jenkinsfileLightbox = document.getElementById('jenkinsfile-lightbox');
    const jenkinsfileCode = document.querySelector('.jenkinsfile-code');
    const copyBtn = document.querySelector('.copy-jenkinsfile-btn');
    const closeBtn = jenkinsfileLightbox.querySelector('.lightbox-close');
    
    // Ouvrir le lightbox
    document.querySelectorAll('.view-jenkinsfile-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            jenkinsfileLightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Fermer le lightbox
    function closeLightbox() {
        jenkinsfileLightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    
    // Fermer en cliquant en dehors
    jenkinsfileLightbox.addEventListener('click', function(e) {
        if (e.target === jenkinsfileLightbox) {
            closeLightbox();
        }
    });
    
    // Copier le code
    copyBtn.addEventListener('click', function() {
        const codeToCopy = jenkinsfileCode.textContent;
        
        navigator.clipboard.writeText(codeToCopy)
            .then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copié!';
                this.classList.add('copied');
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.classList.remove('copied');
                }, 2000);
            })
            .catch(err => {
                console.error('Erreur de copie:', err);
            });
    });
    
    // Fermer avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && jenkinsfileLightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Fonction pour gérer les téléchargements PDF
function initPDFDownloads() {
    const pdfFiles = {
        'az900-module1.pdf': 'assets/PDF/Coursera 2KP2WEFELPLV.pdf',
        'az900-module2.pdf': 'assets/PDF/Coursera_course2.pdf',
        'az900-module3.pdf': 'assets/PDF/Course3.pdf',
        'az900-module4.pdf': 'assets/PDF/Course4.pdf'
    };
    
    // Ajouter l'événement click sur chaque bouton
    document.querySelectorAll('.download-pdf-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const pdfName = this.getAttribute('data-pdf');
            const pdfPath = pdfFiles[pdfName];
            
            if (pdfPath) {
              
                const downloadLink = document.createElement('a');
                downloadLink.href = pdfPath;
                downloadLink.download = pdfName;
                downloadLink.target = '_blank'; 
                
               
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
                
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Téléchargé!';
                this.style.background = '#10b981';
                this.style.borderColor = '#10b981';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = '';
                    this.style.borderColor = '';
                }, 2000);
            } else {
                alert('Fichier non disponible');
            }
        });
    });
}






