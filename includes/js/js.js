$(document).ready(function () {
  $('#photosgrid img').mouseover(function () {
      $(this).animate({
          opacity: 1,
      }, 1000);
  });

  // $('#photosgrid img').mouseleave(function () {
  //     $(this).animate({
  //         opacity: 0.5,
  //     }, 1000);
  // });
});