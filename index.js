const footer = document.querySelector('footer');
const date = new Date();
footer.innerHTML = `<p>© Jacob Shandling ${date.getFullYear()}</p>`;