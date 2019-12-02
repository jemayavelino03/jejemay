$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true
    });

    $(".owl-item").each(function(){
        var el = $(this).find('img').attr('src');
        // console.log(el);
        $(this).find('img').hide();
        $(this).css({"background-image": "url("+el+")", "font-size": "200%"})
    });
  });