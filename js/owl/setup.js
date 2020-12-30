$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// quando botão "assistir agora" for clicado, abrir o trailer
function watch_trailer(elemento){
    window.open("https://www.youtube.com/watch?v=SvSkxBYuoQY&ab_channel=SonyPicturesatHomeUK");
}

// mais informações sobre house of cards
function info(elemento){
    window.open("https://www.imdb.com/title/tt1856010/");
}