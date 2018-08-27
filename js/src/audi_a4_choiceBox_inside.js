//audi_a4_choiceBox_inside.js//



(function($){

//변수선언
var a4Cho = $('#a4_choiceBox');

var inWrap = $('.inside_color_wrap');
var inUl = inWrap.children('ul');
var inLi = inUl.children('li');

var inSheet = $('.inside_sheet');

var inDetail = $('.inside_color_detail');

//배열// 

var addrInThum = "../img/a4/a4_choice/inside/color/";
var addrInBig = "../img/a4/a4_choice/inside/sheet/";
var choInImg = [ 
                {thum:"inside_color_01", big:"choice_sheet_01", narr:"beige-atlas black"},
                {thum:"inside_color_02", big:"choice_sheet_02", narr:"beige-atlas beige"},
                {thum:"inside_color_03", big:"choice_sheet_03", narr:"black-black"},
                {thum:"inside_color_04", big:"choice_sheet_04", narr:"brown-nougat brown"},
                {thum:"inside_color_05", big:"choice_sheet_05", narr:"grey-rock grey"},
                {thum:"inside_color_06", big:"choice_sheet_06", narr:"grey-rock black"},
                ];

//li를 복제해서 썸네일 이미지 담기
var i = 0;
for (; i < choInImg.length; i+=1){
  var inLiClone = inLi.eq(0).clone();
  inUl.append(inLiClone);
  inLi = inUl.children('li');
  var liIn = inLi.eq(i);
  liIn.css({backgroundImage:'url(' + addrInThum + choInImg[i].thum + '.png)',
             backgroundRepeat:'no-repeat',
             backgroundSize:'cover',
             backgroundPosition:'center center'});

  inDetail.text(choInImg[0].narr);
}

inLi.eq(i).remove();

 
//큰 이미지 담기
var insideWrap = $('.inside_wrap'); 

var ImgSetIn = function(i){
  var insideChildren = insideWrap.children('div');
  insideChildren.eq(1).css({
  	        backgroundImage:'url(' + addrInBig + choInImg[i].big + '.png)',
            backgroundRepeat:'no-repeat',
            backgroundSize:'100%',
            backgroundPosition:'center center'});
  insideWrap.animate({marginLeft:'-100%'},function(){
    insideWrap.css({marginLeft:0});
    insideWrap.children().eq(0).appendTo( insideWrap );
});
}

ImgSetIn(0);


//색상설명 만들기 
 var DetailSet = function(i){
  inDetail.text(choInImg[i].narr);
 }
DetailSet(0);


//썸네일 이미지 클릭했을 때 큰 이미지 나오게 하기 
var awesomeNum = 0;

inLi.on('click',function(e){
  e.preventDefault();
  var i = $(this).index();
  if(awesomeNum !== i){
  awesomeNum = i;
  ImgSetIn(i);
  DetailSet(i);
 } 
});



//----썸네일 이미지 마우스 올렸을 때 효과 
inLi.children('a').on('mouseenter focus',function(){
  $(this).parent().css({transform:'scale(1.1)', transition:'all 400ms ease'});
});

inLi.children('a').on('mouseleave blur',function(){
  $(this).parent().css({transform:'scale(1)', transition:'all 400ms ease'});
});



})(jQuery);