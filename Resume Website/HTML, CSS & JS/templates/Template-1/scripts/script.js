$(document).ready(function(){

    

    $('.js--mobile-navi-icon').click(function(){
        
        // let profilePic = $('#mainProfilePicture');

        //Get fixed navigation for animation 
        let fixedNav = $('.fixed-mob-nav');
        
    
            if(fixedNav.width() > 0){
                // profilePic.css("display","block");
                fixedNav.animate({
                    width: 0
                },() => {
                    fixedNav.css("display","")
                    
                });
                
            }else{
                // profilePic.css("display","");
                fixedNav.css("display", "block")
                fixedNav.animate({
                    width:175
                });
            }
       
    });
});