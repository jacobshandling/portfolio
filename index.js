function setCopyright() {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `<p>© Jacob Shandling ${date.getFullYear()}</p>`;
}

function highlightElement(element) {
    const origClass = element.className;
    setTimeout(() => {element.className = "highlight-animate";}, 100)
    setTimeout(() => {element.className = origClass;}, 1700);
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