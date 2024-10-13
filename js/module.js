//KV-slider
$(".main-kv .slider").slick({
  arrows: true,
  speed: 1000,
  autoplaySpeed: 5000,
  autoplay: true,
  adaptiveHeight: false,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: false
});

$(".main-product-slider .slider").slick({
  arrows: true,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


//tabs
$(function() {
  $("#tabs").tabs();
});



// ScrollTrigger
window.counter = function () {
  // this refers to the html element with the data-scroll-showCallback tag
  var span = this.querySelector('span');
  var current = parseInt(span.textContent);

  span.textContent = current + 1;
};

  document.addEventListener('DOMContentLoaded', function () {
    var trigger = new ScrollTrigger ({
        addHeight: true
    });
});
