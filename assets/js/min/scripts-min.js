$(function(){var e='<li class="collection-item empty"> <div class="row"> <div class="col s7"> <textarea name="enter_type" placeholder="Start typing or tap to add Material Category" rows="10" cols="15"></textarea> </div> <div class="col s5 right-align tap-done"> <p class="being-typed done" style="display: none;">Tap enter when <span>DONE</span></p> <p class="being-details"><a href="#">+ details</a></p> </div> </div> </li>';$("textarea").keypress(function(t){13==t.keyCode&&($(".collection").append(e),$(".collection-item .tap-done .done").css("display","none"),$(".collection-item .tap-done .being-details").show(),$(this).attr("readonly","readonly"))}),$("textarea").keypress(function(e){return 13==e.keyCode?!1:void 0}),$(".materials-btn").click(function(){$(".collection").append(e)}),$(".collection-item.empty").click(function(e){e.stopPropagation(),$(this).removeClass("empty"),$(this).addClass("active-item")}),$(document).click(function(){$(".collection-item.active-item").toggleClass("active-item")}),$(".collection-item textarea").on("keyup change",function(){this.value.length>0?$(".collection-item .tap-done .done").show():$(".collection-item .tap-done .done").hide()})});