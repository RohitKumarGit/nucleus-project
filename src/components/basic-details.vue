<template>
        <div class="card-body">
          <h4 class="title text-center mt-4">
            Basic Details
          </h4>
          <form class="form-box px-3">
            <div class="form-input">
                <span><i class="far fa-user"></i></span>
              <input type="text" name="" placeholder="First Name" tabindex="10" required>
            </div>
            <div class="form-input">
                  <span><i class="far fa-user"></i></span>
              <input type="text" name="" placeholder="Last Name" tabindex="10" required>
            </div>
            <div class="form-input">
                <span><i class="fas fa-birthday-cake"></i></span>
              <input type="date" name="" placeholder="DOB" required>
            </div>
            <div class="gender">
            <label>Gender :&nbsp;&nbsp;</label>
            &nbsp;<label class="radio-inline"><input type="radio" name="optradio" checked>&nbsp;Male&nbsp;</label>&nbsp;
            <label class="radio-inline"><input type="radio" name="optradio">&nbsp;Female&nbsp;</label>&nbsp;
            <label class="radio-inline"><input type="radio" name="optradio">&nbsp;Others&nbsp;</label>
            </div>
              <div class="form-input">
              <span><i class="fas fa-phone-square"></i></span>
              <input type="text" placeholder=" 9876543210" required>
              </div>
               <div class="form-input">
                 <span><i class="far fa-envelope"></i></span>
              <input type="email" placeholder="Enter your email" required>
              </div>
         <div>
              <button type="submit" class="btn btn-block text-uppercase">
                <router-link to="/signup/identity" class="proceed">
                Proceed
                </router-link>
              </button>
            </div>
          </form>
</div>
</template>

<script>
</script>

<style scoped>

.card-body{
  padding: 0rem;
  padding-top: 3rem;

}

.title{
  margin-bottom: 1rem;
}

.form-input{
  position: relative;
}

.form-input input{
  width: 100%;
  height: 2.8rem;
  padding-left: 2.5rem;
  margin-bottom: 1.2rem;
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
.gender
{
    padding-bottom: 0.5rem;
    padding-left: 0.2rem;
}
.proceed
{
  color:#ffffdd;
}
</style>