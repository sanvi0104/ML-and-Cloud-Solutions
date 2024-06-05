$(document).ready(function () {
  $(".carousel-control-prev").addClass("disabled");
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  console.log(cardWidth);
  console.log(carouselWidth);
  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function (e) {
    console.log(carouselWidth - cardWidth * 3);
    $(".carousel-control-prev").removeClass("disabled");

    if (scrollPosition < carouselWidth - cardWidth * 2) {
      console.log("are you here");
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
