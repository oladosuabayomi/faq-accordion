'use strict';

const closeIcon = document.querySelector('.minus');
const openIcon = document.querySelector('.plus');
const faqContent = document.querySelector('.faq-content');

function toggleOpen() {
    closeIcon.style.display = 'none';
    openIcon.style.display = 'block'
    faqContent.style.display = 'none'
}

function toggleClose() {
    closeIcon.style.display = 'block';
    openIcon.style.display = 'none'
    faqContent.style.display = 'block'
}



closeIcon.addEventListener('click', toggleClose);
openIcon.addEventListener('click', toggleOpen);

/* closeIcon.addEventListener('click', function () {
    closeIcon.style.display = 'none';
    openIcon.style.display = 'block';

    faqContent.style.display = 'none';
})

openIcon.addEventListener('click', function () {
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';

    faqContent.style.display = 'block';
}); */
