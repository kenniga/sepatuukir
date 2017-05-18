$(document).foundation();
$('.main-carousel').flickity({
  contain: false,
  pageDots: false,
  draggable: false,
  prevNextButtons: false
});
$('.nav-carousel').flickity({
  cellAlign:'left',
  pageDots: false,
  asNavFor: '.main-carousel'
});

// external js: flickity.pkgd.js
//
// var $carousel = $('.main-carousel').flickity({
//   imagesLoaded: true,
//   percentPosition: false,
// });
//
// var $imgs = $carousel.find('.carousel-cell img');
// // get transform property
// var docStyle = document.documentElement.style;
// var transformProp = typeof docStyle.transform == 'string' ?
//   'transform' : 'WebkitTransform';
// // get Flickity instance
// var flkty = $carousel.data('flickity');
//
// $carousel.on( 'scroll.flickity', function() {
//   flkty.slides.forEach( function( slide, i ) {
//     var img = $imgs[i];
//     var x = ( slide.target + flkty.x ) * -1/3;
//     img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//   });
// });
