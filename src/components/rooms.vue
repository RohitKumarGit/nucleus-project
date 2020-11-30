<template>
  <div class="main-container">
    <div class="roomdetails">
        <h1 class="heading">
          POPULAR ROOMS
        </h1>
        <div class="container">
                       <div class="row">
                          <div class="col-3 col-md-3 col-sm-6"><p> <strong>Queen:</strong> <br>A room with a queen-sized bed. May be occupied by one or more people.

The room size or area of Queen Rooms are generally between 32 m² to 50 m².</p>
<img src="../assets/queen.webp" class="popup__pics"></div>
                          <div class="col-3 col-md-3 col-sm-6"><p><strong>King: </strong><br>A room with a king-sized bed. May be occupied by one or more people.

The room size or area of King Rooms are generally between 32 m² to 50 m².</p>
<img src="../assets/king.webp" class="popup__pics"></div>
                         <div class="col-3 col-md-3 col-sm-6">
                             
                             <p><strong>
                                     Executive Suite:
                                 </strong>
                                 <br>
                                  A parlour or living room connected with to one or more bedrooms. (A room with one or more bedrooms and a separate living space.)

The room size or area of Suite rooms are generally between 70 m² to 100 m².</p>
<img src="../assets/executive.webp" class="popup__pics third-pic">
                         </div>

                         <div class="col-3 col-md-3 col-sm-6">
                             <p>
                                 <strong>
                                     Cabana:
                                 </strong>
                                 <br>
                                  This type of room is always adjoining to the swimming pool or have a private pool attached to the room.

The room size or area of Cabana Room Types are generally between 30 m² to 45 m².
                             </p>
                             <img src="../assets/cabana.webp" class="popup__pics fourth-pic">
                         </div>
                       </div>
                     </div>
        <a href="./" class="btn btn--blue btn--animated my">GO BACK</a>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
    }
  }
};

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
.roomdetails{
	width:95vw;
	background-color:#fffdd0;
	@include absCenter;
	height:90vh;
	padding:1rem;
	border-radius:1.5rem;
	box-shadow: 0 1.5rem 4rem rgba($color-black, .2);
    overflow-y:auto;    
}
.heading{
	color:#006a71;
	margin: 1.8rem 1.5rem;
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
	margin-left:3rem;
	margin-top:2rem;
}
.popup__pics{
   width:95%;
   border-radius:4px; 
}
</style>