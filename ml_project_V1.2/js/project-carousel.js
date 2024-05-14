$(document).ready(function () {
  $(".carousel-control-prev").addClass("disabled");
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function (e) {
    $(".carousel-control-prev").removeClass("disabled");
    
    if (scrollPosition >= 608) {
      $(".carousel-control-next").addClass("disabled");
    }

    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $(".carousel-inner").animate(
        {
          scrollLeft: scrollPosition,
        },
        600
      );
    }
  });

  $(".carousel-control-prev").on("click", function () {
    $(".carousel-control-next").removeClass("disabled");
    if (scrollPosition <= 608) {
      $(".carousel-control-prev").addClass("disabled");
    }
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate(
        {
          scrollLeft: scrollPosition,
        },
        600
      );
    }
  });
});
