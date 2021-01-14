//smooth scroll start

    $(function () {
        var anchorScroll = $(document).AnchorScroll({
          'top': 1,
        });
        anchorScroll.on('scrollStart', function (event) {
          var target = event.target,
            settings = event.settings;
  
          console.log('Start');
          if( $(window).width() < 768 ) {
            settings.center = 0;
          }
  
        });
        anchorScroll.on('scrollEnd', function (event) {
          var target = event.target;
  
          console.log('End');
        });
      });
  //smooth scroll end


  
//sticky menu start

$(window).scroll(function(){
    $scrollamout = $(window).scrollTop();
    
    if($scrollamout > 700){
      $(".menu").addClass("sticky")
    }else{
      $(".menu").removeClass("sticky")
    }
  
  
  });
  
  $(".navbar-collapse a").click(function(){
    $(".navbar-collapse").collapse('hide')
  })
  

//sticky menu start