$(function(){
    $(".accordion a").click(function(e){
        e.preventDefault();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).next().slideUp();
        }
        else{
            $(".accordion p").slideUp();
            $(".accordion a").removeClass("active");
            $(this).addClass("active");
            $(this).next().slideDown();
        }
    });
    
    $("header .mob").click(function(){
       $(this).toggleClass("active");
       $(".collapse").slideToggle()
    });
    if(screen.width<768){
        $(".collapse a").click(function(){
            $(".collapse").slideUp();
            $("header .mob").removeClass("active");
         });
    }

    $(".wrap-5 .seemore").click(function(){
        $(".wrap-5 .all").fadeIn();
    });
        
    $(".wrap-5 .btn").click(function(){
        $(".wrap-5 .btn").removeClass("active");
        $(this).addClass("active");

        if($(this).text()=="All"){
            $(".wrap-5 .all").fadeIn();
        }
        else if($(this).text()=="Website"){
            $(".wrap-5 .brand").fadeOut(0);
            $(".wrap-5 .web").fadeIn();
        }
        else if($(this).text()=="Branding"){
            $(".wrap-5 .web").fadeOut(0);
            $(".wrap-5 .brand").fadeIn();
        }
    });

    $(".wrap-7 .seemore").click(function(){
        $(".wrap-7 .row:nth-child(2) .col-4").fadeIn();
    });

    $(".signup").click(function(){
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popover"></div>`);
        $("body .popover").append($(".formdata").html());
        $(".popover input:first").focus();
        
        function closePopup(){
            $(".popover, .overlay").remove();
        };

        $(".popover .close, .overlay").click(function(){
            closePopup();
        });

        $(window).keyup(function(e){
            if(e.which==27){ closePopup() }
        });
    });

    $(".reviews").bxSlider({
        controls:false,
        auto:true,
        pause:5000,
        autoHover:true
    });

    
    AOS.init();

    const str = "Let me show you a few things.";

    function timer(){
        let counter = 0;
        $(".banner p").text("");
        setInterval(i=>{
            $(".banner p").append(str[counter++])
        },50);
    }
    timer();
    setInterval(timer,3000);
    
});