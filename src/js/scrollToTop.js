const btn = $(".btn-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 600) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({scrollTop: 0}, "400");
});
