$(document).ready(function() {
    $("#nav-icon").click(function(){
        $("#nav-icon").toggleClass("open");
        if($("#nav-icon").hasClass("open")) {
            $(".navWrapper").delay(300).css({"transform": "translateX(0%)"});
        } else {
            $(".navWrapper").delay(1000).css({"transform": "translateX(-100%)"});
        }
    });
    
    const classicBtn = $('#classicRoomBtn');
    const modernBtn = $('#modernRoomBtn');
    
    $(modernBtn).click(function(){
        $(classicBtn).removeClass('active');
        $(classicBtn).addClass('notActive');
        $('.classicRoomBtn--viewStyle--img').attr('src', 'assets/images/long-arrow-dark.svg')
        $(this).removeClass('notActive');
        $(this).addClass('active');
    });
    
    $(classicBtn).click(function(){
        $(modernBtn).removeClass('active');
        $(modernBtn).addClass('notActive');
        $('.classicRoomBtn--viewStyle--img').attr('src', 'assets/images/long-arrow-light.svg');
        $(this).removeClass('notActive');
        $(this).addClass('active');
    });
    
});