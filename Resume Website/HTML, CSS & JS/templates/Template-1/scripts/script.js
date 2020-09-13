

// $(window).on('beforeunload', () => {
//     $(window).scrollTop(0);
// })


$(document).ready(function(){


    //Cache variables for easy access to limit jquery calls.
    let header = $('header');
    let nav = $('nav');
    let profPic = $('.profile-picture');
    let sectionIntro = $('.section-intro')
    let bannerStripe = $('.banner-stripe');
    let bannerRows = $('.banner-stripe .row');
    let callToAction = $('.section-call-to-action');   
    let callToActionRows = $('.section-call-to-action .row'); 

    //Anim,ation for mobile navi
    $('.js--mobile-navi-icon').click(function(){
    
        //Get fixed navigation for animation 
        let fixedNav = $('.fixed-mob-nav');
            if(fixedNav.width() > 0){
                fixedNav.animate({
                    width: 0
                },() => {
                    fixedNav.css("display","")
                    
                });
            }else{
                fixedNav.css("display", "block")
                fixedNav.animate({
                    width:175
                });
            }
    });


    //When page is refreshed check for current window position and apply sticky-nav class.
    if($(document).scrollTop() > 155){
        header.addClass('sticky-nav');
        sectionIntro.css('margin-top', '155px');
    }


    //fade in intro section on page load
    $(function(){
        sectionIntro.hide().fadeIn(1000);
    });

    //Create handler to limit amount of scroll calls.
    let scrollHandler = {
        allow: true,
        reallow: () => {
            scrollHandler.allow = true;
        },
        delay: 50
    };

    $(window).scroll(() => {
        if(scrollHandler.allow){
        //Get how far user is form top of page
            let windowPos = $(document).scrollTop();
        
            //Compare if we are past the header, if so apply sticky-nav class.
            if(windowPos >= header.height() && !nav.hasClass('sticky-nav')){
                header.addClass('sticky-nav');   
                sectionIntro.css('margin-top', '155px');
            }else{
                header.removeClass('sticky-nav');
                sectionIntro.css('margin-top', '0');
            }

            //Check to fade in opacity if it hasn't already been faded in once page has scrolled far enough
            if(windowPos >= bannerStripe.offset().top - 400 && bannerRows.css('opacity') == 0){
                console.log("fired")
                bannerRows.animate({
                    opacity: 1
                }, 1000)
            }

            if(windowPos >= callToAction.offset().top - 400 && callToActionRows.css('opacity') == 0){
                console.log("fired")
                callToActionRows.animate({
                    opacity: 1
                }, 1000)
            }
            console.log("allow");

            scrollHandler.allow = false;
            setTimeout(scrollHandler.reallow, scrollHandler.delay);
        }
    });
});