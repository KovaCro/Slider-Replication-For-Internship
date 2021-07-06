const animationTime = 600;

$(".rightArrow").click(() => {
  $(".arrows").children().prop('disabled', true);
  $(".slider").each(function() {
    const lastImg = $(this).children().last();
    const newImg = lastImg.clone();
    const w = lastImg.css("width");
    newImg.css({"width": "0", "margin-left": "0", "opacity":"0"});
    newImg.prependTo($(this));
    newImg.animate({
      opacity: 1,
      marginLeft: '10px',
      width: w
    }, animationTime);
    lastImg.animate({
      opacity: 0,
      width: 0,
      margin: 0
    }, animationTime, () => {
      lastImg.remove()
      $(".arrows").children().prop('disabled', false);
    });
  });
});

$(".leftArrow").click(() => {
  $(".arrows").children().prop('disabled', true);
  $(".slider").each(function() {
    const firstImg = $(this).children().first();
    const newImg = firstImg.clone();
    const w = firstImg.css("width");
    newImg.css({"width": "0", "margin-left": "0", "opacity":"0"});
    newImg.appendTo($(this));
    newImg.animate({
      opacity: 1,
      marginLeft: '10px',
      width: w
    }, animationTime);
    firstImg.animate({
      opacity: 0,
      width: 0,
      margin: 0
    }, animationTime, () => {
      firstImg.remove()
      $(".arrows").children().prop('disabled', false);
    });
  });
});