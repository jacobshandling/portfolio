function setCopyright() {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `<p>© Jacob Shandling ${date.getFullYear()}</p>`;
}

function highlightElement(element) {
    setTimeout(() => {element.classList.toggle("highlight-animate")}, 250)
    setTimeout(() => {element.classList.toggle("highlight-animate")}, 1700);
}

function addContactAnimation() {
    const cLinks = document.querySelector("#contact-links");
    const navLink = document.querySelector("#contact-nav-link");
    navLink.onclick = () => {
        highlightElement(cLinks);
    };
}

function toggleHamburgerMenu() {
    const hamburger = document.querySelector('#hamburger');
    const navLinksContainer = document.querySelector('#nav-links');
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    };


function setHamburgerMenuResponsiveness() {
    const hamburger = document.querySelector('#hamburger');
    hamburger.onclick = () => toggleHamburgerMenu();
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(navLink => {
        navLink.onclick = () => toggleHamburgerMenu();
    })
}

document.addEventListener('DOMContentLoaded', () => {
    addContactAnimation()
    setCopyright();
    setHamburgerMenuResponsiveness();
});