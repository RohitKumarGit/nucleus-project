<template>
  <div class="outer-basic">
 <div class="container">
    <div class="row px-3">
      <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
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
            <label>Gender:&nbsp;&nbsp;</label>
            <label class="radio-inline"><input type="radio" name="optradio" checked>&nbsp;Male&nbsp;</label>
            <label class="radio-inline"><input type="radio" name="optradio">&nbsp;Female&nbsp;</label>
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
         <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase">
                <router-link to="/signup/identity">
                Proceed
                </router-link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style scoped>
.container
{
  position: absolute;
  width:90%;
}
.outer-basic{
  height: 72vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card{
  overflow: hidden;
  border: 0 !important;
  border-radius: 20px !important;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}


.card-body{
  padding: 1rem;
}

.title{
  margin-bottom: 1rem;
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
  color: #fff !important;
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
  color: #006a71;
  text-decoration: none;
}

.form-box .btn-social{
  color: white !important;
  border: 0;
  font-weight: bold;
}
.gender
{
    padding-bottom: 7px;
    padding-left: 5px;
}
</style>