<template>
  <div class="main-container">
    <div class="about-us">
        <h1 class="heading">
          ABOUT US
        </h1>
        <h4 class="content">
          THIS IS THE PROJECT BUILT BY TEAM NUCLEUS COMPRISING OF ANUREET , MAYANK, ROHIT , SHANTANU AND SUJAL. WE BELIEVE IN PERFECTION AND OUR FIRST PRIORITY IS OUR CUSTOMER.
        </h4>
        <router-link to="./" class="btn btn--blue btn--animated my">GO BACK</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
    };
  }};

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
.about-us{
	width:35%;
	background-color:white;
	@include absCenter;
	height:28rem;
	padding:1rem;
	border-radius:1.5rem;
	box-shadow: 0 1.5rem 4rem rgba($color-black, .2);
	opacity:0.7;
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
	margin-left:9rem;
	margin-top:2rem;
}
</style>