

window.onload = function() {
    (async () => {
        await loadFull(tsParticles);
        await tsParticles.loadJSON("tsparticles", "../particles/particles.json");
    })();

    // skill_Close 모달창
    const ovModal = document.querySelector(".skills-modal");
    const closeModal = document.querySelectorAll(".skills-modal-box");

    for(let i = 0; i <= 5; i++) {
        closeModal[i].children[0].addEventListener("click", function() {

            for(let j = 0; j <= 5; j++) {
                closeModal[j].style.display = "none";
                ovModal.classList.remove("modal-on");
            };
        });
    };

    class CardFlipOnScroll {
        constructor(wrapper, sticky) {
            this.wrapper = wrapper
            this.sticky = sticky
            this.cards = sticky.querySelectorAll('.card')
            this.length = this.cards.length
    
            this.start = 0
            this.end = 0
            this.step = 0
        }
    
        init() {
            this.start = this.wrapper.offsetTop - 4500
            this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
            this.step = (this.end - this.start) / (this.length * 2)
        }
    
        animate() {
            this.cards.forEach((card, i) => {
                const s = this.start + this.step * i
                const e = s + this.step * (this.length + 1)
    
                if (scrollY <= s) {
                card.style.transform = `
                    perspective(50vw)
                    translateX(70vw) 
                    rotateY(180deg)
                `
                } else if (scrollY > s && scrollY <= e - this.step) {
                card.style.transform = `
                    perspective(50vw)
                    translateX(${70 + (scrollY - s) / (e - s) * -70}vw)
                    rotateY(180deg)
                `
                } else if (scrollY > e - this.step && scrollY <= e) {
                card.style.transform = `
                    perspective(50vw)
                    translateX(${70 + (scrollY - s) / (e - s) * -70}vw)
                    rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
                `
                } else if (scrollY > e) {
                card.style.transform = `
                    perspective(50vw)
                    translateX(0vw) 
                    rotateY(0deg)
                `
                }
            })
        }
    }
    const mainContent1 = document.querySelector('.main-content-1')
    const sticky = document.querySelector('.sticky')
    const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
    cardFlipOnScroll.init()

    window.addEventListener('scroll', () => {
        cardFlipOnScroll.animate()
    })

    window.addEventListener('resize', () => {
        cardFlipOnScroll.init()
    })
    
}

// skill_Open 모달창
function openPsModal() {
    const psModal = document.querySelector(".psBox");
    const ovModal = document.querySelector(".skills-modal");
    psModal.style.display = "block";
    ovModal.classList.add("modal-on");
};

function openHtmlModals() {
    const htmlModal = document.querySelector(".htmlBox");
    const ovModal = document.querySelector(".skills-modal");
    htmlModal.style.display = "block";
    ovModal.classList.add("modal-on");
};

function openCssModals() {
    const cssModal = document.querySelector(".cssBox");
    const ovModal = document.querySelector(".skills-modal");
    cssModal.style.display = "block";
    ovModal.classList.add("modal-on");
};

function openJsModals() {
    const jsModal = document.querySelector(".jsBox");
    const ovModal = document.querySelector(".skills-modal");
    jsModal.style.display = "block";
    ovModal.classList.add("modal-on");
};

function openSassModals() {
    const sassModal = document.querySelector(".sassBox");
    const ovModal = document.querySelector(".skills-modal")
    sassModal.style.display = "block";
    ovModal.classList.add("modal-on");
};

function openJQueryModals() {
    const jQueryModal = document.querySelector(".jQueryBox");
    const ovModal = document.querySelector(".skills-modal");
    jQueryModal.style.display = "block";
    ovModal.classList.add("modal-on");

    
};



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

    // 타이핑될 텍스트를 가져온다
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
    //liIndex 인덱스로 구분해 한줄씩 가져옴

    typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

    if (typingBool == false) {
        // 타이핑이 진행되지 않았다면
        typingBool = true;
        var tyInt = setInterval(typing, 200); // 반복동작
    }

    function typing() {
        $(".typing ul li").removeClass("on");
        $(".typing ul li").eq(liIndex).addClass("on");
        //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

        if (typingIdx < typingTxt.length) {
            // 타이핑될 텍스트 길이만큼 반복
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
            typingIdx++;
        } else {
            //한문장이끝나면
            if (liIndex < liLength - 1) {
                //다음문장으로  가기위해 인덱스를 1증가
                liIndex++;
                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                //다음문장 타이핑전 1초 쉰다
                clearInterval(tyInt);
                //타이핑종료

                setTimeout(function () {
                    //1초후에 다시 타이핑 반복 시작
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


    // skill 그래프 모션
    $(function() {
        var charts = $(".skills-charts");
        var chart = $('.skills-chart');
        var chartOST = chart.offset().top - 600; // chart의 화면에서 떨어진 높이가 1000


        $(window).scroll(function() {
            var currentSCT = $(this).scrollTop();
            if(currentSCT >= chartOST) {
                if(!charts.hasClass('active')) {
                    // 한번charts.addClass('active')가 들어오면은 조건에 맞지 않기때문에 실행이 되지않는다.

                    animateChart(); // 애니메이션이 실행하고나면 charts.addClass('active')가 생성이된다.
                    charts.addClass('active');
                }
            }
        });

        function animateChart() {
            chart.each(function(){
                var item = $(this); // div class="chart"를 말한다.
                var title = item.find("h2");
                var targetNum = title.attr("data-num"); // <h2>.attr(속성)에서 data-num것을 가지고와라.
                var circle = item.find('circle');

                // 각각의 svg 서클의 값을 설정해주는 값
                $({rate:0}).animate({rate:targetNum}, {
                    duration: 1500,
                    progress: function() { // 애니메이션이 변화할때마다 할일을 지정해준다.
                        var now = this.rate; // this는 애니메이트 전체를 말한다.
                        title.text(Math.floor(now)+ "%");
                        circle.css({strokeDashoffset: 220-(220*now/100)});
                    }
                })
            });
        }
    });


    // 달위에-깃발-들고있는-이미지 모션
    var description6 = $(".description-6")
    var secImgOST = description6.offset().top + 4700;

    $(window).scroll(function () {
        var curSCT = $(this).scrollTop();
        var width = $(window).width();

        if (curSCT > secImgOST) {
            $(".moon-up-img img").addClass("on");

            if (width>=1320) {
                $(".moon-up-img img").addClass("on1");
            }
            
        } else {
            $(".moon-up-img img").removeClass("on");
            $(".moon-up-img img").removeClass("on1");
        }
    });

    // Coding Img - open, close
    var description4 = $(".description-4")
    var secLeftOST = description4.offset().top - 600;

    $(window).scroll(function () {
        var curSCTLeft = $(this).scrollTop();
        var width = $(window).width();

        if (curSCTLeft > secLeftOST) {
            $(".side-left").addClass("ImgLeft");
            $(".side-right").addClass("ImgRight");

            if (width>=1320) {
                $(".side-left").addClass("ImgLeft");
                $(".side-right").addClass("ImgRight");
            }

        } else {
            $(".side-left").removeClass("ImgLeft");
            $(".side-right").removeClass("ImgRight");
        }
    });
    

    // 스크롤 화살표 fadein,out
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

    // $(function(){
	// 	$("html, body").animate({ scrollTop: 0 }, "slow"); 
	// });

    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 6000) {
            $("body").css("background-color","#eee")
        } else {
            $("body").css("background-color","#000")
        }
    })
    
}); 

