<template>
        <div class="card-body">
          <h4 class="title text-center mt-4">
            Identity verification
          </h4>
          <form class="form-box px-3">
            <h6 class="attach-desc">Attach Original ID(Aadhar ID/PAN Card/Driving License,etc)</h6>
  <form>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="customFile">
    <label class="custom-file-label" for="customFile">Choose file</label>
  </div>

            <div class="mb-3">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="cb1" name="" required>
                <label class="custom-control-label" for="cb1">I have read all the guidelines and privacy policy of NUCLEUS Systems Pvt. Ltd.</label>
              </div>
            </div>
</form>
         
            <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase">
                <router-link to="/signup/setup" class="proceed">
                Proceed
                </router-link>
              </button>
            </div>
          </form>
        </div>
</template>

<script>
import {mapState} from 'vuex'
export default {

    data () {
        return {
        }
    },
    methods:{
        toSetup:function(){
        this.$router.push('./setup');
        },
        handle(){
          // handle this page
          console.log(this.signup) // this will contain all data from previous page
          // take input from all fields just like basic detais and commit it to vuex
          // similarly do for the third page
          // as there is no API as of now leave the part of saving it to database
        }
    }
}
</script>

<style scoped>
.card-body{
  padding-top:4.5rem;
}

.title{
  margin-bottom: 2rem;
}

.form-input{
  position: relative;
}

.form-input input{
  width: 100%;
  height: 45px;
  padding-left: 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
  box-shadow: none;
  border: 1px solid #00000020;
  border-radius: 50px;
  outline: none;
  background: transparent;
}

.form-input span{
  position: absolute;
  top: 10px;
  padding-left: 15px;
  color: #006a71;
}

.form-input input::placeholder{
  color: black;
  padding-left: 0px;
}

.form-input input:focus, .form-input input:valid{
  border: 2px solid #006a71;
}

.form-input input:focus::placeholder{
  color: #454b69;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before{
  background-color: #006a71 !important;
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
  color: #007bff;
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
.attach-desc
{
  padding-bottom: 50px;
  color:grey;
}
.custom-checkbox
{
  padding-top: 50px;
  padding-bottom: 20px;
}
.proceed
{
  color:#ffffdd;
}

</style>