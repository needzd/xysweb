//二级导航

$(function(){
    $(".two").mouseenter(function(){
        $(".nav_our").css("display","block");
    })
    $(".two").mouseleave(function(){
        $(".nav_our").css("display","none");
    })
    $(".nav_our").mouseenter(function(){
        $(".nav_our").css("display","block");
    })
    $(".nav_our").mouseleave(function(){
        $(".nav_our").css("display","none");        
    })
    $(".nav_our").children().mouseenter(function(){
        $(this).css("background","#a5a5a5");
    })
    $(".nav_our").children().mouseleave(function(){
        $(this).css("background","#848484");
    })
})








//回到顶部
//顶部悬浮
$(window).scroll(function(){
    var scroll=document.body.scrollTop || document.documentElement.scrollTop;
    if(scroll>=30){
        $(".head").css({"position":"fixed","top":"0","z-index":"6","width":"100%"});
        $(".gotop").css("display","block");
    }else{
        $(".head").css("position","relative");
        $(".gotop").css("display","none");
    }
    $(function(){
        $(".gotop").click(function() {
            $("html,body").animate({scrollTop:0}, 500);
        }); 
    })
})


//点击首页
$(function(){
    $(".logo_imgs").click(function(){
        $(".nav_box").css("display","block");
        $(".logoimg2").css("display","none");
        $(".navyc").css("display","block");
    })
    $(".navyc").click(function(){
        $(".nav_box").css("display","none");
        $(".logoimg2").css("display","block");
        $(".navyc").css("display","none");
    })
})