(function($) {

/*Google Map Style*/
var CustomMapStyles  = [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":!0},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#283548"}]}]

var windowWidth = $(window).width();
$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	
  
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};


//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}


/*noyon*/
  if (windowWidth <= 1920) {
    $('.humberger-icon-cntlr').on('click', function(e){
      $('.xs-mbl-menu-cntlr').addClass('opacity-1');
      $('.bdoverlay').addClass('active');
      $('body').addClass('active-scroll-off');
      $(this).parent().addClass('hmbrgr-close-hide-show');
    });
    $('.close-icon-cntlr').on('click', function(e){
      $('.bdoverlay').removeClass('active');
      $('.xs-mbl-menu-cntlr').removeClass('opacity-1');
      $('body').removeClass('active-scroll-off');
      $(this).parent().removeClass('hmbrgr-close-hide-show');
    });
    
    $('li.menu-item-has-children > a').on('click', function(e){
      e.preventDefault();
    $(this).toggleClass('sub-menu-active');
    $(this).parent().toggleClass('sub-menu-arrow');
    $(this).next().slideToggle(300);

  });
  }

  $('.ftr-top-rt-link h5').on('click', function(){
    $(this).toggleClass('ftr-menu-rotet-icon');
    $(this).parent().siblings().find('h5').removeClass('ftr-menu-rotet-icon');
    $(this).parent().find('ul').slideToggle(300);
    $(this).parent().siblings().find('ul').slideUp(300);
  });



/*
    if( $('.portfolioSlider').length ){
      $('.portfolioSlider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true
          }
        }
        ]
      });
    }*/


if( $('.portfolioSlider').length ){
    $('.portfolioSlider').slick({
      dots: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}



if (windowWidth <= 768) {
  if( $('.rlzisnGridSlider').length ){
    $('.rlzisnGridSlider').slick({
      dots: true,
      arrow: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
}

if( $('.inrRlzisnGridSlider').length ){
  $('.inrRlzisnGridSlider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    touchMove: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: true,
        dots: false,
        slidesToScroll: 1
      }
    },
    ]
  });
}


if( $('.fancybox').length ){
  $(".fancybox").fancybox();
}


if( $('.prdct-dtls-rt-desc-btn').length ){
  $('.prdct-dtls-rt-desc-btn span').click(function(e){
    event.preventDefault();
    $('.prdct-dtls-rt-dscrsn-cntlr').toggleClass('prdct-dtls-rt-dscrsn-show')
  });
}

if( $('#catapultCookie').length ){
  $('#catapultCookie').click(function(e){
    event.preventDefault();
    $('#catapult-cookie-bar').hide();
  });
}



  if( $('#sidebar').length ){
    $('#sidebar').stickySidebar({
      topSpacing: 100,
      bottomSpacing: 60
    });
  }
  if( $('.hdr-rgt-btm-srch-btn').length ){
    $('.hdr-rgt-btm-srch-btn button').click(function(e){
      event.preventDefault();
      $('.hdr-rgt-btm-srch-btn').toggleClass('hdr-rgt-srch-input-show')
    });
  }



if (windowWidth <= 768){
  $('.module-cntlr-mbl h3').on('click', function(){
    $(this).toggleClass('module-title-rttet-icon');
    $(this).parent().siblings().find('h3').removeClass('module-title-rttet-icon');
    $(this).parent().find('.catagory-module').slideToggle(300);
    $(this).parent().siblings().find('.catagory-module').slideUp(300);
  });
}
  
if (windowWidth <= 768){
  $('.catagory-link-module ul li span').on('click', function(e){
    e.preventDefault();
    $(this).next().slideToggle(500);
    $(this).parent().siblings().find('ul').slideUp(300);
  });
}
/*skew*/

$(".hm-about-skew-top").css('border-right-width', windowWidth);
$(".hm-about-skew-btn").css('border-right-width', windowWidth);

$(".hm-about-top-md-skew").css('border-right-width', windowWidth);
$(".hm-about-btm-md-skew").css('border-right-width', windowWidth);

$(".neo-about-sec-top-angle").css('border-left-width', windowWidth);
$(".neo-about-sec-btm-angle").css('border-left-width', windowWidth);
$(".neo-about-sec-desc-btm-angle").css('border-left-width', windowWidth);

$(".nw-map-angle").css('border-left-width', windowWidth);




var windowLength = $(window).width();
var containerLength = $('.container').width();
var mainLenght = windowLength - containerLength;
var leftLenght = mainLenght / 2;
$(".search-results-lft-bg").css('width', leftLenght);


$(window).resize(function() { 
  var window2Width = $(window).width();
    $(".hm-about-skew-top").css('border-right-width', window2Width);
    $(".hm-about-skew-btn").css('border-right-width', window2Width);
    $(".hm-about-top-md-skew").css('border-right-width', window2Width);
    $(".hm-about-btm-md-skew").css('border-right-width', window2Width);

    $(".neo-about-sec-top-angle").css('border-left-width', window2Width);
    $(".neo-about-sec-btm-angle").css('border-left-width', window2Width);
    $(".neo-about-sec-desc-btm-angle").css('border-left-width', window2Width);

    $(".nw-map-angle").css('border-left-width', window2Width);
    $(".search-results-lft-bg").css('width', leftLenght);
});

$('.qty').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.plus'),
    btnDown = spinner.find('.minus'),
    min = 1,
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});



  if( $('.particles-js').length ){
    particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#4d5564"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#4d5564"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 80,
      "color": "#4d5564",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
  }
 




/*noyon*/




if( $('#mapID').length ){
var latitude = $('#mapID').data('latitude');
var longitude = $('#mapID').data('longitude');

var myCenter= new google.maps.LatLng(latitude,  longitude);
function initialize(){
    var mapProp = {
      center:myCenter,
      mapTypeControl:true,
      scrollwheel: false,
      zoomControl: true,
      disableDefaultUI: true,
      zoom:7,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: CustomMapStyles
      };

    var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
    var marker= new google.maps.Marker({
      position:myCenter,
        icon:'map-icon.png'
      });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

}



/* BS form Validator*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

    new WOW().init();

})(jQuery);