<template>
  <div>
    <navbar />
    <div id="maindiv">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 d-none d-lg-block left-div">
            <img src="../assets/table.jpg" />
          </div>
          <div class="col-lg-8 right-div">
            <div class="outer-login">
              <div class="row px-3">
                <div
                  class="col-sm-9 col-md-9 col-lg-10 card flex-row mx-auto px-0 form"
                >
                  <div class="card-body">
                    <h3 class="title text-center mt-4">Table Reserve</h3>
                    <b-form class="form-box px-3">
                      <div class="form-input">
                        <span><i class="far fa-calendar-check"></i></span>
                        <input
                          placeholder="Select any time today in 24hr format"
                          class="textbox-n"
                          type="datetime-local"
                          onfocus="(this.type='number')"
                          onfocusout="(this.type='text')"
                          id="date"
                          v-model="datetime"
                          required
                        />
                      </div>
                      <div class="form-input">
                        <span><i class="fas fa-users"></i></span>
                        <input
                          type="number"
                          name="person"
                          placeholder="No. of people"
                          min="1"
                          max="16"
                          v-model="people"
                          required
                        />
                      </div>
                      <div class="form-input">
                        <span><i class="fas fa-hourglass-end"></i></span>
                        <input
                          placeholder="Duration"
                          class="textbox-n"
                          type="text"
                          onfocus="(this.type='number')"
                          onfocusout="(this.type='text')"
                          id="duration"
                          v-model="duration"
                          min="01"
                          max="04"
                          required
                        />
                        <p>Duration ranges from 1 to 4 hrs</p>
                      </div>
                      
                      <div class="mb-3">
                        <b-button
                          class="btn btn-block text-uppercase"
                          @click="submit"
                        >
                          Check Availability
                        </b-button>
                        <b-button
                          class="btn btn-block text-uppercase"
                           @click="submit2"
                        >
                          Proceed
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
import {mapState} from "vuex";
import { mapGetters } from "vuex";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      people:"",
      datetime:"",
      duration:"",
    };
  },
  computed:{
    ...mapState(["restaurant"]),
    ...mapGetters(["user"]),
  },
  methods:{
    submit(){
      if(this.people && this.duration && this.datetime)
      {
        
        console.log(this.restaurant);
        const helper2=this;
        console.log(helper2.datetime);
        console.log(helper2.duration);
        axios.get("/vacancy", {
          headers: {
            authorization: this.user.ya,
          },
          params: {
            name: this.restaurant.restaurantName,
            time:this.datetime
          },
        })
        .then(function (response) {
        console.log(response);
        var vacancy=response.data.vacancy;
        console.log(vacancy);
        console.log(helper2.people);
        if(Number(vacancy)>Number(helper2.people)){
          helper2.error="Table is Available";
          helper2.$store.commit("restaurantStore",{
        time:helper2.datetime,
        people:helper2.people,
        duration:helper2.duration
       })
       console.log(helper2.restaurant);
       helper2.$router.push("/table3");
        }
        else{
          helper2.error="Tables are not vacant";
        }
        })
      }
      else{
        console.log(this.restaurant);
        this.error="Please select all the fields restaurant";
      }
    },
    submit2(){
      console.log(this.restaurant.restaurantName);
    }

  }
};
</script>

<style scoped>
.card-body {
  max-height: 40rem;
  max-width: 30rem;
  padding-top: 5.5rem;
}

.title {
  margin-bottom: 2rem;
}

.form-input {
  position: relative;
}

.form-input input {
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

.form-input span {
  position: absolute;
  top: 0.7rem;
  padding-left: 1.1rem;
  color: #00828b;
}

.form-input input::placeholder {
  color: black;
  padding-left: 0px;
}

.form-input input:focus,
.form-input input:valid {
  border: 2px solid #00828b;
}

.form-input input:focus::placeholder {
  color: #454b69;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #00828b !important;
  border: 0px;
}

.form-box button[type="submit"] {
  margin-top: 0.7rem;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  background: #006a71;
  color: #fff !important;
  font-size: 90%;
  font-weight: bold;
  letter-spacing: 0.1rem;
  transition: 0.5s;
  padding: 12px;
}

.form-box button[type="submit"]:hover {
  background: #0069d9;
}

.forget-link,
.register-link {
  color: #006a71;
  font-weight: bold;
}

.forget-link:hover,
.register-link:hover {
  color: #0069d9;
  text-decoration: none;
}

.form-box .btn-social {
  color: white !important;
  border: 0;
  font-weight: bold;
}

#maindiv {
  display: flex;
  /*background: #cbeaed;*/
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 3.3rem;
}
.container {
  background: #00828b;
}
.carousel {
  max-height: 38rem;
}

img {
  max-height: 38rem;
}
.container {
  background: white;
  box-shadow: 0.5rem 0.5rem 1.2rem #002225;
}
.card {
  overflow: hidden;
  border: 0 !important;
  background: transparent;
}
.left-div {
  padding: 0rem;
}
.right-div {
  background-color: #ffffdd;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
}
</style>