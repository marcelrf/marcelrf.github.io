
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
