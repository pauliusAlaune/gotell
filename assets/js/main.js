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
    const modernImg = $('#modernImgWrapper');
    const classicImg = $('#classicImgWrapper');    
    const modernMiniImg = $('#modernMiniImgWrapper');
    const classicMiniImg = $('#classicMiniImgWrapper');
    const modernLogo = $('#modernLogo');
    const classicLogo = $('#classicLogo');
     
    
    $(modernBtn).click(function(){
        $(classicBtn).removeClass('active');
        $(classicBtn).addClass('notActive');
        $('.pageHolder__mainBlock__imgHolder__wrapper').removeClass('active');
        $('.pageHolder__mainBlock__miniImgHolder__wrapper').removeClass('active');
        $('.classicRoomBtn--viewStyle--img').attr('src', 'assets/images/long-arrow-dark.svg');
        $('.header').removeClass('blu');
        $('.header').addClass('wheat');
        $('.logoImg').removeClass('active');
        $('.bookRoomBtn').addClass('wheat');
        $(modernLogo).addClass('active');
        $(this).removeClass('notActive');
        $(this).addClass('active');
        $(modernImg).addClass('active');
        $(modernMiniImg).addClass('active');
    });
    
    $(classicBtn).click(function(){
        $(modernBtn).removeClass('active');
        $(modernBtn).addClass('notActive');
        $('.pageHolder__mainBlock__imgHolder__wrapper').removeClass('active');
        $('.pageHolder__mainBlock__miniImgHolder__wrapper').removeClass('active');
        $('.classicRoomBtn--viewStyle--img').attr('src', 'assets/images/long-arrow-light.svg');
        $('.header').removeClass('wheat');
        $('.header').addClass('blu');
        $('.logoImg').removeClass('active');
        $('.bookRoomBtn').removeClass('wheat');
        $(classicLogo).addClass('active');
        $(this).removeClass('notActive');
        $(this).addClass('active');
        $(classicImg).addClass('active');
        $(classicMiniImg).addClass('active');
    });
    
    let reviewsLastElement = document.querySelectorAll(".reviewsHolder");
    console.log(reviewsLastElement[reviewsLastElement.length -1]);
    
    document.getElementById('loadMoreReviews').addEventListener('click', loadData);

    function loadData(){
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'moreReviews.php', true);

        console.log('READYSTATE', xhr.readyState);

        xhr.onprogress = function(){
            console.log('READYSTATE', xhr.readyState)
        }

        xhr.onload = function(){
            if(this.status === 200){
               console.log(this.responseText);
               $("#loadMoreHolder").before(this.responseText);
            }
        }
        xhr.onerror = function(){
            console.log('request error..')
        }

        xhr.send();
    }
    
});