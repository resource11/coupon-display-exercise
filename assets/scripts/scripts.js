'use strict';

// countNumLines function
$.fn.numLines = function() {
    var tmp = $('<div style="visibility:hidden;">x</div>').appendTo(document.body);
    var lines = this.height() / tmp.height();
    // tmp.remove();
    return lines;

};

$('#change').keyup(function() {
    $('#test').html(this.value.replace(/\n/g, '<br />'));
    $('#lines').text($('#test').numLines());
}).keyup();

var intViewportWidth = $(window).width();

// hide more button
$('.ellipsis-handler').hide();

// $(document).ready(...
$(function() {

  // $('.truncated-text').EllipsisVerily({ max: 1000, normalTags: ['span', 'p'], handler: '.ellipsis-handler', visible: '.ellipsis-handler'});
  $('.header-text').fewlines({lines : 1});

  $('.coupon-text').fewlines({lines : 4, openmark: 'More...'});
    // // test for truncating text
    // var coupTxtLines = $('.coupon-text').numLines();


    // if (coupTxtLines > 5)  {

    //   console.log('width' + intViewportWidth);
    //   console.log(coupTxtLines);
    //   $('.coupon-text').addClass('body-ellipsis');
    //   $('.ellipsis-handler').show();
    //   intViewportWidth = $( window ).width();

    // }

    // else {

    //   $('.coupon-text').removeClass('body-ellipsis');
    //   $('.ellipsis-handler').hide();

    // }

  $(window).resize(function() {

    test for truncating text
    var coupTxtLines = $('.coupon-text').numLines();


    if (coupTxtLines > 5)  {

      console.log('width' + intViewportWidth);
      console.log(coupTxtLines);
      $('.coupon-text').addClass('body-ellipsis');
      $('.ellipsis-handler').show();
      intViewportWidth = $( window ).width();

    } else {

      $('.coupon-text').removeClass('body-ellipsis');
      $('.ellipsis-handler').hide();

    }


    if (intViewportWidth >= 421 && coupTxtLines > 5) {

      $('.ellipsis-handler').show();
      console.log('width' + intViewportWidth);
      intViewportWidth = $( window ).width();

    } else {

      intViewportWidth = $( window ).width();
      $('.coupon-text').removeClass('body-ellipsis');

    }

  });


});
// end $(document).ready(...
