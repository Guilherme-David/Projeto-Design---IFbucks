$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2.5,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive:[
    {
        breakpoint: 1300,
        settings: {slidesToShow: 3,slidesToScroll: 1,}
    },
    {
        breakpoint: 768,
        settings: {slidesToShow: 1,slidesToScroll: 1,}
    }
]
    });
});