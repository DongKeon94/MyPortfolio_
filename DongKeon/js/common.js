$(function(){
    responsive_fc();
    setVh();
    hamberger();
});

$(window).resize(function(){
  responsive_fc();
  setVh();

});

//넓이에 따라 이미지 변경
function responsive_fc() {


  if(window.innerWidth > 820 ) {
    $(".wrap").removeClass("m-ver");
    $(".wrap").addClass("w-ver");
  } else{
    $(".wrap").addClass("m-ver");  
    $(".wrap").removeClass("w-ver");
  }
  

  if($(".wrap").hasClass("m-ver")) {
      $(".rs_img").each(function() {
        $(this).attr("src", $(this).attr("src").replace("_w.png","_m.png"));
        $(this).load(function(){ //이미지를 다 불러온후 확인하기 위해
            var imgWidth = this.naturalWidth; //이미지 크키가 정해져 있지 않을때
          $(this).width(imgWidth/10 +'rem');
        });
      }); 
    } else{
      $(".rs_img").each(function() {
        $(this).attr("src", $(this).attr("src").replace("_m.png","_w.png"));
        $(this).load(function(){ //이미지를 다 불러온후 확인하기 위해
            var imgWidth = this.naturalWidth; //이미지 크키가 정해져 있지 않을때
            $(this).width(imgWidth/10 +'rem');
        });
      });
    }
}

//팝업 열기 닫기
function openFc(obj) {
  $("#"+obj).show();
}
function closeFc(obj) {
  $("#"+obj).hide();

}

//팝업 열기 닫기
function openHiddenFc(obj) {
  $("#"+obj).show();
  $("html,body").css("overflow","hidden");
}
function closeHiddenFc(obj) {
  $("#"+obj).hide();
  $("html,body").css("overflow","visible");
}

function go_tab(num){

  $(".common_tab .tab_fc ul li").eq(num-1).addClass("on");
  $(".common_tab .tab_fc ul li").eq(num-1).siblings().removeClass("on");
  $(".common_area .tab"+num).show();
  $(".common_area .tab"+num).siblings().hide();

}

function setVh(){
  let vh = 0;
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}


$(function() {


  $(window).resize(function(){ 
    if (window.innerWidth < 821) {  // 다바이스 크기가 820이하일때
      var lnb = $(".header").offset().top;
      $(window).scroll(function() {
        var window = $(this).scrollTop();
        if(lnb < window) {
          $(".header").addClass("fixed");
          $(".visual_section").css("padding-top","15.6rem");
          $(".us_section").css("padding-top","15.6rem");
          $(".product_wrap").css("padding-top","15.6rem");
        } else {
          $(".header").removeClass("fixed");
          $(".visual_section").css("padding-top","0");
          $(".us_section").css("padding-top","0");
          $(".product_wrap").css("padding-top","0");
        }
      })
    
    } else {

    }
    
  }).resize(); 
});

// gnb
$(function() {
  $('.nav > li').on('mouseenter', function(){
    $(this).find('.change_txt').addClass('on');
    $(this).find(".dep2").stop().slideDown(500);
  })
  $('.nav > li').on('mouseleave', function(){
    $(this).find('.change_txt').removeClass('on');
    $(this).find(".dep2").stop().slideUp(500);
  })
});

// 햄버거버튼
function hamberger() {
  var burger = $('.hamberger');


  $(burger).on("click", function(){

    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
      $('.mobile_menu').css('right','0');
      $('.dim').css('display','block');
      $("html,body").css("overflow","hidden");
      $('.mobile_menu').height($(window).height())
    } else {
      $(this).removeClass('active');
      $('.mobile_menu').css('right','-100rem');
      $('.dim').css('display','none');
      $("html,body").css("overflow","visible");
    }
  });
}

// mobile gnb
$(function(){
  var itemli = $('.m_change');
  $('.m_change').on("click", function(){
    $('.m_change').find('.dep2').stop().slideUp(500);
    
    $(this).find('.dep2').stop().slideToggle(500);
    itemli.not($(this)).removeClass('on');
    // $(this).addClass('on');
    if(!$(this).hasClass('on')){
      $(this).addClass('on');
    } else {
      $(this).removeClass('on');
    }
  });
})


//intro 
$(function(){
  $("html, body").animate({ scrollTop: 0 }); 
  $('.intr .bg_sec').css("margin-top",$('.visual_section').height())
  setTimeout(function(){
    $('.bg_sec').css("margin-top",'0')
  }, 2000)
});