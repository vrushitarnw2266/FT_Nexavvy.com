$(document).ready(function () {

  function controlFilters (){

    if(window.innerWidth > 1200){
      if($('body').hasClass('casesPage') || $('body').hasClass('boardPage') || $('body').hasClass('resourcesPage')){
        let getElemFiltres = $('.header__main--filters .header__main--filter');
        $('.header__main--filters .header__main--filter--more').addClass('hidden');
        $('.header__main--filters .header__main--filter').removeClass('hidden');

        if(getElemFiltres.length > 4){
          $('.header__main--filters .header__main--filter--more').removeClass('hidden');

          getElemFiltres.each(function( index, el ) {
            if(index>4){
                $(el).addClass('hidden')
            }
          });

          let getElemFiltresMore = getElemFiltres.slice(5)
          if(getElemFiltresMore.length < 10){
            $('.header__main--filter--more span').text('0' + getElemFiltresMore.length)
          }
        }
      }
    }else if(window.innerWidth > 1024 && window.innerWidth < 1200){
      if($('body').hasClass('casesPage') || $('body').hasClass('boardPage') || $('body').hasClass('resourcesPage')){
        let getElemFiltres = $('.header__main--filters .header__main--filter');
        $('.header__main--filters .header__main--filter--more').addClass('hidden');
        $('.header__main--filters .header__main--filter').removeClass('hidden');

        if(getElemFiltres.length > 4){
          $('.header__main--filters .header__main--filter--more').removeClass('hidden');

          getElemFiltres.each(function( index, el ) {
            if(index>3){
                $(el).addClass('hidden')
            }
          });

          let getElemFiltresMore = getElemFiltres.slice(4)
          if(getElemFiltresMore.length < 10){
            $('.header__main--filter--more span').text('0' + getElemFiltresMore.length)
          }
        }
      }
    }


    $('.header__main--filter--more').on('click', function(e){
      let distanceElm = $('.customFilters').offset().top - 20
      $('html, body').animate({
        scrollTop: distanceElm
        // scrollTop: $(elTarget).offset().top
      }, 500);
    })

    

  }

  controlFilters()


  //screenLoader

    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
          setTimeout(() => {
              $('.screenLoad').addClass('opened');
          }, "10");

          setTimeout(() => {
            $('#smooth-wrapper').removeClass('scale');
          }, "150")
      
          setTimeout(() => {
              $('.screenLoad').addClass('hidden');
              $(".screenLoad > *:nth-of-type(1)").removeClass('hidden');
              
              $('.screenLoad').removeClass('opened');
          }, "900")
      }
    });

  setTimeout(() => {
      $('.screenLoad').addClass('opened');
  }, "10");

  setTimeout(() => {
    $('#smooth-wrapper').removeClass('scale');
  }, "150")

  setTimeout(() => {
      $('.screenLoad').addClass('hidden');
      $(".screenLoad > *:nth-of-type(1)").removeClass('hidden');
      $('.screenLoad').removeClass('opened');
  }, "900")

  

  function counter(element, start, end, duration) {
    let obj = document.querySelector(element),
     current = start,
     range = end - start,
     increment = end > start ? 1 : -1,
     step = Math.abs(Math.floor(duration / range)),
     timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
       clearInterval(timer);
      }
     }, step);
  }

//  const allLinks = document.querySelectorAll('.header__main--links > a, .header__main--logo, .works__more > a, .services__items .roundabout > a, .keyClients__desc--btns > a, .keyClients__items >a, .a_video__title a, .capabilities--more > a, .keyClients__desc--btns > a, .a_teams__services--right > a, .s_service--btn, .s_summary__right > a, .s_summary__left--bottom > a, .s_industries__header--title a, .s_industries__body--left > a, .c_case a:not(.c_case__desc--behance), .c_article__info--title a, .achievement__title a, .aw_business__title a, .t_teamsDev__title a, .t_teamsCreat__title a, .t_teamsCreat__companies--btn, .aw_business__item, .r_resources__slide--pic, .r_resources__subscribe--link, .aw_business__title a, .contacts__sites--team, .cc_hero--back, .cc_cases__slide > a, .a_hero__title a, .a_hero__title--mob a, .menuPopup__links >a, .ss_customTeam--more');
	
	
  const allLinks = document.querySelectorAll('.header__main--logo, .works__more > a, .services__items .roundabout > a, .keyClients__desc--btns > a, .keyClients__items >a, .a_video__title a, .capabilities--more > a, .keyClients__desc--btns > a, .a_teams__services--right > a, .s_summary__right > a, .s_summary__left--bottom > a, .s_industries__header--title a, .s_industries__body--left > a, .c_article__info--title a, .achievement__title a, .aw_business__title a, .t_teamsDev__title a, .t_teamsCreat__title a, .t_teamsCreat__companies--btn, .aw_business__item, .r_resources__slide--pic, .r_resources__subscribe--link, .aw_business__title a, .contacts__sites--team, .cc_hero--back, .cc_cases__slide > a, .a_hero__title a, .a_hero__title--mob a, .menuPopup__links >a, .ss_customTeam--more');	
    
    allLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkLocation = e.target.closest('a').getAttribute('href');
            if(linkLocation != "#"){
				document.querySelector('#smooth-wrapper').classList.add('scale');
                document.querySelector('.screenLoad').classList.remove('hidden');
                // document.querySelector('.screenLoad').classList.remove('hidden');
                // document.querySelector('.screenLoad--open').classList.remove('hidden--counter');
                setTimeout(() => {       
                  document.querySelector('.screenLoad--open').classList.remove('hidden--counter');
                }, 200);

                setTimeout(() => {
                    document.querySelector('.screenLoad--open').classList.add('hidden');
                    counter('.screenLoad--open p span', 10, 100, 800)
                }, 201);

                setTimeout(() => {
                    window.location.href = linkLocation
                    document.querySelector('.screenLoad--open').classList.add('hidden--counter');
                }, 1100);

            }
            
        })
    })



  $( window ).on( "resize", function() {
    controlFilters()
  } );


  if($('body').hasClass('homePage') || $('body').hasClass('aboutPage')){  

    $('.videoPopup-btn').on('click', function(e){

        $(".videoPopup").addClass('active')

        if($(window).width() < 1025){
          $('body').addedClass('noScroll');
        }else{
          smoother.paused(true);
        }
        
    })

      // Closed popup in page Videos and webinars 
      $('.videoPopup__exit-iframe').on('click', function(e){
        let wrapper = $(".videoPopup .videoPopup__video");

        wrapper.find('.video-popup-player').remove();

        $('<div>', {
              class: 'video-popup-player'
          }).appendTo(wrapper);

          $('.videoPopup').removeClass('active')

          if($(window).width() < 1025){
            $('body').removeClass('noScroll');
          }else{
            smoother.paused(false);
          }
          
      })

    
  }
})

// smoother.paused(true)

//play video
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function openVideoPopup(videoID, playerCheck){


    if(playerCheck == 'vimeo'){
      $('.videoPopup').addClass('active');
      if(window.innerWidth < 625){
        $('body').addClass('noScroll--mob');
      }else{
        smoother.paused(true);
      }

      let createSrc = 'https://player.vimeo.com/video/' + videoID + '?h=c248938605&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1'
    
      $('.video-popup-player').append(`<iframe class="videoPopup__video--vimeo" src="${createSrc}" autoplay="true"></iframe>`);
    }else{
      let player = document.querySelector('.video-popup-player');
      player = new YT.Player(player, {
            height: '390',
            width: '640',
            videoId: videoID,
            playerVars: {
              'playsinline': 1
            },
            events: {
              'onReady': onPlayerReady = (player) => {
              $('.videoPopup').addClass('active');
              if(window.innerWidth < 625){
                $('body').addClass('noScroll--mob');
              }else{
                smoother.paused(true);
              }
              player.target.playVideo();
              },
            }
      });
    }

      
  }


let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
//ScrollSmoother

$( window ).on( "resize", function() {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let smoother;

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.matchMedia({

  "(min-width: 1024px)": function() {

      ScrollTrigger.normalizeScroll(true)

      smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });

    }
});

ScrollTrigger.update()
ScrollTrigger.refresh()


//burger menu
$('.header__burger').on('click', function(el){
  let getMenu = document.querySelector('.menuPopup')

  if(!$(getMenu).hasClass('show')){
      $(getMenu).addClass('show');
      $('body').addClass('noScroll');
  }else{
    $(getMenu).removeClass('show');
    $('body').removeClass('noScroll');
  }

})

$('.menuPopup__footer--close').on('click', function(el){
  let getMenu = document.querySelector('.menuPopup');
  let getMenuInner = document.querySelector('.menuPopup--inner');
  getMenuInner.scrollTo(0, 0)

  $(getMenu).removeClass('show');
  $('body').removeClass('noScroll');
 

})

// only home page


if($('body').hasClass('homePage') || $('body').hasClass('servicePage')){
    
  //horiz scroll

  if(window.innerWidth > 1024){

    let clients = gsap.utils.toArray(".clients--inner");

    let getPerForScroll = (100*document.body.clientWidth)/document.querySelector(".clients").offsetWidth

    let clientsHorScroll = 100 - getPerForScroll


    gsap.to(clients, {
      xPercent: -clientsHorScroll,
      ease: "none",
      scrollTrigger: {
        trigger: '.clients',
        pin: true,
        scrub: 1,
        end: () => "+=" + (document.querySelector(".clients").offsetWidth - document.body.clientWidth)
      }
    });



      gsap.from($('.clients--wrapp'), {
        scrollTrigger: {
          trigger: $('.clients--wrapp'),
          scrub: true,
          start: "top top",
          onEnter: () => $('.header').addClass('horizonScroll'),
          onLeaveBack: () => $('.header').removeClass('horizonScroll'),
        },
      });

      let heightClientsSection = document.querySelector('.clients--wrapp').offsetHeight - (window.innerHeight - 160)


      gsap.from($('.clients--wrapp'), {
        scrollTrigger: {
          trigger: $('.clients--wrapp'),
          scrub: true,
          end: `${heightClientsSection}`,
          onLeave: () => $('.header').removeClass('horizonScroll'),
          onEnterBack: () => $('.header').addClass('horizonScroll'),
        },
      });
  
  }
}

if($('body').hasClass('homePage')){
    gsap.utils.toArray(".works").forEach(function (elem) {

    let heightInnerWindow = window.innerHeight - 120;

    ScrollTrigger.create({
        trigger: elem,
        start: `top ${heightInnerWindow}`,
        onEnter: () => $('.header').removeClass('header--black'),
        
    });
  });
}


//anim scale

function funBtnScale(){
    const buttonsScale = document.querySelectorAll('.scaleEffect');
    
    buttonsScale?.forEach(btn => {
        gsap.to(btn, { 
            scrollTrigger: {
            trigger: btn,
            start: 'top 90%',
            // toggleClass: "active"
            onEnter: () => btn.classList.add('show')
            },
        })
    
    });
}

funBtnScale()

//popup Form



function popupForm(){
  const getPopupFOrm = document.querySelector('.popupFormBot');

  if(getPopupFOrm){
    gsap.to(getPopupFOrm, { 
      scrollTrigger: {
      trigger: getPopupFOrm,
      start: 'top 101%',
      toggleClass: "prepared"
      },
    })
  }
    
}

popupForm()


//scroll open

if(window.innerWidth > 1025){

  $(document).on('wheel', function(e){
    if (e.originalEvent.wheelDelta >= 0) {
      $('.popupFormBot').removeClass('prepared-ready')
    }else{

      if($('.popupFormBot').hasClass('prepared') && !$('.popupFormBot').hasClass('prepared-ready')){
        $('.popupFormBot').addClass('prepared-ready stop--wheel');

        setTimeout(() =>{
          $('.popupFormBot').removeClass('stop--wheel');
        },200)

      }else if($('.popupFormBot').hasClass('prepared-ready') && $('.popupFormBot').hasClass('prepared') && !$('.popupFormBot').hasClass('stop--wheel')){
        if(window.innerWidth < 1024){
          $('body').addClass('noScroll');
        }else{
          smoother.paused(true);
        }
        $('.popupFormBot').addClass('show');
        $('.header').addClass('horizonScroll hiden-menu');
        $('.header').removeClass('show--social show--filters');

        setTimeout(() =>{
          $('.popupFormBot').addClass('scroll');
        },2000)
      }
      
    }
  });

}

// smoother.paused(true);
//touch open

// var directionMove;

// $(window).bind('touchstart', function (e){
//     directionMove = e.originalEvent.touches[0].clientY;
// });

// $(window).bind('touchend', function (e){
//   var te = e.originalEvent.changedTouches[0].clientY;

//   if(directionMove > te+5){
//     if($('.popupForm').hasClass('prepared') && !$('.popupForm').hasClass('prepared-ready')){
//       $('.popupForm').addClass('prepared-ready stop--wheel');

//       setTimeout(() =>{
//         $('.popupForm').removeClass('stop--wheel');
//       },200)

//     }else if($('.popupForm').hasClass('prepared-ready') && $('.popupForm').hasClass('prepared') && !$('.popupForm').hasClass('stop--wheel')){
//       if(window.innerWidth < 1024){
//         $('body').addClass('noScroll');
//       }else{
//         smoother.paused(true);
//       }
//       $('.popupForm').addClass('show');
//       $('.header').addClass('horizonScroll');
//       $('.header').removeClass('show--social show--filters');

//       setTimeout(() =>{
//         $('.popupForm').addClass('scroll');
//       },2000)
//     }
      
//   }else if(directionMove < te-5){
//     $('.popupForm').removeClass('prepared-ready')
//   }
// })

//form open

$('.formBtn').on('click', function(e){
  e.preventDefault();
  
  
  if(window.innerWidth <= 1024){
    $('body').addClass('noScroll');
  }else{
    smoother.paused(true);
  }

  $('.header').addClass('horizonScroll');
  $('.header').removeClass('show--filters');
  $('.popupForm').addClass('show');

  setTimeout(() =>{
    $('.popupForm').addClass('scroll');
  },2200)

})

//form close

$('.popupForm__close').on('click', function(e){
  e.preventDefault();
  
  
  if(window.innerWidth <= 1024){
    $('body').removeClass('noScroll');
  }else{
    smoother.paused(false);
  }

  $('.popupForm').removeClass('show scroll');
  $('.header').removeClass('horizonScroll');
  
  if(window.innerWidth > 1025){

    if($('body').hasClass('casesPage') || $('body').hasClass('boardPage') || $('body').hasClass('resourcesPage')){
      $('.header').addClass('show--filters')
    }
  }
})

$('.popupFormBot__close').on('click', function(e){
  e.preventDefault();
  
  
  if(window.innerWidth <= 1024){
    $('body').removeClass('noScroll');
  }else{
    smoother.paused(false);
  }

  $('.popupFormBot').removeClass('show prepared-ready scroll');
  $('.header').removeClass('horizonScroll hiden-menu');

  if(window.innerWidth > 1025){
    if($('body').hasClass('casesPage') || $('body').hasClass('boardPage') || $('body').hasClass('resourcesPage')){
      $('.header').addClass('show--filters');
    }
    $('.header').addClass('show--social');
  }
  
  if($('.popupFormBot').hasClass('prepared-ready') && $('.popupFormBot').hasClass('prepared') && !$('.popupFormBot').hasClass('stop--wheel')){
    
    if(window.innerWidth > 1025){
      $('.header').addClass('show--filters');
    }
  }
})


//change color header

gsap.utils.toArray(".section--white").forEach(function (elem) {

    let heightInnerWindow = window.innerHeight - 160;

    ScrollTrigger.create({
        trigger: elem,
        start: `top ${heightInnerWindow}`,
        end: `bottom ${heightInnerWindow}`,
        //markers: true,
  
        onEnter: () => $('.header').addClass('header--black'),
        onLeave: () => $('.header').removeClass('header--black'),
        onLeaveBack: () => $('.header').removeClass('header--black'),
        onEnterBack: () => $('.header').addClass('header--black'),
        
    });
});


//showed social about hover


document.querySelectorAll('.header__main--left').forEach((el) => {
  el.addEventListener('mouseenter', function (){
    let getPar = this.closest('.header')
    if(getPar.classList.contains('show--social') || getPar.classList.contains('show--filters')){
      getPar.classList.add('showMenu');
    }
  });

  el.addEventListener('mouseleave', function (){
    let getPar = this.closest('.header')
    getPar.classList.remove('showMenu');
  });
})

//paralax-effect

const getParalaxElems = document.querySelectorAll('.paralax--effect');
let getParalaxElemsHeight;

if(window.innerWidth > 770){
  getParalaxElemsHeight = 200
}else{
  getParalaxElemsHeight = 140
}

getParalaxElems.forEach(elem => {
  gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        scrub: true,
        start: "top bottom",
        end: "+=100%"
      },
      height: getParalaxElemsHeight,
      transformOrigin: "left top", 
      ease: "none",
    });
  
});


var sliderHero

// setTimeout(() => {   

  function funSliderHero(){

    sliderHero = new Swiper(".hero__slider", {
      slidesPerGroup: 1,
      slidesPerView: 1,
      speed: 800,
      
      loop: true,

      breakpoints: {
        320: {
          direction:'horizontal',
          allowTouchMove: true,
          spaceBetween: 0,
        },

        1025: {
          direction:'vertical',
          allowTouchMove: false,
          spaceBetween: 180,
        }
      },

      on: {
          init: function (swiper) {
            if(window.innerWidth > 1025){
              swiper.autoplay.stop();
            }

            setTimeout(() => { 
              $('.hero__slider').addClass('startAnim')
            }, 300)

          },
          
          resize: function (swiper) {
            if(window.innerWidth > 1025){
              swiper.autoplay.stop();
            }
          },

          transitionStart: function(swiper){


            let nextCover = document.querySelector('.hero__cover-slider .next');

            if($('.hero__slider').hasClass('startAnim')){
              nextCover.click(); 
            }  

            let activeSlider = document.querySelector(`.hero__slide[data-swiper-slide-index="${swiper.realIndex}"]`);
            
            // //change background
            // $('.hero__backing--inner >div').removeClass('show');
            // let getBackElemActive = $(`.hero__backing--inner >div`)[swiper.realIndex];
            // $(getBackElemActive).addClass('show');

            //change cloth

            $('.hero__cloth--inner >div').removeClass('show');
            let getClothElemActive = $(`.hero__cloth--inner >div`)[swiper.realIndex];
            $(getClothElemActive).addClass('show');

            //change colorText
            
            if(activeSlider.getAttribute('data-textColor') == 'black'){
              $('.hero__text').removeClass('hero__text--white');
            }else{
              $('.hero__text').addClass('hero__text--white');
            }

            //change name text

            $('.hero__text--small >div').removeClass('show');
            let getNameElemActive = $(`.hero__text--small >div`)[swiper.realIndex];
            $(getNameElemActive).addClass('show');

            //change header

            if(window.pageYOffset < 120){
              if(activeSlider.getAttribute('data-textColor') == 'black'){
                document.querySelector('.header').classList.add('header--black')
              }else{
                document.querySelector('.header').classList.remove('header--black')
              }
            }

            //change link
            
            $('.hero__cover--label >a').removeClass('show');
            let getLinkCaseActive = $(`.hero__cover--label >a`)[swiper.realIndex];
            $(getLinkCaseActive).addClass('show');

            //change cover pics tablet
            $('.hero__cover--pics >img').removeClass('show');
            let getPicCoverActiveTablet = $(`.hero__cover--pics >img`)[swiper.realIndex];
            $(getPicCoverActiveTablet).addClass('show');
            
          },

      },
    });

    $('.hero__cursor').on('click', function(e){
      let targetClock = e.target
      
      if(targetClock != document.querySelector('.hero__cover-slider .next') && targetClock.closest('.hero__cover--label') != document.querySelector('.hero__cover--label')){
        
        if($('.hero__slider').hasClass('startAnim')){
          sliderHero.slideNext()
        }
      }

      
    })  

  }

  funSliderHero()

// }, 1000);


if($('body').hasClass('homePage')){
  let getDistanceForStopPin = document.querySelector(".keyClients__desc").offsetHeight + 70
  //window.innerHeight

  ScrollTrigger.matchMedia({
    "(min-width: 625px)": function() {
      
      ScrollTrigger.create({
        trigger: ".keyClients__desc",
        start: "top 50",
        end: `bottom ${getDistanceForStopPin}`,
        endTrigger: ".keyClients__content",
        pin: true,
        pinSpacing: true,
        scrub: true,
        
     });
    }
 });

 ScrollTrigger.update()
  ScrollTrigger.refresh()
}


if($('body').hasClass('aboutPage')){
  let getDistanceForStopPin = document.querySelector(".keyClients__desc").offsetHeight - 30
  //window.innerHeight

  ScrollTrigger.matchMedia({
    "(min-width: 625px)": function() {
      
      ScrollTrigger.create({
        trigger: ".keyClients__desc",
        start: "top -30",
        end: `bottom ${getDistanceForStopPin}`,
        endTrigger: ".keyClients__content",
        // pinType: "transform", 
        // onRefreshInit: self => self.scroll(0),
        pin: true,
        pinSpacing: true,
        scrub: true,
        
     });
    }
 });

 ScrollTrigger.update()
  ScrollTrigger.refresh()

  //carusell

  const dur = 25;

  document.querySelectorAll('.customTeams__marquee .customTeams__marquee--inner').forEach((ticker, idx) => {

    if(idx % 2 === 0){
      // Get the initial size of the ticker
      const totalDistance = $(ticker).width();
      
      // Position the ticker
      gsap.set(ticker, {yPercent: 0});
      
      // Clone the first item and add it to the end
      $(ticker).append($(ticker.querySelector("li")).clone());
      
      // Get all of the items
      const items = ticker.querySelectorAll("li");
      
      const anim = gsap.to(ticker, { 
        duration: dur,
        x: -totalDistance,
        ease: "none",
        repeat: -1
      });

      let startPos;
      const wrap = gsap.utils.wrap(0, 1);
      const draggable = new Draggable(ticker, {
        type: "x",
        trigger: ticker,
        throwProps: true,
        onPressInit: function() {
          anim.pause();
          startPos = this.x;
        },
        onDrag: function() {
          let prog = wrap(-this.x / totalDistance);
          anim.progress(prog);
        },
        onThrowUpdate: function() {
          let prog = wrap(-this.x / totalDistance);
          anim.progress(prog);
        },
        onThrowComplete: function() {
          anim.play();
          gsap.fromTo(anim, {timeScale:0}, {duration: 1, timeScale:1, ease:"none"});
        },

      });
    }else{
        // Get the initial size of the ticker
      const totalDistance = $(ticker).width();
      
      // Position the ticker
      gsap.set(ticker, {yPercent: 0});
      
      // Clone the first item and add it to the end
      $(ticker).append($(ticker.querySelector("li")).clone());
      
      // Get all of the items
      const items = ticker.querySelectorAll("li");
      
      const anim = gsap.to(ticker, { 
        duration: dur,
        x: totalDistance,
        ease: "none",
        repeat: -1
      });

      let startPos;
      const wrap = gsap.utils.wrap(0, 1);
      const draggable = new Draggable(ticker, {
        type: "x",
        trigger: ticker,
        throwProps: true,
        onPressInit: function() {
          anim.pause();
          startPos = this.x;
        },
        onDrag: function() {
          let prog = wrap(this.x / totalDistance);
          anim.progress(prog);
        },
        onThrowUpdate: function() {
          let prog = wrap(this.x / totalDistance);
          anim.progress(prog);
        },
        onThrowComplete: function() {
          anim.play();
          gsap.fromTo(anim, {timeScale:0}, {duration: 1, timeScale:1, ease:"none"});
        },

      });
    }

    
  });

}

//hover effect



if($('body').hasClass('casesPage') || $('body').hasClass('casePage') || $('body').hasClass('servicePage') || $('body').hasClass('homePage')){
  function liquidEffectFun(){

    if(window.innerWidth > 1025){
      !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("three"),require("gsap/TweenMax")):"function"==typeof define&&define.amd?define(["three","gsap/TweenMax"],t):e.hoverEffect=t(e.THREE,e.TweenMax)}(this,function(e,t){return t=t&&t.hasOwnProperty("default")?t.default:t,function(n){function i(){for(var e=arguments,t=0;t<arguments.length;t++)if(void 0!==e[t])return e[t]};var r=n.parent,o=n.displacementImage,a=n.image1,s=n.image2,f=i(n.imagesRatio,1),d=i(n.intensity1,n.intensity,1),l=i(n.intensity2,n.intensity,1),u=i(n.angle,Math.PI/4),v=i(n.angle1,u),m=i(n.angle2,3*-u),c=i(n.speedIn,n.speed,1.6),p=i(n.speedOut,n.speed,1.2),g=i(n.hover,!0),h=i(n.easing,Expo.easeOut),y=i(n.video,!1);if(r)if(a&&s&&o){var x=new e.Scene,F=new e.OrthographicCamera(r.offsetWidth/-2,r.offsetWidth/2,r.offsetHeight/2,r.offsetHeight/-2,1,1e3);F.position.z=1;var w=new e.WebGLRenderer({antialias:!1,alpha:!0});w.setPixelRatio(2),w.setClearColor(16777215,0),w.setSize(r.offsetWidth,r.offsetHeight),r.appendChild(w.domElement);var L=function(){w.render(x,F)},H=new e.TextureLoader;H.crossOrigin="";var E,W,V=H.load(o,L);if(V.magFilter=V.minFilter=e.LinearFilter,y){var M=function(){requestAnimationFrame(M),w.render(x,F)};M(),(y=document.createElement("video")).autoplay=!0,y.loop=!0,y.src=a,y.load();var P=document.createElement("video");P.autoplay=!0,P.loop=!0,P.src=s,P.load();var R=new e.VideoTexture(y),T=new e.VideoTexture(P);R.magFilter=T.magFilter=e.LinearFilter,R.minFilter=T.minFilter=e.LinearFilter,P.addEventListener("loadeddata",function(){P.play(),(T=new e.VideoTexture(P)).magFilter=e.LinearFilter,T.minFilter=e.LinearFilter,C.uniforms.texture2.value=T},!1),y.addEventListener("loadeddata",function(){y.play(),(R=new e.VideoTexture(y)).magFilter=e.LinearFilter,R.minFilter=e.LinearFilter,C.uniforms.texture1.value=R},!1)}else R=H.load(a,L),T=H.load(s,L),R.magFilter=T.magFilter=e.LinearFilter,R.minFilter=T.minFilter=e.LinearFilter;var U=f;r.offsetHeight/r.offsetWidth<U?(E=1,W=r.offsetHeight/r.offsetWidth/U):(E=r.offsetWidth/r.offsetHeight*U,W=1);var C=new e.ShaderMaterial({uniforms:{intensity1:{type:"f",value:d},intensity2:{type:"f",value:l},dispFactor:{type:"f",value:0},angle1:{type:"f",value:v},angle2:{type:"f",value:m},texture1:{type:"t",value:R},texture2:{type:"t",value:T},disp:{type:"t",value:V},res:{type:"vec4",value:new e.Vector4(r.offsetWidth,r.offsetHeight,E,W)},dpr:{type:"f",value:window.devicePixelRatio}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",fragmentShader:"\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform float dpr;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\nuniform vec4 res;\nuniform vec2 parent;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n\n  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;\n  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);\n\n\n  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n",transparent:!0,opacity:1}),b=new e.PlaneBufferGeometry(r.offsetWidth,r.offsetHeight,1),D=new e.Mesh(b,C);x.add(D),g&&(r.addEventListener("mouseenter",_),r.addEventListener("touchstart",_),r.addEventListener("mouseleave",z),r.addEventListener("touchend",z)),window.addEventListener("resize",function(t){r.offsetHeight/r.offsetWidth<U?(E=1,W=r.offsetHeight/r.offsetWidth/U):(E=r.offsetWidth/r.offsetHeight*U,W=1),D.material.uniforms.res.value=new e.Vector4(r.offsetWidth,r.offsetHeight,E,W),w.setSize(r.offsetWidth,r.offsetHeight),L()}),this.next=_,this.previous=z}else ;else console.warn("Parent missing");function _(){t.to(C.uniforms.dispFactor,c,{value:1,ease:h,onUpdate:L,onComplete:L})}function z(){t.to(C.uniforms.dispFactor,p,{value:0,ease:h,onUpdate:L,onComplete:L})}}});
      //# sourceMappingURL=hover-effect.umd.js.map

      // Javascript library to draw and animate images on hover by Robin Delaporte - hover-effect.umd.js
      /* ===============================================================================================*/


      document.querySelectorAll('.effect-liquid').forEach((el, idx) => {
        $(el).find('canvas').remove()
        // new hoverEffect({
        //   parent: el,
        //   image1: el.getAttribute('data-urlPic'),
        //   image2: el.getAttribute('data-urlPic'),
        //   displacementImage: 'https://i.postimg.cc/8c96ZFG6/4.png',
        //   //imagesRatio: '300 / 380', // hight / width
        //   intensity: '.65',
        //   //angle: Math.PI / 8
        // })

        new hoverEffect({
          parent: el,
          intensity: 0.2,
          angle: Math.PI / 8,
          speedIn: 1,
          speedOut: 0.8,
          image1: `${el.getAttribute('data-urlPic')}`,
          image2: `${el.getAttribute('data-urlPic')}`,
          displacementImage: 'https://res.cloudinary.com/therealsk/image/upload/v1593860931/heightMap_jjb5ng.png',
        })

        //https://images.unsplash.com/photo-1556388275-bb5585725aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
      })

    }else{
      $('.effect-liquid canvas').remove()
    }

  }

  setTimeout(function() {
    if($('body').hasClass('casesPage') || $('body').hasClass('casePage') || $('body').hasClass('servicePage') || $('body').hasClass('homePage')){
      liquidEffectFun()
    }
  }, 1000)
  

}

//customSlider

if($('body').hasClass('aboutPage') || $('body').hasClass('awardsPage') || $('body').hasClass('teamsPage') || $('body').hasClass('servicePage')){

  var customSlider = new Swiper ('.sliderCustom__slider', {
    loop: false,
    freeMode: true,
    spaceBetween: 0,
    // speed: 30000,
    // grabCursor: true,
    slidesPerGroup: 4,
    //slidesPerGroupAuto: true,
    spaceBetween: 28,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    scrollbar: {
      el: '.sliderCustom__slider--scrollBar',
      draggable: true,
      dragSize: 200,
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 'auto',
        speed: 15000,
      },
      767: {
        spaceBetween: 18,
        slidesPerView: 'auto',
        speed: 20000,
      },
      1024: {
        spaceBetween: 27,
        slidesPerView: 3.5,
        speed: 30000,
      }
    },

    on: {
      init: function (swiper) {
        swiper.autoplay.stop();
      },
    }
  })

  function startSliderCustom(){
    customSlider.autoplay.start()
  }

  ScrollTrigger.create({
    trigger: '.sliderCustom__slider',
    start: "top 80%",
    onEnter: () => startSliderCustom()
    
 });

  ScrollTrigger.update()
  ScrollTrigger.refresh()
}


//teams js

if($('body').hasClass('teamsPage') || $('body').hasClass('servicePage')){
  
  document.querySelectorAll('.customSticky--wrapp').forEach((elemWrap, i) => {

    let getElemSticky = elemWrap.querySelector(".customSticky--elem")

    let getDistanceForStopPin = getElemSticky.offsetHeight + 40

    ScrollTrigger.create({
      trigger: getElemSticky,
      start: "top 40",
      end: `bottom ${getDistanceForStopPin}`,
      endTrigger: elemWrap,
      pin: true,
      pinSpacing: true,
      scrub: true,
      
   });
  
   ScrollTrigger.update()
    ScrollTrigger.refresh()
  })
  
} 



//anim text

function fadeTextSimple(){
  const fadeUpSimple = document.querySelectorAll('.fadeUp-simple, .ar_topics__content--parags > p');

  if (fadeUpSimple){
    fadeUpSimple.forEach(text => {
      gsap.to(text, { 
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: text,
          // scrub: true, //infinity
          start: 'top 80%',
        }
      })
      
    });
  }

}

fadeTextSimple()

let getTitles = gsap.utils.toArray(".anim--title");
let getTitlesSmall = gsap.utils.toArray(".anim--title-small");

function animationTitleText() {
  getTitles.forEach(quote => {
      // Reset if needed
      if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
      }
      // lines,words,chars
      quote.split = new SplitText(quote, { 
      type: "lines,words",
      linesClass: "split-line"
      });

      gsap.set(quote, { perspective: 800 });

      quote.anim = gsap.from(quote.split.words, {
      scrollTrigger: {
          trigger: quote,
          toggleActions: "play none none none",
          start: "top 85%",
      },
      duration: 1.5,
      opacity: 0,
      // scale: 0,
      y: 50,
      rotationX: 60,
      transformOrigin: "0% 70% 60",
      ease: "back",
      stagger: 0.02
      });
  });

  getTitlesSmall.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
    quote.anim.progress(1).kill();
    quote.split.revert();
    }

    quote.split = new SplitText(quote, { 
    type: "lines,words",
    linesClass: "split-line"
    });

    gsap.set(quote, { perspective: 800 });

    quote.anim = gsap.from(quote.split.words, {
    scrollTrigger: {
        trigger: quote,
        toggleActions: "play none none none",
        start: "top 85%",
    },
    duration: 1.5,
    opacity: 0,
    // scale: 0,
    y: 30,
    rotationX: 35,
    transformOrigin: "0% 40% 60",
    ease: "back",
    stagger: 0.02
    });
});
}
  
ScrollTrigger.addEventListener("refresh", animationTitleText);
animationTitleText();



function addedShowClass(){

  const getElems = document.querySelectorAll('.reviews__items, .c_case, .c_cases');

  if(getElems){
    getElems.forEach(elem => {
      gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            scrub: true,
            start: "top 98%",
            onEnter: () => $(elem).addClass('show')
          },
        });
      
    });
  }

}

addedShowClass()


function addedShowClassLater(){

  const getElems = document.querySelectorAll('.services__items .roundabout, .keyClients__items, .keyClients__item, .teams, .contacts__sites, .contacts__mails--row, .contacts__social, .s_hero__experience, .s_service, .s_service__item, .s_service__projects, .s_summary--inner, .s_industries__header, .s_industries__body, .customFilters, .c_article__info--cols, .c_article__quality--award, .a_hero__info, .capabilities__chapter, .a_teams__services, .sliderCustom, .a_video__video--inner, .achievement__table--row, .achievement__table--point, .aw_business__item, .t_teams--inner, .t_teams__single, .t_teams__all, .t_teamsDev--inner, .t_teamsCreat--inner, .b_projects__project, .c_cases__more--tablet, .cc_customLive__case, .cc_customLive__accordion, .s_talk__basement, .ar_articles--inner, .ar_topics__nav, .ar_topics__content--pic');

  if(getElems){
    getElems.forEach(elem => {
      gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            scrub: true,
            start: "top 88%",
            onEnter: () => $(elem).addClass('show')
          },
        });
      
    });
  }

}

addedShowClassLater()


function addedShowClassLaterMore(){

  const getElems = document.querySelectorAll('.r_resources__latest, .r_resources__item, .r_resources__items, .r_resources__subscribe, .cc_customVideo, .cc_customSliderResult, .cc_customPicDuo__pic, .cc_customPicSolo__pic, .cc_customInfo--inner, .cc_customPicSoloBig__pic, .cc_customSliderPic, .cc_custoExperience__content, .cc_custoExperience__pic, .cc_received__content, .cc_cases--inner, .works__item, .c_article__logos, .ss_customStack, .ss_customStack__item, .ss_customCases, .ss_customDigital__clients, .ss_customDigital__options, .ss_customStack__items, .ss_customStack__item--points, .ss_customBanner, .ss_customChecking__right, .ss_customChecking__left, .services__body--pics--inner, .services__body--pics--main, .services__body--pics--icon1, .services__body--pics--icon2, .services__body--pics--icon3, .services__body--pics--icon4, .services__items--mob >a, .awards__item, .ss_customSeo, .b_projects--inner, .b_social, .ar_topics__content, .ar_topics__basement, .ar_topics__banner, .ss_customDigital');
	
	

  if(getElems){
    getElems.forEach(elem => {
      gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            scrub: true,
            start: "top 80%",
            onEnter: () => $(elem).addClass('show')
          },
        });
      
    });
  }

}

addedShowClassLaterMore()



if($('body').hasClass('homePage') || $('body').hasClass('contactsPage') || $('body').hasClass('aboutPage')){

  //slider taeam
  var sliderTeem = new Swiper(".teams__slider", {
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 27,
    speed: 800,
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 5800,
        disableOnInteraction: false,
        waitForTransition: false,
    },

    breakpoints: {
      320: {
        spaceBetween: 12,
      },
      767: {
        spaceBetween: 22,
      },
      1024: {
        spaceBetween: 27,
      }
    },


    pagination: {
      el: '.teams__slider--pagination',
      type: 'bullets',
    },
  });

  var sliderTeemComent = new Swiper(".teams__comments", {
      slidesPerGroup: 1,
      slidesPerView: 1,
      speed: 800,
      allowTouchMove: false,
      loop: true,
      effect: 'fade'
  });

  sliderTeem.controller.control = sliderTeemComent;


  $('.teams').on('click', function(e){
      sliderTeem.slideNext()
  })
}


if($('body').hasClass('homePage') || $('body').hasClass('contactsPage') || $('body').hasClass('aboutPage') || $('body').hasClass('awardsPage') || $('body').hasClass('teamsPage') || $('body').hasClass('servicePage')){
  ScrollTrigger.matchMedia({

    "(min-width: 1024px)": function() {
  
  
      gsap.utils.toArray(".customCursor").forEach((el) => {
        const image = el.querySelector(".customCursor__cursor"),
  
        setX = gsap.quickTo(image, "x", { duration: 0.2, ease: "power3" }),
        setY = gsap.quickTo(image, "y", { duration: 0.2, ease: "power3" }),
  
        align = (e) => {
          const top = el.getBoundingClientRect().top;
          const left = el.getBoundingClientRect().left;
          setX(e.clientX - left);
          setY(e.clientY - top);
        },
  
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
  
        fade = gsap.to(image, {
          ease: "none",
          paused: true,
          duration: 0.2,
          toggleClass: "active",
          css:{scale:1, opacity:1},
          onReverseComplete: stopFollow
        });
  
      el.addEventListener("mouseenter", (e) => {
        fade.play();
        startFollow();
        align(e);
      });
  
      el.addEventListener("mouseleave", () => fade.reverse());
      });  
  
  
    }
  
})
}



//form tabs

$('.popupForm__tabs').each(function(index, tabs) { 
  $(tabs).find('.popupForm__tab').each(function(idx, tab) {
    $(tab).on('click', function(e){
      e.preventDefault();
      
      let getPar = $(e.target).closest('.popupForm__tabs');

      $(getPar).find('.popupForm__tab').removeClass('active');
      $(e.target).closest('.popupForm__tab').addClass('active')

    })
  })
});


//anim header social

// onEnter: () => $(elem).addClass('show')

ScrollTrigger.matchMedia({
  "(min-width: 1024px)": function() {
    
    gsap.from('.footer', {
      scrollTrigger: {
        trigger: '.footer',
        scrub: true,
        start: "bottom 150%",
        onEnter: () => $('.header').addClass('show--social'),
        onLeaveBack: () => $('.header').removeClass('show--social'),
        // markers: true
      },
    });

  }
});


$( window ).on( "resize", function() {
  if($('body').hasClass('casesPage') || $('body').hasClass('casePage') || $('body').hasClass('servicePage') || $('body').hasClass('homePage')){
    liquidEffectFun()
  }
  
} );


// var intervalID = window.setInterval(myCallback, 1000);

// function myCallback() {
//   let nextCover = document.querySelector('.hero__cover-slider .next');

//   nextCover.click(); 
// }

// smoother.paused(true)

$(document).ready(function () {

})

document.addEventListener('DOMContentLoaded', function(){


    if(document.querySelector("body").classList.contains('articlePage')){
        let distanceStartScrill = 40;
        if(window.innerWidth < 625){
            distanceStartScrill = 20
        }

        ScrollTrigger.matchMedia({

            "(min-width: 1025px)": function() {

                document.querySelectorAll('.ar_topics--inner').forEach((elemWrap, i) => {

                    let getElemSticky = elemWrap.querySelector(".ar_topics__nav")
                
                    let getDistanceForStopPin = getElemSticky.offsetHeight + 40
                
                    ScrollTrigger.create({
                      trigger: getElemSticky,
                      start: `top ${distanceStartScrill}`,
                      end: `bottom ${getDistanceForStopPin}`,
                      endTrigger: elemWrap,
                      pin: true,
                      pinSpacing: true,
                      scrub: true,
                      
                   });
                  
                   ScrollTrigger.update()
                    ScrollTrigger.refresh()
                })
          
                const heroTop = gsap.timeline({
          
                    scrollTrigger: {
                        trigger: '.ar_hero__top',
                        pin: true,
                        pinSpacing: false,
                        start: 'top top',
                        end: "+=110%",
                        scrub: 1,
                        ease: 'linear',
                      }
                })
        
                const heroDecor = gsap.timeline({
                  
                    scrollTrigger: {
                        trigger: '.ar_hero__decor',
                        pin: true,
                        pinSpacing: false,
                        start: 'top top',
                        end: "+=110%",
                        scrub: 1,
                        ease: 'linear',
                      }
                })
        
                gsap.from($('.ar_hero'), {
                    scrollTrigger: {
                      trigger: $('.ar_hero'),
                      scrub: true,
                      start: "top -10px",
                      onEnter: () => $('.ar_hero').addClass('ar_hero-cover'),
                      onLeaveBack: () => $('.ar_hero').removeClass('ar_hero-cover'),
                    },
                  });

                heroTop.to('.ar_hero--cover', {
                    backdropFilter: "blur(20px)",
                    //opacity: 0.8,
                    stagger: 1, 
                })
          
              }
          });
          
          ScrollTrigger.update()
          ScrollTrigger.refresh()

        // spy menu

        function navControl(section){

            $('.ar_topics__nav--links--inner a').removeClass('active')
            
            let createClass = '.' + section.getAttribute('id')
            let getActiveLink = document.querySelector(createClass)
            getActiveLink.classList.add('active')

        }


        const sections = gsap.utils.toArray(".ar_topics__content--part");

        sections.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 70%",
                end: 'bottom 70%',
                onEnter: () => navControl(section),
                onLeave: () => navControl(section),
                onEnterBack: () => navControl(section),
                onLeaveBack: () => navControl(section),

            });
        });

        //anchors links

        $('.ar_topics__nav--links--inner a').on('click', function(e){

            e.preventDefault();

            let target = e.target
            let distanceElm = $('#' + $(target).attr('class')).offset().top - 50;

            $('html, body').animate({
              scrollTop: distanceElm
            }, 500);

            setTimeout(() => {   
                $('.ar_topics__nav--links--inner a').removeClass('active') 
                target.classList.add('active')
            }, 2000);

          })

          $('.ar_topics--scrollTop, .ar_topics__basement--scrollTop').on('click', function(e){

            e.preventDefault();

            let distanceElm = $('.ar_topics').offset().top - 20

            $('html, body').animate({
              scrollTop: distanceElm
            }, 500);

          })


        //accodion links

        function openNavLinks(){
            document.querySelectorAll('.ar_topics__nav--title').forEach((el) => {

                el.addEventListener('click', function (){
                    let getPar = el.closest('.ar_topics__nav');
    
                    if(getPar.classList.contains('open')){
                        getPar.querySelector('.ar_topics__nav--links').style.height = 0 + "px";

                        getPar.classList.remove('open');
                        
                    }else{
                        getPar.classList.add('open');
                        let getHeiht = getPar.querySelector('.ar_topics__nav--links > div').offsetHeight;
                        getPar.querySelector('.ar_topics__nav--links').style.height = getHeiht + "px";
                    }
                }); 
                
            })
        }

        openNavLinks()


      //slider articles

      var sliderArticles = new Swiper('.ar_articles__slider', {
        speed: 100,

        breakpoints: {
            320: {
                slidesPerGroup: 1,
                slidesPerView: 1.05,
                spaceBetween: 16,
            },
            767: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 0,
            }
        },

        on: {
            init: function (swiper) {

                let countSlide = $(".ar_articles__slide").length;

                $(".ar_articles__nav--num--all").text(countSlide);

                if(window.innerWidth > 624){
                    $(".ar_articles__nav--num--current").text('2');
                }else{
                    $(".ar_articles__nav--num--current").text('1');
                }
                
            },


            slideChangeTransitionEnd: function(swiper){
                let indexSlideCurrent

                if(window.innerWidth > 624){
                    indexSlideCurrent = swiper.realIndex + 2
                }else{
                    indexSlideCurrent = swiper.realIndex + 1
                }
                

                $(".ar_articles__nav--num--current").text(indexSlideCurrent);

                
            },
            
        },
            
      });

      let sliderArticlesArrows = document.querySelectorAll('.ar_articles__nav--btns > div')

      sliderArticlesArrows.forEach((arrow) => {
            
            arrow.onclick = function (el) {
                
                let getSlider = el.target.closest('.ar_articles--inner');
    
                let getNumCurrent = getSlider.querySelector('.ar_articles__nav--num--current').innerText;
                let getNumAll = getSlider.querySelector('.ar_articles__nav--num--all').innerText;
    
                if(this.classList.contains('ar_articles__nav--next')){ 
    
                    if(+getNumCurrent < +getNumAll){
                        document.querySelector('.ar_articles__nav--btns').classList.add('disabled')
    
                        getSlider.classList.remove('showSlide');
    
                        if(document.querySelector('.ar_articles__nav--btns .disabled')){
                            document.querySelector('.ar_articles__nav--btns .disabled').classList.remove('disabled')
                        }
                        
                        setTimeout(function() {
                          sliderArticles.slideNext(); 
                        }, 620) 

                        
                        if(window.innerWidth > 624){
                            if( +getNumCurrent == +getNumAll - 2){
                                this.classList.add('disabled')
                            }
                        }else{
                            if( +getNumCurrent == +getNumAll - 1){
                                this.classList.add('disabled')
                            }
                        }
                        
                        
                    }
                    
                }else{
    
                    if(+getNumCurrent > 1){
                        document.querySelector('.ar_articles__nav--btns').classList.add('disabled')
                        getSlider.classList.remove('showSlide');
                        if(document.querySelector('.ar_articles__nav--btns .disabled')){
                            document.querySelector('.ar_articles__nav--btns .disabled').classList.remove('disabled')
                        }
    
                        setTimeout(function() {
                          sliderArticles.slidePrev(); 
                        }, 620)
                        
                        if(window.innerWidth > 624){
                            if( +getNumCurrent == 4){
                                this.classList.add('disabled')
                            }
                        }else{
                            if( +getNumCurrent == 2){
                                this.classList.add('disabled')
                            }
                        }
                        
                    }
                    
                }
    
                setTimeout(function() {
                    getSlider.classList.add('showSlide');
                }, 770)
    
                setTimeout(function() {
                    document.querySelector('.ar_articles__nav--btns').classList.remove('disabled')
                }, 1200)
            }
        })


        //paralax effect

        let arParalaxElemsHeight;

        if(window.innerWidth > 625){
            arParalaxElemsHeight = document.querySelector(".ar_hero__bottom--content").offsetHeight * 0.7
        }else{
            arParalaxElemsHeight = document.querySelector(".ar_hero__bottom--content").offsetHeight * 0.7
        }

        const heroArticle = gsap.timeline({
          
            scrollTrigger: {
                trigger: '.ar_hero__bottom',
                start: "top bottom-=20%",
                end: "+=100%",
                scrub: 1,
                ease: 'linear',
              }
        })

        heroArticle.to('.ar_hero__bottom--paralax', {
            height: arParalaxElemsHeight,
            stagger: 1, 
        })


        //close banner

        document.querySelector('.ar_hero__banner--close').addEventListener('click', function (e){
            e.target.closest('.ar_hero__banner').classList.add('hidden')
        });
    
    }
});


$(document).ready(function () {

})


// document.addEventListener('DOMContentLoaded', function(){

    function test(){
        console.log('test Function');
    }
    if(document.querySelector("body").classList.contains('boardPage')){
        sessionStorage.setItem('urlWebsite', window.location.href)
        setTimeout(() =>{
            sessionStorage.setItem('urlWebsite', window.location.href)
            //console.log(sessionStorage.getItem('urlWebsite'))
        },500)

        let flagClick = true
    
        function projectsOpen(){
            
            // console.log( document.querySelectorAll('.b_projects__project'))
            document.querySelectorAll('.b_projects__project').forEach((e) => {
                    e.addEventListener('click', function (el){
                        console.log('see_1');

                        flagClick = false

                        setTimeout(function() {
                            flagClick = true
                        },500) 
                        
                        if($(window).width() < 1025){
                            document.querySelector('body').classList.add('noScroll')
                        }else{
                            smoother.paused(true);
                            document.querySelector('body').classList.add('noScroll')
                        }
                        document.querySelector('.popupPin').classList.add('show')
                        

                        let getPar = el.target.closest('.b_projects__project');
                        let getPopup =  document.querySelector('.popupPin');
                        let getContent = getPar.getAttribute('data-content');
                        
                        
                        let getContentObj;
                        // let getContentShareObj;
                        if(getContent != undefined && getContent != '' && getContent != NaN){
                            getContentObj = JSON.parse(getContent);
                        }

                        let popupTitle = getContentObj?.title != undefined ? getContentObj.title : 'title';
                        let popupDesc = getContentObj?.desc != undefined ? getContentObj.desc : 'desc';
                        let popupImgUrl = getContentObj?.img_url != undefined ? getContentObj.img_url : '../../img/default_song_pic.webp';
                        let popupShareLink = getContentObj?.share_link != undefined ? getContentObj.share_link : '#';
                        let popupWebsiteLink = getContentObj?.website_link != undefined ? getContentObj.website_link : '#';
                        let popupBehanceLink = getContentObj?.behance_link != undefined ? getContentObj.behance_link : '#';

                        // console.log(popupImgUrl)
                        getPopup.querySelector('.popupPin__content--pic img').src = popupImgUrl;
                        getPopup.querySelector('.popupPin__content--text > a').href = popupShareLink;
                        getPopup.querySelector('.popupPin__content--text > p').innerHTML = popupDesc;
                        getPopup.querySelector('.popupPin__content--text > h6').innerHTML = popupTitle;
                        getPopup.querySelector('.popupPin__basement--website').href = popupWebsiteLink;
                        getPopup.querySelector('.popupPin__basement--behance').href = popupBehanceLink;


                        setTimeout(() =>{
                            sessionStorage.setItem('urlWebsite', window.location.href)
                            // console.log(sessionStorage.getItem('urlWebsite'))
                           
                        },500)

                    }); 
                    
            })
        }

        projectsOpen()

        function caseOpen(){

            document.querySelectorAll('.popupPin__case').forEach((e) => {

                    e.addEventListener('click', function (el){
                        console.log('popupPin__case');

                        flagClick = false

                        setTimeout(function() {
                            flagClick = true
                        },500)

                        let getPar = el.target.closest('.popupPin__case');
                        let getPopup =  document.querySelector('.popupPin');
                        let getContent = getPar.getAttribute('data-content');
                        
                        getPopup.scrollTop = 0
                        
                        let getContentObj;
                        // let getContentShareObj;
                        if(getContent != undefined && getContent != '' && getContent != NaN){
                            getContentObj = JSON.parse(getContent);
                        }

                        let popupTitle = getContentObj?.title != undefined ? getContentObj.title : 'title';
                        let popupDesc = getContentObj?.desc != undefined ? getContentObj.desc : 'desc';
                        let popupImgUrl = getContentObj?.img_url != undefined ? getContentObj.img_url : '../../img/default_song_pic.webp';
                        let popupShareLink = getContentObj?.share_link != undefined ? getContentObj.share_link : '#';
                        let popupWebsiteLink = getContentObj?.website_link != undefined ? getContentObj.website_link : '#';
                        let popupBehanceLink = getContentObj?.behance_link != undefined ? getContentObj.behance_link : '#';


                        getPopup.querySelector('.popupPin__content--pic img').src = popupImgUrl;
                        getPopup.querySelector('.popupPin__content--text > a').href = popupShareLink;
                        getPopup.querySelector('.popupPin__content--text > p').innerHTML = popupDesc;
                        getPopup.querySelector('.popupPin__content--text > h6').innerHTML = popupTitle;
                        getPopup.querySelector('.popupPin__basement--website').href = popupWebsiteLink;
                        getPopup.querySelector('.popupPin__basement--behance').href = popupBehanceLink;

                        setTimeout(() =>{
                            sessionStorage.setItem('urlWebsite', window.location.href)
                            //console.log(sessionStorage.getItem('urlWebsite'))
                        },500)
                    }); 
                    
            })
        }

        caseOpen()


        $('.popupPin--close').on('click', function(el){
            if($(window).width() > 1025){
                smoother.paused(false);
            }
            document.querySelector('.shareCopyboard').textContent = "Share";

            $('body').removeClass('noScroll');
            $('.popupPin').removeClass('show');

            setTimeout(() =>{
                sessionStorage.setItem('urlWebsite', window.location.href)
                //console.log(sessionStorage.getItem('urlWebsite'))
            },500)
        })


        window.addEventListener('popstate', function () {

            if(flagClick){
                
                let getPopup =  document.querySelector('.popupPin')
                let getHashNum = window.location.hash.split('#')[1]

                let getItem = $('.popupPin__case[data-numbering='+getHashNum+']')[0];
                
                if(window.location.hash == ''){
                    if($(window).width() > 1025){
                        smoother.paused(false);
                    }
                    $('body').removeClass('noScroll');
                    $('.popupPin').removeClass('show');
                }

                if(getItem != undefined){
                    let getItemData= getItem.getAttribute('data-content');

                    let getContentObj;
                    // let getContentShareObj;
                    if(getItemData != undefined && getItemData != '' && getItemData != NaN){
                        getContentObj = JSON.parse(getItemData);
                    }

                    getPopup.scrollTop = 0
                    
                    if(getItemData){
                        let popupTitle = getContentObj?.title != undefined ? getContentObj.title : 'title';
                        let popupDesc = getContentObj?.desc != undefined ? getContentObj.desc : 'desc';
                        let popupImgUrl = getContentObj?.img_url != undefined ? getContentObj.img_url : '../../img/default_song_pic.webp';
                        let popupShareLink = getContentObj?.share_link != undefined ? getContentObj.share_link : '#';
                        let popupWebsiteLink = getContentObj?.website_link != undefined ? getContentObj.website_link : '#';
                        let popupBehanceLink = getContentObj?.behance_link != undefined ? getContentObj.behance_link : '#';


                        getPopup.querySelector('.popupPin__content--pic img').src = popupImgUrl;
                        getPopup.querySelector('.popupPin__content--text > a').href = popupShareLink;
                        getPopup.querySelector('.popupPin__content--text > p').innerHTML = popupDesc;
                        getPopup.querySelector('.popupPin__content--text > h6').innerHTML = popupTitle;
                        getPopup.querySelector('.popupPin__basement--website').href = popupWebsiteLink;
                        getPopup.querySelector('.popupPin__basement--behance').href = popupBehanceLink;

                        setTimeout(() =>{
                            sessionStorage.setItem('urlWebsite', window.location.href)
                            //console.log(sessionStorage.getItem('urlWebsite'))
                        },500)

                        let data_id = getContentObj?.id_post;
                        console.log(data_id);
                        $.ajax({
                            url: '/wp-admin/admin-ajax.php',
                            type: "POST",
                            dataType: 'json',
                            data: {
                                'action': 'similar_board',
                                'data_id': data_id
                            },
                            success: function(response){
                                console.log(response.board);
                                console.log(response.status);
                                if(response && typeof response === 'object') {
                                
                                    if(response.status){
                                        $('.popupPin__similar').show();
                        
                                        $('.popupPin--dekstop .popupPin__cases--col:nth-child(1) a, .popupPin--dekstop .popupPin__cases--col:nth-child(2) a, .popupPin--dekstop .popupPin__cases--col:nth-child(3) a, .popupPin__cases--tablet .popupPin__cases--col:nth-child(1) a, .popupPin__cases--tablet .popupPin__cases--col:nth-child(2) a').remove();
                        
                                        $('.popupPin--dekstop .popupPin__cases--col:nth-child(1)').append(response.html_fisrt);
                                        $('.popupPin--dekstop .popupPin__cases--col:nth-child(2)').append(response.html_second);
                                        $('.popupPin--dekstop .popupPin__cases--col:nth-child(3)').append(response.html_third);
                            
                                        $('.popupPin__cases--tablet .popupPin__cases--col:nth-child(1)').append(response.html_mob_first);
                                        $('.popupPin__cases--tablet .popupPin__cases--col:nth-child(2)').append(response.html_mob_second);
                        
                                    }else{
                                        $('.popupPin__similar').hide();
                                    }
                                }else{
                                    console.log('Error');
                                }
                            }
                        });
                    }
                }
                

                if(window.location.hash != '' && !$('.popupPin').hasClass('show')){
                    if($(window).width() < 1025){
                        document.querySelector('body').classList.add('noScroll')
                    }else{
                        smoother.paused(true);
                        document.querySelector('body').classList.add('noScroll')
                    }
                    document.querySelector('.popupPin').classList.add('show')
                }
            }
        });

        if (window.performance) {
            
            
            if($('body').hasClass('boardPage') && window.location.hash != '' && sessionStorage.getItem('checkLoad') != 'load'){
                

                console.log('firstLoad')
                let getPopup =  document.querySelector('.popupPin')
                let getHashNum = window.location.hash.split('#')[1]

                let getItem = $('.b_projects__project[data-numbering='+getHashNum+']')[0];


                if(getItem != undefined){
                    let getItemData= getItem.getAttribute('data-content');

                    let getContentObj;
                    // let getContentShareObj;
                    if(getItemData != undefined && getItemData != '' && getItemData != NaN){
                        getContentObj = JSON.parse(getItemData);
                    }

                    getPopup.scrollTop = 0
                    
                    if(getItemData){
                        let popupTitle = getContentObj?.title != undefined ? getContentObj.title : 'title';
                        let popupDesc = getContentObj?.desc != undefined ? getContentObj.desc : 'desc';
                        let popupImgUrl = getContentObj?.img_url != undefined ? getContentObj.img_url : '../../img/default_song_pic.webp';
                        let popupShareLink = getContentObj?.share_link != undefined ? getContentObj.share_link : '#';
                        let popupWebsiteLink = getContentObj?.website_link != undefined ? getContentObj.website_link : '#';
                        let popupBehanceLink = getContentObj?.behance_link != undefined ? getContentObj.behance_link : '#';


                        getPopup.querySelector('.popupPin__content--pic img').src = popupImgUrl;
                        getPopup.querySelector('.popupPin__content--text > a').href = popupShareLink;
                        getPopup.querySelector('.popupPin__content--text > p').innerHTML = popupDesc;
                        getPopup.querySelector('.popupPin__content--text > h6').innerHTML = popupTitle;
                        getPopup.querySelector('.popupPin__basement--website').href = popupWebsiteLink;
                        getPopup.querySelector('.popupPin__basement--behance').href = popupBehanceLink;

                        setTimeout(() =>{
                            sessionStorage.setItem('urlWebsite', window.location.href)
                            //console.log(sessionStorage.getItem('urlWebsite'))
                        },500)

                        let data_id = getContentObj?.id_post;
                        console.log(data_id);
                        $.ajax({
                            url: '/wp-admin/admin-ajax.php',
                            type: "POST",
                            dataType: 'json',
                            data: {
                                'action': 'similar_board',
                                'data_id': data_id
                            },
                            success: function(response){
                                console.log(response.board);
                                console.log(response.status);
                                if(response && typeof response === 'object') {
                                
                                    if(response.status){
                                        $('.popupPin__similar').show();
                        
                                        $('.popupPin--dekstop .popupPin__cases--col:nth-child(1) a, .popupPin--dekstop .popupPin__cases--col:nth-child(2) a, .popupPin--dekstop .popupPin__cases--col:nth-child(3) a, .popupPin__cases--tablet .popupPin__cases--col:nth-child(1) a, .popupPin__cases--tablet .popupPin__cases--col:nth-child(2) a').remove();
                        
                                        $('.popupPin--dekstop .popupPin__cases--col:nth-child(1)').append(response.html_fisrt);
                                        $('.popupPin--dekstop .popupPin__cases--col:nth-child(2)').append(response.html_second);
                                        $('.popupPin--dekstop .popupPin__cases--col:nth-child(3)').append(response.html_third);
                            
                                        $('.popupPin__cases--tablet .popupPin__cases--col:nth-child(1)').append(response.html_mob_first);
                                        $('.popupPin__cases--tablet .popupPin__cases--col:nth-child(2)').append(response.html_mob_second);
                        
                                    }else{
                                        $('.popupPin__similar').hide();
                                    }
                                }else{
                                    console.log('Error');
                                }
                            }
                        });
                    }



                }

                if($(window).width() < 1025){
                    document.querySelector('body').classList.add('noScroll')
                }else{
                    smoother.paused(true);
                    document.querySelector('body').classList.add('noScroll')
                }
                document.querySelector('.popupPin').classList.add('show')
                
            }else if($('body').hasClass('boardPage') && window.location.hash != '' && sessionStorage.getItem('checkLoad') == 'load'){
                // if(window.location.href == sessionStorage.getItem('urlWebsite')){
                //     window.location.href = '/board.html'
                // }
                window.location.href = '/board'

                

                setTimeout(() =>{
                    sessionStorage.setItem('urlWebsite', window.location.href)
                    //console.log(sessionStorage.getItem('urlWebsite'))
                },500)
            }

            setTimeout(() =>{
                sessionStorage.setItem('checkLoad', 'load')
            },1000)

            // 
        }

        // Added ajax
        $('.b_projects .customFilters__filter').on('click', function(e) {
            e.preventDefault()
            $('.customFilters__filter').removeClass('active');
            $(this).addClass('active');
    
            let slug = $(this).attr('data-slug');
    
            $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: "POST",
            dataType: 'json',
            data: {
                'action': 'board_category',
                'slug': slug 
            },
            success: function(response){
                if(response && typeof response === 'object') {
                    
                    $('.b_projects--dekstop .b_projects__col:nth-child(1) a, .b_projects--dekstop .b_projects__col:nth-child(2) a, .b_projects--dekstop .b_projects__col:nth-child(3) a, .b_projects--mobile .b_projects__col:nth-child(1) a,  .b_projects--mobile .b_projects__col:nth-child(2) a').remove();
    
                    $('.b_projects--dekstop .b_projects__col:nth-child(1)').append(response.html_fisrt);
                    $('.b_projects--dekstop .b_projects__col:nth-child(2)').append(response.html_second);
                    $('.b_projects--dekstop .b_projects__col:nth-child(3)').append(response.html_third);
    
                    $('.b_projects--mobile .b_projects__col:nth-child(1)').append(response.html_mob_first);
                    $('.b_projects--mobile .b_projects__col:nth-child(2)').append(response.html_mob_second);
    
                    projectsOpen();
                    
                    $('.boardBtrMore').hide();
    
                    ScrollTrigger.update();
                    ScrollTrigger.refresh();
    
                }else{
                    console.log('Error');
                }
            }
            });
    
            // projectsOpen()
        })

        $('body').on('click', '.b_projects__project', '.popupPin__case', function(e){
            // Added Ajax for Similar Shots 
            let data_id = $(this).attr('data-id');
            console.log(typeof(data_id));
            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                type: "POST",
                dataType: 'json',
                data: {
                    'action': 'similar_board',
                    'data_id': data_id
                },
                success: function(response){
                    console.log(response.board);
                    console.log(response.status);
                    if(response && typeof response === 'object') {
                    
                        if(response.status){
                            $('.popupPin__similar').show();
            
                            $('.popupPin--dekstop .popupPin__cases--col:nth-child(1) a, .popupPin--dekstop .popupPin__cases--col:nth-child(2) a, .popupPin--dekstop .popupPin__cases--col:nth-child(3) a, .popupPin__cases--tablet .popupPin__cases--col:nth-child(1) a, .popupPin__cases--tablet .popupPin__cases--col:nth-child(2) a').remove();
            
                            $('.popupPin--dekstop .popupPin__cases--col:nth-child(1)').append(response.html_fisrt);
                            $('.popupPin--dekstop .popupPin__cases--col:nth-child(2)').append(response.html_second);
                            $('.popupPin--dekstop .popupPin__cases--col:nth-child(3)').append(response.html_third);
                
                            $('.popupPin__cases--tablet .popupPin__cases--col:nth-child(1)').append(response.html_mob_first);
                            $('.popupPin__cases--tablet .popupPin__cases--col:nth-child(2)').append(response.html_mob_second);
            
                            // caseOpen();
            
                            // ScrollTrigger.update()
                            // ScrollTrigger.refresh()
                        }else{
                            $('.popupPin__similar').hide();
                        }
                    }else{
                        console.log('Error');
                    }
                }
            });
        })
  
        var board_page = 2;
        $('.boardBtrMore').on('click', function(e){
            e.preventDefault();
        
            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                type: "POST",
                dataType: 'json',
                data: {
                    'action': 'board',
                    'page': board_page 
                },
                success: function(response){
                    if(response && typeof response === 'object') {
        
                        $('.b_projects--dekstop .b_projects__col:nth-child(1)').append(response.html_fisrt);
                        $('.b_projects--dekstop .b_projects__col:nth-child(2)').append(response.html_second);
                        $('.b_projects--dekstop .b_projects__col:nth-child(3)').append(response.html_third);
    
                        $('.b_projects--mobile .b_projects__col:nth-child(1)').append(response.html_mob_first);
                        $('.b_projects--mobile .b_projects__col:nth-child(2)').append(response.html_mob_second);
    
                        if(response.btrMore){
                            $('.boardBtrMore').hide();
                        }
                        console.log('SEE - New');
                        projectsOpen();
                        // caseOpen();
                        
                        ScrollTrigger.update()
                        ScrollTrigger.refresh()
    
                        board_page++;
        
                }else{
                    $('.boardBtrMore').hide();
                }
            }
        });
    });

    }   


// })


// window.onbeforeunload = function() {
//     console.log(';fwff')

//     window.addEventListener('popstate', function () {
//         console.log(';fwffefwefewfewfwf')
//     })
// };

    

 $(document).ready(function () {
    if($('body').hasClass('casePage')){
        document.querySelectorAll('.cc_customLive__accordion--btn').forEach((el) => {

            el.addEventListener('click', function (){
                let getPar = el.closest('.cc_customLive__accordion');

                if(getPar.classList.contains('open')){
                    if(window.innerWidth > 1024){
                        getPar.querySelector('.cc_customLive__accordion--text > div').style.height = 48 + "px";
                    }else{
                        getPar.querySelector('.cc_customLive__accordion--text > div').style.height = 0 + "px";
                    }
                    
                    setTimeout(() =>{
                        getPar.classList.remove('open');
                      },350)
                }else{
                    getPar.classList.add('open');
                    let getHeiht = getPar.querySelector('.cc_customLive__accordion--text > div p').offsetHeight;
                    getPar.querySelector('.cc_customLive__accordion--text > div').style.height = getHeiht + "px";
                }
            }); 
            
        })

        //sliderPic

    
        document.querySelectorAll('.cc_customSliderPic__slider').forEach((el) => {
         
            var customSliderPic = new Swiper(el, {
                slidesPerGroup: 1,
                slidesPerView: 1,
                allowTouchMove: false,
                speed: 100,
        
                // breakpoints: {
                //     320: {
                //         spaceBetween: 20,
                //         allowTouchMove: false,
                //         speed: 100,
                //     },
        
                //     625: {
                //         spaceBetween: 32,
                //         allowTouchMove: false,
                //         speed: 100,
                //     }
                // },
        
                on: {
                    init: function (swiper) {
        
                        let countSlide = $(el).find(".cc_customSliderPic__slide").length             
                        
        
                        $(el).find(".cc_customSliderPic__slider--num--all").text(countSlide)
                    },
        
                    slideChangeTransitionEnd: function(swiper){
        
                        let indexSlideCurrent = swiper.realIndex + 1
        
                        $(el).find('.cc_customSliderPic__slider--num--current').text(indexSlideCurrent)
                    },
                    
                },
                    
            });

            let customSliderPicArrows = el.querySelectorAll('.cc_customSliderPic__slider--btns > div')

            customSliderPicArrows.forEach((arrow) => {
                
                arrow.onclick = function (el) {
                    
                    let getSlider = el.target.closest('.cc_customSliderPic__slider');
        
                    let getNumCurrent = getSlider.querySelector('.cc_customSliderPic__slider--num--current').innerText;
                    let getNumAll = getSlider.querySelector('.cc_customSliderPic__slider--num--all').innerText;
        
                    if(this.classList.contains('cc_customSliderPic__slider--next')){ 
        
                        if(+getNumCurrent < +getNumAll){
                            document.querySelector('.cc_customSliderPic__slider--btns').classList.add('disabled')
        
                            getSlider.classList.remove('show');
        
                            if(document.querySelector('.cc_customSliderPic__slider--btns .disabled')){
                                document.querySelector('.cc_customSliderPic__slider--btns .disabled').classList.remove('disabled')
                            }
                            
                            setTimeout(function() {
                                customSliderPic.slideNext(); 
                            }, 620) 
        
                            if( +getNumCurrent == +getNumAll - 1){
                                this.classList.add('disabled')
                            }
                            
                        }
                        
                    }else{
        
        
                        if(+getNumCurrent > 1){
                            document.querySelector('.cc_customSliderPic__slider--btns').classList.add('disabled')
                            getSlider.classList.remove('show');
                            if(document.querySelector('.cc_customSliderPic__slider--btns .disabled')){
                                document.querySelector('.cc_customSliderPic__slider--btns .disabled').classList.remove('disabled')
                            }
        
                            setTimeout(function() {
                                customSliderPic.slidePrev(); 
                            }, 620)
        
                            if( +getNumCurrent == 2){
                                this.classList.add('disabled')
                            }
                        }
                        
                    }
        
                    setTimeout(function() {
                        getSlider.classList.add('show');
                    }, 770)
        
                    setTimeout(function() {
                        document.querySelector('.cc_customSliderPic__slider--btns').classList.remove('disabled')
                    }, 1200)
                }
            })
        })


        document.querySelectorAll('.cc_customSliderResult__slider').forEach((el) => {
            var customSliderResult = new Swiper(el, {
                slidesPerGroup: 1,
                //slidesPerView: 1.5,
                allowTouchMove: false,
                speed: 600,

                breakpoints: {
                    320: {
                        slidesPerView: 1.4,
                    },
                    767: {
                        slidesPerView: 1.2,
                    },
        
                    1024: {
                        slidesPerView: 1.5,
                    }
                },

                navigation: {
                    nextEl: '.cc_customSliderResult__nav--next',
                    prevEl: '.cc_customSliderResult__nav--prev',
                },
        
                on: {
                    init: function (swiper) {
        
                        let countSlide = $(el).find(".cc_customSliderResult__slide").length             

                        $(el).closest('.cc_customSliderResult--inner').find(".cc_customSliderResult__nav--num--all").text(countSlide);

                        // $(el).find(".swiper-slide-active").addClass('hiddenLine')
      
                    },

        
                    slideChangeTransitionEnd: function(swiper){
        
                        let indexSlideCurrent = swiper.realIndex + 1
        
                        $(el).closest('.cc_customSliderResult--inner').find(".cc_customSliderResult__nav--num--current").text(indexSlideCurrent);

                        
                    },
                    
                },
                    
            });
        })


    }

    if($('body').hasClass('casePage') || $('body').hasClass('servicePage')){
         //slider Case
        

         var customSliderCase = new Swiper('.cc_cases__slider', {
            //slidesPerGroup: 2,
            //slidesPerView: 2,
            //allowTouchMove: false,
            speed: 100,

            breakpoints: {
                320: {
                    slidesPerGroup: 1,
                    slidesPerView: 1.05,
                    spaceBetween: 16,
                },
                767: {
                    slidesPerGroup: 2,
                    slidesPerView: 2,
                    spaceBetween: 0,
                }
            },
    
            on: {
                init: function (swiper) {
    
                    let countSlide = $(".cc_cases__slide").length;

                    $(".cc_cases__nav--num--all").text(countSlide);

                    if(window.innerWidth > 624){
                        $(".cc_cases__nav--num--current").text('2');
                    }else{
                        $(".cc_cases__nav--num--current").text('1');
                    }
                    
                },

    
                slideChangeTransitionEnd: function(swiper){
                    let indexSlideCurrent

                    if(window.innerWidth > 624){
                        indexSlideCurrent = swiper.realIndex + 2
                    }else{
                        indexSlideCurrent = swiper.realIndex + 1
                    }
                    
    
                    $(".cc_cases__nav--num--current").text(indexSlideCurrent);

                    
                },
                
            },
                
        });


        let customSliderPicArrows = document.querySelectorAll('.cc_cases__nav--btns > div')

        customSliderPicArrows.forEach((arrow) => {
            
            arrow.onclick = function (el) {
                
                let getSlider = el.target.closest('.cc_cases--inner');
    
                let getNumCurrent = getSlider.querySelector('.cc_cases__nav--num--current').innerText;
                let getNumAll = getSlider.querySelector('.cc_cases__nav--num--all').innerText;
    
                if(this.classList.contains('cc_cases__nav--next')){ 
    
                    if(+getNumCurrent < +getNumAll){
                        document.querySelector('.cc_cases__nav--btns').classList.add('disabled')
    
                        getSlider.classList.remove('showSlide');

    
                        if(document.querySelector('.cc_cases__nav--btns .disabled')){
                            document.querySelector('.cc_cases__nav--btns .disabled').classList.remove('disabled')
                        }
                        
                        setTimeout(function() {
                            customSliderCase.slideNext(); 
                        }, 620) 

                        
                        if(window.innerWidth > 624){
                            if( +getNumCurrent == +getNumAll - 2){
                                this.classList.add('disabled')
                            }
                        }else{
                            if( +getNumCurrent == +getNumAll - 1){
                                this.classList.add('disabled')
                            }
                        }
                        
                        
                    }
                    
                }else{
    
                    if(+getNumCurrent > 1){
                        document.querySelector('.cc_cases__nav--btns').classList.add('disabled')
                        getSlider.classList.remove('showSlide');
                        if(document.querySelector('.cc_cases__nav--btns .disabled')){
                            document.querySelector('.cc_cases__nav--btns .disabled').classList.remove('disabled')
                        }
    
                        setTimeout(function() {
                            customSliderCase.slidePrev(); 
                        }, 620)
                        
                        if(window.innerWidth > 624){
                            if( +getNumCurrent == 4){
                                this.classList.add('disabled')
                            }
                        }else{
                            if( +getNumCurrent == 2){
                                this.classList.add('disabled')
                            }
                        }
                        
                    }
                    
                }
    
                setTimeout(function() {
                    getSlider.classList.add('showSlide');
                }, 770)
    
                setTimeout(function() {
                    document.querySelector('.cc_cases__nav--btns').classList.remove('disabled')
                }, 1200)
            }
        })
    }
  })
if($('body').hasClass('casesPage') || $('body').hasClass('boardPage') || $('body').hasClass('resourcesPage')){
    ScrollTrigger.matchMedia({
        "(min-width: 1025px)": function() {
          
          gsap.from('.customFilters', {
            scrollTrigger: {
              trigger: '.customFilters',
              scrub: true,
              start: "bottom top",
              onEnter: () => $('.header').addClass('show--filters'),
              onLeaveBack: () => $('.header').removeClass('show--filters'),
              // markers: true
            },
          });
      
        }
      });

    
}
$(document).ready(function () {

})

  
  let images

  if(document.querySelector("body").classList.contains('homePage')){
    images = $('.hero__cover-slider').data('pic').split(',');
    // console.log(imagesHero)
    if(window.innerWidth > 1025){

      rgbKineticSlider = new rgbKineticSlider({
          slideImages: images,

            backgroundDisplacementSprite:
            "https://i.ibb.co/N246LxD/map-9.jpg",
            cursorDisplacementSprite: "https://i.ibb.co/KrVr51f/displace-circle.png",
            cursorScaleIntensity: 2,
            cursorMomentum: 0.14,

          swipe: false,
          swipeDistance: window.innerWidth * 0.4,
          swipeScaleIntensity: 2,

          slideTransitionDuration: 0.4,
          transitionScaleIntensity: 10,
          transitionScaleAmplitude: 260,

          nav: true,
          navElement: ".main-nav",

          imagesRgbEffect: false,
          imagesRgbIntensity: 40,
          navImagesRgbIntensity: 120,

      });

    }

  $(".hero__cover--label").each(function(index, e) { 
    $(e).mouseenter(function(el){
        let getHero = el.target.closest('.hero')
        $(getHero).addClass('hover--linkCase')
    })

    $(e).mouseleave(function(el){
        let getHero = el.target.closest('.hero')
        $(getHero).removeClass('hover--linkCase')
    })
});

// hero

  function heroAnimationControl(){

   if(window.innerWidth > 625){

      const heroSection = gsap.timeline({
          
          scrollTrigger: {
              trigger: '.hero',
              pin: true,
              pinSpacing: false,
              start: 'top top',
              end: `bottom top`,
              scrub: 1,
              ease: 'linear',
            }
      })

      heroSection.to('.hero--inner', {
        scale: 0.7,
        stagger: .5, 
      })
      
      gsap.from($('.works'), {
        scrollTrigger: {
          trigger: $('.works'),
          scrub: true,
          start: "top 95%",
          onEnter: () => $('.hero').addClass('hero-disable'),
          onLeaveBack: () => $('.hero').removeClass('hero-disable'),
        },
      });

    } 

  }
  
  heroAnimationControl()

    // $( window ).on( "resize", function() {
    //   heroAnimationControl()
    // });
}
$(document).ready(function () {


    if($('body').hasClass('resourcesPage')){

        document.querySelectorAll('.r_resources__slider').forEach((el) => {
         
            var resourcesSlider = new Swiper(el, {
                slidesPerGroup: 1,
                slidesPerView: 1,
                allowTouchMove: false,
                speed: 100,
        
                // breakpoints: {
                //     320: {
                //         spaceBetween: 20,
                //         allowTouchMove: false,
                //         speed: 100,
                //     },
        
                //     625: {
                //         spaceBetween: 32,
                //         allowTouchMove: false,
                //         speed: 100,
                //     }
                // },
        
                on: {
                    init: function (swiper) {
        
                        let countSlide = $(el).find(".r_resources__slide").length             
                        
        
                        $(el).find(".r_resources__slider--num--all").text(countSlide)
                    },
        
                    slideChangeTransitionEnd: function(swiper){
        
                        let indexSlideCurrent = swiper.realIndex + 1
        
                        $(el).find('.r_resources__slider--num--cur').text(indexSlideCurrent)
                    },
                    
                },
                    
            });

            let resourcesSliderArrows = el.querySelectorAll('.r_resources__slider--arrow > p')

            resourcesSliderArrows.forEach((arrow) => {
                
                arrow.onclick = function (el) {
                    
                    let getSlider = el.target.closest('.r_resources__slider');
        
                    let getNumCurrent = getSlider.querySelector('.r_resources__slider--num--cur').innerText;
                    let getNumAll = getSlider.querySelector('.r_resources__slider--num--all').innerText;
        
                    if(this.classList.contains('r_resources__slider--next')){ 
        
                        if(+getNumCurrent < +getNumAll){
                            document.querySelector('.r_resources__slider--arrow').classList.add('disabled')
        
                            getSlider.classList.remove('show');
        
                            if(document.querySelector('.r_resources__slider--arrow .disabled')){
                                document.querySelector('.r_resources__slider--arrow .disabled').classList.remove('disabled')
                            }
                            
                            setTimeout(function() {

                                resourcesSlider.slideNext(); 
                            }, 620) 
        
                            if( +getNumCurrent == +getNumAll - 1){
                                this.classList.add('disabled')
                            }
                            
                        }
                        
                    }else{
        
        
                        if(+getNumCurrent > 1){
                            document.querySelector('.r_resources__slider--arrow').classList.add('disabled')
                            getSlider.classList.remove('show');
                            if(document.querySelector('.r_resources__slider--arrow .disabled')){
                                document.querySelector('.r_resources__slider--arrow .disabled').classList.remove('disabled')
                            }
        
                            setTimeout(function() {
                                resourcesSlider.slidePrev(); 
                            }, 620)
        
                            if( +getNumCurrent == 2){
                                this.classList.add('disabled')
                            }
                        }
                        
                    }
        
                    setTimeout(function() {
                        getSlider.classList.add('show');
                    }, 770)
        
                    setTimeout(function() {
                        document.querySelector('.r_resources__slider--arrow').classList.remove('disabled')
                    }, 1200)
                }
            })
        })
    }

});
$(document).ready(function () {

})


if($('body').hasClass('servicesPage')){

    let getWrapStickyElems = document.querySelectorAll('.s_service--left');

    getWrapStickyElems.forEach(elem => {
        let getDistanceForStopPin = elem.querySelector(".s_service__title").offsetHeight + 70;

        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": function() {
                
                ScrollTrigger.create({
                trigger: elem.querySelector(".s_service__title"),
                start: "top 50",
                end: `bottom ${getDistanceForStopPin}`,
                endTrigger: elem,
                pin: true,
                pinSpacing: true,
                scrub: true,
                
            });
            }
        });
            
    });
  
   ScrollTrigger.update()
    ScrollTrigger.refresh()
  }