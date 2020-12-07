
jQuery(function() {
    
    /*scroll top JS*/
    window.onload = function(e){
        e.preventDefault();
        if(window.location.hash !== ""){
            hash = window.location.hash;
        }else{
            hash = '#intro';
        }
        scrollToPosition(hash);
    }
    
    $("a.page-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            scrollToPosition(hash);
            console.log(hash);
           } 
    });
    //Function generation for Scrolling to destination
    function scrollToPosition(hash){
        //Initialize Active Class
        initializeActiveClass(hash);
        $('body,html').animate({
            start: function(){},
            scrollTop: $(hash).offset().top,
        },1000,function(){
            window.location.hash = hash;
        });
    }

    /**
    * Initializing Active class function
    * 
    * @param hash This is a hash valu, it can be id name with hash sign
    * @since 1.0
    */
    function initializeActiveClass(hash){
        //Initializing active class
        $("ul.nav_menu li").removeClass("active");
        $("ul.nav_menu li a[href='" + hash + "']").parent().addClass("active");
        $("ul.nav_menu li a[href='" + hash + "']").parents().find('li').addClass("active");
        
    }

    /*Scroll top js*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll-up').fadeIn();
        } else {
            $('#scroll-up').fadeOut();
        }
    });
    $('#scroll-up').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
        return false;
    });
    // active class li
    // $("ul.nav_menu li").on("click",function(){
    //     $("ul.nav_menu li").removeClass("active");
    //     $("ul.nav_menu li[href=#intro]").addClass("active");

    // });

    //Custom code for Pretify Plugin
    var prettyprint = false;
    $("pre code").parent().each(function() {
        $(this).addClass('prettyprint linenums');
        prettyprint = true;
    });    
    if( prettyprint ) {
        $.getScript("https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?lang=css&skin=desert", function() { prettyPrint() });
    } 

    // scrolling function
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
         if (scroll < 100) {
            if($window.width() <767){
                $(".sidenav_wrapper").removeClass("sticky");
            }
          
         }else{
          $(".sidenav_wrapper").addClass("sticky");
         }
    }); 
    $('.new_step li.accordion').on('click', function(){
        $(this).toggleClass('show');
    });
    
    // Magnific Popup
    $('.image-shot').magnificPopup({type:'image'});
    $('.gallery-item').magnificPopup({
      type: 'image',
      gallery:{
            enabled:true
      }
    });
});