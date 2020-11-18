<template>
  <section class="section-book" id="section-book">
                <div class="row">
                    <div class="book">
                        <div class="book__form">
                            <form action="#" class="form">
                                <div class="u-margin-bottom-small">
                                    <h2 class="heading-secondary booking-heading">
                                        Start booking now
                                    </h2>
                                </div>

                                <div class="form__group">
                                    <input type="email" class="form__input" placeholder="Email address" id="email" required>
                                    <label for="email" class="form__label">Email address</label>
                                </div>
                             
                                    <div class="u-center-text">
                    <a href="#popup" class="btn-text">See all rooms &rarr;</a>
                </div>
                               <div class="row roomsrow">
                                <div class="form__group col-1-of-4">
                                    <input type="number" class="form__input" placeholder="Number of people" id="number" required min="1" max="3" v-model="rooms">
                                </div>
                                <div class="form__group roomtype col-1-of-4">
                                    <select class="room-types" v-if="rooms==1||rooms==2||rooms==3" required>
                                        <option value="0">R-1</option>
                                        <option value="1">Queen</option>
                                        <option value="2">King</option>
                                        <option value="3">Executive Suite</option>
                                        <option value="4">Cabana</option>
                                    </select>
                                </div>
                                <div class="form__group roomtype col-1-of-4">
                                    <select class="room-types" v-if="rooms==2||rooms==3" required>
                                        <option value="0">R-2</option>
                                        <option value="1">Queen</option>
                                        <option value="2">King</option>
                                        <option value="3">Executive Suite</option>
                                        <option value="4">Cabana</option>
                                    </select>
                                </div>
                                <div class="form__group roomtype col-1-of-4 thirdroom">
                                    <select class="room-types" v-if="rooms==3" required>
                                        <option value="0">R-3</option>
                                        <option value="1">Queen</option>
                                        <option value="2">King</option>
                                        <option value="3">Executive Suite</option>
                                        <option value="4">Cabana</option>
                                    </select>
                                </div>
</div>

                                <div class="form__group numberpeople">
                                    <input type="number" class="form__input" placeholder="Number of people" id="number" required min="1" max="20">
                                    <label for="number" class="form__label">Number of people</label>
                                </div>
                                <div class="form__group">
                                    <button class="btn btn--blue">Next step &rarr;</button>
                                </div>
                                 <div class="popup" id="popup">
            <div class="popup__content">
                    <a href="#section-book" class="popup__close">&times;</a>
                    <div class="container">
                       <div class="row">
                          <div class="col-1-of-4 adjust"><p> <strong>Queen:</strong> <br>A room with a queen-sized bed. May be occupied by one or more people.

The room size or area of Queen Rooms are generally between 32 m² to 50 m².</p>
<img src="../assets/queen.webp" class="popup__pics"></div>
                          <div class="col-1-of-4 adjust"><p><strong>King: </strong><br>A room with a king-sized bed. May be occupied by one or more people.

The room size or area of King Rooms are generally between 32 m² to 50 m².</p>
<img src="../assets/king.webp" class="popup__pics"></div>
                         <div class="col-1-of-4 adjust">
                             
                             <p><strong>
                                     Executive Suite:
                                 </strong>
                                 <br>
                                  A parlour or living room connected with to one or more bedrooms. (A room with one or more bedrooms and a separate living space.)

The room size or area of Suite rooms are generally between 70 m² to 100 m².</p>
<img src="../assets/executive.webp" class="popup__pics third-pic">
                         </div>

                         <div class="col-1-of-4 adjust">
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
            </div>
        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
</template>

<script>

export default {
  data(){
    return {
        rooms:1
    };
  }
}
</script>

<style lang="scss" scoped>
.section-book {
    padding: 4.5rem 0;
    background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
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
.booking-heading{
    font-size:2.2rem;
}

.row {
    max-width: $grid-width;
    margin: 0 auto;

    &:not(:last-child) {
        margin-bottom: 0;
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
    -webkit-background-clip:text;
    color:transparent;
    letter-spacing: 0.2rem;
    transition:all .2s;
&:hover{
    transform:skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow:.5rem 1rem 2rem rgba(#000,.2);
}
}

.form {
    &__group:not(:last-child) {
        margin-bottom: 2rem;
        margin-top:1rem;
        padding:0;
    }

    &__input {
        font-size: 1rem;
        font-family: inherit;
        color: inherit;
        padding: 1rem 1.5rem;
        border-radius: 2px;
        background-color: rbga($color-white, .5);
        border: none;
        border-bottom: 3px solid transparent;
        width: 90%;
        display: block;
        transition: all .3s;

        &:focus {
            outline: none;
            box-shadow: 0 1rem 2rem rgba($color-black, .1);
            border-bottom: 3px solid $color-primary-dark;
        }

        &:focus:invalid {
            border-bottom: 3px solid $color-secondary-dark;
        }

        &::-webkit-input-placeholder {
            color: $color-grey-dark-2;
        }
    }


    &__label {
        font-size: 1rem;
        font-weight: 700;
        margin-left: 1.5rem;
        margin-top: .5rem;
        display: block;
        transition: all .3s;
    }

    &__input:placeholder-shown + &__label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
    }


    &__radio-group {
        width: 45%;
        display: inline-block;
    }

    &__radio-input {
        display: none;
    }
    
    &__radio-label {
        font-size: $default-font-size;
        cursor: pointer;
        position: relative;
        padding-left: 2.5rem;
    }

    &__radio-button {
        height: 2rem;
        width: 2rem;
        border: 5px solid $color-primary-dark;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0.25rem;

        &::after {
            content: "";
            display: block;
            height: 1.3rem;
            width: 1.3rem;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: $color-primary-dark;
            opacity: 0;
            transition: opacity .2s;
        }
    }

    &__radio-input:checked ~ &__radio-label &__radio-button::after {
        opacity: 1;
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
        margin-top:-2rem;

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
.room-types{
    border:none;
    padding:1rem;
    color:$color-grey-dark-2;
    width:35%;
    &:focus{
        outline:none;
    }
}
.btn-text {
    &:link,
    &:visited {
        position:absolute;
        top:20rem;
        left:14.5rem;
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
        border-radius:7px;
    }

    &:active {
        box-shadow: 0 .5rem 1rem rgba($color-black, .15);
        transform: translateY(0);
    }
}
.booking-heading{
    font-size:2.2rem;
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

        width: 85%;
        height: 80%;
        background-color: $color-white;
        box-shadow: 0 2rem 4rem rgba($color-black, .2);
        border-radius: 3px;
        display: table;
        overflow: hidden;
        opacity: 0;
        transform: translate(-50%, -50%) scale(.25);
        transition: all .5s .2s;
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
    &__pics{
        height:40%;
        margin-top:4rem;
        border-radius:6px;
    }
}
.adjust{
    padding:2rem;
    margin-top:2rem;
}
.third-pic{
    margin-top:1rem;
}
.fourth-pic{
    margin-top:2.5rem;
}
.roomsrow{
    padding:0;
}
.room-types{
    width:90%;
    height:3.7rem;
}
.thirdroom
{
    margin-top:1rem;
}
.numberpeople{
    postion:absolute;
    top:40rem;
    left:20rem;
}
.u-center-text { text-align: center; }

.u-margin-bottom-small { margin-bottom: 1.5rem; }
.u-margin-bottom-medium { margin-bottom: 4rem; }
.u-margin-bottom-big { margin-bottom: 8rem; }
</style>