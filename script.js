"use strict";

var animationTime = 600;
$(".rightArrow").click(function () {
  $(".arrows").children().prop('disabled', true);
  $(".slider").each(function () {
    var lastImg = $(this).children().last();
    var newImg = lastImg.clone();
    var w = lastImg.css("width");
    newImg.css({
      "width": "0",
      "margin-left": "0",
      "opacity": "0"
    });
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
    }, animationTime, function () {
      lastImg.remove();
      $(".arrows").children().prop('disabled', false);
    });
  });
});
$(".leftArrow").click(function () {
  $(".arrows").children().prop('disabled', true);
  $(".slider").each(function () {
    var firstImg = $(this).children().first();
    var newImg = firstImg.clone();
    var w = firstImg.css("width");
    newImg.css({
      "width": "0",
      "margin-left": "0",
      "opacity": "0"
    });
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
    }, animationTime, function () {
      firstImg.remove();
      $(".arrows").children().prop('disabled', false);
    });
  });
});
