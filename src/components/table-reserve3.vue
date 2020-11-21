<template><div>
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
          <b-form class="form-box px-3">
            <button type="button" class="btn btn-secondary">Show Food Menu</button>
            <h6 class="ques">Do You want to pre-order food as well?</h6>
            <label>&nbsp;&nbsp;<input type="radio" name="optradio" v-model="x" value="yes">&nbsp;&nbsp;Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <label>&nbsp;&nbsp;<input type="radio" name="optradio" v-model="x" value="no">&nbsp;&nbsp;No</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <br>
            <button type="button" v-show="x==='yes'" class="btn btn-secondary">Select Food items</button>
            <div class="mb-3">
              <b-button type="submit" class="btn btn-block text-uppercase" @click.prevent="Book">
                Reserve Table
              </b-button>
            </div>
          </b-form>
        </div>
 </div>
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
import axios from "axios";
import { mapGetters } from "vuex";
import {mapState} from  'vuex'
export default {
components: {
Navbar
	},
  data(){
    return {
      x:'no'
    };
  },
  methods:{
    Book(){
      const helper =this;
          try {
              axios.post('/tablereserve',{
                uid:this.user.uid,
                restaurant_name:this.restaurant.restaurantName,
                Adults:this.restaurant.people,
                Time:this.restaurant.time,
                Duration:this.restaurant.duration,
            }, {
                headers: {
                        authorization: this.user.ya,
                        },
                    })
                  helper.error ="Request Submitted Successfully";
                  helper.restaurant=null;
            } catch (error) {
            this.error = error.message
          }
        
    }
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapState(["restaurant"]),
  },
}
</script>

<style scoped>
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
</style>