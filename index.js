function setCopyright() {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `<p>© Jacob Shandling ${date.getFullYear()}</p>`;
}

function highlightElement(element) {
    setTimeout(() => {element.classList.toggle("highlight-animate")}, 100)
    setTimeout(() => {element.classList.toggle("highlight-animate")}, 1700);
}

function addContactAnimation() {
    const cLinks = document.querySelector("#contact-links");
    const navLink = document.querySelector("#contact-nav-link");
    navLink.onclick = () => {
        highlightElement(cLinks);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    var testvar = 'hello';
    addContactAnimation()
    setCopyright();
});