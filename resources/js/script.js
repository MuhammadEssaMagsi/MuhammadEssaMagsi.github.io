formSubmitBtn = document.getElementById('formSubmitBtn');
scrollToTop = document.getElementById('scrollToTop');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        scrollToTop.style.display = 'block';

    }
    else {
        scrollToTop.style.display = 'none';
    }
}

scrollToTop.addEventListener('click', ()=> {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
});