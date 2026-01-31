const texts = [
    "I am a begginer developer.",
    "Python, Java, C++, JavaScript, HTML+CSS.",
    "Visit my Github to follow my Work!"
];

let i = 0;
let j = 0;
let currentText = '';
let isDeleting = false;
const speed = 35;
const pause = 1500;

function showIcons() {
    const items = document.querySelectorAll(".langs >*");
    items.forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, i*350);
    });
}

function type() {
    const typedEl = document.getElementById('typed');

    if (!isDeleting) {
        currentText = texts[i].substring(0, j+1);
        typedEl.textContent = currentText;
        j++;

        if(j === texts[i].length){
            isDeleting = true;
            setTimeout(type, pause);
            return;
        }
    } else {
        currentText = texts[i].substring(0, j-1);
        typedEl.textContent = currentText;
        j--;

        if(j === 0){
            isDeleting = false;
            i = (i + 1) % texts.length;
        }
    }

    setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
    showIcons();
});
