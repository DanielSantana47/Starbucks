window.addEventListener('scroll', ()=> {
    if (scrollY === 0) {
        document.querySelector('header').style.boxShadow = ''
    }
    else {
        document.querySelector('header').style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.2)'
    }
})
