$(document).ready(function () {
  // header sticky
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  });

  // toogel menu
  const toggleBtn = document.querySelector(".toogle-btn");
  const nav = document.querySelector("header nav");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  //   tab button
  $(".tab-link").click(function () {
    var tabID = $(this).attr("data-tab");
    $(this).addClass("active").siblings().removeClass("active");
    $("#tab-" + tabID)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
});

$(".testi-wrapper").slick({
  dots: true,
  speed: 300,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "0px",
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
