<template>
	<div class="main-container">
<navbar/>
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
            Hot, fresh and hygeinic food at your doorstep
          </p>
          <a href="#" class="myButton" v-on:click="openfood">Open</a>
        </div>
        <div class="food-div" v-if="food">
        <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase">
               Order Food
              </button>
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
              <button type="submit" class="btn btn-block text-uppercase">
                Request
              </button>
            </div>
        </div>
      </div>
    </div></div>
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
    laundry:false,
    clean:false,
    food:false,
    others:false
    };
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
  },
    openothers:function()
  {
  this.others=!this.others;
   this.clean=false;
  this.food=false;
  this.laundry=false;
  }
  }
}
</script>

<style scoped>
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
/*.card2 {
  width: 20%;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  transition: 0.3s;
}
.card3 {
  width: 20%;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  transition: 0.3s;
}
.card4 {
  width: 20%;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  transition: 0.3s;
}*/

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

</style>