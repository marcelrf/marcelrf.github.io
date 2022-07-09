
function getCookie (name) {
    var nameEquals = name + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var pairs = decodedCookie.split(';');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        while (pair.charAt(0) == ' ') {
            pair = pair.substring(1);
        }
        if (pair.indexOf(nameEquals) == 0) {
            return pair.substring(nameEquals.length, pair.length);
        }
  }
  return '';
}

function setCookie (name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = 'expires=' +  date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

function setLanguageCookie (code) {
    setCookie('language', code, 1000);
}

function setupSlider () {
    $('.slider').slick({
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        infinite: true,
        lazyLoad: 'progressive',
        mobileFirst: true,
        pauseOnDotsHover: true,
        pauseOnHover: false,
        responsive: [],
        slidesToScroll: 1,
        slidesToShow: 1
    });
}

function createMapIframe(id){
  var iframe = document.createElement("iframe");
  iframe.src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6z2mA2jBlxIROjpJLj0K9C4&key=AIzaSyB5nfqUaTntHWCgKK6asnsxmG-zUBPSVA8";
  iframe.frameborder = "0";
  iframe.style = "border:0";
  iframe.width = "100%";
  iframe.height = "100%";
  document.getElementById(id).appendChild(iframe);
};

window.onload = function () {

    if ($('.slider').length) { setupSlider(); }

    if ($('#map-holder').length) { createMapIframe('map-holder'); }
};
