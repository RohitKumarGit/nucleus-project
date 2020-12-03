<template>
        <div class="card-body">
          <h4 class="title text-center mt-4">
            Identity verification
          </h4>
          <form class="form-box px-3">
            <h6 class="attach-desc">Attach Original ID(Aadhar ID/PAN Card/Driving License,etc)</h6>
  <form>
  <div class="custom-file">
    <b-form-file  accept="image/*" @change="upload($event)">Choose file</b-form-file>
  </div>

            <div class="mb-3">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="cb1" name="" required>
                <label class="custom-control-label" for="cb1">I have read all the guidelines and privacy policy of NUCLEUS Systems Pvt. Ltd.</label>
              </div>
            </div>
</form>
         <p v-if="error">{{error}}</p>
            <div class="mb-3" >
              <b-button type="submit" class="btn btn-block text-uppercase proceed" @click.prevent="handle">
                Proceed
              </b-button>
            </div>
          </form>
        </div>
</template>

<script>
import firebase from 'firebase'
export default {

    data () {
        return {
          file1:"",
          error:null,
        }
    },
    methods:{
        handle(){
          // handle this page
          if(this.file1!=""){
            console.log(this.signup) ;
            const {file1} = this;
            this.$store.commit("signupflow",{
            file1
            })
            this.$router.push('/signup/setup')
          }
          else{
              this.error="Please upload a File"
          }
        },
        async upload(event){
          var file =event.target.files[0];
          console.log(file);
          const fileRef =firebase.storage().ref().child(file.name);
          await fileRef.put(file);
          fileRef.getDownloadURL().then((url)=>
          this.file1=url,
          console.log(this.file1)
          );
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