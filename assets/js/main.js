$(document).ready(function() {
    $("#nav-icon").click(function(){
        $("#nav-icon").toggleClass("open");
        if($("#nav-icon").hasClass("open")) {
            $(".navWrapper").delay(300).css({"transform": "translateX(0%)"});
        } else {
            $(".navWrapper").delay(1000).css({"transform": "translateX(-100%)"});
        }
    });
    
    if($('.s1').hasClass('home')){
        $('.headerHolder .textBlock .textPara').addClass('active');
    }
    
    if($(window).width() < 768 && $('.s1').hasClass('home')) {
        $('.header').addClass('mobHome');
    }    
    
    if($('.s1').attr('arrtName')){
        console.log($('.s1').attr('arrtName'));
        let name = $('.s1').attr('arrtName');
        $('.headerHolder .textBlock .title').addClass('active');
        $('.headerHolder .textBlock .title').text(name);
    }
    
    const classicBtn = $('#classicRoomBtn');
    const modernBtn = $('#modernRoomBtn');
    const modernImg = $('#modernImgWrapper');
    const classicImg = $('#classicImgWrapper');    
    const modernMiniImg = $('#modernMiniImgWrapper');
    const classicMiniImg = $('#classicMiniImgWrapper');
    const modernLogo = $('#modernLogo');
    const classicLogo = $('#classicLogo');
    const defaultLogo = $('#defaultLogo');
    const classicMobLogo = $('#whiteLogo');
    
    if($('.s1').hasClass('wheat')){
        $('.header').addClass('wheat');
        $('.logoImg').removeClass('active');
        $(modernLogo).addClass('active');
    } else if ($('.s1').hasClass('blu')) {
        $('.header').addClass('blu');
        $('.logoImg').removeClass('active');
        $(classicLogo).addClass('active');
        if($(window).width() < 768) {
            $(defaultLogo).removeClass('active');
            $(classicMobLogo).addClass('active');
        }
    }
    
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
    
    const roomInnerCarouselHolder = document.getElementById('roomInnerCarouselHolder');
    $(roomInnerCarouselHolder).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
//        arrows: false,
        prevArrow: $('.prevBtn'),
        nextArrow: $('.nextBtn'),
        dots: true
    });
    
    let reviewsLastElement = document.querySelectorAll(".reviewsHolder");
    console.log(reviewsLastElement[reviewsLastElement.length -1]);
    
    
    const loadMoreReviews = document.getElementById('loadMoreReviews');
    if(loadMoreReviews){
       loadMoreReviews.addEventListener('click', loadData);
    }
    
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
    
    // contact form validation on submiting and blur
    const gotellContactForm = document.getElementById('gotellContactForm');
    if (gotellContactForm) {
        gotellContactForm.addEventListener('submit', function(e){        
            if( !(validateEmail()) || !(validateName()) || !(validateInquiry()) || !(validatePhone()) ){
                validateName();
                validateInquiry();
                validateEmail();
                validatePhone();
                e.preventDefault();
            } else {
                console.log('fin');
            }        
        });
            
        // form blur event listeners
        document.getElementById('name').addEventListener('blur', validateName);
        document.getElementById('inquiry').addEventListener('blur', validateInquiry);
        document.getElementById('email').addEventListener('blur', validateEmail);
        document.getElementById('phone').addEventListener('blur', validatePhone);
    } 
    
    
    // room inner leave a comment form validation on submiting and blur
    const leaveCommentForm = document.getElementById('leaveCommentForm');
    if(leaveCommentForm){
        leaveCommentForm.addEventListener('submit', function(e){        
            if( !(validateEmail()) || !(validateName()) || !(validateTextarea()) || !(checkFormCheckbox()) ){
                validateName();
                checkFormCheckbox()
                validateEmail();
                validateTextarea();
                e.preventDefault();
                console.log('eeee');
            } else {
                console.log('fin');
            }        
        });
        // form blur event listeners
        document.getElementById('name').addEventListener('blur', validateName);
        document.getElementById('email').addEventListener('blur', validateEmail);
        document.getElementById('textarea').addEventListener('blur', validateTextarea);
    }

    
    function validateTextarea(){
        const textarea = document.getElementById('textarea');
        const re = /^[a-zA-Z]{2,12}$/;
        let validTextarea = true;
        if(!re.test(textarea.value)){
            textarea.parentElement.classList.add('is-invalid');
            validTextarea = false;
        } else {
           textarea.parentElement.classList.remove('is-invalid');
        }
        return validTextarea;
    }
    function validateName(){
        const name = document.getElementById('name');
        const re = /^[a-zA-Z]{2,12}$/;
        let validName = true;
        if(!re.test(name.value)){
            name.parentElement.classList.add('is-invalid');
            validName = false;
        } else {
           name.parentElement.classList.remove('is-invalid');
        }
        return validName;
    }  
    function validateInquiry(){
        const inquiry = document.getElementById('inquiry');
        const re = /^[a-zA-Z]{2,12}$/;
        let validInquiry = true;
        if(!re.test(inquiry.value)){
            inquiry.parentElement.classList.add('is-invalid');
            validInquiry = false;
        } else {
           inquiry.parentElement.classList.remove('is-invalid');
        }
        return validInquiry;
    }
    function validateEmail(){
        const email = document.getElementById('email');
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).([a-zA-Z]{2,5})$/;
        let validEmail = true;
        if(!re.test(email.value)){
            email.parentElement.classList.add('is-invalid');
            validEmail = false;
        } else {
           email.parentElement.classList.remove('is-invalid');
        }
        return validEmail;
    }
    function validatePhone(){
        const phone = document.getElementById('phone');
        const re = /^(?:\+\d{2})?\d{10}(?:,(?:\+\d{2})?\d{10})*$/;
        let validPhone = true;
        if(!re.test(phone.value)){
            phone.parentElement.classList.add('is-invalid');
            validPhone = false;
        } else {
           phone.parentElement.classList.remove('is-invalid');
        }
        return validPhone;
    } 
    function checkFormCheckbox(){
        let checked = false;
        let element = document.getElementsByClassName("cb");
        const checkboxHolder = document.querySelector('.checkboxHolder');
        for(var i=0; i < element.length; i++){
        if(element[i].checked){
            checkboxHolder.classList.remove('is-invalid');
            checked = true;
        } else {
            checkboxHolder.classList.add('is-invalid');
            checked = false;
        }

        return checked ;
        }
    }
    
    
//    const checkbox = document.getElementById('star1');
//    let isChecked = document.getElementById('star1').checked;
    let inputlabel = document.querySelectorAll('.inputLabel');
    $('.inputLabel').click(function(){
        $('.inputLabel').removeClass('active');
        $(this).addClass('active');
        cbChange();
        if($(this).hasClass('active')){
            $(this).prev()[0].checked = false;
            console.log($(this).prev()[0]);
        }
    });   
    
    // only one checkbox checked
    function cbChange(obj) {
        var cbs = document.getElementsByClassName("cb");
        for (var i = 0; i < cbs.length; i++) {
            cbs[i].checked = false;
        }
    }
    
});