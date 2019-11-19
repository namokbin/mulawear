//nav
$(function(){
    var $nav=$("header>.innerbox");
    var $sub_bg=$(".sub_bg");
    var $nav_mask=$(".nav_mask");
    var $all_menu=$("header>.innerbox>nav>.all-menu");

    var maskHeight = $(document).height();  
    var maskWidth = $(window).width();  

    $nav_mask.css({
        'width':maskWidth,
        'height':maskHeight
    }); 

    $nav.on({
        "mouseenter":function(){
            $sub_bg.stop().slideDown(200);
            $all_menu.stop().slideDown(200);
            $nav_mask.show();
        },
        "mouseleave":function(){
            $sub_bg.stop().slideUp();
            $all_menu.stop().slideUp();
            $nav_mask.hide();
        }
    });
    $sub_bg.on({
        "mouseenter":function(){
            $sub_bg.stop().slideDown(200);
            $all_menu.stop().slideDown(200);
            $nav_mask.show();
        },
        "mouseleave":function(){
            $sub_bg.stop().slideUp();
            $all_menu.stop().slideUp();
            $nav_mask.hide();
        }
    });
    
});

//header_fixed
$(function(){
    $(window).on("scroll",function(){
        scrollTop = $(this).scrollTop();

        if (scrollTop > 50) {
            $("header").addClass("fixed");
            $("#main_banner_slide").css({
                marginTop:70
            });
        }else{
            $("header").removeClass("fixed");
            $("#main_banner_slide").css({
                marginTop:0
            });
        };
    });
});

//main_banner_slide
$(function(){
    var $prev=$("#main_banner_slide>.slide_pagination>li.prev>a");
    var $next=$("#main_banner_slide>.slide_pagination>li.next>a");
    var $container=$("#main_banner_slide>.slide_container");
    var $tbn_container=$("#tbanner-slides>.tbanner-container");

    $prev.on("click",function(evt){
        evt.preventDefault();

        $container.stop().animate({
            marginTop:0
        }, 'easeOutCubic', function(){
            $container.children('li').last().prependTo($container);
            $container.css('margin-top',-802);
        });

        $tbn_container.stop().animate({
            marginTop:0
        }, 'easeOutCubic', function(){
            $tbn_container.children('li').last().prependTo($tbn_container);
            $tbn_container.css('margin-top',-50);
        });
    });
    $next.on("click",function(evt){
        evt.preventDefault();

        $container.stop().animate({
            marginTop:-1604
        },'easeOutCubic', function(){
            $container.children('li').eq(0).appendTo($container);
            $container.css('margin-top',-802);
        });
        $tbn_container.stop().animate({
            marginTop:-100
        }, 'easeOutCubic', function(){
            $tbn_container.children('li').eq(0).appendTo($tbn_container);
            $tbn_container.css('margin-top',-50);
        });
    });

});

//collection item slide
$(function(){
    var $prev=$("#collection_wrap>.collection_item>.slide_wrap>.slide_pagination>li.prev>a");
    var $next=$("#collection_wrap>.collection_item>.slide_wrap>.slide_pagination>li.next>a");
    var $container=$("#collection_wrap>.collection_item>.slide_wrap>.slide_container");

    $prev.on("click",function(evt){
        evt.preventDefault();

        $container.stop().animate({
            marginLeft:0
        }, 'easeOutCubic', function(){
            $container.children('li').last().prependTo($container);
            $container.css('margin-left',-1320);
        });
    });
    $next.on("click",function(evt){
        evt.preventDefault();

        $container.stop().animate({
            marginLeft:-2640
        },'easeOutCubic', function(){
            $container.children('li').eq(0).appendTo($container);
            $container.css('margin-left',-1320);
        });
    });
});

//#leggings_wrap .size_box
$(function(){
    var $sizeView=$("#leggings_wrap>.product_wrap>ul>li>figure>figcaption>div.size_view");
    var $sizeBox=$("#leggings_wrap>.product_wrap>ul>li>figure>figcaption>.size_view>.size_box");
    var $close=$("#leggings_wrap>.product_wrap>ul>li>figure>figcaption>.size_view>div.size_box>a");

    $sizeView.on("click",function(evt){
        evt.preventDefault();
        $(this).children($sizeBox).show().closest($("#leggings_wrap>.product_wrap li")).siblings().find($sizeBox).hide();
        // $(this).addClass("on").closest($("#leggings_wrap>.product_wrap>ul>li")).siblings().find(".size_view").removeClass("on");   

    });
    
    $close.on("click",function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        $(this).parent().hide();
    });
    

});

//pageup / pagedown
$(function(){
    $(window).on("scroll",function(){

        scrollTop=$(this).scrollTop();
        console.log(scrollTop);

        if(scrollTop>200){
            $(".page_btn").fadeIn(200);
        }else{
            $(".page_btn").fadeOut(200);
        }
    });

    $(".page_btn>ul>.pageup").on("click",function(evt){
        evt.preventDefault();

        $("html,body").stop().animate({
            scrollTop:0
        });
    });

    $(".page_btn>ul>.pagedown").on("click",function(evt){
        evt.preventDefault();

        $("html,body").stop().animate({
            scrollTop:8109
        });
    });
});