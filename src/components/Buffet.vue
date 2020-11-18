<template>
<div>
  <Navbar></Navbar>
  <div class="basic">
   <div id="wrapper">
    <div id="container">
      <div class="row">
      <div class="information-column col-12 col-md-5">
        <div class="content">

          <h1>Choose a slot that suits you the best</h1>
          <p>Avoid the Hassle in Buffets</p>
        </div>
      </div>
      
      <div class="form-column col-12 col-md-7">
        <div>
          <label name="restaurant" class="chooseRest">Select your favorite restaurant</label>
  <select name="restaurant" @change="onChange($event)" class="form-control" v-model="restaurant" >
   <option value="Hidden Mist">Hidden Mist</option>
   <option value="Greem Papaya">Green Papaya</option>
</select>
</div>
  <div v-if="restaurant">
        <div class="subscribtion free"  v-on:click="isActive3 = !isActive3,isActive2 = !isActive2" v-bind:class="{ hidden: isActive1 }">
            <h2>Morning Mania</h2>
            <p>Food to energize you for the day</p>
        </div>

        <div class="subscribtion family" v-on:click="isActive3 = !isActive3,isActive1 = !isActive1" v-bind:class="{ hidden: isActive2 }">
            <h2>Lovely Lunch</h2>
            <p>Enjoy multi-cuisine food</p>
        </div>

        <div class="subscribtion premium" v-on:click="isActive1 = !isActive1,isActive2 = !isActive2 " v-bind:class="{ hidden: isActive3 }">
            <h2>Delightful Dinner</h2>
            <p>Authentic dishes from all over the world </p>
        </div>
        
      <form class="form" v-bind:class="{ active: isActive3||isActive1||isActive2}">
          
          <label>Number of people</label>
          <input type="number" placeholder="0" v-model="people">
        
          <label class="payment free-form">Slot timing</label>
          <br>

        <div class="container">
          <div class="bform"  v-bind:class="{ hidden: isActive1}"> 
            <input class="hidden radio-label" type="radio" name="0" id="0" checked="checked"/>
            <label class="button-label" for="0">
              <h1>8-9 am</h1>
            </label>
            <input class="hidden radio-label" type="radio" name="0" id="1"/>
            <label class="button-label" for="1">
              <h1>9-10 am</h1>
            </label>
            <input class="hidden radio-label" type="radio" name="0" id="2"/>
            <label class="button-label" for="2">
              <h1>10-11 am</h1>
            </label>
          </div>
          <div class="lform"  v-bind:class="{ hidden: isActive2}"> 
            <input class="hidden radio-label" type="radio" name="1" id="3" checked="checked"/>
            <label class="button-label" for="3">
              <h1>12-1 pm</h1>
            </label>
            <input class="hidden radio-label" type="radio" name="1" id="4"/>
            <label class="button-label" for="4">
              <h1>1-2 pm</h1>
            </label>
            <input class="hidden radio-label" type="radio" name="1" id="5"/>
            <label class="button-label" for="5">
              <h1>2-3 pm</h1>
            </label>
          </div>
          <div class="dform"  v-bind:class="{ hidden: isActive3}"> 
            <input class="hidden radio-label" type="radio" name="2" id="6" checked="checked"/>
            <label class="button-label" for="6">
              <h1>7-8 pm</h1>
            </label>
            <input class="hidden radio-label" type="radio" name="2" id="7"/>
            <label class="button-label" for="7">
              <h1>8-9 pm</h1>
            </label>
            <input class="hidden radio-label" type="radio" name="2" id="8"/>
            <label class="button-label" for="8">
              <h1>9-10 pm</h1>
            </label>
          </div>
        </div>
        <div class="next free-form btn"><i class="fas fa-glass-cheers"></i> Book Slot   </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import Navbar from './navbar';
import axios from 'axios'
export default{
  data () {
      return { isActive1:false,
      isActive2:false,
      isActive3:false,
      restaurant: "",
      people:"",
      slots:"",
      buffet:"",
      }
    },
    components:{
    "Navbar" :Navbar,
  },
  mounted(){
  },
  methods: {
    onChange(event) {
            this.restaurant=event.target.value;
            axios.get('/buffet', {
              headers: {
                authorization: 'token'
              }
            }, {
              params: {
                name:this.restaurant,
              }
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            }); 
        }
  }
}
</script>

<style scoped>
*:focus {
  outline: none;
}

.basic {
  box-sizing: border-box;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  font-weight: 400;
  color: white;
  display: flex;
  justify-content: center;
}

#wrapper {
  margin-top:5rem;
  width: 90%;
  max-width:80rem;
} 

#container {
  width: 85%;
  height:40rem ;
  margin: 0 auto;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
}
.information-column {
  width: 100%;
  max-height: 40rem;
  min-height:20rem;
  overflow: hidden;
  float: left;
  position: relative;
  background-image: url("../assets/buffet.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding:0;
}

.content {
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(3, 118, 153, 0.5) 0%, rgba(227, 228, 232, 0.3) 0%, rgba(214, 215, 219, 0.8) 100%);
}
.content h1 {
  width: 100%;
  margin-top: 32px;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 8px;
  color: white;
  text-shadow: -1px 1px 2px #006a71;
}
.content p {
  width: 62%;
  letter-spacing: 1px;
  line-height: 1.6em;
  position: absolute;
  font-weight: 600;
  bottom: 30px;
  left: 30px;
  color: #0f5b61;
}
.form-column {
  width: 100%;
  height: 40rem;
  padding: 1rem 2rem 0 2rem;
  float: right;
  background: #006a71;
  background: linear-gradient(45deg, #02929c 0%, #015c63 54%, #006a71 100%);
}

.subscribtion {
  width: 100%;
  font-size:1.1rem;
  overflow: hidden;
  padding: 12px;
  margin-bottom: 24px;
  border: 2px solid #f1f2f6;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  cursor: pointer;
}
.subscribtion:nth-child(1) {
  margin-top: 24px;
}
.subscribtion h2 {
  width: 80%;
  font-weight: 700;
  font-size: 1.5em;
  letter-spacing: 2px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f1f2f6;
  margin-bottom: 8px;
}
.subscribtion p {
  width: 90%;
  font-size: 1em;
  line-height: 1.4em;
}
.subscribtion:hover {
  box-shadow: 0px 0px 10px 0px rgb(15, 197, 230);
}
.subscribtion.active {
  background-color: #f1f2f6;
}
.subscribtion.active:nth-child(1) {
  margin-top: 0px;
}
.chooseRest{
  font-size: 1.3rem;
  letter-spacing: 0.3rem;
  text-align: center;
}
.form {
  width: 100%;
  opacity: 0;
}
.form.active {
  opacity: 1;
}
.form label {
  display: inline-block;
  width: 80%;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.form input {
  width: 100%;
  padding: 8px;
  border: none;
  background: none;
  border-bottom: 1px solid #f1f2f6;
  margin-bottom: 12px;
  font-size: 0.8em;
  letter-spacing: 1px;
  color:white;
}
.form input::-webkit-input-placeholder {
  color: #70e1e9;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.form input::-moz-placeholder {
  color:#70e1e9;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.form input:-ms-input-placeholder {
  color:#70e1e9;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.form input:-moz-placeholder {
  color: #70e1e9;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.form input:focus::-webkit-input-placeholder {
  color: #f1f2f6;
}
.form input:focus::-moz-placeholder {
  color: #f1f2f6;
}
.form input:focus:-ms-input-placeholder {
  color: #f1f2f6;
}
.form input:focus:-moz-placeholder {
  color: #f1f2f6;
}

.btn {
  margin-right: 4%;
  margin-top: 13px;
  height: 50px;
  padding: auto;
  text-align: center;
  background-color: white;
  color: #006a71;
  font-weight: 700;
  font-size: 1.2em;
  letter-spacing: 2px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  width: 100%;
}
.btn:hover{
  box-shadow: 0px 5px 10px 5px rgb(34, 77, 85);
  color:#006a71;
}
.free-form.hidden {
  height: 0;
  opacity: 0;
  display: none;
}

.container {
  height: 100%;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

form div .button-label {
  display: inline-block;
  padding: 0.8em 2rem;
  cursor: pointer;
  border-radius: 0.25em;
  background: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 -3px 0 rgba(0, 0, 0, 0.22);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.button-label h1 {
  font-size: 1em;
  font-weight: 530;
  color:#006a71;
  font-family: "Lato", sans-serif;
}
.button-label:hover {
  background: #b1d7d8;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 -3px 0 rgba(0, 0, 0, 0.32);
}
.button-label:active {
  -webkit-transform: translateY(2px);
          transform: translateY(2px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0px -1px 0 rgba(0, 0, 0, 0.22);
}

input[type="radio"]:checked+ .button-label{
  background: #0c5155;
  color:white;
}
input[type="radio"]:checked + .button-label h1{
  color:white;
}
input[type="radio"]:checked + .button-label:hover {
  background: #056d72;
}
.hidden {
  display: none;
}

</style>