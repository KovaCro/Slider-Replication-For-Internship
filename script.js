const broj_slika = 9;

// Initial
$(function() {
  // Loada slike u slider dinamicki
  for(let k = 0; k < 2; k++){ // Loado sam duplo slika jer je bilo praznine, na dizajnu su 2 slike vise nego u assetima koje sam dobio
    for(let i = 1; i < broj_slika+1; i++){
      if(i%2 != 0) {
        $("#upper").append(`<img src="assets/images/slider-image-${i}.jpg" height="200px" style="margin-left: 10px">`);
      } else {
        $("#lower").append(`<img src="assets/images/slider-image-${i}.jpg" height="200px" style="margin-left: 10px">`);
      }
    }
  }
});

let eventGoingOn = false;

$( ".rightArrow" ).click(function() {
  if(eventGoingOn) return;
  eventGoingOn = true;
  $(".slider").each(function() {
    const lastImg = $(this).children().last(); // desna slika
    lastImg.clone().prependTo($(this)); // klon appendaj na kraj
    lastImg.animate({ // fade outaj i removaj desnu
      opacity: 0,
      width: 0,
      margin: 0
    }, 600, () => {
      lastImg.remove()
      eventGoingOn = false
    });
  });
  eventGoingon = false;
});

$( ".leftArrow" ).click(function() {
  if(eventGoingOn) return;
  eventGoingOn = true;
  $(".slider").each(function() {
    const firstImg = $(this).children().first(); // Lijeva slika
    const newImg = firstImg.clone(); // Klon
    const w = firstImg.css("width"); // Treba za animaciju
    newImg.css({"width": "0", "margin-left": "0", "opacity":"0"}); // Pocetni css prije fadea
    newImg.appendTo($(this)); // Appendaj lijevu sliku na desnu stranu
    newImg.animate({ // Fade inaj appendanu sliku
      opacity: 1,
      marginLeft: '10px',
      width: w
    }, 600);
    firstImg.animate({ // Fade out i removaj lijevu sliku u slideru
      opacity: 0,
      width: 0,
      margin: 0
    }, 600, () => {
      firstImg.remove()
      eventGoingOn = false
    });
  });
  eventGoingon = false;
});