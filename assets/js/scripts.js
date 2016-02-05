(function($) {

  $('.collection-item.empty').click(function(){
    $(this).removeClass('empty');
  });

  // $('body').click(function(){
  //   $('.collection-item').addClass('empty');
  // });

  $('.collection-item textarea').on('keyup change', function() {
    if (this.value.length > 0) {
      $('.collection-item .tap-done').show();
    } else {
      $('.collection-item .tap-done').hide();
    }
  });

})(jQuery);
