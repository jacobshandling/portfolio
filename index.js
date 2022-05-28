function setCopyright() {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `<p>© Jacob Shandling ${date.getFullYear()}</p>`;
}

function highlightElement(element) {
    setTimeout(() => {element.classList.toggle("highlight-animate")}, 250)
    setTimeout(() => {element.classList.toggle("highlight-animate")}, 1700);
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
        if (navLink.id=="contact-nav-link") {
            // 'Contact' nav link will both close the hamburger menu AND animate the contact links
            const cLinks = document.querySelector("#contact-links");
            navLink.onclick = () => {
                toggleHamburgerMenu();
                highlightElement(cLinks);
            }
        } else {
            navLink.onclick = () => {
                toggleHamburgerMenu();
            };
        }
        // navLink.addEventListener('mouseover', () => {
        //     navLink.classList.toggle('highlight-sticky-animate');
        // });
        // navLink.addEventListener('mouseleave,', () => {
        //     navLink.classList.toggle('unhighlight-animate');
        // });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setCopyright();
    setHamburgerMenuResponsiveness();
});
