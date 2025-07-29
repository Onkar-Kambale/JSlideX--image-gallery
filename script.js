$(function () {
  let index = 0, slides = $(".slide"), dotsDiv = $(".dots");

  // Create dots
  slides.each((i) => dotsDiv.append(`<span data-i="${i}"></span>`));
  const dots = $(".dots span");

  function show(i) {
    slides.removeClass("active").eq(i).addClass("active");
    dots.removeClass("active").eq(i).addClass("active");
  }

  function next() {
    index = (index + 1) % slides.length;
    show(index);
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
  }

  $("#next").click(next);
  $("#prev").click(prev);
  dots.click(function () {
    index = $(this).data("i");
    show(index);
  });

  let timer = setInterval(next, 4000);
  $(".slider-container").hover(() => clearInterval(timer), () => timer = setInterval(next, 4000));
  $("#toggleBtn").click(() => $(".slider-container").slideToggle(400));

  show(index);
  $(".slider-container").slideDown(500);
});
