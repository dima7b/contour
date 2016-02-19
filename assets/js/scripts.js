
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
  });
};

function expand_two() {
  $('#mItem1 .being-details a').click(function(evt) {
    $('#mItem1').wrap('<ul id="collectionId1" class="collection expanded"></ul>');
    $('#mItem1').removeClass('cte');
    $('#mItem1').addClass('z-depth-1');
    $('.sub-title').removeClass('hidden');
    $('.collection-item.empty, .main-collection, #mItem1 .being-details').hide();
    $('.hidden-collection').show();
    var $collectionExpansion = $('.parent-collection > #collectionId1');
    $collectionExpansion.parent().before($collectionExpansion);
    $(".sub-title").prependTo("#collectionId1");
  });
};

function expand_three() {
  $('#zItem1').one( "click", function() {
    $('#mItem1').hide();
    $(this).wrap('<ul id="collectionIP1" class="collection expanded"></ul>');
    $(this).removeClass('cte');
    $(this).addClass('z-depth-1');
    $('#zItem1 .being-details').hide();
    $('.sub-title-two').removeClass('hidden');
    var $collectionExpansion = $('.parent-collection > #collectionIP1');
    $collectionExpansion.parent().before($collectionExpansion);
    $(".sub-title-two").prependTo("#collectionIP1");
  });
};

function subExpand() {
  $('#zItem1 .being-details a').click(function(evt) {
    $('#zItem1').wrap('<ul id="collectionIZ1" class="collection expanded"></ul>');
    $('#zItem1').removeClass('cte');
    $('#zItem1').addClass('z-depth-1');
    $('.sub-title-three').removeClass('hidden');
    $('.collection-item.empty, .main-collection, #zItem1 .being-details').hide();
    $('#zItem1 .sub-hidden-collection').show();
    $('#zItem1 .main-collection-two').hide();
    var $collectionExpansion = $('.parent-collection > #collectionIZ1');
    $collectionExpansion.parent().before($collectionExpansion);
    $(".sub-title-three").prependTo("#collectionIZ1");
  });
};


$(function(){

  var newItem = '<li class="collection-item empty new-entry z-depth-1"> <div class="row"> <div class="col s7"> <textarea name="enter_type" placeholder="Start typing or tap to add Material Category" rows="10" cols="15"></textarea> </div> <div class="col s5 right-align tap-done"> <p class="being-typed done" style="display: none;">Tap enter when <span>DONE</span></p> <p class="being-details"><a href="#">+ details</a></p> </div> </div> </li>';
  $('.hidden-collection, .sub-hidden-collection, .sub-hidden-row, .sub-hidden-row-fractions').hide();
  $('ul.tabs').tabs();

  // $(".collection-wrapper ul, .collection-wrapper li").each(function(i) {
  //   // $(this).uniqueId();
  //   $(this).attr('id', 'cnt' + i);
  // });

  $(document).click(function() {
    $('.collection-item.active-item').toggleClass('active-item');
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
      // $('.collection').append(newItem);
      $('.collection-item .tap-done .done').css('display', 'none');
      $('.collection-item .tap-done .being-details').show();
      $(this).attr('readonly','readonly');
      $(this).add(newItem);
      $('.new-entry').removeClass('hidden');
    }
  });

  $('.being-typed.done').click(function() {
    // $('.collection').append(newItem);
    $('.collection-item .tap-done .done').css('display', 'none');
    $('.collection-item .tap-done .being-details').show();
    $(this).attr('readonly','readonly');
    $(this).add(newItem);
    $('.new-entry').removeClass('hidden');
  });

  $('textarea').keypress(function(e){
    if (e.keyCode === 13) return false;
  });

  $("#zItem1 textarea").keypress(function (e) {
    if (e.keyCode === 13) {
      $('.collection-item .tap-done .done').css('display', 'none');
      $('.collection-item .tap-done .being-details').show();
      $(this).attr('readonly','readonly');
      // $('#zItem1').add(newItem);
      $('.new-entry').removeClass('hidden');
      $('.collection.expanded').append(newItem);
    }
  });

  $('#zItem1 .being-typed.done').click(function() {
    $('.collection-item .tap-done .done').css('display', 'none');
    $('.collection-item .tap-done .being-details').show();
    $(this).attr('readonly','readonly');
    // $('#zItem1').add(newItem);
    $('.new-entry').removeClass('hidden');
    $('.collection.expanded').append(newItem);
  });

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

  expand_two();
  $('.sub-title, .close').on( "click", function() {
    $('#mItem1').unwrap('<ul id="collectionId1" class="collection expanded"></ul>');
    $('#mItem1').addClass('cte');
    $('.sub-title').addClass('hidden');
    $('#mItem1').addClass('repeat');
    $('.hidden-collection').hide();
    $('.collection-item.empty, .main-collection, .being-details').show();
    $("#mItem1").prependTo(".parent-collection");
    $('#mItem1').unbind('click');
  });

  expand_three();
  $('.sub-title-two').on( "click", function() {
    $(this).unwrap('<ul id="collectionIP1" class="collection expanded"></ul>');
    $(this).addClass('cte');
    $('.sub-title-two').addClass('hidden');
    $(this).addClass('repeat');
    $(this).prependTo(".parent-collection");
    $(this).unbind('click');
    $('#mItem1').show();
    $('#zItem1').appendTo('.parent-collection');
    $('#zItem1').addClass('empty');
    expand_three();

    $('.collection-wrapper > li').hide();

    $("#zItem1 textarea").keypress(function (e) {
      if (e.keyCode === 13) {
        $('#zItem1').removeClass('empty');
      }
    });
  });

  subExpand();
  $('.sub-title-three, #zItem1 .close').on( "click", function() {
    $('#zItem1').unwrap('<ul id="collectionIZ1" class="collection expanded"></ul>');
    $('#zItem1').addClass('cte');
    $('.sub-title-three').addClass('hidden');
    $('#zItem1').addClass('repeat');
    $('.sub-hidden-collection').hide();
    $('.main-collection-two, .being-details').show();
    $("#zItem1").prependTo(".parent-collection");
    $('#zItem1').unbind('click');
  });

  $('.link-exact').click(function(evt) {
    $('#zItem1 .sub-hidden-collection').hide();
    $('.sub-hidden-row').show();
  });

  $('.close-exact').click(function(evt) {
    $('.sub-hidden-row').hide();
    $('#zItem1 .sub-hidden-collection').show();
  });

  $('.link-fractions').click(function(evt) {
    $('#zItem1 .sub-hidden-collection').hide();
    $('.sub-hidden-row-fractions').show();
  });

  $('.close-fractions').click(function(evt) {
    $('.sub-hidden-row-fractions').hide();
    $('#zItem1 .sub-hidden-collection').show();
  });

  // $('.sub-title, .close').on( "click", function() {
  //   $('#zItem1').unwrap('<ul id="collectionId1" class="collection expanded"></ul>');
  //   $('#zItem1').addClass('cte');
  //   $('.sub-title').addClass('hidden');
  //   $('#zItem1').addClass('repeat');
  //   $('.hidden-collection').hide();
  //   $('.collection-item.empty, .main-collection, .being-details').show();
  //   $("#zItem1").prependTo(".parent-collection");
  //   $('#zItem1').unbind('click');
  // });

  $('.collection-item.empty').click(function() {
    $(this).removeClass('empty');
    $(this).addClass('active-item');
  });

});

