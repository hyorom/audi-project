//audi_main_adBox.js//

(function($){


// 변수선언
var adBox = $('#adBox');

// 인디케이터 변수선언
var indi = adBox.find('.ad_indicator');
var indiLi = indi.children('li');
var indiLiLen = indiLi.length -1;

//배너 변수 선언
var adBan = $('.ad_banner');

//== 첫배너를 마지막 위치에 복제 ==//
var adLiClone = adBan.find('li').eq(0).clone();
  adBan.children('ul').append(adLiClone);
var adBanLen = adBan.find('li').length -1;
  adBan.children('ul').css({width:adBanLen * 100 + '%'});


//== 배너의 값주기 ==//
var banner = $('.ad_banner').children('ul');
var i = 0;
var move = function(a){
  indiLi.eq(a).addClass('active');
  indiLi.eq(a).siblings(indiLi).removeClass('active');
  var per = a * -100 + '%';
  banner.stop().animate({marginLeft:per});
};

move(i);


//== indicator ==//
//indicator 클릭시 배너 이미지 이동

indiLi.on('click',function(e){
  e.preventDefault();
  i = $(this).index();
  move(i);

});


//=== 배너가 자동으로 움직이게 하기 ===//
//배너의 갯수를 파악해서 마지막갯수가 되면 처음으로 오게 만들기

var adBanner = function(i){ 
var num = i * -100 +'%';
  if (i < adBanLen){
    adBan.children('ul').animate({marginLeft:num});
  }else {
    i = 0;
    adBan.children('ul').animate({marginLeft:num}, function(){
      $(this).css({marginLeft:0});
    });
  }

  indiLi.eq(i).addClass('active');
  indiLi.eq(i).siblings('li').removeClass('active');
};

  adBanner(i);

//----
  indiLi.on('click',function(e){
    e.preventDefault();
    i = $(this).index();
    adBanner(i);
  });
//------
//--배너가 일정한 시간이 되면 자동으로 이동하게 하기 
    //(setInterval : 일정시간마다 반복실행하는 함수) 
    //(clearInterval)

  var timed = 3500;
  var autoStart;
 
  var StartSlide = function(){
      autoStart = setInterval(function(){
        (i < adBanLen) ? i+=1 : i=1;
          adBanner(i);}, timed); };

  var StopSlide = function(){
            clearInterval(autoStart); };

  StartSlide();
 // StopSlide();

})(jQuery);