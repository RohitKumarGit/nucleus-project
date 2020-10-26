<template>
        <div class="card-body">
          <h4 class="title text-center mt-4">
            User Setup
          </h4>
          <form class="form-box px-3" >
            <div class="form-input">
            <span><i class="far fa-user"></i></span>
              <input type="email"  placeholder="Enter your User Name" v-model="email" required>
            </div>
            <div class="form-input">
              <span><i class="fa fa-key"></i></span>
              <input type="password"  placeholder="Password" v-model="password" required>
            </div>
            <div class="form-input">
              <span><i class="fa fa-key"></i></span>
              <input type="password" placeholder="Confirm Password" v-model="cpassword" required>
            </div>
            <p v-if="error">{{error}}</p>
            <hr class="my-4">
              <div class="mb-3">
                <button class="btn btn-block text-uppercase" @click="register()">
                 <router-link to="/login" class="proceed">
                    Proceed
                </router-link>
                </button>
            </div>
          </form>
</div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default{
    data () {
        return {
          email:"",
          password:"",
          cpassword:"",
          error:null
        };
    },
    methods:{
      register(){
        if(this.password.length<6)
          this.error="Password length > 6";
        else if(this.password!=this.cpassword)
          this.error="Passwords don't match";
        else{
          firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch(error=>{
            this.error=error.message;
          });
        } 
      }
    }
}
</script>

<style scoped>

.card-body{
  padding-top: 5.5rem;
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

.form-box button{
  margin-top: 10px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  background: #006a71;
  color: #fff;
  font-size: 90%;
  font-weight: bold;
  letter-spacing: .1rem;
  transition: 0.5s;
  padding: 12px;
}

.form-box button:hover{
  background: #006a71;
}

.forget-link, .register-link{
  color: #006a71;
  font-weight: bold;
}

.forget-link:hover, .register-link:hover{
  color: #818181;
  text-decoration: none;
}

.form-box .btn-social{
  color: white !important;
  border: 0;
  font-weight: bold;
}
.proceed
{
  color:#ffffdd;
}


</style>