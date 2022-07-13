window.onload = function() {
    (async () => {
        await loadFull(tsParticles);
        await tsParticles.loadJSON("tsparticles", "../particles/particles.json");
    })();

    
    // skill_Open, close 모달창
    const openPsModal = document.getElementById("openPsModal");
    const openHtmlModals = document.getElementById("openHtmlModals");
    const openCssModals = document.getElementById("openCssModals");
    const openJsModals = document.getElementById("openJsModals");
    const openSassModals = document.getElementById("openSassModals");
    const openJQueryModals = document.getElementById("openJQueryModals");

    openPsModal.addEventListener("mouseover", function() {
        const psModal = document.querySelector(".psBox");
        psModal.style.opacity = "1";

        openPsModal.addEventListener("mouseout", function() {
            const psModal = document.querySelector(".psBox");
            psModal.style.opacity = "0";
        });
    });
    
    openHtmlModals.addEventListener("mouseover", function() {
        const psModal = document.querySelector(".htmlBox");
        psModal.style.opacity = "1";

        openHtmlModals.addEventListener("mouseout", function() {
            const psModal = document.querySelector(".htmlBox");
            psModal.style.opacity = "0";
        });
    });

    openCssModals.addEventListener("mouseover", function() {
        const psModal = document.querySelector(".cssBox");
        psModal.style.opacity = "1";

        openCssModals.addEventListener("mouseout", function() {
            const psModal = document.querySelector(".cssBox");
            psModal.style.opacity = "0";
        });
    });

    openJsModals.addEventListener("mouseover", function() {
        const psModal = document.querySelector(".jsBox");
        psModal.style.opacity = "1";

        openJsModals.addEventListener("mouseout", function() {
            const psModal = document.querySelector(".jsBox");
            psModal.style.opacity = "0";
        });
    });

    openSassModals.addEventListener("mouseover", function() {
        const psModal = document.querySelector(".sassBox");
        psModal.style.opacity = "1";

        openSassModals.addEventListener("mouseout", function() {
            const psModal = document.querySelector(".sassBox");
            psModal.style.opacity = "0";
        });
    });

    openJQueryModals.addEventListener("mouseover", function() {
        const psModal = document.querySelector(".jQueryBox");
        psModal.style.opacity = "1";

        openJQueryModals.addEventListener("mouseout", function() {
            const psModal = document.querySelector(".jQueryBox");
            psModal.style.opacity = "0";
        });
    });
}


// jQuery Start
$(document).ready(function(){
    // Hello, World_Text
    $("#text2").hide();
    
    $('.hello').on('mouseenter', function(){
        $('.hello-text').css({'background':'#4169E1', 'filter':'drop-shadow(0px 4px 0px #191970)'});
        $('.balloon_triangle').css({'border-top-color':'#4169E1', 'filter':'drop-shadow(0px 4px 0px #191970)'});
        $('#text1').css('display','none');
        $('#text2').css({'display':'block', 'color':'#fff'});
    });
    
    $('.hello').on('mouseleave', function(){
        $('.hello-text').css({'background':'#fff', 'filter':'drop-shadow(0px 4px 0px rgba(255,255,255,0.7))'});
        $('.balloon_triangle').css({'border-top-color':'#fff', 'filter':'drop-shadow(0px 4px 0px rgba(255,255,255,0.7))'});
        $('#text1').css('display','block');
        $('#text2').css('display','none');
    });

    
    // typing_Text
    let typingBool = false;
    let typingIdx = 0;
    let liIndex = 0;
    let liLength = $(".typing-txt>ul>li").length;
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
    typingTxt = typingTxt.split("");

    if (typingBool == false) {
        typingBool = true;
        var tyInt = setInterval(typing, 200); 
    }

    function typing() {
        $(".typing ul li").removeClass("on");
        $(".typing ul li").eq(liIndex).addClass("on");

        if (typingIdx < typingTxt.length) {
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
            typingIdx++;
        } else {
            if (liIndex < liLength - 1) {
                liIndex++;
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                clearInterval(tyInt);

                setTimeout(function () {
                    tyInt = setInterval(typing, 150);
                }, 1500);
            } else if (liIndex == liLength - 1) {
                $(".typing ul li").delay(1200);
                $(".typing ul li").fadeOut(1000);
            }
        }
    } 


    // 여러가지 우주풍선의 이미지가 올라가는 모션
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 1200) {
            $(".up-img2")
            .animate({
                left : "-80%",
                top :"-10%",
            },10000)
        }
    });


    // skill graph motion
    $(function() {
        var charts = $(".skills-charts");
        var chart = $('.skills-chart');
        var chartOST = chart.offset().top - 600; 


        $(window).scroll(function() {
            var currentSCT = $(this).scrollTop();
            if(currentSCT >= chartOST) {
                if(!charts.hasClass('active')) {

                    animateChart();
                    charts.addClass('active');
                }
            }
        });

        function animateChart() {
            chart.each(function(){
                var item = $(this); 
                var title = item.find("h2");
                var targetNum = title.attr("data-num");
                var circle = item.find('circle');

                $({rate:0}).animate({rate:targetNum}, {
                    duration: 1500,
                    progress: function() { 
                        var now = this.rate;
                        title.text(Math.floor(now)+ "%");
                        circle.css({strokeDashoffset: 220-(220*now/100)});
                    }
                })
            });
        }
    });
    

    // 스크롤 화살표 fadein,out
    $("#up-arrow").hide();
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 400) {
            $("#up-arrow")
            .fadeIn(500);
        } else {
            $("#up-arrow")
            .fadeOut(500)
        }
    });

    // Up-arrow smooth
    $("#up-arrow").click(function(){
        $("html").animate({
            scrollTop : "0"
        }, 2000);
    })

    $("#up-arrow").click(function(){
        $("#up-arrow  img").animate({
            marginBottom : "550px"
        }, 2500)
        $("#up-arrow  img").animate({
            marginBottom : "0px"
        }, 500)
    })

    // LOGO fadeIn, fadeOut
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 700){
            $("header").removeClass("deactive");
            $("header").addClass("active");
            $("header").fadeIn(500)
        }else{
            $("header").removeClass("active");
            $("header").addClass("deactive");
            $("header").fadeOut(500)
        }
    })

    $(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow"); 
	});

    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 6700) {
            $("body").css("background-color","#eee")
        } else {
            $("body").css("background-color","#000")
        }
    })
    
}); 

