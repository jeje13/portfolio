$(function(){ 
    $('.slider').bxSlider();

     $('#container01').hide();
        $('#img01').on('click',function(){
            $('#wrap').css('opacity','0.5');
            $('#container01').show();
        });
        $('.close').on('click',function(){
            $('#wrap').css('opacity','1');
            $('#container01').hide();
    });
    $('#container02').hide();
        $('#img02').on('click',function(){
            $('#wrap').css('opacity','0.5');
            $('#container02').show();
        });
        $('.close').on('click',function(){
            $('#wrap').css('opacity','1');
            $('#container02').hide();
    });
    
    // 모달위치이동 스크립트
    var moDal01 = $('div#container01');
    var moDal02 = $('div#container02');

    var winScroll = $(window).scroll(function () {
       
        var moDalHei = moDal01.css({"top":(($(window).height()-moDal01.outerHeight())/2+$(window).scrollTop())+"px","left":(($(window).width()-moDal01.outerWidth())/2+$(window).scrollLeft())+"px"});
        var moDalHei = moDal02.css({"top":(($(window).height()-moDal02.outerHeight())/2+$(window).scrollTop())+"px","left":(($(window).width()-moDal02.outerWidth())/2+$(window).scrollLeft())+"px"});
    }); 
    
    
});
