   
   $(document).ready(function()
   {
      $('#wb_Card1').addClass('visibility-hidden');
      $('#wb_Card4').addClass('visibility-hidden');
      $('#wb_Card2').addClass('visibility-hidden');
      $("a[href*='#carousel_grid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_carousel_grid').offset().top }, 600, 'easeOutCubic');
      });
      $('#wb_carousel_grid').parallax();
      $("a[href*='#LayoutGrid3']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid3').offset().top }, 600, 'linear');
      });
      $("a[href*='#LayoutGrid2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid2').offset().top-50 }, 600, 'linear');
      });
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top }, 600, 'linear');
      });
      $("a[href*='#artbook_header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_artbook_header').offset().top }, 600, 'linear');
      });
      $('#headerMenu .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.headerMenu-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $("#s1").slideshow(
      {
         interval: 5000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: true,
         pagination_img_default: 'images/s1-default.png',
         pagination_img_active: 'images/s1-active.png',
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 2000
      });
      $("#s1_back a").click(function()
      {
         $('#s1').slideshow('previmage');
      });
      $("#s1_next a").click(function()
      {
         $('#s1').slideshow('nextimage');
      });
      $("#SlideShow1").slideshow(
      {
         interval: 4000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: false,
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 1000
      });
      $("#SlideShow1_back a").click(function()
      {
         $('#SlideShow1').slideshow('previmage');
      });
      $("#SlideShow1_next a").click(function()
      {
         $('#SlideShow1').slideshow('nextimage');
      });
      $("#SlideShow3").slideshow(
      {
         interval: 5000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: true,
         pagination_img_default: 'images/SlideShow3-default.png',
         pagination_img_active: 'images/SlideShow3-active.png',
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 2000
      });
      function Card1Scroll()
      {
         var $obj = $("#wb_Card1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card1', 'transform-bounce-in-right', 500, 1000);
         }
      }
      Card1Scroll();
      $(window).scroll(function(event)
      {
         Card1Scroll();
      });
      function Card4Scroll()
      {
         var $obj = $("#wb_Card4");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card4', 'transform-bounce-in-down', 1000, 1000);
         }
      }
      Card4Scroll();
      $(window).scroll(function(event)
      {
         Card4Scroll();
      });
      function Card2Scroll()
      {
         var $obj = $("#wb_Card2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card2', 'transform-bounce-in-left', 500, 1000);
         }
      }
      Card2Scroll();
      $(window).scroll(function(event)
      {
         Card2Scroll();
      });
      $("a[href*='#picturegird']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_picturegird').offset().top-10 }, 600, 'linear');
      });
      function picturegirdScroll()
      {
         var $obj = $("#wb_picturegird");
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            audioVolumeOut();;
         }
         else
         if ($obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
         }
      }
      if (!$('#wb_picturegird').inViewPort(true))
      {
         $('#wb_picturegird').addClass("in-viewport");
      }
      picturegirdScroll();
      $(window).scroll(function(event)
      {
         picturegirdScroll();
      });
      $("#s2").slideshow(
      {
         interval: 5000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: false,
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 2000
      });
      $("#s2_back a").click(function()
      {
         $('#s2').slideshow('previmage');
      });
      $("#s2_next a").click(function()
      {
         $('#s2').slideshow('nextimage');
      });
      $("a[href*='#videogrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_videogrid').offset().top-50 }, 600, 'linear');
      });
      function videogridScroll()
      {
         var $obj = $("#wb_videogrid");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            audioVolumeIn();;
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            audioVolumeOut();;
         }
      }
      if (!$('#wb_videogrid').inViewPort(true))
      {
         $('#wb_videogrid').addClass("in-viewport");
      }
      videogridScroll();
      $(window).scroll(function(event)
      {
         videogridScroll();
      });
      $("#SlideShow2").slideshow(
      {
         interval: 4000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: true,
         pagination_img_default: 'images/SlideShow2-default.png',
         pagination_img_active: 'images/SlideShow2-active.png',
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 1000
      });
      $("#SlideShow4").slideshow(
      {
         interval: 4000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: true,
         pagination_img_default: 'images/SlideShow4-default.png',
         pagination_img_active: 'images/SlideShow4-active.png',
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 1000
      });
      $("#SlideShow5").slideshow(
      {
         interval: 4000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: true,
         pagination_img_default: 'images/SlideShow5-default.png',
         pagination_img_active: 'images/SlideShow5-active.png',
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 1000
      });
      $("a[href*='#h_digital']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_h_digital').offset().top }, 600, 'linear');
      });
      $("#SlideShow6").slideshow(
      {
         interval: 5000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: false,
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 2000
      });
      $("#SlideShow6_back a").click(function()
      {
         $('#SlideShow6').slideshow('previmage');
      });
      $("#SlideShow6_next a").click(function()
      {
         $('#SlideShow6').slideshow('nextimage');
      });
      $("#SlideShow7").slideshow(
      {
         interval: 5000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: true,
         pagination_img_default: 'images/SlideShow7-default.png',
         pagination_img_active: 'images/SlideShow7-active.png',
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 2000
      });
      $("#SlideShow8").slideshow(
      {
         interval: 5000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: true,
         pagination_img_default: 'images/SlideShow8-default.png',
         pagination_img_active: 'images/SlideShow8-active.png',
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 2000
      });
      $('#PhotoGallery1-filter a').click(function()
      {
         var value = $(this).data('filter-tag');
         if (value == 'all')
         {
            $('#PhotoGallery1 .thumbnail').show('fade', 1000);
         }
         else
         {
            var filter = "[data-filter-tag='" + value + "']";
            $('#PhotoGallery1 .thumbnail').not(filter).hide('fade', 1000);
            $('#PhotoGallery1 .thumbnail').filter(filter).show('fade', 1000);
         }
         $('#PhotoGallery1-filter a').removeClass('active');
         $(this).addClass('active');
      });
      $('#PhotoGallery2-filter a').click(function()
      {
         var value = $(this).data('filter-tag');
         if (value == 'all')
         {
            $('#PhotoGallery2 .thumbnail').show('fade', 1000);
         }
         else
         {
            var filter = "[data-filter-tag='" + value + "']";
            $('#PhotoGallery2 .thumbnail').not(filter).hide('fade', 1000);
            $('#PhotoGallery2 .thumbnail').filter(filter).show('fade', 1000);
         }
         $('#PhotoGallery2-filter a').removeClass('active');
         $(this).addClass('active');
      });
      $('#PhotoGallery3-filter a').click(function()
      {
         var value = $(this).data('filter-tag');
         if (value == 'all')
         {
            $('#PhotoGallery3 .thumbnail').show('fade', 1000);
         }
         else
         {
            var filter = "[data-filter-tag='" + value + "']";
            $('#PhotoGallery3 .thumbnail').not(filter).hide('fade', 1000);
            $('#PhotoGallery3 .thumbnail').filter(filter).show('fade', 1000);
         }
         $('#PhotoGallery3-filter a').removeClass('active');
         $(this).addClass('active');
      });
      $('#PhotoGallery4-filter a').click(function()
      {
         var value = $(this).data('filter-tag');
         if (value == 'all')
         {
            $('#PhotoGallery4 .thumbnail').show('fade', 1000);
         }
         else
         {
            var filter = "[data-filter-tag='" + value + "']";
            $('#PhotoGallery4 .thumbnail').not(filter).hide('fade', 1000);
            $('#PhotoGallery4 .thumbnail').filter(filter).show('fade', 1000);
         }
         $('#PhotoGallery4-filter a').removeClass('active');
         $(this).addClass('active');
      });
      $('#PhotoGallery5-filter a').click(function()
      {
         var value = $(this).data('filter-tag');
         if (value == 'all')
         {
            $('#PhotoGallery5 .thumbnail').show('fade', 1000);
         }
         else
         {
            var filter = "[data-filter-tag='" + value + "']";
            $('#PhotoGallery5 .thumbnail').not(filter).hide('fade', 1000);
            $('#PhotoGallery5 .thumbnail').filter(filter).show('fade', 1000);
         }
         $('#PhotoGallery5-filter a').removeClass('active');
         $(this).addClass('active');
      });
      $('#PhotoGallery6-filter a').click(function()
      {
         var value = $(this).data('filter-tag');
         if (value == 'all')
         {
            $('#PhotoGallery6 .thumbnail').show('fade', 1000);
         }
         else
         {
            var filter = "[data-filter-tag='" + value + "']";
            $('#PhotoGallery6 .thumbnail').not(filter).hide('fade', 1000);
            $('#PhotoGallery6 .thumbnail').filter(filter).show('fade', 1000);
         }
         $('#PhotoGallery6-filter a').removeClass('active');
         $(this).addClass('active');
      });
      $('#PhotoGallery7-filter a').click(function()
      {
         var value = $(this).data('filter-tag');
         if (value == 'all')
         {
            $('#PhotoGallery7 .thumbnail').show('fade', 1000);
         }
         else
         {
            var filter = "[data-filter-tag='" + value + "']";
            $('#PhotoGallery7 .thumbnail').not(filter).hide('fade', 1000);
            $('#PhotoGallery7 .thumbnail').filter(filter).show('fade', 1000);
         }
         $('#PhotoGallery7-filter a').removeClass('active');
         $(this).addClass('active');
      });
      $("#SlideShow9").slideshow(
      {
         interval: 5000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: true,
         pagination_img_default: 'images/SlideShow9-default.png',
         pagination_img_active: 'images/SlideShow9-active.png',
         fullscreen: 0,
         maxWidth: 1920,
         effectlength: 2000
      });
      $("a[href*='#kontaktgrid_h']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_kontaktgrid_h').offset().top }, 600, 'linear');
      });
      $("#CardContainer1").owlCarousel({autoplayTimeout:5000, margin: 16, autoplay: true, nav: false, loop: true, dots: true, responsive: {0: {items: 2, slideBy: 2},320: {items: 2, slideBy: 2},768: {items: 2, slideBy: 2}}});
      $("#CardContainer2").owlCarousel({autoplayTimeout:5000, margin: 16, autoplay: true, nav: false, loop: true, dots: true, responsive: {0: {items: 2, slideBy: 2},320: {items: 2, slideBy: 2},768: {items: 2, slideBy: 2}}});
      $("#CardContainer3").owlCarousel({autoplayTimeout:5000, margin: 16, autoplay: true, nav: false, loop: true, dots: true, responsive: {0: {items: 2, slideBy: 2},320: {items: 2, slideBy: 2},768: {items: 2, slideBy: 2}}});
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_carousel_grid').css('background-attachment', 'scroll');
      }
   });
   
   function audioVolumeIn(){
   $audio =$("#sound");
   $audio[0].play();
   $audio.animate({volume: 1.0}, 2000);}
   
   function audioVolumeOut(){
   $audio =$("#sound");
   $audio.animate({
   volume: 0.0}, 1000, function(){
   $audio[0].pause();
   });
   }
   
      
   
   function aufruf1 (){
   document.getElementById('s1_next').onclick = function() {myfunction()};
   
   function myfunction(){
   document.getElementById('page').play();}}
   
   function aufruf2 (){
   document.getElementById('s1_back').onclick = function() {myfunction()};
   
   function myfunction(){
   document.getElementById('page').play();}}
   
      
   
   function aufruf3 (){
   document.getElementById('s2_next').onclick = function() {myfunction()};
   
   function myfunction(){
   document.getElementById('click').play();}}
   
   function aufruf4 (){
   document.getElementById('s2_back').onclick = function() {myfunction()};
   
   function myfunction(){
   document.getElementById('click').play();}}
   
      
   var wb_Timer1;
   function TimerStartTimer1()
   {
      wb_Timer1 = setInterval(function()
      {
         ShowObjectWithEffect('Layer2', 0, 'fade', 500);
      }, 4000);
   }
   function TimerStopTimer1()
   {
      clearInterval(wb_Timer1);
   }
   TimerStartTimer1();
      
   $(document).ready(function()
   {
   initElements();
   initVideoCuepoints();
   aufruf1();
   aufruf2();
   aufruf3();
   aufruf4();
   });
      
   let videoCuePoints = [
   {
   	from: 0,
   	to: 30, 
   	title: "Portrait Zeitraffer",
   	content: "Luke Hemmings", 
   },
   {
   	from: 30,
   	to: 60, 
   	title: "Portrait Luke Hemmings",
   	content: "Buntstifte auf Papier", 
   },
   {
   	from: 60,
   	to: 109, 
   	title: "Portrait Luke Hemmings",
   	content: "Dauer: ca. 20 Stunden", 
   }
   
   ];
   
   let videoCuepointHeadline, videoCuepointText;
   let videoPlayer;
   
   //Variablen anlegen und unsere Elemente zuweisen
   function initElements(){
   	videoPlayer = document.getElementById('v1');
   	videoCuepointHeadline = $('#h1');
   	videoCuepointText = $('#h2');
   }
   function initVideoCuepoints(){
       let currentCuePointIndex = 0;
   
      // Funktion um den Array den richtigen Zeit aus dem Video zuzuweisen 
      videoCuePoints.forEach(function(cuepoint, index){
           if(index == currentCuePointIndex){
               videoCuepointHeadline.text(cuepoint.title);
               videoCuepointText.text(cuepoint.content);
           }
       });
      //Funktion um die Sachen zeitgleich einzuspielen
       videoPlayer.ontimeupdate = function(){
           videoCuePoints.forEach(function (cuepoint, index){
               if(videoPlayer.currentTime > cuepoint.from && videoPlayer.currentTime < cuepoint.to){
                   currentCuePointIndex = index;
                   videoCuepointHeadline.text(cuepoint.title);
                   videoCuepointText.text(cuepoint.content);
               }
           });
       }
   }
   