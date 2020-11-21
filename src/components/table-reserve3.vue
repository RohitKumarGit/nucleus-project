<template>
  <div>
	<navbar/>
<div id="maindiv">
        <div class="container">
        <div class="row">
                <div class="col-lg-4 d-none d-lg-block left-div">
               <!--  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="../assets/resort3.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/resort5.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/resort6.jpg" alt="Third slide">
                        </div>
                    </div>
                    </div> -->
                    <img src="../assets/table.jpg">
                </div>
                <div class="col-lg-8 right-div">
                    <div class="outer-login">
                             <div class="row px-3">
                                <div class="col-sm-9 col-md-9 col-lg-10 card flex-row mx-auto px-0 form">
<div class="card-body">
          <h3 class="title text-center mt-4">
            Welcome to Desi Addicts
          </h3>
          <form class="form-box px-3">
            <a href="#popup" class="btn btn-secondary" id="food-menu-button">Show Food Menu</a>
            <h6 class="ques">Do You want to pre-order food as well?</h6>
            <label>&nbsp;&nbsp;<input type="radio" name="optradio" v-model="x" value="yes">&nbsp;&nbsp;Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <label>&nbsp;&nbsp;<input type="radio" name="optradio" v-model="x" value="no">&nbsp;&nbsp;No</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <br>
            <button type="button" v-show="x==='yes'" class="btn btn-secondary">Select Food items</button>
            <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase">
                Reserve Table
              </button>
            </div>
          </form>
        </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div class="popup" id="popup">
   <div class="popup__content">
    <div class="container my-container">
      <div class="row my-row">
        <div class="col-lg-6 d-none d-lg-block my-col left-popup">
        </div>
        <div class="col-lg-6 col-md-12 my-col right-popup">
        <div class="menu-card">
          <h1 class="menu-heading">FOOD MENU</h1>
          <h3 class="menu-card-content">MAIN DISHES</h3>
          <h3 class="menu-card-content">SALADS</h3>
          <h3 class="menu-card-content">DESSERTS</h3>
          <h3 class="menu-card-content">DRINKS</h3>
        </div>
      <a href="#food-menu-button" class="popup__close">&times;</a>
    </div>
      </div>
    </div>
   </div>
 </div>
 </div>
 </div>
</template>

<script>
import Navbar from "./navbar.vue";
export default {
components: {
Navbar
	},
  data(){
    return {
      x:'no'
    };
  }
}
</script>

<style lang="scss" scoped>
.ques
{
  margin-top: 1.5rem;
}
.btn-secondary
{
  background-color: #006a71;
  border-radius:1.75rem;
  margin-top:1rem;
}
.card-body{
max-height: 40rem;
max-width:30rem;
padding-top: 6rem;

}

.title{
  margin-bottom: 3rem;
}

.form-input{
  position: relative;
}

.form-input input{
  width: 100%;
  height: 2.8rem;
  padding-left: 3rem;
  margin-bottom: 1.4rem;
  box-sizing: border-box;
  box-shadow: none;
  border: 1px solid #00000020;
  outline: none;
  background: transparent;
}

.form-input span{
  position: absolute;
  top: 0.7rem;
  padding-left: 1.1rem;
  color:  #00828b;
}

.form-input input::placeholder{
  color: black;
  padding-left: 0px;
}

.form-input input:focus, .form-input input:valid{
  border: 2px solid  #00828b;
}

.form-input input:focus::placeholder{
  color: #454b69;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before{
  background-color:  #00828b !important;
  border: 0px;
}

.form-box button[type="submit"]{
  margin-top: 0.7rem;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  background: #006a71;
  color: #fff !important;
  font-size: 90%;
  font-weight: bold;
  letter-spacing: .1rem;
  transition: 0.5s;
  padding: 12px;
  margin-top: 4rem;
}

.form-box button[type="submit"]:hover{
  background: #0069d9;
}

.forget-link, .register-link{
  color: #006a71;
  font-weight: bold;
}

.forget-link:hover, .register-link:hover{
  color: #0069d9;
  text-decoration: none;
}


.form-box .btn-social{
  color: white !important;
  border: 0;
  font-weight: bold;
}

#maindiv{ 
    display:flex;
    background: #cbeaed;
    position:fixed;
    height:100%;
    width:100%;
    justify-content: center;
    align-items: center;
    padding-left:1.5rem;
    padding-right:1.5rem;
    padding-bottom: 3.3rem;
}
.container
{
    background:#00828b;
}
.carousel
{
    max-height:38rem;
}

img{
     max-height:38rem;
}
.container{ 
  background:white;
  box-shadow: 0.5rem 0.5rem 1.2rem #002225;
}
.card{
  overflow: hidden;
  border: 0 !important;
  background: transparent;
}
.left-div
{
    padding:0rem;
}
.right-div
{
    background-color:#ffffdd;
}
.form
{
    display:flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
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
        width:80%;
        height:40rem;
        background-color: $color-white;
        box-shadow: 0 2rem 4rem rgba($color-black, .2);
        border-radius: 3px;
        display: table;
        overflow: hidden;
        opacity: 0;
        transform: translate(-50%, -50%) scale(.25);
        transition: all .5s .2s;
          background-image:linear-gradient(to right bottom,#cc2b5e ,#753a88);
          padding:0.5rem;
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
            top: 1rem;
            right: 1rem;
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
.my-container
{
  height:90vh;
  margin:2rem auto;
  border-radius:5px;
  overflow:hidden;
  padding-left:1.1rem;;
  background-image:linear-gradient(to right bottom,#ddd6f3,#faaca8);
}
.my-row
{
  width:100%;
  height:100%;
}
.left-popup{
  background-image:url(../assets/food.jpg);
  background-size:cover;
  background-position:center;
  border-radius:5px;
  box-shadow: 0 1rem 2rem rgba($color-black,.2);
}
.menu-card{
  height:95%;
  opacity:0.7;
  background-color:white;
  margin:1rem 0.75rem;
  margin-left:1.2rem;
  border-radius:5px;
  box-shadow: 1rem 1rem 4rem #002225;
  overflow-y:auto;
}
.my-col{
padding:0.2rem;;
height:100%;
}
.menu-heading
{
  margin-left:8rem;
}
.menu-card-content{
  margin-left:1rem;
}
</style>