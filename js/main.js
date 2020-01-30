function funLoad(){
    var Cheight = $(window).height();
    $('#wrap').css({'height':Cheight+'px'});
    }
    window.onload = funLoad;
    window.onresize = funLoad;
    $(function(){
        $('#close').on('click',function(){
            alert('창을 닫습니다.');
            self.close(); 
        })
        $('#blog').on('click',function(){
            alert('블로그로 이동.');
            location.href='https://blog.naver.com/je_je13';
            
        });
    });