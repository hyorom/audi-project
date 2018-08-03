//audi_main_landingBox.js


(function($){
console.log('______');

//변수처리 

//techBox
var techBox = $('#techBox');
var techText =  $('.tech_text');

//qurttroBox
var qurttroBox = $('#qurttroBox');
var qurttroText =  $('.qurttro_text');

//designBox
var designBox = $('#designBox');
var designText =  $('.design_text');

//modelBox
var modelBox = $('#modelBox');
var modelText =  $('.model_text');

//companyBox
var companyBox = $('#companyBox');
var companyText =  $('.company_text');

//sportBox
var sportBox = $('#sportBox');
var sportText =  $('.sport_text');




var techTextOffsetT = techText.offset().top; //techText옵셋 계산 //
var qurttroTextOffsetT = qurttroText.offset().top; //qurttroText옵셋 계산 //
var designTextOffsetT = designText.offset().top; //designText옵셋 계산 //
var modelTextOffsetT = modelText.offset().top; //modelText옵셋 계산 //
var companyTextOffsetT = companyText.offset().top; //companyText옵셋 계산 //
var sportTextOffsetT = sportText.offset().top; //sportText옵셋 계산 //



var winH = $(window).outerHeight(true); //브라우저 전체 높이값 계산

 /*화면 전체에서 절반쯤 위치했을 때 text가 나타나게 하기 */
  $('#wrap').on('scroll',function(){
    var nowTop = $(this).scrollTop();
     //console.log(techTextOffsetT-(winH/3*2));
     //console.log('----------:'+nowTop);
    if(nowTop >= techTextOffsetT-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     techText.addClass('ani');
     techBox.addClass('techR');
    } else {
      techText.removeClass('ani');}

    if(nowTop >= qurttroTextOffsetT-(winH/3*2) ){
     qurttroText.addClass('ani');
     qurttroBox.addClass('qurttroR');
    } else {
      qurttroText.removeClass('ani');}


   if(nowTop >= designTextOffsetT-(winH/3*2) ){
     designText.addClass('ani');
     designBox.addClass('designR');
    } else {
      designText.removeClass('ani');}
 

     if(nowTop >= modelTextOffsetT-(winH/3*2) ){
     modelText.addClass('ani');
     modelBox.addClass('modelR');
    } else {
      modelText.removeClass('ani');}
 
      
     if(nowTop >= companyTextOffsetT-(winH/3*2) ){
     companyText.addClass('ani');
     companyBox.addClass('companyR');
    } else {
      companyText.removeClass('ani');}
 

    if(nowTop >= sportTextOffsetT-(winH/3*2) ){
     sportText.addClass('ani');
     sportBox.addClass('sportR');
    } else {
      sportText.removeClass('ani');}


});



})(jQuery);
