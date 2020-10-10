

$(document).ready(function(){

    //get current page url
    let currPage = $(location).attr('pathname');    

        if(currPage !== "/"){
                $('header').toggleClass('static-header');           
        }else{
            let header = $('header');
            let nav = $('nav');
            let sectionIntro = $('.section-intro')
            let bannerStripe = $('.banner-stripe');
            let bannerRows = $('.banner-stripe .row');
            let callToAction = $('.section-call-to-action');   
            let callToActionRows = $('.section-call-to-action .row'); 

            //Remove sticky-nav on page refresh
            if($(document).scrollTop() <= header.height() && nav.hasClass('sticky-nav')){
                nav.removeClass('sticky-nav');
            }

            //Animation for mobile navi
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
                nav.addClass('sticky-nav');
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
                delay: 75
            };

            $('body').scroll(() => {
                if(scrollHandler.allow){
                //Get how far user is form top of page
                    let bodyPos = $('body').scrollTop();
                    
                    //Compare if we are past the header, if so apply sticky-nav class.
                    if(bodyPos > header.height() - 50 && !nav.hasClass('sticky-nav')){
                        nav.addClass('sticky-nav');   
        
                    }else if(bodyPos < header.height() - 50 && nav.hasClass('sticky-nav')){
                        
                        nav.removeClass('sticky-nav');
                    }

                    //Check to fade in opacity if it hasn't already been faded in once page has scrolled far enough
                    if(bodyPos > bannerStripe.offset().top + 550 && bannerRows.css('opacity') == 0){
                        bannerRows.animate({
                            opacity: 1
                        }, 1000)
                    }

                    if(bodyPos > callToAction.offset().top + 1000 && callToActionRows.css('opacity') == 0){
                        callToActionRows.animate({
                            opacity: 1
                        }, 1000)
                    }

                    scrollHandler.allow = false;
                    setTimeout(scrollHandler.reallow, scrollHandler.delay);
                }
            });
        }
});