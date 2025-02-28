var containerseta = document.querySelector('.button-icon')
var container1 = document.querySelector('.places')


containerseta.addEventListener('click', function() {

    if (container1.style.display == 'block')
        container1.style.display = 'none'

    else{
        container1.style.display = 'block'
    }
})
