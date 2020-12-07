<template>
	<div class="main-container" id="roomser">
<navbar/>
<div class="popup" id="popup2">
   <div class="popup__content food-order">
    <div class="food-order-heading">
      <h1>ORDER FOOD</h1>
    </div>
    <a href="#roomser" class="popup__close">&times;</a>
    <div class="container food-order-container">
      <div class="row food-order-pane">
        <div class="col-lg-6 col-md-12 u-add-height u-made-scroll">
        <h3 class="food-order-pane-heading">FOOD ITEMS</h3>
        <ul class="food-order-items" v-if="menu">
            <li class="custom" v-for="rest in menu" :key="rest.name" >
              <h3>{{rest.name}}</h3>
              <ul v-for="item in rest.menu_items" :key="item._id">
                <li>
              {{item.name}}&nbsp;{{item.price}}<br> {{item.category.cuisine}}&nbsp;{{item.category.FoodPreferences}}
              <div class="hover-text">
                Allergens : <span v-for="allergy in item.category.possibleAllergics" :key="allergy">{{allergy}}&nbsp;</span>
              </div>
              <b-form-spinbutton class="my-spin-button" min=0 @change="Insert($event,item)">
              </b-form-spinbutton>
                </li>
                </ul>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-12 u-add-height u-made-scroll">
          <h3 class="food-order-pane-heading">CART</h3>
          <ul class="food-order-items" v-if="order">
            <li class="custom" v-for="item in order" :key="item._id" >
              {{item.name}}&nbsp;<br/> {{item.quantity}}&nbsp;
            </li>
          </ul>
          <div>
            <h6 class="ques">
                        Do You want to pre-order food as well?
                      </h6>
                      <label
                        >&nbsp;&nbsp;<input
                          type="radio"
                          name="optradio"
                          v-model="pre"
                          value=true
                          selected
                        />&nbsp;&nbsp;Yes</label
                      >&nbsp;&nbsp;&nbsp;&nbsp;
                      <label
                        >&nbsp;&nbsp;<input
                          type="radio"
                          name="optradio"
                          v-model="pre"
                          value=Boolean(false)
                        />&nbsp;&nbsp;No</label
                      >&nbsp;&nbsp;&nbsp;&nbsp;
                      <br />
                      <div  v-if="pre=='true'">
                        <input type="number" placeholder="Select time in 24hr format" v-model="num"> 
                        <br/>
                        <label >Select time in 24 hr format</label>
                      </div>
                      <div>
                         Enter the room number 
                         &nbsp;<input type="number" v-model="room">
                      </div>
                      <br/>
          <a class="btn btn--blue order-now-btn" href="#" @click="Order">
            Order Food&rarr;
          </a>
          </div>
      </div>
      </div>
    </div>
   </div>
 </div>
<div class="container">
    <div class="heading">
      <h1 class="room-service-heading">CHOOSE ROOM SERVICE</h1>
    </div>
    <div class="row">
      <div class="card">
        <div class="card-header">
          <h1>Laundry</h1>
        </div>
        <div class="card-body">
          <p>
            Best in class laundry service for our customers
          </p>
          <a href="#" class="myButton" v-on:click="openlaundry">Open</a>
        </div>
        <div class="laundry-div" v-if="laundry">
              <div class="form-input">
              <span><i class="fas fa-tshirt"></i></span>
              <input type="number" name="person" placeholder="No. of clothes" min="1" max="30" required>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase">
                Request
              </button>
            </div>
      </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h1>Cleaning</h1>
        </div>
        <div class="card-body">
          <p>
            Why not !! Hygeine is our main priority
          </p>
          <a href="#" class="myButton" v-on:click="openclean">Open</a>
      </div>
          <div class="clean-div" v-if="clean">
              <div class="form-input">
                <span><i class="far fa-clock"></i></span>
              <input placeholder="Time when free" class="textbox-n" type="text" onfocus="(this.type='time')" onfocusout="(this.type='text')" id="time" required>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase">
                Request
              </button>
            </div>
      </div>
        </div>
      <div class="card">
        <div class="card-header">
          <h1>Food</h1>
        </div>
        <div class="card-body">
          <p>
            Hot, fresh and hygienic food at your doorstep
          </p>
          <a href="#" class="myButton" v-on:click="openfood">Open</a>
        </div>
        <div class="food-div" v-if="food">
        <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase" onclick="window.location.href = '#popup2';">
               Order Food
              </button>
              <p v-if="error"> {{error}}</p>
            </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h1>Others</h1>
        </div>
        <div class="card-body">
          <p>
            Custom services. We will fulfill your request soon 
          </p>
          <a href="#" class="myButton" v-on:click="openothers">Open</a>
        </div>
        <div class="others-div" v-if="others">
        <div class="form-input">
             <textarea placeholder="Enter the description of your service"></textarea>
        </div>
         <div class="mb-3">
              <b-button type="submit" class="btn btn-block text-uppercase">
                Request
              </b-button>
            </div>
        </div>
        
      </div>
      
    </div>
    </div>
</div>
</template>
<script>
  import Navbar from "./navbar.vue";
  import axios from "axios";
import { mapGetters } from "vuex";
export default {
	components: {
Navbar
	},
  data(){
    return {
    laundry:false,
    clean:false,
    food:false,
    others:false,
    menu:"",
    order:[],
    room:0,
    error:"",
    num:0,
    pre:false
    };
  },
  computed: {
    ...mapGetters(["user"]),
    Orderfinal() {
      var Orderfinal = this.order.map((product) => {
        if (product.quantity != 0) {
          return {
            name: product.name,
            count: product.quantity,
            price:product.price,
          };
        }
      });
      return Orderfinal;
    },
  },
  methods:
  {
  openlaundry:function()
  {
  this.laundry=!this.laundry;
  this.clean=false;
  this.food=false;
  this.others=false;
  },
    openclean:function()
  {
  this.clean=!this.clean;
   this.laundry=false;
  this.food=false;
  this.others=false;
  },
    openfood:function()
  {
  this.food=!this.food;
   this.clean=false;
  this.laundry=false;
  this.others=false;
  const helper =this;
      axios.get("/allmenu", {
          headers: {
            authorization: this.user.ya,
          },
        })
        .then(function (response) {
        console.log(response);
        helper.menu = response.data;
        console.log(helper.menu);
        });
  },
    openothers:function()
  {
  this.others=!this.others;
   this.clean=false;
  this.food=false;
  this.laundry=false;
  },
  Insert(event, item) {
      this.val = event;
      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i].id == item._id) {
          this.order[i].quantity = this.val;
          this.val = 0;
          break;
        }
      }
      if (this.val != 0) {
        this.order.push({ quantity: this.val, id: item._id, name: item.name , price:item.price}); //How to add object to an existing array
      }
      console.log(this.order);
    },
    Order(){
      const helper = this;
      console.log(this.Orderfinal);
      if (this.Orderfinal[0] !== undefined) {
        try {
          console.log("1");
          if(helper.pre==false)
          {
            helper.num=0;
          }
          console.log(helper);
          axios.post(
            "/roomservice",
            {
              uid: helper.user.uid,
              items: helper.Orderfinal,
              room:helper.room,
              preorder: helper.pre,
              date:helper.num,
            },
            {
              headers: {
                authorization: this.user.ya,
              },
            }
          );
        } catch (error) {
          helper.error = error.message;
          console.log(error);
        }
        console.log("2");
        helper.Orderfinal=[];
        helper.order=[];
        this.error = "Your booking is done successfully";
      } else {
        this.error = "No items were selected";
        helper.Orderfinal=[];
        helper.order=[];
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 90%;
  margin: 50px auto;
}
.heading {
  text-align: center;
  font-size: 30px;
  margin-bottom: 50px;
}

.row {
  justify-content: space-around;
  align-items: center;

}

.card {
  width: 20%;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  transition: 0.3s;
}

.card-header {
  text-align: center;
  padding: 50px 10px;
  background-image:url("../assets/room.webp");
  color: #fff;
}

.card-body {
  padding: 30px 20px;
  text-align: center;
  font-size: 18px;
}

.card-body{
  display: block;
  color: #fff;
  text-align: center;
  background: linear-gradient(to right, #20b2aa, #cccc00);
  margin-top: 30px;
  text-decoration: none;
  padding: 10px 5px;
  margin:0;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 1000px) {
  .card {
    width: 40%;
  }
}

@media screen and (max-width: 620px) {
  .container {
    width: 100%;
  }

  .heading {
    padding: 20px;
    font-size: 20px;
  }

  .card {
    width: 80%;
  }
}
.room-service-heading
{
	color:	#585858;
}
.laundry-div 
{
	margin-top: 2rem;
}
.clean-div
{
	margin-top: 2rem;
}
.others-div
{
	margin-top: 2rem;
}

.form-input{
  position: relative;
  width:12rem;
  margin-left: 1rem;
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
button[type="submit"]{
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
  width: 10rem;
  margin-left: 2rem;
}

button[type="submit"]:hover{
  background: #0069d9;
}
.myButton {
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	background-color:#f9f9f9;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
}
.myButton:hover {
	background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color:#e9e9e9;
}
.myButton:active {
	position:relative;
	top:1px;
}
.popup {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba($color-black, .8);
    z-index:9999;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    overflow-y:auto;   

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
        overflow-y:auto;   
    }

    &__text {
        font-size: 0.9rem;
        margin-bottom: 1rem;

        -moz-column-count: 2;
        -moz-column-gap: 1rem; 
        -moz-column-rule: 1px solid $color-grey-light-2;

        column-count: 2;
        column-gap: 1rem; 
        column-rule: 1px solid $color-grey-light-2;

        -moz-hyphens: auto;
        -ms-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
    }


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
  background-image:url(../assets/resort1.jpg);
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
.menu-popup
{
  background-image:linear-gradient(to right bottom,#cc2b5e ,#753a88);
          padding:0.5rem;
}

.food-order
{
  background-image:url(../assets/foodorder.jpg);
  background-size:cover;
  filter: blur(0.1px);
  &-heading
 {
  color:white;
  text-shadow: 1px 1px #fe4902, 
                2px 2px #fe4902, 
                3px 3px #fe4902;
  width:28%;
  margin:1rem auto;
  &:hover {
   position: relative; 
   top: -3px; 
   left: -3px; 
   text-shadow: 1px 1px #fe4902, 
                2px 2px #fe4902, 
                3px 3px #fe4902, 
                4px 4px #fe4902, 
                5px 5px #fe4902, 
                6px 6px #fe4902;
}
 }
 &-pane
 {
  &-heading
  {
    color:#2a2a2a;
    text-shadow: 1px 1px #fe4902, 
                2px 2px #fe4902, 
                3px 3px #fe4902;
    font-size:2.2rem;

  }
 }
 &-container
 {
  background-color:white;
  opacity:0.85;
  border-radius:5px;
 }
 &-items{
  text-transform:uppercase;
  list-style:square outside none;

 }
 &-types{
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);
 }
}
.u-add-height{
  height:30rem;
}
.u-made-scroll{
  overflow-y:auto;
}
.u-made-scroll::-webkit-scrollbar {
    width: 12px;
}

.u-made-scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

.u-made-scroll::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
.custom
{
  font-weight:bold;
  font-style:italic;
  line-height:2;
  &:hover>.hover-text{
   display:block;
   position:absolute;
   left:10rem;
  }
}
.my-spin-button{
  width:20%;
  font-weight:bold;
  background-color:lightgrey;
  height:2rem;
}
.hover-text
{
  display:none;
  font-size:0.8rem;
  width:50%;
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

        border: none;
        cursor: pointer;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black,.2);
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
        background-color: #FF9900;
        margin-top:1rem;
        font-size:1rem;
        font-weight:bold;
        color:black;
        &::after {
            background-color: #FF9900;
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
.order-now-btn{
  position:absolute;
  bottom:1rem;
  left:10rem;
}
</style>