//audi_a4_gallery.js//

(function($){
/*변수*/
var a4GalWrap = $('.a4_gallery_wrap');
var a4GalUl = a4GalWrap.children('ul');
var a4GalLi = a4GalUl.children('li');

var a4mdBox = $('.a4_modal_box');
var a4mdBg = $('.a4_modal_bg');

a4mdBox.hide();
a4mdBg.hide(); 

//배열  
var addrGal = "../img/a4_gallery/a4_thum/";
var addrMd = "../img/a4_gallery/a4_modal/";

var a4GalImg = [{thum:"a4_img_01", md:"a4_modal_01", narr:"이미지설명"},
                {thum:"a4_img_02", md:"a4_modal_02", narr:"이미지설명"},
                {thum:"a4_img_03", md:"a4_modal_03", narr:"이미지설명"},
                {thum:"a4_img_04", md:"a4_modal_04", narr:"이미지설명"},
                {thum:"a4_img_05", md:"a4_modal_05", narr:"이미지설명"},
                {thum:"a4_img_06", md:"a4_modal_06", narr:"이미지설명"},
                {thum:"a4_img_07", md:"a4_modal_07", narr:"이미지설명"},
                {thum:"a4_img_08", md:"a4_modal_08", narr:"이미지설명"},
                {thum:"a4_img_09", md:"a4_modal_09", narr:"이미지설명"},
                {thum:"a4_img_10", md:"a4_modal_10", narr:"이미지설명"}];


//li복제
//li를 복제해서 썸네일 이미지 담기
var i = 0;
for (; i < a4GalImg.length; i+=1){
  var a4GalLiClone = a4GalLi.eq(0).clone();
  a4GalUl.append(a4GalLiClone);
  a4GalLi = a4GalUl.children('li');
  var lia4Gal = a4GalLi.eq(i);
  lia4Gal.css({backgroundImage:'url(' + addrGal + a4GalImg[i].thum + '.png)'});
}

a4GalLi.eq(i).remove();
a4GalLi = a4GalUl.children('li');


// list 클릭시 모달창 띄워서 처리
  a4GalLi.on('click', ['a'], function(e) {
    e.preventDefault();
    var thisI = $(this).index();
    a4mdBox.css({backgroundImage:'url('+ addrMd + a4GalImg[thisI].md +'.jpg)'});
    a4mdBox.fadeIn();
    a4mdBg.fadeIn();  
  });

 a4mdBg.on('click',function() {
  a4mdBox.fadeOut();
  a4mdBg.fadeOut();
 }); 






})(jQuery);