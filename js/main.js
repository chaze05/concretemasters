$(function(){
 
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 50) {
            //clearHeader, not clearheader - caps H
            $("header").addClass("bgWhite");3 
        }else{
            $("header").removeClass("bgWhite");
        }
    }); 

    $('#projects').owlCarousel({
        loop:true,
        nav:false,
        items:2,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
        $('.btnNext').click(function() {
            $('#projects').trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.btnPrev').click(function() {
            $('#projects').trigger('prev.owl.carousel');
        })


    $('#services').owlCarousel({
        loop:true,
        dots:false,
        nav:false,
        items:2,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    $('#banner').owlCarousel({
        loop:true,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
})