$(function(){

  $('.materials-btn').click(function(){
    var newItem = '<li class="collection-item empty"> <div class="row"> <div class="col s7"> <textarea name="enter_type" placeholder="Start typing or tap to add Material Category" rows="10" cols="15"></textarea> </div> <div class="col s5 right-align tap-done"> <p class="being-typed">Tap enter when <span>DONE</span></p> </div> </div> </li>';
    $('.collection').append(newItem);
  });

  $('.collection-item.empty').click(function(evt) {
      evt.stopPropagation(); //stops the document click action
      $(this).toggleClass('empty');
      $(this).toggleClass('active-item');
  });

  $(document).click(function() {
    $('.collection-item.active-item').toggleClass('active-item');
    // $('.collection-item').toggleClass('empty');
  });

  $('.collection-item textarea').on('keyup change', function() {
    if (this.value.length > 0) {
      $('.collection-item .tap-done .done').show();
    } else {
      $('.collection-item .tap-done .done').hide();
    }
  });

  $("textarea").keypress(function (e) {
    if (e.keyCode == 13) {
      var newItem = '<li class="collection-item empty"> <div class="row"> <div class="col s7"> <textarea name="enter_type" placeholder="Start typing or tap to add Material Category" rows="10" cols="15"></textarea> </div> <div class="col s5 right-align tap-done"> <p class="being-typed">Tap enter when <span>DONE</span></p> </div> </div> </li>';
      $('.collection').append(newItem);
    }
  });

  $('textarea').keypress(function(e){
     if (e.keyCode == 13) return false
  });

});