


$(function () {
    $('.m-nav-list').hide();
    $(".m-user").click(function () {
        // 阴影
        $(".m-l-nav").toggleClass("m-nav-on");
        // 菜单
        $('.m-nav-list').slideToggle('fast');
        // 半透明层
        $(".m-nav-black").fadeToggle();
        
    });

    // 移动端 点击阴影部分菜单收起
    $('.m-nav-black').click(function(){
        $('.m-nav-list').slideUp('fast');
        $(".m-l-nav").removeClass("m-nav-on");
        $(".m-nav-black").fadeOut();
    });

    // $(".m-nav-ul a").eq(1).click(function(){
    //     alert("该页面尚未开放！")
    
    // })

    // top 菜单切换
    // $('.l-nav-ul li').click(function(){
    //     $(this).addClass('current').siblings().removeClass('current');

    //     $(".data").removeClass('hidden').hide();
    //     var a = $(this).attr("data-a");
    //     $("div[data-b = " + a + "]").show();
    // });

    // mobile top 菜单切换
    // $('.m-nav-ul li').click(function(){
    //     $(this).addClass('current').siblings().removeClass('current');

    //     $(".xs-data").removeClass('hidden').hide();
    //     $(".data").removeClass('hidden').hide();
    //     var a = $(this).attr("data-a");
    //     $("div[data-b = " + a + "]").show();
    // });

    

    var ww = $(window).width();
    // if (ww < 914){
    //     $('.l-nav').width('6%');
    //     $('.l-nav-left').hide();
    //     $('.menu span').hide();
    //     $('.l-nav-ul a').css('border-right','none');
    //     $('.l-nav-ul .iconfont').width('100%');

    // } 
    
    if( ww < 768){
        // 屏幕宽度 <768px 时，去掉 .data ,添加 .xs-data,没有height：100%；
        $('.deleteClass').removeClass('data').addClass('xs-data');
    }
    


    










})


// $(function(){
//     // $('.btn-click').click(function(){
//     //     $('#myModal').modal('show');
//     // })
//     $('#myModal').modal({});
// })
