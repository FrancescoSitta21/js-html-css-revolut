$(document).ready(
  function() {
    $(this).children('.menuatendina').addClass('attività');
  }
);

$('.iniziotendina').mouseleave(
  function() {
    $(this).children('.menuatendina').removeClass('attività');
  }
);
