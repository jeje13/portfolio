$(function(){
    $('html').smoothScroll(300);
    $(window).on('scroll',function(){
      var windowTop=$(window).scrollTop();
      if(windowTop>=100){
        $('header').addClass('active');
      }else{
        $('header').removeClass('active');
      }
    })

    $(window).on('scroll',function(){
      var windowTop=$(window).scrollTop();
      if(windowTop>=200){
        $('.section#home').addClass('active_01');
        $('.section#home').addClass('active_02');
        $('.section#home>.container').css({'opacity':'0','transition':'0.7s'});
      }else{
        $('.section#home').removeClass('active_01');
        $('.section#home').removeClass('active_02');
        $('.section#home>.container').css({'opacity':'1','transition':'0.5s'});
      }
    })
    // portfolio swiper style
    var swiper01 = new Swiper('.swiper-container01', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      
    });

    var swiper02 = new Swiper('.swiper-container02', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      
    });
        
    $('#click_event').on('click',function(){
      alert('인포그래피 보러가기');
      location.href='pf.html';
    });
  })