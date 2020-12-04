<template>
	<div class="home">
        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><router-link to="./about" class="navigation__link"><span>01</span>About NUCLEUS</router-link></li>
                    <li class="navigation__item"><router-link to="./gallery" class="navigation__link"><span>02</span>Gallery</router-link></li>
                    <li class="navigation__item"><router-link to="./rooms" class="navigation__link"><span>03</span>Popular rooms</router-link></li>
                    </ul>
            </nav>
        </div>
	<header class="header">
        <div class="logo-box">
            <img src="../assets/logo-white.png" alt="logo" class="logo">
        </div>
        <div class="text-box">
        <h1 class="heading-primary">
            <span class="heading-primary-main">Nucleus</span>
            <span class="heading-primary-sub">Best memories start here</span>
        </h1>
        <div class="row">
        <div class="col-1-of-2"><router-link to="/login"><a href="#" class="btn btn--white btn--animated u-changed-width-button">Login</a></router-link></div>
        <div class="col-1-of-2"><router-link to="/signup/basic"><a href="#" class="btn btn--white btn--animated u-changed-width-button">Sign up</a></router-link></div>
    </div>
        </div>
    </header>
    <main>
<section class="section-about">
    <div class="u-center-text u-margin-bottom-big"><h2 class="heading-secondary">
        best in class facilities and services 
    </h2>
</div>
<div class="row">
    <div class="col-1-of-2">
     <h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with nucleus</h3>
     <p class="paragraph">Everything. Right, where you need it. </p>
       <h3 class="heading-tertiary u-margin-bottom-small">why we are the best ?</h3>
     <p class="paragraph">With the rapid automation of basic processes like ordering food (using apps like Swiggy), our team found great potential in automating the whole user experience for those staying at resorts by providing added functionality like ordering/pre ordering food for rooms, booking buffet slots, reserving tables and even pre ordering food to avoid waiting time, all this just a click away on our own Nucleus platform (making Resorts the Nucleus of your trip).</p>
     <a href="#" class="btn-text">Learn more &rarr;</a>
    </div>
     <div class="col-1-of-2">
        <div class="composition">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Photo 1" class="composition__photo composition__photo--p1">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Photo 2" class="composition__photo composition__photo--p2">
            <img src="https://images.unsplash.com/photo-1580656155356-c0c1389c5cba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80" alt="Photo 3" class="composition__photo composition__photo--p3">
        </div>
    </div>
</div>
</section>
<section class="section-features">
                
                <div class="row">
                    <div class="col-1-of-4">
                        <div class="feature-box u-add-featuresbg">
                            <i class="feature-box__icon fas fa-utensils"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Buffet</h3>
                            <p class="feature-box__text">
French for get it yourself.
Multi-cuisine buffet to suit your taste buds with a fresh menu for every meal. Juice, eggs, breads, cakes, sundays, we have it all, just name it. 
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box u-add-featuresbg">
                            <i class="feature-box__icon fas fa-chair"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Online table reservations</h3>
                            <p class="feature-box__text">
Have a hassle free stay and ensure to have a table reserved for the time that suits you through our online application.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box u-add-featuresbg">
                            <i class="feature-box__icon fas fa-clock"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Pre Ordering Food</h3>
                             <p class="feature-box__text">
Find it unfair to wait long after ordering food when you are hungry right now? Now, you can order food for the time you like, delivered to your room or your table.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box u-add-featuresbg">
                            <i class="feature-box__icon fas fa-bicycle"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Local Attractions</h3>
                            <p class="feature-box__text">

You can check for local attractions in our local attractions section and get to know about what's brewing around. Click on them to know more
                            </p>
                        </div>
                    </div>
                </div>
            </section>
<section class="section-tours" id="section-tours">
                <div class="u-center-text u-margin-bottom-medium">
                    <h2 class="heading-secondary">
                        Most popular Packages
                    </h2>
                </div>

                <div class="row row-cards">
                    <div class="col-1-of-3">
                       <div class="card">
                           <div class="card__side card__side--front">
                                <div class="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--1"><strong>Romance is in the air</strong></span>
                                </h4>
                                <div class="card__details">
                                    4 days 3 Nights couple package<br>
                                    Enjoy our Valentine special package this coming February far from the hectic city life to spend some time with your special loved one.
                                </div>
                           </div>
                           <div class="card__side card__side--back card__side--back-1">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Only</p>
                                        <p class="card__price-value">Rs. 6999</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Book now!</a>
                                </div>
                            </div>
                       </div>
                    </div>


                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--2"><strong>Family is Family</strong></span>
                                </h4>
                                <div class="card__details">
                                    5 days and 5 nights, family package for 4. Tired of the boring routine work? We provide you the chance to relax and rejuvenate this comming summers with your family, it is time for pool, spa and food.
                                </div>

                            </div>
                            <div class="card__side card__side--back card__side--back-2">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Only</p>
                                        <p class="card__price-value">Rs. 9999</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--3"><strong>Adventure Awaits</strong></span>
                                </h4>
                                <div class="card__details">
                                   3 days and 3 nights.
Adventure package for 3
Hello adventurers! We offer you the time of your life with your favourite adventure sports. Let the thrill begin with bungee, sky diving, rafting and much more.
                                </div>

                            </div>
                            <div class="card__side card__side--back card__side--back-3">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Only</p>
                                        <p class="card__price-value">Rs. 11999</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="u-center-text u-margin-top-medium">
                    <a href="#" class="btn btn--blue discover">Discover all tours</a>
                </div>
            </section>
<section class="section-stories">
                <div class="bg-video">
                    <video class="bg-video__content" autoplay muted loop>
                        <source src="../assets/video.mp4" type="video/mp4">
                        <source src="../assets/video.webm" type="video/webm">
                        Your browser is not supported!
                    </video>
                </div>

                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>

                <div class="row">
                    <div class="story">
                        <figure class="story__shape">
                            <img src="../assets/nat-8.jpg" alt="Person on a tour" class="story__img">
                            <figcaption class="story__caption">Mary Smith</figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>
                                Had a resort stay after a long time and loved every bit of it, perfect way to enjoy a long vacation with friends amidst hot and delicious food, and what got our attention the most was the new tech adopted by them, made things a little more convenient and fun.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="story">
                        <figure class="story__shape">
                            <img src="../assets/nat-9.jpg" alt="Person on a tour" class="story__img">
                            <figcaption class="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">WOW! Perfection at its best</h3>
                            <p>
                                I am not new to the resort experiences, but the food and facilities over here were loved by me and my family, and my children couldn't stop ordering food on their web page. Finally a place where I can check for the crowd in buffets without actually leaving my room.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="u-center-text u-margin-top-huge">
                    <a href="#" class="btn-text">Read all stories &rarr;</a>
                </div>
            </section>

           
    </main>
    <footer class="footer">
            <div class="footer__logo-box">
                <img src="../assets/logo-white.png" alt="Full logo" class="footer__logo">
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        Built by <a href="#" class="footer__link">Nucleus Systems Pvt. Ltd.</a>
                        <a href="#" class="footer__link"></a>.
                        Copyright &copy; by NUCLEUS
                    </p>
                </div>
            </div>
        </footer>
        <div class="popup" id="popup">
            <div class="popup__content">
                <div class="popup__left">
                    <img src="../assets/nat-8.jpg" alt="Tour photo" class="popup__img">
                    <img src="../assets/nat-9.jpg" alt="Tour photo" class="popup__img">
                </div>
                <div class="popup__right">
                    <a href="#section-tours" class="popup__close">&times;</a>
                    <h2 class="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 class="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p class="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                        amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                        sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                        gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                        Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                        vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
                        vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                        euismod nisi porta.
                    </p>
                    <a href="#" class="btn btn--blue">Book now</a>
                </div>
            </div>
        </div>
</div>
</template>

<script>

export default {
  data(){
    return {
    };
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');
*{
	font-family:"Lato",sans-serif;
	line-height: 1.7;
    font-size:1.2rem;
}
.home{
    padding:1.5rem;
}
/*sections*/
.section-features {
    padding: 18rem 0;
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.7),
        rgba($color-primary-dark, 0.7)),
    url(../assets/nat-4.jpg);
    background-size: cover;
    transform: skewY(-7deg);
    margin-top: -10rem;

    & > * {
        transform: skewY(7deg);
    }

}
.section-tours {
    background-color: $color-grey-light-1;
    padding: 25rem 0 15rem 0;
    margin-top: -10rem;
}
.section-stories {
    position: relative;
    padding: 15rem 0;
}
.book {
    background-image: linear-gradient(105deg, 
                                    rgba($color-white, .9) 0%,
                                    rgba($color-white, .9) 50%,
                                    transparent 50%) ,
                            url(../assets/nat-10.jpg);
    background-size: 100% !important;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .2);
    margin: 0 auto;
    height: 38rem;
    width:80rem;

    &__form {
        width: 50%;
        padding: 6rem;
    }
}
.header{
	height:95vh;
	background-image:linear-gradient(to right bottom,rgba(#66CCFF,0.6),rgba(#10a5F5,0.6)) , url(../assets/hero.jpg);
	background-size: cover;
	background-position: top;
	clip-path:polygon(0 0,100% 0,100% 75vh,0 100%);
	position: relative;
}
.logo-box{
position: absolute;
top: 30px;
left: 30px;
}
.logo{
height:30px;
}
.text-box
{
	position: absolute;
	top:40%;
	left:50%;
	transform: translate(-50%,-50%);
	text-align: center;
}
.heading-primary{
color:#fff;
text-transform: uppercase;
backface-visibility: hidden;
font-family:"Lato",sans-serif;
line-height: 1.7;
margin-bottom: 60px;
}
.heading-primary-main{
display: block;
font-size: 65px;
font-weight: 700;
letter-spacing: 45px;


animation-name: moveInLeft;
animation-duration: 1s;
animation-timing-function: ease-out;
}
.heading-primary-sub{
display: block;
font-size:20px;
font-weight: 700;
letter-spacing: 17.5px;

animation-name: moveInRight;
animation-duration: 1s;
animation-timing-function: ease-out;
}

@keyframes moveInLeft{
	0%{
    opacity:0;
    transform:translateX(-100px);
	}
	80%{
		transform:translateX(10px);
	}
	100%{
    opacity:1;
    transform: translate(0);
	}
}
@keyframes moveInRight{
	0%{
    opacity:0;
    transform:translateX(+100px);
	}
	80%{
		transform:translateX(-10px);
	}
	100%{
    opacity:1;
    transform: translate(0);
	}
}
@keyframes moveInBottom{
	0%{
    opacity:0;
    transform:translateY(+30px);
	}
	80%{
		transform:translateY(-10px);
	}
	100%{
    opacity:1;
    transform: translateY(0);
	}
}
.btn {
    &,
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1rem 3.5rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: $default-font-size;

        border: none;
        cursor: pointer;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black,.2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba($color-black,.2);
    }
    
    &--white {
        background-color: $color-white;
        color: $color-grey-dark;

        &::after {
            background-color: $color-white;
        }
    }

    &--blue {
        background-color: $color-primary;
        color: $color-white;

        &::after {
            background-color: $color-primary;
        }
    }
    
    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }
    
    &--animated {
        animation: moveInBottom .5s ease-out .75s;
        animation-fill-mode: backwards;
    }
}

.btn-text {
    &:link,
    &:visited {
        font-size: $default-font-size;
        color: $color-primary;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid $color-primary;
        padding: 3px;
        transition: all .2s;
    }

    &:hover {
        background-color: $color-primary;
        color: $color-white;
        box-shadow: 0 1rem 2rem rgba($color-black, .15);
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: 0 .5rem 1rem rgba($color-black, .15);
        transform: translateY(0);
    }
}
.row {
    max-width: $grid-width;
    margin: 0 auto;

    &:not(:last-child) {
        margin-bottom: $gutter-vertical;
    }
    
    @include clearfix;

    [class^="col-"] {
        float: left;

        &:not(:last-child) {
            margin-right: $gutter-horizontal;
        }
    }

    .col-1-of-2 {
        width: calc((100% - #{$gutter-horizontal}) / 2);
        
    }

    .col-1-of-3 {
        width: calc((100% - 2 * #{$gutter-horizontal}) / 3);
    }

    .col-2-of-3 {
        width: calc(2 * ((100% - 2 * #{$gutter-horizontal}) / 3) + #{$gutter-horizontal});
    }

    .col-1-of-4 {
        width: calc((100% - 3 * #{$gutter-horizontal}) / 4);
    }

    .col-2-of-4 {
        width: calc(2 * ((100% - 3 * #{$gutter-horizontal}) / 4) + #{$gutter-horizontal});
    }

    .col-3-of-4 {
        width: calc(3 * ((100% - 3 * #{$gutter-horizontal}) / 4) + 2 * #{$gutter-horizontal});
    }

}

.heading-secondary{
	font-size:2.7rem;
	text-transform: uppercase;
	font-weight: 700;
	background-image: linear-gradient(to right,$color-primary-light,$color-primary-dark);
    display:inline-block;
    background-clip:text;
    -webkit-background-clip:text;
    color:transparent;
    letter-spacing: 0.2rem;
    transition:all .2s;
&:hover{
	transform:skewY(2deg) skewX(15deg) scale(1.1);
	text-shadow:.5rem 1rem 2rem rgba(#000,.2);
}
}
.heading-tertiary{
	color:$color-grey-dark;
	font-size:$default-font-size;
	font-weight:700;
	text-transform: uppercase;
}
.paragraph{
	font-size: $default-font-size;
	color:grey;
	&:not(last-child){
		margin-bottom: 3rem;
	}
}
.composition{
	position: relative;
	&__photo{
		width:50%;
		box-shadow: 0 1.5rem 4rem rgba($color-black,0.4);
		border-radius: 4px;
		position:absolute;
        z-index: 10;
        transition:all .2s;
        outline-offset:1rem;

		&--p1{
			left:0;
			top:-2rem;
		}
		&--p2{
			right:3rem;
			top:2rem;
		}
		&--p3{
			left:20%;
			top:10rem;
		}
		&:hover{
			outline:0.5rem solid $color-primary-dark;
			transform:scale(1.05) translateY(-0.5rem);
			box-shadow:0 2.5rem 4rem rgba($color-black,0.5);
			z-index:20;
		}
	}
	&:hover &__photo:not(:hover){
    transform: scale(0.95);
	}

}
.u-center-text{
	text-align: center;
}
.section-about{
	background-color:$color-grey-light-1;
	padding:18rem 2rem;
    margin-top:-20vh;
}

.bg-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: .15;
    overflow: hidden;

    &__content {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.story {
    width: 70%;
    margin: 0 auto;
    box-shadow: 0 3rem 6rem rgba($color-black, .1);
    background-color: rgba($color-white, .6);
    border-radius: 3px;
    padding: 3rem 7rem;
    padding-bottom:2rem;
    font-size: $default-font-size;
    transform: skewX(-12deg);

    &__shape {
        width: 10rem;
        height: 10rem;
        float: left;
        -webkit-shape-outside: circle(50% at 50% 50%);
        shape-outside: circle(50% at 50% 50%);
        -webkit-clip-path: circle(50% at 50% 50%);
        clip-path: circle(50% at 50% 50%);
        transform: translateX(-3rem) skewX(12deg);
        position: relative;
    }

    &__img {
        height: 100%;
        transform: translateX(-4rem) scale(1.4);
        backface-visibility: hidden;
        transition: all .5s;
    }

    &__text {
        transform: skewX(12deg);
    }

    &__caption {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        color: $color-white;
        text-transform: uppercase;
        font-size: 1rem;
        text-align: center;
        opacity: 0;
        transition: all .5s;
        backface-visibility: hidden;
    }

    &:hover &__caption {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    &:hover &__img {
        transform: translateX(-4rem) scale(1);
        filter: blur(3px) brightness(80%);
    }
}
.card {

    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 35rem;
    background-color:$color-grey-light-1;
    border:none;
    width:90%;
    
    &__side {
        height: 35rem;
        transition: all .8s ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        backface-visibility: hidden;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 1.5rem 4rem rgba($color-black, .15);

        &--front {
            background-color: $color-white;
        }

        &--back {
            transform: rotateY(180deg);

            &-1 {
                background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark);
            }

            &-2 {
                background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
            }

            &-3 {
                background-image: linear-gradient(to right bottom, $color-tertiary-light, $color-tertiary-dark);
            }
        }
    }
  

    &:hover &__side--front {
        transform: rotateY(-180deg);
    }

    &:hover &__side--back {
        transform: rotateY(0);
    }


    &__picture {
        background-size: cover;
        height: 13.5rem;
        background-blend-mode: overlay;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        
        &--1 {
            background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark), 
            url(https://images.unsplash.com/photo-1501901609772-df0848060b33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
        }

        &--2 {
            background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark), 
            url(https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=950&q=80);
        }

        &--3 {
            background-image: linear-gradient(to right bottom, $color-tertiary-light, $color-tertiary-dark), 
            url(https://images.unsplash.com/photo-1530870110042-98b2cb110834?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
        }
    }

    &__heading {
        font-size: 2.8rem;
        font-weight: 300;
        text-transform: uppercase;
        text-align: right;
        color: $color-white;
        position: absolute;
        top: 9rem;
        right: 2rem;
        width: 75%;
    
    }

    &__heading-span {
        padding: 1rem 1.5rem;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;

        &--1 {
            background-image: linear-gradient(to right bottom, 
            rgba($color-secondary-light, .85), 
            rgba($color-secondary-dark, .85));
        }

        &--2 {
            background-image: linear-gradient(to right bottom, 
            rgba($color-primary-light, .85), 
            rgba($color-primary-dark, .85));
        }

        &--3 {
            background-image: linear-gradient(to right bottom, 
            rgba($color-tertiary-light, .85), 
            rgba($color-tertiary-dark, .85));
        }
    }

    &__details {
        padding: 3rem;

        ul {
            list-style: none;
            width: 80%;
            margin: 0 auto;

            li {
                text-align: center;
                font-size: 1rem;
                padding: 0.8rem;

                &:not(:last-child) {
                    border-bottom: 1px solid $color-grey-light-2;
                }
            }
        }
    }

    &__cta {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        text-align: center;
    }

    &__price-box {
        text-align: center;
        color: $color-white;
        margin-bottom: 8rem;
    }

    &__price-only {
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    &__price-value {
        font-size: 4rem;
        font-weight: 100;
    }
}
.feature-box {
    background-color: rgba($color-white, .8);
    font-size: 1rem;
    padding: 1.8rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
    transition: transform .3s;
    margin:2rem;

    &__icon {
        font-size: 5rem;
        margin-bottom: .5rem;
        display: inline-block;
        background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    &:hover {
        transform: translateY(-1.5rem) scale(1.03);
    }
}
.footer {
    background-color: $color-grey-dark-3;
    padding: 7rem 0;
    font-size: 0.9rem;
    color: $color-grey-light-1;

    &__logo-box {
        text-align: center;
        margin-bottom: 5rem;
    }

    &__logo {
        width: 7rem;
        height: auto;
    }

    &__navigation {
        border-top: 1px solid $color-grey-dark;
        padding-top: 2rem;
        display: inline-block;
    }

    &__list {
        list-style: none;
    }

    &__item {
        display: inline-block;

        &:not(:last-child) {
            margin-right: 1rem;
        }
    }

    &__link {
        &:link,
        &:visited {
            color: $color-grey-light-1;
            background-color: $color-grey-dark-3;
            text-decoration: none;
            text-transform: uppercase;
            display: inline-block;
            transition: all .2s;
        }

        &:hover,
        &:active {
            color: $color-primary;
            box-shadow: 0 1rem 2rem rgba($color-black, .4);
            transform:scale(1.1);
        }
    }

    &__copyright {
        border-top: 1px solid $color-grey-dark;
        padding-top: 2rem;
        width: 85%;
        float: right;
    }
}
.navigation {
    &__checkbox {
        display: none;
    }

    &__button {
        background-color: $color-white;
        height: 4.5rem;
        width: 4.5rem;
        position: fixed;
        top: 4rem;
        right: 4rem;
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba($color-black, .1);
        text-align: center;
        cursor: pointer;
    }

    &__background {
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 50%;
        position: fixed;
        top: 4.5rem;
        right: 4.5rem;
        background-image: radial-gradient($color-primary-light, $color-primary-dark);
        z-index: 1000;
        transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);

        //transform: scale(80);
    }

    &__nav {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1500;

        opacity: 0;
        width: 0;
        transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &__list {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        list-style: none;
        text-align: center;
        width: 100%;
    }

    &__item {
        margin: 1rem;
    }

    &__link {
        &:link,
        &:visited {
            display: inline-block;
            font-size: 2rem;
            font-weight: 300;
            padding: 0.7rem 1.5rem;
            color: $color-white;
            text-decoration: none;
            text-transform: uppercase;
            background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-white 50%);
            background-size: 220%;
            transition: all .4s;

            span {
                margin-right: 1.3rem;
                display: inline-block;
            }
        }
        
        &:hover,
        &:active {
            background-position: 100%;
            color: $color-primary;
            transform: translateX(0.8rem);
        }
    }


    //FUNCTIONALITY
    &__checkbox:checked ~ &__background {
        transform: scale(80);
    }

    &__checkbox:checked ~ &__nav {
        opacity: 1;
        width: 100%;
    }


    //ICON
    &__icon {
        position: relative;
        margin-top: 2.3rem;

        &,
        &::before,
        &::after {
            width: 2rem;
            height: 2px;
            background-color: $color-grey-dark-3;
            display: inline-block;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before { top: -.8rem; }
        &::after { top: .8rem; }
    }

    &__button:hover &__icon::before {
        top: -1rem;
    }

    &__button:hover &__icon::after {
        top: 1rem;
    }

    &__checkbox:checked + &__button &__icon {
        background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before {
        top: 0;
        transform: rotate(135deg);
    }

    &__checkbox:checked + &__button &__icon::after {
        top: 0;
        transform: rotate(-135deg);
    }
}
.popup {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba($color-black, .8);
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;

    &__content {
        @include absCenter;

        width: 80%;
        background-color: $color-white;
        box-shadow: 0 2rem 4rem rgba($color-black, .2);
        border-radius: 3px;
        display: table;
        overflow: hidden;
        opacity: 0;
        transform: translate(-50%, -50%) scale(.25);
        transition: all .5s .2s;
    }

    &__left {
        width: 33.333333%;
        display: table-cell;
    }

    &__right {
        width: 66.6666667%;
        display: table-cell;
        vertical-align: middle;
        padding: 2rem 4rem;
    }

    &__img {
        display: block;
        width: 100%;
    }

    &__text {
        font-size: 0.9rem;
        margin-bottom: 1rem;

        -moz-column-count: 2;
        -moz-column-gap: 1rem; //1em = 14px;
        -moz-column-rule: 1px solid $color-grey-light-2;

        column-count: 2;
        column-gap: 1rem; //1em = 14px;
        column-rule: 1px solid $color-grey-light-2;

        -moz-hyphens: auto;
        -ms-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
    }

    //Open states
    &:target {
        opacity: 1;
        visibility: visible;
    }

    &:target &__content {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    &__close {
        &:link,
        &:visited {
            color: $color-grey-dark;
            position: absolute;
            top: 2.5rem;
            right: 2.5rem;
            font-size: 3rem;
            text-decoration: none;
            display: inline-block;
            transition: all .2s;
            line-height: 1;
        }

        &:hover {
            color: $color-primary;
        }
    }
}
.row-cards{
    padding-top:0;
    padding-left:1.5rem;
}
.booking-heading{
    font-size:2.2rem;
}
.u-center-text { text-align: center; }

.u-margin-bottom-small { margin-bottom: 1.5rem; }
.u-margin-bottom-medium { margin-bottom: 4rem; }
.u-margin-bottom-big { margin-bottom: 8rem; }

.u-margin-top-big { margin-top: 8rem; }
.u-margin-top-huge { margin-top: 10rem; }
.u-changed-width-button{width:80%;}
.u-add-featuresbg{
    background-color:#ffffdd;
}
</style>