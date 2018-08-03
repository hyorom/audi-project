//audi_main_footBox.js //

(function($){

//브라우저 크기 값 가져와서 변수 처리
  var winW = $(window).outerWidth(true);


//toggle은 두가지 기능을 같이 가지고 있다
//slidedown,slideup는 내려가고 올라가는 기능 한가지씩만 수행하고 
//slidetoggle 올라라고 내려가는 두가지 기능 수행
//fadetoggle 사라지고 보여주는 두가지 기능 수행


//*=====slideToggle을 이용한 아코디언*===//

//버튼 변수 선언
var footBtn = $('.footBtn');
var footD = $('.foot_drop');



// 클릭하지 않아도 보여주게 하고 싶다면 
// 버튼의 부모의(div) 부모의(dt)의 두번째 값을 모두 보여줘라. 
footBtn.parent().parent().eq(1).nextAll().show();


 //slideToggle 요소의 height 값을 조작해서 움직임을 만듬
 //slideUp로 열렸을 경우 사라지게 만들기 

  if (winW < 769) {
    footBtn.on('click',function(e){
      footD.slideUp();
      $(this).parent().parent().next('dd').stop().slideToggle();
      $(this).toggleClass('active');
    });

  } else { 
      footBtn.on('click',function(e){
        footD.stop().fadeToggle();
        $(this).toggleClass('active');
      });
  }



//자동으로 새로고침 처리하기

  $(window).on('resize',function(e){
    var nowwW = $(window).outerWidth();
    if(winW !== nowW){
      location.reload();
    }  
  });

/*

//버튼과 드롭메뉴 변수 선언
var footBtn = $('.footBtn');
var footD = $('.foot_drop');
var timed = 500;

footBtn.eq(1).nextAll().show();


//버튼 클릭시 dd(footdrop)이 보이게 만들기 

footBtn.on('click',function(e){
  e.preventDefault();
  var showfootD = $(this);



//열렸을 경우 사라지게 만들기 
  showfootD.parent().siblings('dl').find('ol').slideUp(timed);
 


// 현재 선택하는 dt의 뒤의 dd가 열렸는가?
    var thisNext =  showfootD.nextAll().css('display');

    if(thisNext === 'block') {
      showfootD.nextAll().slideUp(timed);
    } else {
      showfootD.nextAll().slideDown(timed);
    }

});
*/





})(jQuery);