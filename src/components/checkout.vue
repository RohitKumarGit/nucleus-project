<template>
  <div>
    <navbar/>
    <div class="checkout-main">
        <div class="container checkout-form">
       <div class="row my-row">
           <div class="col-lg-6 col-md-12 col-sm-12 my-col">
             <h1 class="heading-secondary">Receipt form</h1>
             <h4 class="fields">ROOM NO.</h4>
             <h4 class="fields">ROOM CHARGES</h4>
             <h4 class="fields">SERVICES</h4>
             <h4 class="fields">GST</h4>
             <h2 class="fields">TOTAL</h2>
             <div class="col-1-of-2"><a href="#" class="btn btn--blue btn--animated"><strong>PAY SECURELY</strong></a></div>
           </div>
            <div class="col-6 d-none d-lg-block flower my-col">
            
           </div>
        </div>
        
        </div>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
export default {
		components: {
navbar
	},
  data(){
    return {
    };
  }
}
</script>

<style lang="scss" scoped>
.checkout-main
{
	height:91.75vh;
	background-image:linear-gradient(to right bottom,rgba(#FFFFDD,0.3),rgba(#FFDAB9,0.5)) , url(../assets/hero.jpg);
	background-size: cover;
	background-position: top;
	padding-top:1.5rem;
	padding-left:1rem;
	padding-right:1rem;
}
.checkout-form
{
  height:40rem;
  background-image:linear-gradient(to right bottom,rgba(#FFF4D1,0.8),rgba(#FFFDD0,0.8));
  border-radius:1.75rem;
  overflow:hidden;

}

.flower
{
	background-image:url(../assets/bouquet.jpg);
	background-size:cover;
	border-radius:1.75rem;
	box-shadow: 0 1rem 2rem rgba($color-black,.2);
}
.my-row
{
	height:40rem;
	padding:1rem;
}
.heading-secondary{
	font-size:2.7rem;
	text-transform: uppercase;
	font-weight: 700;
	color:#006a71;
    letter-spacing: 0.2rem;
    margin-top:1rem;
    margin-left:1.5rem;
}
.fields
{
	margin:1.7rem;
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
        margin-top:4rem;
        margin-left:6rem;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 1.5rem rgba($color-black,.2);
        color:white;

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
        background-color: #006a71;
        color: $color-white;

        &::after {
            background-color: #006a71;
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
.my-col
{
	padding:1rem;
}
</style>