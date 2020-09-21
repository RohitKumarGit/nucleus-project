<template>
        <div class="card-body">
          <h4 class="title text-center mt-4">
            User Setup
          </h4>
          <form class="form-box px-3" method="post" oninput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'>
            <div class="form-input">
            <span><i class="far fa-user"></i></span>
              <input type="email" name="" placeholder="Enter your User Name" tabindex="10" required>
            </div>
            <div class="form-input">
              <span><i class="fa fa-key"></i></span>
              <input type="password" name="up" placeholder="Password" required>
            </div>
                        <div class="form-input">
              <span><i class="fa fa-key"></i></span>
              <input type="password" name="up2" placeholder="Confirm Password" required>
            </div>
            <hr class="my-4">
                        <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase">
                <router-link to="/login" class="proceed">
                Proceed to Login
                </router-link>
              </button>
            </div>
          </form>
</div>
</template>

<script>
export default {

    data () {
        return {
        }
    },
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

.form-box button[type="submit"]{
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

.form-box button[type="submit"]:hover{
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