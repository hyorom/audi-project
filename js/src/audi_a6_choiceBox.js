//audi_a6_choiceBox.js//


(function($){

//변수선언
var a6Cho = $('#a6_choiceBox');

var a6ChoWrap = $('.a6_choice_wrap');
var a6Ul = a6ChoWrap.find('ul');
var a6Li = a6Ul.children('li');
 
var a6Car = $('.a6_outside_car');
var a6Detail = $('.a6_outside_color_detail');
 
  
/*배열*/

var addrThum = "../img/a6/a6_choice/color/";
var addrBig = "../img/a6/a6_choice/car/";
var a6ChoImg = [
                 {thum:'a6_color_01', big:'a6_car_01', narr:'Brilliant Black'},
                 {thum:'a6_color_02', big:'a6_car_02', narr:'Daytona Gray'},
                 {thum:'a6_color_03', big:'a6_car_03', narr:'Florett Silver'},
                 {thum:'a6_color_04', big:'a6_car_04', narr:'Ibis White'},
                 {thum:'a6_color_05', big:'a6_car_05', narr:'Java Brown'},
                 {thum:'a6_color_06_01', big:'a6_car_06_01', narr:'Matador Red'},
                 {thum:'a6_color_06', big:'a6_car_06', narr:'Misano Red'},
                 {thum:'a6_color_07', big:'a6_car_07', narr:'Sepang Blue'},
                 {thum:'a6_color_08', big:'a6_car_08', narr:'Moonlight Blue'}
               ];


//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < a6ChoImg.length; i+=1){
  var a6LiClone = a6Li.eq(0).clone(true);
  a6Ul.append(a6LiClone);
  a6Li = a6Ul.children('li');
  var li = a6Li.eq(i);
  li.css({backgroundImage:'url(' + addrThum + a6ChoImg[i].thum + '.jpg)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'center center'});
  a6Detail.text(a6ChoImg[0].narr);
}

a6Li.eq(i).remove();
a6Li = a6Ul.children('li');

//큰 이미지 만들기 
//--배열 처리된 아이들 함수로 처리해서 한방에 만들기와 큰 이미지들 슬라이딩 처리 
var outsideWrap = $('.outside_wrap');

var ImgSet = function(i){

var outsideChildren = outsideWrap.children('div');

    outsideChildren.eq(1).css({
             backgroundImage:'url(' + addrBig + a6ChoImg[i].big + '.jpg)',
             backgroundRepeat:'no-repeat',
             backgroundSize:'cover',
             backgroundPosition:'center bottom'});
    outsideWrap.animate({marginLeft:'-100%'},function(){
    outsideWrap.css({marginLeft:0});
    // outsideWrap.append( outsideWrap.children().eq(0) );
    outsideWrap.children().eq(0).appendTo( outsideWrap );
  });
}
ImgSet(0);


//색상설명 만들기 
 var DetailSet = function(i){
   a6Detail.text(a6ChoImg[i].narr);
 }
DetailSet(0);

//썸네일 이미지를 클릭했을 때 big이미지와 색상설명 나타나게 하기 
var awesomeNum = 0;
a6Li.on('click',function(e){
  e.preventDefault();
  var i = $(this).index();
  if(awesomeNum !== i){
    awesomeNum = i;
    ImgSet(i);
    DetailSet(i);
  }
});

//----썸네일 이미지 마우스 올렸을 때 효과 
a6Li.children('a').on('mouseenter focus',function(){
  $(this).parent().css({transform:'scale(1.1)', 
                        transition:'all 400ms ease'});
});

a6Li.children('a').on('mouseleave blur',function(){
  $(this).parent().css({transform:'scale(1)', 
                        transition:'all 400ms ease'});
});



})(jQuery);