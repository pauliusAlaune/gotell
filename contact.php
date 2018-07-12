<?php include 'header.php' ?>

<section class="contactSection s1 white" arrtName="Contact">
    <div class="contactSection__mapHolder">
        <img src="assets/images/map-2.jpg">
    </div>
    <div class="contactSection__fixedBottomLeftHolder">
        <img src="assets/images/hero-5.jpg">
    </div>
    <div class="contactSection__holder">
        <div class="contactSection__holder__rightBlock">
            <div class="contactSection__holder__rightBlock__inner">
                <h3 class="title">Contact information</h3>
                <p class="para">Tilto g. 3-1,</p>
                <p class="para">LT- 01101 Vilnius,</p>
                <p class="para">Lithuania</p>
                <br>
                <p class="para">Phone: <a href="tel:+37052107370">+370 5 2107370</a></p>
                <p class="para">Fax: <a href="tel:+37052618783">+370 5 2618783</a></p>
                <p class="para">Email: <a href="mailto:hotel@dvaras.lt">hotel@dvaras.lt</a></p>             
            </div>
            <div class="contactSection__holder__rightBlock__inner">
                <h3 class="title">Directions</h3>
                <p class="para">Gotell Hotel is conveniently situated in the very heart of Vilnius oldtown, close to the Cathedral Square. It’s perfect for both business guest and tourists alike.</p>   
            </div>
            <div class="contactSection__holder__rightBlock__inner">
                <h3 class="title">Payment information</h3>
                <p class="para">UAB „RAMIAI“</p>
                <p class="para">Tilto g. 3-1, LT- 01101 Vilnius</p>
                <p class="para">Įmonės kodas 304552440</p>
                <p class="para">PVM mok.kodas LT100011590818</p>
                <p class="para">A/s LT28 7300 0101 5492 2714</p>
                <p class="para">AB bankas "Swedbank"</p> 
                <p class="para">Banko kodas 73000</p> 
            </div>
        </div>
        <div class="contactSection__holder__contactBlock">
            <h3 class="title">Contact us for any inquiries</h3>
            <form id="gotellContactForm" class="contactSection__holder__contactBlock--contactForm">
                <div class="inputFieldBlock">
                    <input type="text" class="inputField nameInput" name="name" id="name" placeholder="Your name">
                    <span class="invalid-feedback">name</span>
                </div>
                <div class="inputFieldBlock">
                    <input type="text" class="inputField emailInput" name="email" id="email" placeholder="Your email">
                    <span class="invalid-feedback">email</span>
                </div>
                <div class="inputFieldBlock">
                    <input type="text" class="inputField phoneInput" name="phone" id="phone" placeholder="Your phone number">
                    <span class="invalid-feedback">phone</span>
                </div>
                <div class="inputFieldBlock">
                    <input type="text" class="inputField inquiryInput" name="inquiry" id="inquiry" placeholder="Type of inquiry">
                    <span class="invalid-feedback">inquiry</span>
                </div>
                <div class="inputFieldBlock">
                    <p class="textareaName">Your message here</p>
                    <textarea name="textArea" id="textArea" class="textAreaField" placeholder="Type of inquiry" cols="30" rows="10"></textarea>
                    <span class="invalid-feedback">textarea</span>
                </div>
                <input type="submit" class="submitBtn" value="Submit" id="gotellContactFormSubmit">
            </form>
        </div>
    </div>
</section>

<?php include 'footer.php' ?>