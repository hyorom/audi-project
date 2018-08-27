//audi_a4_choiceBox_outside.js//



(function($){

//변수선언
var a4Cho = $('#a4_choiceBox');

var outSideWrap = $('.outside_color_wrap');
var outSideUl = outSideWrap.children('ul');
var outSideLi = outSideUl.children('li');

var outCar = $('.outside_car');
var outDetail = $('.outside_color_detail');
 
 
 
/*배열*/

var addrThum = "../img/a4/a4_choice/outside/color/";
var addrBig = "../img/a4/a4_choice/outside/car/";
var choOutImg = [
                 {thum:'outside_color_01', big:'choice_car_01', narr:'Brilliant Black'},
                 {thum:'outside_color_02', big:'choice_car_02', narr:'Florett Sliver'},
                 {thum:'outside_color_03', big:'choice_car_03', narr:'Glacier White'},
                 {thum:'outside_color_04', big:'choice_car_04', narr:'Gotland Green'},
                 {thum:'outside_color_05', big:'choice_car_05', narr:'Ibis White'},
                 {thum:'outside_color_06', big:'choice_car_06', narr:'Manhattan Gray'},
                 {thum:'outside_color_07', big:'choice_car_07', narr:'Matador Red'},
                 {thum:'outside_color_08', big:'choice_car_08', narr:'Monsoon Gray'},
                 {thum:'outside_color_09', big:'choice_car_09', narr:'Moonlight Blue'},
                 {thum:'outside_color_10', big:'choice_car_10', narr:'Mythos Black'},
                 {thum:'outside_color_11', big:'choice_car_11', narr:'Daytona Gray'}
               ];


//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < choOutImg.length; i+=1){
  var outSideLiClone = outSideLi.eq(0).clone(true);
  outSideUl.append(outSideLiClone);
  outSideLi = outSideUl.children('li');
  var liOut = outSideLi.eq(i);
  liOut.css({backgroundImage:'url(' + addrThum + choOutImg[i].thum + '.png)',
             backgroundRepeat:'no-repeat',
             backgroundSize:'cover',
             backgroundPosition:'center center'});

outDetail.text(choOutImg[0].narr);
};

outSideLi.eq(i).remove();


/*복제할때 유의할점 
 복제한 변수를 for안에 다시 선언해줘야 한다.
 위에 선언한 변수는 복제하기전 하나뿐인 존재이기 때문에
 복제하고서의 변수를 다시 선언해줘야 복제가 된다.
 append는 내 내부의 자식의 뒤에 !
 after는 내 바로 뒤에 !
 복제한 변수의 i값을 가지고 와서 remove를 써줘서 버그를 막아줘야 한다.*/



//큰 이미지 만들기 
//--배열 처리된 아이들 함수로 처리해서 한방에 만들기
var outsideWrap = $('.outside_wrap'); 

 var ImgSetOut = function(i){

  var outsideChildren = outsideWrap.children('div');
  outsideChildren.eq(1).css({
  	         backgroundImage:'url(' + addrBig + choOutImg[i].big + '.png)',
             backgroundRepeat:'no-repeat',
             backgroundSize:'cover',
             backgroundPosition:'center center'});

  outsideWrap.animate({marginLeft:'-100%'},function(){
    outsideWrap.css({marginLeft:0});
    // outsideWrap.append( outsideWrap.children().eq(0) );
    outsideWrap.children().eq(0).appendTo( outsideWrap );
 });
}
ImgSetOut(0);


//색상설명 만들기 
 var DetailSet = function(i){
   outDetail.text(choOutImg[i].narr);
 }
DetailSet(0);


//썸네일 이미지를 클릭했을 때 big 이미지 나타나게 하기 
var awesomeNum = 0;

outSideLi.on('click',function(e){
  e.preventDefault();
  var i = $(this).index();
  if(awesomeNum !== i){
  awesomeNum = i;
  ImgSetOut(i);
  DetailSet(i);
}
});


//----썸네일 이미지 마우스 올렸을 때 효과 
outSideLi.children('a').on('mouseenter focus',function(){
  $(this).parent().css({transform:'scale(1.1)', transition:'all 400ms ease'});
});

outSideLi.children('a').on('mouseleave blur',function(){
  $(this).parent().css({transform:'scale(1)', transition:'all 400ms ease'});
});




})(jQuery);