$(document).ready(function(){


// cart hover on click
$('.cart').click(function(){
    $('.when-cart-hover').toggle();
});

// owl carosel for featured
$(".plist").owlCarousel({
  	smartSpeed : 500,
  	loop : true,
  	navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
  	nav : true,
  	margin:15,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
  });


// owl carosel for testimonial
$('.testimonial').owlCarousel({
    smartSpeed : 1000,
    loop : true,
    autoplay : true,
    autoplayTimeout : 4000,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    nav : true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
  });


// owl carosel for arrivals left col
$('.allcols').owlCarousel({
    smartSpeed : 500,
    loop : true,
    // autoplay : true,
    // autoplayTimeout : 4000,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    nav : true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
        }
    }
  });



// owl carosel for seller right col
$('.allcols-right').owlCarousel({
    smartSpeed : 500,
    loop : true,
    // autoplay : true,
    // autoplayTimeout : 4000,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    nav : true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
        }
    }
  });




// owl carosel for blog area
$('.blog').owlCarousel({
    smartSpeed : 500,
    loop : true,
    margin:15,
    // autoplay : true,
    // autoplayTimeout : 4000,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    nav : true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
  });



// owl carosel for brand area
$('.brand').owlCarousel({
    smartSpeed : 500,
    loop : true,
    // autoplay : true,
    autoplayTimeout : 4000,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    nav : true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:6,
        }
    }
  });



// Details Page
// related products

$('.alldivs').owlCarousel({
    smartSpeed : 500,
    loop : true,
    // autoplay : true,
    autoplayTimeout : 4000,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    nav : true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
  });


$('.thumbPic').owlCarousel({
    smartSpeed : 500,
    loop : true,
    margin:15,
    // autoplay : true,
    autoplayTimeout : 4000,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    nav : true,
    responsive:{
        0:{
            items:4,
        },
        600:{
            items:4,
        },
        1000:{
            items:4,
        }
    }
  });



// for tooltip
  $(function () {
  $('[data-toggle="tooltip"]').tooltip();
})


// upsell products
$(".sell").owlCarousel({
    smartSpeed : 500,
    loop : true,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    nav : true,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,

        },
        1000:{
            items:4,
        }
    }
  });



}); //document.ready end