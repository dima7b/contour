
function expand() {
  $('.collection > #item1.cte').one( "click", function() {
    $('#item1').wrap('<ul id="collectionId1" class="collection expanded"></ul>'); // Important
    $('#item1').removeClass('cte');
    $('#item1').removeClass('fixed');
    $('.hidden-collection').addClass('static');
    $('.sub-title').removeClass('hidden');
    $('#item1').css('padding', '0px');
    $('.hidden-collection').show();
    $('.main-collection').hide();

    var $collectionExpansion = $('.parent-collection > #collectionId1');
    $collectionExpansion.parent().before($collectionExpansion);

    $(".sub-title").prependTo("#collectionId1");
    // $('.hidden-collection').unbind('click');
  });
};

$(function(){

  var newItem = '<li class="collection-item empty"> <div class="row"> <div class="col s7"> <textarea name="enter_type" placeholder="Start typing or tap to add Material Category" rows="10" cols="15"></textarea> </div> <div class="col s5 right-align tap-done"> <p class="being-typed done" style="display: none;">Tap enter when <span>DONE</span></p> <p class="being-details"><a href="#">+ details</a></p> </div> </div> </li>';

  $('.hidden-collection').hide();
  $('ul.tabs').tabs();

  expand();

  $('.sub-title').on( "click", function() {
    $('#item1').unwrap('<ul id="collectionId1" class="collection expanded"></ul>');
    $('#item1').addClass('cte');
    $('.sub-title').addClass('hidden');
    $('#item1').addClass('repeat');
    $('#item1').css('padding', '10px 11px 0px');
    $('.hidden-collection').hide();
    $('.main-collection').show();

    $("#item1").prependTo(".parent-collection");

    $('#item1').unbind('click');

    expand();
  });

  $('.collection-item.empty').click(function(evt) {
      evt.stopPropagation(); //stops the document click action
      $(this).removeClass('empty');
      $(this).addClass('active-item');
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
    if (e.keyCode === 13) {
      $('.collection').append(newItem);
      $('.collection-item .tap-done .done').css('display', 'none');
      $('.collection-item .tap-done .being-details').show();
      $(this).attr('readonly','readonly');
    }
  });

  $('textarea').keypress(function(e){
     if (e.keyCode === 13) return false;
  });


});

