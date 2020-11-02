//Mobile Navigation
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

//load more
$(".movie__box").slice(0,10).show();

$("#loadmore").on("click",function(){
  $(".movie__box:hidden").slice(0,5).show();

  if($(".movie__box:hidden").length ==0)
  {
    $("#loadmore").fadeOut();
  }
})

//swiper slider
var swiper = new Swiper('.swiper-container.hero-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: '5',
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows : false,
      },
      breakpoints: {
        0: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 5
        },
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
  });

//LOAD MORE
  $( document ).ready(function () {
  $(".movie__box").slice(0, 10).show();
    if ($(".blogbox:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".movie__box:hidden").slice(0, 5).slideDown();
      if ($(".movie__box:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
  });