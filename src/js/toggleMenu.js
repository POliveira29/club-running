const navbar = document.querySelector(".navbar");

$(document).ready(function () {
  $(".header__menu").click(function () {
    $(".navbar").toggleClass("active");
  });
});
