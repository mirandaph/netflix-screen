$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        500: {
            items:3
        },
        900:{
            items:5
        },
        1500:{
            items:9
        }
    }
})