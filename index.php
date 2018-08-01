<?php include 'header.php' ?>

<section class="pageHolder s1 home white">
    <div class="pageHolder__mainBlock">
        <div class="mobDecoLogoHolder">
            <img class="mobDecoLogoHolder--img" src="assets/images/logo.svg">
        </div>
        <div class="pageHolder__mainBlock__imgHolder">
            <div id="introImgWrapper" class="pageHolder__mainBlock__imgHolder__wrapper active">
                <div id="img1" class="pageHolder__mainBlock__imgHolder__wrapper--imgBlock">
                    <img src="assets/images/01-hero-1.jpg">
                </div>
                <div id="img2" class="pageHolder__mainBlock__imgHolder__wrapper--imgBlock">
                    <img src="assets/images/03-hero-1.jpg">
                </div>
            </div>
            <div id="modernImgWrapper" class="pageHolder__mainBlock__imgHolder__wrapper">
                <div id="img1" class="pageHolder__mainBlock__imgHolder__wrapper--imgBlock">
                    <img src="assets/images/01-hero-2.jpg">
                </div>
                <div id="img2" class="pageHolder__mainBlock__imgHolder__wrapper--imgBlock">
                    <img src="assets/images/02-hero-1.jpg">
                </div>
            </div>            
            <div id="classicImgWrapper" class="pageHolder__mainBlock__imgHolder__wrapper">
                <div id="img1" class="pageHolder__mainBlock__imgHolder__wrapper--imgBlock">
                    <img src="assets/images/03-hero-2.jpg">
                </div>
                <div id="img2" class="pageHolder__mainBlock__imgHolder__wrapper--imgBlock">
                    <img src="assets/images/02-hero-2.jpg">
                </div>
            </div>
        </div>
        <div class="pageHolder__mainBlock__chooseStyle">
            <div class="pageHolder__mainBlock__chooseStyle__holder">
                <div class="pageHolder__mainBlock__chooseStyle__holder__block">
                    <div id="modernRoomBtn" class="modernRoomBtn">
                        <div class="modernRoomBtn--bg"></div>
                        <div class="modernRoomBtn--fourStars"></div>
                        <p class="modernRoomBtn--nameStyle">Modern Rooms</p>
                        <p class="modernRoomBtn--viewStylePara">View style</p>
                        <a href="modernRoomsAndSuites.php" class="modernRoomBtn--viewStyle"><span class="modernRoomBtn--viewStyle--text">See all rooms</span><img class="modernRoomBtn--viewStyle--img" src="assets/images/long-arrow-dark.svg"></a>
                    </div>
                    <a href="modernRoomsAndSuites.php" id="mobModernRoomBtn" class="mobModernRoomBtn">
                        <div class="mobModernRoomBtn__block">
                            <span class="mobModernRoomBtn__block--nameStyle">Modern Rooms</span>
                            <div class="mobModernRoomBtn__block__viewStyleHolder">
                                <span class="mobModernRoomBtn__block__viewStyleHolder--text">See all rooms</span>
                                <img class="mobModernRoomBtn__block__viewStyleHolder--img" src="assets/images/long-arrow-dark.svg">
                            </div>
                        </div>
                    </a>
                </div>
                <div class="pageHolder__mainBlock__chooseStyle__holder__block">
                    <div id="classicRoomBtn" class="classicRoomBtn">
                        <div class="classicRoomBtn--bg"></div>
                        <div class="classicRoomBtn--fourStars"></div>
                        <p class="classicRoomBtn--nameStyle">Classic Rooms</p>
                        <p class="classicRoomBtn--viewStylePara">View style</p>
                        <a href="classicRoomAndSuites.php" class="classicRoomBtn--viewStyle"><span class="classicRoomBtn--viewStyle--text">See all rooms</span><img class="classicRoomBtn--viewStyle--img" src="assets/images/long-arrow-light.svg"></a>
                    </div>
                    <a href="classicRoomAndSuites.php" id="mobClassicRoomBtn" class="mobClassicRoomBtn">
                        <div class="mobClassicRoomBtn__block">
                            <span class="mobClassicRoomBtn__block--nameStyle">Modern Rooms</span>
                            <div class="mobClassicRoomBtn__block__viewStyleHolder">
                                <span class="mobClassicRoomBtn__block__viewStyleHolder--text">See all rooms</span>
                                <img class="mobClassicRoomBtn__block__viewStyleHolder--img" src="assets/images/long-arrow-light.svg">
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="pageHolder__mainBlock__bookRoom">
            <div class="pageHolder__mainBlock__bookRoom__holder">
                <p class="para">Lorem ipsum dolor sit amet, per an omnes.</p>
                <div class="bookRoomBtn">
                    <a href="" class="bookRoomBtn__link">
                        <span class="bookRoomBtn__link--text">Book a room now</span>
                        <img class="bookRoomBtn__link--icon" src="assets/images/arrow-white.svg" alt="">  <img class="bookRoomBtn__link--iconDark" src="assets/images/arrow-dark.svg" alt="">    
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="pageHolder__mainBlock__miniImgHolder">
        <div id="introMiniImgWrapper" class="pageHolder__mainBlock__miniImgHolder__wrapper active">
            <div class="pageHolder__mainBlock__miniImgHolder__wrapper--block">
                <img src="assets/images/02-hero-2.jpg">
            </div>
            <div class="pageHolder__mainBlock__miniImgHolder__wrapper--block">
                <img src="assets/images/02-hero-1.jpg">
            </div>
        </div>
        <div  id="modernMiniImgWrapper" class="pageHolder__mainBlock__miniImgHolder__wrapper">
            <div class="pageHolder__mainBlock__miniImgHolder__wrapper--block">
                <img src="assets/images/02-hero-1.jpg">
            </div>
            <div class="pageHolder__mainBlock__miniImgHolder__wrapper--block">
                <img src="assets/images/01-hero-2.jpg">
            </div>
        </div>
        <div id="classicMiniImgWrapper" class="pageHolder__mainBlock__miniImgHolder__wrapper">
            <div class="pageHolder__mainBlock__miniImgHolder__wrapper--block">
                <img src="assets/images/02-hero-2.jpg">
            </div>
            <div class="pageHolder__mainBlock__miniImgHolder__wrapper--block">
                <img src="assets/images/03-hero-2.jpg">
            </div>
        </div>
    </div>
</section>

<?php include 'footer.php' ?>