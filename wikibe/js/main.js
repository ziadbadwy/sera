(function ($) {
  "use strict";

  /*===========================================
              Table of contents
  01. Preloader
  02. Hero Slider
  03. Service Slider
  04. Package Box slider
  05. Latest Blog Slider
  06. Brand Slider
  07. Counter Active
  08. About Us Image Slider
  09. Special Service Image Slider
  10. Team Slider
  11. Testomonial Slider Active
  12. Work Process Slider Active
  13. Contact Us Image Slider Active
  14. Mobile Menu Active
  15. WOW Js Active
  16. Isotope Active
  17. Google Map Active
  18. Sidebar Comment Sliderblog-list-img-slider
  19. Blog Img Slide
  20. Product Image Slide
  21. Nice Select Active
  22. Spinner Select Active
  23. Product Slider Active
  24. Ralated Product Slider
  25. Filter Range Slider Active
  26. Team Slider Version 2
  27. Testomonial 2 Slider Active
  28. Set Background Image
  29. Sticky fix
  30. Scroll To Top
  31. Scroll Down
  32. Popup Sidebar and Search Box
  33. Product Ship Another Toggle
  34. One Page Nav
  35. cookies box close
  =============================================*/


  /*---------- 01. Preloader ----------*/
  $(window).load(function () {
    $('.preloader').fadeOut('slow');
  });
  

  

// handle main sidebar drop links
const UIdropLinks = document.querySelectorAll(".drop-a");
for (let dropA of UIdropLinks) {
  dropA.addEventListener("click", e => {
    for (let n of UIdropLinks) {
      n.nextElementSibling.style.height = 0 + "px";
      n.classList.remove("toggle-drop-a");
    }
    let calcHeight = 0;
    let calcParentHeight = 0;
    let calcGrandParentHeight = 0;
    for (let ele of dropA.nextElementSibling.children) {
      calcHeight += ele.children[0].offsetHeight;
    }

    if (dropA.nextElementSibling.offsetHeight === 0) {
      dropA.nextElementSibling.style.height = calcHeight + "px";
      dropA.classList.add("toggle-drop-a");
      if (dropA.parentElement.parentElement.classList.contains("dropped-ul")) {
        for (let parentLi of dropA.parentElement.parentElement.children) {
          calcParentHeight += parentLi.children[0].offsetHeight;
        }
        // if the grand parent element has a dropped-ul class
        // then set the garnd parent height to the dropped ul plus the grand parent direct children height
        dropA.parentElement.parentElement.style.height =
          calcParentHeight + calcHeight + "px";
        // dropA.parentElement.parentElement.parentElement.classList.add('toggle-drop-a');
        dropA.parentElement.parentElement.parentElement.children[0].classList.add(
          "toggle-drop-a"
        );
      }

      if (
        dropA.parentElement.parentElement.parentElement.parentElement.classList.contains(
          "dropped-ul"
        )
      ) {
        for (let grandLi of dropA.parentElement.parentElement.parentElement
          .parentElement.children) {
          calcGrandParentHeight += grandLi.children[0].offsetHeight;
        }
        dropA.parentElement.parentElement.parentElement.parentElement.style.height =
          calcGrandParentHeight + calcHeight + "px";
        dropA.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].classList.add(
          "toggle-drop-a"
        );
      }
    } else {
      dropA.nextElementSibling.style.height = 0 + "px";
      dropA.classList.remove("toggle-drop-a");
      if (dropA.parentElement.parentElement.classList.contains("dropped-ul")) {
        // if the garnd element has a dropped-ul class
        // then set the grand parent height to its direct children height only
        for (let parentLi of dropA.parentElement.parentElement.children) {
          calcParentHeight += parentLi.children[0].offsetHeight;
        }
        dropA.parentElement.parentElement.style.height =
          calcParentHeight + "px";
        dropA.parentElement.parentElement.parentElement.children[0].classList.add(
          "toggle-drop-a"
        );
      }

      if (
        dropA.parentElement.parentElement.parentElement.parentElement.classList.contains(
          "dropped-ul"
        )
      ) {
        for (let grandLi of dropA.parentElement.parentElement.parentElement
          .parentElement.children) {
          calcGrandParentHeight += grandLi.children[0].offsetHeight;
        }
        dropA.parentElement.parentElement.parentElement.parentElement.style.height =
          calcGrandParentHeight + "px";
        dropA.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].classList.add(
          "toggle-drop-a"
        );
      }
    }
    e.preventDefault();
  });
}



// projects slider
const projectsSlider = new Swiper('.home-projects-slider', {
  centeredSlides: false,
  // speed: 1600,
  speed: 1000,
  loop: false,
  rtl : true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: true
  },
  slidesPerView: 4,
  spaceBetween: 22,
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 22
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 32
    }
    // 1399: {
    //   slidesPerView: 4,
    //   spaceBetween: 22
    // }
  },
  navigation: {
    nextEl: '.projects-slider-next',
    prevEl: '.projects-slider-prev'
  }
});
  /*---------- 3.Service Slider Active ----------*/
  $('.service-slider-area').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    adaptiveHeight: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        }
      }, {
        breakpoint: 992,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        }
      }, {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  /*---------- 4.Package Box Slider Active ----------*/
  $('.package-box-slider-active').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 768,
        settings: {
          fade: true,
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  /*---------- 5.Latest Blog  Slider Active ----------*/
  $('.latest-blog-slider-active').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  /*---------- 6. Brand  Slider Active ----------*/
  $('.brand-slider-active').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  /*----------- 7. Counter Up Active ----------*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


	

  /*---------- 8.About Us Image Slider Active ----------*/
  $('.about-img-slide-active').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          fade: true,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  /*---------- 8.Special Service Image Slider ----------*/
  $('.speical-service-img ').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          fade: true,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*---------- 10. Team Slider ----------*/
  $('.team-slider-active').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*---------- 11. Testomonial Slider Active ----------*/
  $('.testomonial-slider-active').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 768,
        settings: {
          fade: true,
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*---------- 12. Work Process Slider Active ----------*/
  $('.work-process-slide-active').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          fade: true,
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  /*---------- 13.Contact Us Image Slider Active ----------*/
  $('.contact-img-slide').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          fade: true,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*---------- 14. Mobile Menu Active ----------*/
  jQuery('.mobile-menu-active').meanmenu({
    meanMenuContainer: '.mobile-menu-container',
    meanScreenWidth: "993"
  });



  /*---------- 15. WOW Js Active ----------*/
  new WOW().init();



  /*---------- 16. Isotope Active ----------*/
  $('.grid').imagesLoaded(function () {
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    })

    // filter items on button click
    $('.projects-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });

    // Menu Active Class 
    $('.projects-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

  })


  





  /*---------- 17. Google Map Active ----------*/
  function basicmap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,
      scrollwheel: false,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.6700, -73.9400), // New York
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": .2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dedede"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }]
    };
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('contact-map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.6700, -73.9400),
      map: map,
      title: 'Cryptox'
    });
  }
  if ($('#contact-map').length != 0) {
    google.maps.event.addDomListener(window, 'load', basicmap);
  }




  /*---------- 18. Sidebar Comment Slider ----------*/
  $('.sidebar-comment-slide').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });


  /*---------- 19.Blog Img Slide ----------*/
  $('.blog-list-img-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          fade: true,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  /*---------- 20.Product Image Slide ----------*/
  $('.product-img-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          fade: true,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*---------- 21.Nice Select Active ----------*/
  $('select').niceSelect();

  /*---------- 22.Spinner Select Active ----------*/
  $("#spinner").spinner({
    icons: {
      down: "",
      up: ""
    },
    min: 1
  });



  /*---------- 23.Product Slider Active ----------*/
  $('.shop-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    asNavFor: '.shop-slider-nav',
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });
  $('.shop-slider-nav').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.shop-product-slider',
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    }]


  });


  /*---------- 24.Ralated Product Slider ----------*/
  $('.related-product-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 1400,
        settings: {
          arrows: false,
        }
      }, {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      }, {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });








  /*---------- 25. Filter Range Slider Active ----------*/
  $("#slider-range").slider({
    range: true,
    min: 10,
    max: 300,
    values: [10, 220],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val("Price: $" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));







  /*---------- 26. Team Slider Version 2 ----------*/
  $('.v2-team-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 1300,
        settings: {
          arrows: false,
        }
      },{
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
          centerMode: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



/*---------- 27. Testomonial 2 Slider Active ----------*/
  $('.testomoial-2-slider').slick({
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  });




  
  /*---------- 28.Set Background Image ----------*/
  if ($('.background-image').length > 0) {
    $('.background-image').each(function () {
      var src = $(this).attr('data-src');
      $(this).css({
        'background-image': 'url(' + src + ')'
      });
    });
  };



  /*---------- 29. Sticky fix ----------*/
  $(window).on("scroll", function () {

    if ($(window).width() < 768) {
      // This is for Mobile
      if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
      } else {
        $('header').removeClass("sticky");
      }
    }
    else {
      // This is for Desktop
      if ($(this).scrollTop() > 150) {
        $('header').addClass("sticky");
      } else {
        $('header').removeClass("sticky");
      }
    }

    

    //Check to see if the window is top if not then display button
    if ($(this).scrollTop() > 400) {
      $('.scrollToTop').addClass('show');
    } else {
      $('.scrollToTop').removeClass('show');
    }


  });


  




  /*---------- 30. Scroll To Top ----------*/
  $('.scrollToTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    return false;
  })


  /*---------- 31. Scroll Down ----------*/
  function smoothSctollTop() {
    $('.arrow-down-btn').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 100);
      }
    });
  }
  smoothSctollTop();



/*---------- 32. Popup Sidebar and Search Box ----------*/
  function popupElement(){
    // Sidebar Popup
    $('#sidebarToggler').on('click', function (e) {
      e.preventDefault();
      $('.overly-sidebar-wrapper').addClass('show');
    });
    $('.overly-sidebar-wrapper').on('click',function(e){
      e.stopPropagation();
      $('.overly-sidebar-wrapper').removeClass('show')
    });
    $('.overly-sidebar-wrapper .overly-sidebar-content').on('click',function(e){
      e.stopPropagation();
      $('.overly-sidebar-wrapper').addClass('show')
    });
    $('#sidebar-close').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $('.overly-sidebar-wrapper').removeClass('show');
    });
    

    // Search Box Popup
    $('#searchBoxModal').on('click', function (e) {
      e.preventDefault();
      $('.popup-search-box').addClass('show');
    });
    $('.popup-search-box').on('click', function (e) {
      e.stopPropagation();
      $('.popup-search-box').removeClass('show');
    });
    $('.popup-search-box form').on('click', function (e) {
      e.stopPropagation();
      $('.popup-search-box').addClass('show');
    });
    $('.searchClose').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $('.popup-search-box').removeClass('show');
    });
  };
  popupElement()





  /*----------- 33. Product Ship Another Toggle ----------*/
  $('#buyerShipAnother').on('change', function () {
    if ($(this).is(':checked')) {
      $('.vs-billing-differentAddress').slideDown();
    } else {
      $('.vs-billing-differentAddress').slideUp();
    }
  });


  /*----------- 34. One Page Nav ----------*/
  function onePageNav(element) {
    if ($(element).length > 0) {
      $(element).each(function () {
        $(this).find('a').each(function () {
          $(this).on('click', function () {
            var target = $(this.getAttribute('href'));
            if (target.length) {
              event.preventDefault();
              $('html, body').stop().animate({
                scrollTop: target.offset().top - 30
              }, 1000);
            };

          });
        });
      })
    }
  };
  onePageNav('.onepage-nav');


    /*----------- 35. cookies box close ----------*/
  $('#cookies-popup .cls-btn').on('click', (e)=> {
    e.preventDefault();
    $('#cookies-popup').css('display', 'none')
  })

/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".uk-nav li a").on('click', function(e) {
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -100}, 1000);
			return false;
		
	});	



})(jQuery);

// Search Radio
function searchTypeButtons() {
  $('.property_search_filter label.active input[type="radio"]').prop('checked', true);
  var buttonWidth = $('.property_search_filter label.active').width();
  var arrowDist = $('.property_search_filter label.active').position();
  $('.property_search_filter-arrow').css('left', arrowDist + (buttonWidth / 2));
  $('.property_search_filter label').on('change', function() {
    $('.property_search_filter input[type="radio"]').parent('label').removeClass('active');
    $('.property_search_filter input[type="radio"]:checked').parent('label').addClass('active');
    var buttonWidth = $('.property_search_filter label.active').width();
    var arrowDist = $('.property_search_filter label.active').position().left;
    $('.property_search_filter-arrow').css({
      'left': arrowDist + (buttonWidth / 1.7),
      'transition': 'left 0.4s cubic-bezier(.95,-.41,.19,1.44)'
    });
  });
}
if ($(".hero_banner").length) {
  searchTypeButtons();
  $(window).on('load resize', function() {
    searchTypeButtons();
  });
}