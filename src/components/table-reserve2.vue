<template>
<div>
	<navbar/>
    <div id="maindiv">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 d-none d-lg-block left-div">
            <img src="../assets/table.jpg">
          </div>
          <div class="col-lg-8 right-div">
          <div class="outer-login">
            <div class="row px-3">
              <div class="col-sm-9 col-md-9 col-lg-10 card flex-row mx-auto px-0 form">
                <div class="card-body">
                  <h3 class="title text-center mt-4">
                    Table Reserve
                  </h3>
                  <h5 class="select">Select your favourite Restaurant to dine from : </h5>
                  <b-form class="form-box px-3">
                  <div class="form-input">
                    <select name="restaurant"  class="form-control" v-model="restaurantName" placeholder="Select restaurant">
                      <option value="Hidden Mist">Hidden Mist</option>
                      <option value="Green Papaya">Green Papaya</option>
                    </select>
                  </div>
                  </b-form>
                </div>
                <p v-if="error">{{error}}</p>
                <div class="mb-3">
                  <b-button type="submit" class="btn btn-block text-uppercase" @click="submit">
                    Proceed
                  </b-button>
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
// import axios from "axios";
import { mapGetters } from "vuex";
export default {
components: {
Navbar
	},
  data(){
    return {
      restaurantName:"",
      location:null,
      error:null,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods:{
    submit(){
      const helper=this;
      // if(this.restaurantName)
      // { const helper=this.restaurantName;
      // const helper2=this;
      //   console.log(this.restaurantName);
      //   axios.get("/location", {
      //     headers: {
      //       authorization: this.user.ya,
      //     },
      //     params: {
      //       name: this.restaurantName,
      //     },
      //   })
      //   .then(function (response) {
      //   console.log(response);
      //   var location=response.data.location;
      //   console.log(helper2);
      //   helper2.$store.commit("restaurantStore",{
      //    helper,
      //    location,
      //  })
      //  helper2.$router.push("/table2");
      //   })
      // }
      // else{
      //   this.error="Please select a restaurant";
      // }
      const {restaurantName} = this;
       this.$store.commit("restaurantStore",{
         restaurantName
       })
       console.log(helper.restaurantName);
       helper.$router.push('/table2') 
    }
  }
}
</script>

<style scoped>
.dropdown-toggle
{
  background-color: #006a71;
  margin-bottom: 3rem;
}
.card-body{
max-height: 40rem;
max-width:30rem;
padding-top: 6rem;

}

.title{
  margin-bottom: 5rem;
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
.select{
  margin-bottom: 2rem;
  margin-left: 1rem;
  color:grey;
}
</style>