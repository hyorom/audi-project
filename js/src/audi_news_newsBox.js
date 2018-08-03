//audi_news_newsBox.js//


(function($) {


    /*변수정의*/
    var newsBox = $('#newsBox');
    var newsUl = newsBox.find('ul');
    var newsLi = newsUl.children('li');

    var newBtn = $('.news_btn');

    var newMoBox = $('.news_modal_box');
        var newMoBg = $('.news_modal_bg');

    newMoBox.hide();
    newMoBg.hide();

    var newMoImg = $('.modal_img');
    var newMoDt = newMoBox.find('dt');
    var newMoDd = newMoBox.find('dd');

    var listBtn = $('.list_btn');




    //==배열값으로 이미지와 타이틀 텍스트 처리하기==//

    /*배열*/
    var addr = "../img/news/news/";
    var news = [

            {img: "news_01",
             link: "news01.html",
             title: "아우디 코리아, <br />프리미엄 준중형 세단 2018년식 ‘아우디 A4 TDI’ 출시 ",
             data: "아우디 코리아는 아우디의 프리미엄 준중형 세단 ‘아우디 A4 TDI (The Audi A4 TDI)’ 2018년식  모델을 출시한다고 밝혔다.<br />2018-07-02 "},

            {img: "news_02",
             link: "news02.html",
             title: "아우디 코리아, <br /> '아우디 비전 나잇 (Audi Vision Night)'개최",
             data: "아우디 코리아(사장: 세드릭 주흐넬)는 2018 부산 국제 모터쇼 개막을 하루 앞둔 6일 저녁, 부산시 기장군에 위치한 힐튼 부산 호텔에서 ‘아우디 비전나잇(Audi Vision Night)’을 개최했다. 이날 아우디 코리아는 지난 2년 반 동안 고객 신뢰 회복 및 비즈니스 정상화를 위해 노력해온 아우디 코리아의 비즈니스 플랜과 비전을 발표하고 ‘아우디 Q5’, ‘아우디 Q2’ 를 비롯해 미래 이동성에 대한 아우디의 열정과 비전을 담은 레벨4 자율주행 전기 컨셉트카 ‘아우디 일레인(Elaine)’를 국내 최초로 공개했다.<br /> 2018-06-07"},

            {img: "news_03",
             link: "news03.html",
             title: "아우디 코리아,<br />서대구 전시장 및 서비스센터 오픈",
             data: "아우디 코리아(사장: 세드릭 주흐넬)는 아우디 공식 딜러사인 코오롱아우토 ( 대표이사: 이철승)가 아우디 서대구 전시장 및 서비스센터를 오픈했다고 밝혔다. <br />2018-06-18"},

            {img: "news_04",
             link: "news04.html",
             title: "아우디 코리아,<br /> 2018년 브랜드 홍보대사로 배우 이진욱, 슈퍼주니어 최시원,  에프엑스 크리스탈 선정",
             data: "아우디 코리아(사장: 세드릭 주흐넬)는 배우 이진욱, 슈퍼주니어의 멤버 최시원 그리고 에프엑스의 멤버 크리스탈을 2018년 아우디 코리아 브랜드 홍보대사로 위촉했다고 밝혔다. <br />2018-06-04 "},

            {img: "news_05",
             link: "news05.html",
             title: "아우디,현대차그룹과 <br /> 수소 연료전지 기술개발 협약 체결",
             data: "아우디 코리아는 아우디 AG와 현대자동차그룹이 수소 연료전지 개발에 착수한다고 밝혔다. 두 업체는 상호 특허 사용을 허가하며 비경쟁적인 부분에 대해 접근권을 부여할 계획이다. <br />2018-06-21"},

           {img: "news_06",
            link: "news06.html",
            title: "아우디,<br />‘아우디. 진보. 2025.’ 계획 공개하며 2025년까지  20종 이상 전동화 모델 출시 및 80만대 이상 출시계획 발표",
            data: "독일 아우디 AG는 지난 5월 2일에 열린 연례 총회에서 2025년까지의 목표와 브랜드 미래 전략인 ‘아우디. 진보. 2025.’의 업데이트 된 계획을 발표했다.<br />2018-05-15"},

           {img: "news_07",
            link: "news07.html",
            title: "아우디 코리아,<br /> ‘아우디 공식 인증 중고차 서대구 전시장’ 신규 오픈",
            data: "아우디 코리아(사장: 세드릭 주흐넬)는아우디 공식 딜러사인 코오롱아우토가 ‘아우디 공식 인증 중고차 서대구 전시장’을 신규 오픈 했다고 밝혔다.<br /> 2018-05-03 "},

           {img: "news_08",
            link: "news08.html",
            title: "아우디 코리아, <br />서비스 경진대회 ‘아우디 트윈컵’ 2018 한국 결선 성료",
            data: "아우디 코리아(사장: 세드릭 주흐넬)는 지난 4월 28~29일 강원도 인제 스피디움에서 고객 서비스 및 정비 기술 경진대회인 ‘아우디 트윈컵 2018(Audi Twin Cup 2018)’ 한국 결선을 성공리에 마쳤다고 밝혔다.<br /> 2018-05-23" },

          {img: "news_09",
            link: "news09.html",
            title: "아우디, <br /> 포뮬러 E 경기에서 '아우디 e-트론 비전 그란 투리스모’ 선보여",
            date: "아우디는 플레이스테이션4 레이싱 게임인 ‘그란투리스모’에 등장하는 가상의 자동차 ‘아우디 e-트론 비전그란 투리스모 (Audi e-tron Vision Gran Turismo)’를 실제 컨셉트카로 제작, 지난 4월 14일 로마에서 개최된 전기차 레이싱 대회인 ‘포뮬러 E'에서 레이싱 택시로 선보였다.<br />2018-04-25"}

    ];

    // var Line = function(i) {
    //   var lines = news[i].title.split("\n");
    //   var resultString;
    //   for (var i = 0; i < lines.length; i++) {
    //       resultString += lines[i] + "<br>";
    //   }
    //   return resultString;
    // };

    



    /*html 복제해서 처리하기*/
    var i = 0;
    for (; i < news.length; i += 1) {
        var newsLiF = newsUl.find('li').eq(0).clone(true);
        newsUl.append(newsLiF);
        var li = newsUl.children('li').eq(i);
        li.find('.news_img').css({
            backgroundImage: 'url(' + addr + news[i].img + '.png)'
        });
        li.find('button').attr({
            href: news[i].link /*target:'_blank',"class":'more',"data-myattr":'myname'*/
        });
        li.find('dt').html( news[i].title );
        // li.find('dt').html( Line(i) );
        li.find('dd').html(news[i].data);
    }
    //변수를 다시 써주어야 한다. 
    //위에 변수는 한개일뿐이기에 복제한다음에의 ul과 li를 다시 정의해줘야 한다.
    newsUl.children('li').eq(news.length).remove();



    //==카드마다 높이값 계산해서 자동으로 높이값 조절하게 하기==// 
    /*복제한다음에 써야함 !!*/
    //ul변수정의

    //1~9까지 순서값대로 포지션 높이값 주기
    ///
    var renewsUl = newsBox.find('ul');
    var renewsLi = renewsUl.children('li');

    renewsLi = renewsUl.children('li');          //복제한 변수 for문 나와서도 다시 써주기!
    renewBtn = renewsLi.find('.news_btn'); 


    var myOffset = 40;

    renewsLi.eq(0).css({
        top: 0
    });
    renewsLi.eq(1).css({
        top: 0
    });
    renewsLi.eq(2).css({
        top: 0
    });

    // var at = $('.news_list').eq(0).({margin:true});

    setTimeout(function() {
        var at = $('.news_list').eq(0).outerHeight();


        // var liH0 = renewsLi.eq(0).outerHeight(true);
        // var liH1 = renewsLi.eq(1).outerHeight(true);
        // var liH2 = renewsLi.eq(2).outerHeight(true);

        // renewsLi.eq(3).css({top:liH0});
        // renewsLi.eq(4).css({top:liH1});
        // renewsLi.eq(5).css({top:liH2});

        // var liH3 = renewsLi.eq(3).outerHeight(true) + liH0;
        // var liH4 = renewsLi.eq(4).outerHeight(true) + liH1; 
        // var liH5 = renewsLi.eq(5).outerHeight(true) + liH2; 

        // renewsLi.eq(6).css({top:liH3});
        // renewsLi.eq(7).css({top:liH4});
        // renewsLi.eq(8).css({top:liH5});

        var n0 = 0,
            n1 = 0,
            n2 = 0;
        for (var i = 0; i < renewsLi.length; i++) {
            var j = i % 3;
            var att;
            // console.log(i-j);
            if (j == 0) {
                var nH = renewsLi.eq(i).outerHeight(true);
                att = n0 += nH;
            } else if (j == 1) {
                var nH1 = renewsLi.eq(i).outerHeight(true);
                att = n1 += nH1;
            } else if (j == 2) {
                var nH2 = renewsLi.eq(i).outerHeight(true);
                att = n2 += nH2;
            }

            console.log(n0 + ' ' + n1 + ' ' + n2);
            renewsLi.eq(i + 3).css({
                top: att
            });
        }


        // renewsLi.eq(5).nextAll().hide();

        // var liH3 = renewsLi.eq(6).outerHeight(true);
        // var liH4 = renewsLi.eq(7).outerHeight(true); 
        // var liH5 = renewsLi.eq(8).outerHeight(true); 

    }, 1);





    var addrModal = "../img/news/news_modal/";
    var newsModal = [

           {img:"modal_01",
            title: "아우디 코리아, 프리미엄 준중형 세단 2018년식 ‘아우디 A4 TDI’ 출시 ",
            data: "‘아우디 A4’는 1972년 ‘아우디 80'이라는 이름으로 처음 등장해 1994년부터 현재의 모델명인 ‘아우디 A4’로 명명된 아우디의 프리미엄 준중형 세단이다. 미학적인 디자인과 최첨단 기술을 결합한 ‘아우디 A4’는 다이내믹한 드라이빙 성능과 다양한 편의사양으로 준중형 세단 세그먼트에 새로운 기준을 제시하며 많은 사랑을 받아왔다. \n\n현행 모델인 9세대 ‘아우디 A4’는 출시와 동시에 유럽 자동차 업계 최고 권위를 자랑하는 '골든 스티어링 휠(Golden Steering Wheel 2015)'을 수상하며 중형 부문 최고의 신차로 인정받았으며, 유럽 신차 평가 프로그램 ‘유로 NCAP TEST’에서 최고 안전 등급인 별 5개 만점과 ‘유로 NCAP 어드밴스 어워드(Euro NCAP Advance Award)’를 수상하며 안정성도 입증했다."},

           {img:"modal_02",
           title: "아우디 코리아,'아우디 비전 나잇 (Audi Vision Night)’개최",
            data: "‘아우디 코리아(사장: 세드릭 주흐넬)’는 2018 부산 국제 모터쇼 개막을 하루 앞둔 6일 저녁, 부산시 기장군에 위치한 힐튼 부산 호텔에서 ‘아우디 비전나잇(Audi Vision Night)’을 개최했다. \n\n이날 아우디 코리아는 지난 2년 반 동안 고객 신뢰 회복 및 비즈니스 정상화를 위해 노력해온 아우디 코리아의 비즈니스 플랜과 비전을 발표하고 ‘아우디 Q5’, ‘아우디 Q2’ 를 비롯해 미래 이동성에 대한 아우디의 열정과 비전을 담은 레벨4 자율주행 전기 컨셉트카‘아우디 일레인(Elaine)’를 국내 최초로 공개했다. \n\n2년만에 첫 공식석상에 선 아우디 코리아 세드릭 주흐넬 사장은 이날 본격적인 발표에 앞서 한국과의 특별한 인연에 대한 이야기를 시작으로 국내 고객을 비롯해 딜러와 임직원에 대한 사과와 신뢰할 수 있는 아우디로 거듭나겠다는 각오로 ‘아우디 비전 나잇’의 문을 열었다."
          },

           {img: "modal_03",
           title: "아우디 코리아,서대구 전시장 및 서비스센터 오픈",
            data:"‘아우디 코리아(사장: 세드릭 주흐넬)는 아우디 공식 딜러사인 코오롱아우토 (대표이사: 이철승)가 아우디 서대구 전시장 및 서비스센터를 오픈했다고 밝혔다.‘아우디 서대구 전시장 및 서비스센터’는 연면적 약 2,998m²(907평) 지상 5층 규모로 1층과 2층에 총 17대의 차량을 전시할 수 있는 쇼룸과 상담공간을 갖추고 있다.\n\n 2층 전시장에는 고성능 라인업 모델을 위한 ‘아우디 스포트 존(Audi Sport Zone)’과 Audi A8 고객을 위한 ‘아우디 익스클루시브 존(Audi Exclusive Zone)’ 등 차별화된 전시 공간을 마련해 색다른 고객 서비스 경험을 제공할 예정이다.3층에 위치한 서비스센터는 하루 최대 35대의 차량 정비가 가능하며, 하나의 워크베이에 두 명의 테크니션이 투입되어 작업 시간을 절반으로 줄이는 동시에 정확도를 높여 보다 신속하고 정확한 서비스를 제공하는 아우디 트윈 서비스(Twin Service)도 운영할 예정이다."},


           {img: "modal_04",
           title: "아우디 코리아, 2018년 브랜드 홍보대사로 배우 이진욱, 슈퍼주니어 최시원,  에프엑스 크리스탈 선정",
            data:"‘아우디 코리아(사장: 세드릭 주흐넬)는 배우 이진욱, 슈퍼주니어의 멤버 최시원 그리고 에프엑스(f(x))의 멤버 크리스탈을 2018년 아우디 코리아 브랜드 홍보대사로 위촉했다고 밝혔다. \n\n배우 이진욱은 2015년, 2016년에 이어 2018년에도 아우디 코리아의 홍보대사로서 인연을 이어간다. 이진욱은 올해 SBS ‘리턴’으로 또 한 번 열정적인 연기를 선보였으며 영화 ‘호랑이보다 무서운 겨울손님’에서 색다른 연기를 보여주며 호평을 받았다. 이진욱은 지난 ‘2016 부산모터쇼’에 참석해 ‘아우디 S8’ 차량을 운전하여 무대에 선보였으며, 아우디의 TV광고 모델로도 활동하는 등, 다양한 프로젝트를 함께한 바 있다.슈퍼주니어 최시원은 가수 활동은 물론 국내외 드라마와 영화, 광고 등 다방면을 넘나들며 활약해 최고의 한류스타로 자리매김해 왔다."},


           {img: "modal_05",
            title: "아우디,현대차그룹과 수소 연료전지 기술개발 협약 체결",
            data:"아우디 송파대로 전시장’은 기존 송파 전시장에서 확장 이전한 것으로, 연면적 약 6,269m²(1,896평), 지상 4층 규모로 1층과 2층에 총 16대의 차량을 전시할 수 있는 쇼룸과 상담 공간을 갖추고 있다. \n\n‘아우디 송파대로 전시장’은 차량 색상, 가죽 샘플 등을 고객들이 직접 보고 만져볼 수 있는 ‘아우디 익스클루시브 존(Audi Exclusive Zone)’, 고성능 라인업 S와 RS만을 위한 ‘아우디 스포트 컨셉트 존(Audi Sport Concept Zone)’ 등 차별화된 전시 공간을 마련해 색다른 고객 서비스 경험을 제공할 예정이다.\n\n 3층에 위치한 서비스센터는 차량 경정비가 가능한 5개의 워크베이를 운영하고 있다. 두 명의 테크니션이 한 개의 워크베이에서 동시에 작업하는 ‘아우디 트윈 서비스(Twin Service)’를 통해 작업시간을 획기적으로 단축하여 보다 신속하고 정확한 서비스를 제공할 예정이다. 또한, 2층에는 서비스센터 고객 전용 라운지가 마련되어 있어 보다 편리하게 서비스를 이용할 수 있다."},


           {img: "modal_06",
             title: "아우디, ‘아우디. 진보. 2025.’ 계획 공개하며 2025년까지  20종 이상 전동화 모델 출시 및 80만대 이상 출시계획 발표",
            data:"‘독일 아우디 AG는 지난 5월 2일에 열린 연례 총회에서 2025년까지의 목표와 브랜드 미래 전략인 ‘아우디. 진보. 2025.’의 업데이트 된 계획을 발표했다.새롭게 발표된 ‘아우디. 진보. 2025. (Audi.Vorsprung.2025.)’에 따르면, 아우디는 2025년까지 전체 판매대수 가운데 전동화 차량의 비중을 33% 수준으로 높이는 것을 목표로 하고 있다.\n\n 또한,2025년까지 20종 이상의 전동화 차량을 선보이고 80만대 이상의 판매를 목표로 한다는 계획이다. 올해 출시되는 아우디의 첫 번째 양산형 순수전기차이자 추진 전략인 '로드맵 E (Roadmap E)'의 첫 번째 모델인 ‘아우디 e-트론’을 시작으로, 아우디는 ‘e-트론 스포트백’을 2019년에 그리고 고성능 전기차인 ‘e-트론 GT’와 프리미엄 소형 전기차 모델을 2020년에 순차적으로 공개할 예정이다. "},


           {img: "modal_07",
           title: "아우디 코리아, ‘아우디 공식 인증 중고차 서대구 전시장’ 신규 오픈",
            data:"‘대구광역시 서구 문화로 37에 위치한 대구 중고차 매매단지인 ‘M월드’ 2층에 문을 연 아우디 공식 인증 중고차 서대구 전시장’은 연면적 1,008m²의 규모로 총 32대의 차량 전시가 가능하다. \n\n경부고속도로와 중앙고속도로에 인접해 뛰어난 고객 접근성을 바탕으로 대구 지역은 물론 경북 구미, 김천, 안동 지역의 고객들에게 더욱 수준 높은 판매 서비스를 제공할 것으로 기대된다.‘아우디 공식 인증 중고차 (Audi Approved plus, APP)’ 서비스는 지난 2015년 9월, 보다 많은 고객들에게 아우디의 프리미엄 브랜드 가치를 전달하기 위해 시작한 공식 인증중고차 사업이다."},


           {img: "modal_08",
           title: "아우디 코리아, 서비스 경진대회 ‘아우디 트윈컵’ 2018 한국 결선 성료",
            data:"‘아우디 트윈컵’은 전세계 아우디 서비스 직원들의 서비스 역량 향상을 위해 매년 실시 하는 행사로 한국에서도 2008년부터 매년 개최되고 있다. 아우디 공식 딜러라면 누구나 참가할 수 있는 아우디 트윈컵은 고객 응대 역량 및 제품 지식을 겨루는 ‘서비스’ 부문과 정비 기술력을 평가하는 ‘테크놀로지’ 부문의 두 파트로 나뉘어 진행된다.\n\n 이번 아우디 트윈컵 한국 대회에는 지난해 하반기부터 진행된 온라인 테스트에서 우수한 성적을 거둔 총 24개팀(서비스 부문 5팀, 테크놀로지 부문 19팀) 58명이 참가했으며, 공식 서비스 센터에서 흔히 발생하는 상황을 반영하여 이론적/실제적 고객 응대 및 정비 기술과 실제 차량으로 진행하는 팀별 실기 테스트 및 개인별 필기 테스트를 통해 평가를 진행했다."},

 
           {img: "modal_09",
           title: "아우디, 포뮬러 E 경기에서 '아우디 e-트론 비전 그란 투리스모’ 선보여",
            data:"‘아우디는 플레이스테이션4 레이싱 게임인 ‘그란 투리스모’에 등장하는 가상의 자동차 ‘아우디 e-트론 비전 그란 투리스모 (Audi e-tron Vision Gran Turismo)’를 실제 컨셉트카로 제작, 지난 4월 14일 로마에서 개최된 전기차 레이싱 대회인 ‘포뮬러 E'에서 레이싱 택시로 선보였다.플레이스테이션 ‘그란 투리스모 (Gran Turismo)’는 세계적으로 수백만 장의 판매고를 기록한 대표적인 레이싱 게임이다.\n\n 아우디는 이 게임의 제작자인 소니와 폴리포니 디지털과 약 20년간 협력해왔으며, ‘그란 투리스모’의 15주년을 기념하는 프로젝트인 '비전 그란 투리스모 (Vision Gran Turismo)'를 위해 ‘아우디 e-트론 비전 그란 투리스모’를 개발했다. 이후 단 11개월 만에 아우디는 게임용 가상 레이스카인 ‘아우디 e-트론 비전 그란 투리스모’를 기반으로 한 세상에서 하나뿐인 전기 컨셉트카를 실제로 제작하는데 성공했다."}

    ];



    var ModalSet = function(i) {
        newMoImg.css({
            backgroundImage: 'url(' + addrModal + newsModal[i].img + '.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundPosition: 'center center'
        });

        var enterTitle = newsModal[i].title.replace(/(\n)/g,'<br />');
        var newsdata = newsModal[i].data;
        var enterData = newsdata.replace(/(\n)/g,'<br />');

        newMoDt.html(enterTitle);
        // newMoDd.text(newsModal[i].data);
        newMoDd.html(enterData);


    };
    ModalSet(0);



    // button 클릭시 모달창 띄워서 처리
    renewBtn.on('click', ['button'], function(e) {
        e.preventDefault();
        var thisI = $(this).parentsUntil('li').parent().index();
        console.log(thisI);
        newMoBox.fadeIn();
        newMoBg.fadeIn();
        ModalSet(thisI);
    });

    newMoBg.on('click', function() {
        newMoBox.fadeOut();
        newMoBg.fadeOut();
    });

    listBtn.on('click', function() {
        newMoBox.fadeOut();
        newMoBg.fadeOut();
    });



})(jQuery);





/*
// 생성해서 처리한다면???
var i = 0;
for(; i<img.length; i+=1){
  bestUl.append('<li>  <a href="#">  <div class="news_img"></div>  <dl>  <dt>???</dt>  <dd>=======</dd>  </dl>  </a>  </li>');
  bestUl.children('li').eq(i).find('.news_img').css({backgroundImage:'url('+ addr + img[i] +')'});
}
bestUl.append('<li></li>');
bestUl.find('li').eq(-1).css({backgroundImage:'url('+ addr+ 'default_menu.png' +')', backgroundRepeat:'no-repeat'});


*/