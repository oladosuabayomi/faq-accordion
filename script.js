'use strict';

const btnHideContent = document.querySelectorAll('.minus');
const btnShowContent = document.querySelectorAll('.plus');
const faqContent = document.querySelectorAll('.faq-content');

/* const hideContent = function () {
    btnHideContent.classList.add('hide-element');
    btnShowContent.classList.remove('hide-element')
}
 */

for (let i = 0; i < btnShowContent.length; i++) {

    const showContent = function () {
        btnShowContent[i].classList.add('hidden')
        btnHideContent[i].classList.remove('hidden');
        faqContent[i].classList.remove('hidden')

    }

    btnShowContent[i].addEventListener('click', showContent);
}

for (let i = 0; i < btnHideContent.length; i++) {

    const hideContent = function () {
        btnShowContent[i].classList.remove('hidden')
        btnHideContent[i].classList.add('hidden');
        faqContent[i].classList.add('hidden')

    }

    btnHideContent[i].addEventListener('click', hideContent);
}
























// function toggleOpen() {
//     closeIcon.style.display = 'none';
//     openIcon.style.display = 'block'
//     faqContent.style.display = 'none'
// }

// function toggleClose() {
//     closeIcon.style.display = 'block';
//     openIcon.style.display = 'none'
//     faqContent.style.display = 'block'
// }



// closeIcon.addEventListener('click', toggleClose);
// openIcon.addEventListener('click', toggleOpen);

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
