<template>
  <div class="outer-verify">
 <div class="container">
    <div class="row px-3">
      <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
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
                Proceed
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
export default {

    data () {
        return {
        }
    }
}
</script>

<style scoped>
.container
{
  position: absolute;
  width:40%;
  right:0px;
}
.outer-verify{
  height: 100vh;
  background: #0062E6 !important;
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
  padding: 2rem;
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
  color: #007bff;
}

.form-input input::placeholder{
  color: black;
  padding-left: 0px;
}

.form-input input:focus, .form-input input:valid{
  border: 2px solid #007bff;
}

.form-input input:focus::placeholder{
  color: #454b69;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before{
  background-color: #007bff !important;
  border: 0px;
}

.form-box button[type="submit"]{
  margin-top: 10px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  background: #007bff;
  color: #fff;
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

</style>