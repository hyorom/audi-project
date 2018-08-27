//audi_main_gnb.js


(function($){

  //브라우저의 크기 값 가져와서 변수 처리
   var winW = $(window).outerWidth(true);

  //====pc사이즈에서 하위 드롭메뉴 기능==== 

  //--audi 하위메뉴 가로 값 강제로 주기
  //gnb값만큼 가로값을 강제로 주기 위해서 gnb의 가로 값을 가져오기
  var headWrap = $('.headBox_wrap');
  var headW = headWrap.outerWidth();
  var headBox = $('#headBox');
  var headBoxW = headBox.outerWidth();
  
  var gnbW = $('#gnb').outerWidth(true); 
  var gnbDrop = $('#gnb_drop_menu'); 
  var gnbDropL = gnbDrop.offset().left;
  var gnbDropH = gnbDrop.outerHeight(true);
  

  gnbDrop.css({width:headBoxW});
  headWrap.append('<div class="dropBg">');
  var dropBg = $('.dropBg')
   dropBg.css({width:headW, height:gnbDropH, backgroundColor:'inherit'}); 




//===pc 사이즈에서 audi메뉴 토글기능==== 

//audi 메뉴 변수 선언

    var audiBtn = gnbDrop.siblings('a')
    var gnbDrop = $('#gnb_drop_menu');
    var dropBg = $('.dropBg')
    //slideToggle 요소의 height 값을 조작해서 움직임을 만듬


  if( 769 < winW) {
    audiBtn.on('click',function(e){
    e.preventDefault(); 	
    gnbDrop.stop().slideToggle();
     dropBg.stop().slideToggle();
    $(this).toggleClass('active');
    });

  } else { 
        audiBtn.on('click',function(e){
        e.preventDefault();
        gnbDrop.stop().slideToggle(function(){
          var view = gnbDrop.css('display') == 'none';
          if( view ){
             gnbDrop.css({'marginLeft':'-100%'});
          }else{
              gnbDrop.animate({'marginLeft':0});              
          }
        });
        $(this).toggleClass('active');
      });
  }

 //====모바일 사이즈에서 버튼토글기능==== //

    //버튼 변수 선언
    var menuBtn = $('#menuBtn');
    var gnb = $('#gnb').find('ul');
    var gnbLi = gnb.children('li');

    //slideToggle 요소의 height 값을 조작해서 움직임을 만듬

  if(winW < 769) {
    menuBtn.on('click',function(e){
    e.preventDefault();
    gnb.stop().slideToggle();
    gnbDrop.css({display:'none'});
    $(this).toggleClass('active');
    });

  } else { 
    menuBtn.on('click',function(e){
    e.preventDefault();
    gnb.stop().fadeToggle();
    $(this).toggleClass('active');
      });
  }

/*
if(winW < 769) {
   audiBtn.on('click',function(e){
    e.preventDefault();
    gnbA.stop().fadeOut();
    gnbDrop.stop().fadeIn();
    $(this).toggleClass('active');
    });

  } else { 
   audiBtn.on('click',function(e){
    e.preventDefault();
    gnbA.stop().fadeIn();
    gnbDrop.stop().fadeOut();
    $(this).toggleClass('active');
      });
  }
*/


  //===자동으로 새로고침 처리하기
  $(window).on('resize',function(e){
    var nowW = $(window).outerWidth();
    if(winW !== nowW){
      location.reload();
    }
  });

})(jQuery);

