function onScroll() {
    showNavOnScroll();
    showBackToTopOnScroll();

    document.querySelectorAll('body > section').forEach((value) => {
       if(value.id != '') {
            activateMenuAtCurrentSection(value);
        }
    })
}

function showNavOnScroll() {
    if (scrollY > 0) {
        document.getElementById("navigation").classList.add("scroll");
    } else {
        document.getElementById("navigation").classList.remove("scroll");
    }
}

function showBackToTopOnScroll() {
    if (scrollY > 500) {
        document.getElementById("backToTopButton").classList.add("show");
    } else {
        document.getElementById("backToTopButton").classList.remove("show");
    }
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionEndAt = sectionTop + sectionHeight

    const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

    menuElement.classList.remove('active')
    if (sectionTop <= targetLine && sectionEndAt >= targetLine) {
        menuElement.classList.add('active');
    }
}

function addMenu() {
    document.body.classList.add("menu-expanded");
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

const options = {
    origin: "top",
    distance: "30px",
    duration: 700,
};

ScrollReveal(options).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .cards,
    #about,
    #about header,
    #about .content,
    #contact,
    #contact header,
    #contact .content
`);

window.addEventListener("scroll", onScroll);
