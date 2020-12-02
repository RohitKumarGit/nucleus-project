<template>
  <div class="main-container">
    <div class="gallery">
        <h1 class="heading">
          GALLERY
        </h1>
        <div id="carouselExampleIndicators" class="carousel slide carousel-style w-100" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block" src="https://travelwithbender.com/files/6614/2467/6889/samabe_IMG_8620-2.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block" src="../assets/hero.jpg" alt="Third slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Captivating view</h5>
                            <p>Nostalagia</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block" src="https://i.pinimg.com/600x315/5e/51/0c/5e510c69169756774ee36eea82da3a1a.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
            </div>
        <router-link to="./" class="btn btn--blue btn--animated my">GO BACK</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style scoped lang="scss">
.main-container
{
   height:100vh;
   background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.7),
        rgba($color-primary-dark, 0.7)),
    url(../assets/nat-4.jpg);
}
.gallery{
	width:50%;
	background-color:#FFFDD0;
	@include absCenter;
	height:38rem;
	padding:1rem;
	border-radius:1.5rem;
	box-shadow: 0 1.5rem 4rem rgba($color-black, .2);
}
.heading{
	color:#006a71;
	margin-bottom:2rem;
}
.content{
	line-height:1.8;
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
.my{
	margin-left:16rem;
	margin-top:1.5rem;
}
b-carousel
{
    height:50rem;
}
.carousel-item {
height: 400px;
overflow: hidden;
width: 100%;
border-radius:1rem;
}
.carousel-item img {
width: 100%;
border-radius:1rem;
}
</style>