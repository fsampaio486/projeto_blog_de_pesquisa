const icons = document.querySelectorAll('.icon');
const titleParagraph = document.querySelectorAll('.title-paragraph');
const box = document.querySelectorAll('.box');

function search() {

    let input = document.querySelector('#input').value.toLowerCase();

    for (let i = 0; i < titleParagraph.length; i++) {
        let text = titleParagraph[i].innerText.toLowerCase();

        if (!text.includes(input)) {
            box[i].style.display = "none";
        } else {
            titleParagraph[i].style.display = "flex";
        };
    };
};

icons.forEach(icons => {
    icons.addEventListener('click', () => {
        icons.classList.toggle("filled");
    });
});