<template>
  <div>
<navbar/>
<div class="editpro">
	<div class="edit-form">
		<h1 class="heading-secondary">
			edit profile
		</h1>
		<div class="row">
			<div class="col-1-of-2 left-pane">
				<img src="../assets/pic1.jpg" class="profile-pic">
				<h1 class="heading-secondary name">
					Ananya Kapoor
				</h1>
			</div>
			<div class="col-1-of-2 right-pane">
				<div class="card-body">
          <h4 class="title text-center mt-4">
            Change Password
          </h4>
          <form class="form-box px-3" >
            <div class="form-input">
            <span><i class="far fa-user"></i></span>
              <input type="password"  placeholder="Current Password" v-model="email" required>
            </div>
            <div class="form-input">
              <span><i class="fa fa-key"></i></span>
              <input type="password"  placeholder="New Password" required>
            </div>
            <div class="form-input">
              <span><i class="fa fa-key"></i></span>
              <input type="password" placeholder="Confirm Password" required>
            </div>
            <hr class="my-4">
              <div class="mb-3">
                <button class="btn btn-block text-uppercase">
                    Apply
                </button>
            </div>
          </form>
</div>
			</div>
		</div>
	</div>
</div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
export default {
	components: {
navbar
	},
  data(){
    return {
    };
  }
}
</script>

<style lang="scss" scoped>
.editpro{
	padding:6rem;
	height:95vh;
	background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.5),
        rgba($color-primary-dark, 0.5)),
    url(../assets/nat-4.jpg);
    background-size: cover;
}
.edit-form{
	padding:1rem;
	height:30rem;
	width:70rem;
	background-image:linear-gradient(to right bottom,rgba(#FFF4D1,0.75),rgba(#FFFDD0,0.75));
	margin:0 auto;
	border-radius:1.75rem;
	box-shadow: 0 1.5rem 4rem rgba($color-black, 0.5);
}
.heading-secondary{
	margin-left:25rem;
	font-size:2.7rem;
	text-transform: uppercase;
	font-weight: 700;
	color:#006a71;
	font-size:2.25rem;
    letter-spacing: 0.2rem;
}

.row {
    max-width: $grid-width;
    margin: 0 auto;

    &:not(:last-child) {
        margin-bottom: $gutter-vertical;
    }
    
    @include clearfix;

    [class^="col-"] {
        float: left;

        &:not(:last-child) {
            margin-right: $gutter-horizontal;
        }
    }

    .col-1-of-2 {
        width: calc((100% - #{$gutter-horizontal}) / 2);
        
    }

}
.profile-pic{
	height:40%;
	margin-left:2rem;
	clip-path:circle(38% at 50% 50%);
}
.name{
	font-size:1.3rem;
	margin-left:4.5rem;
}
.title-change-pass{
	font-size:1.3rem;
	margin-left:2rem;
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
.title{
	color:#006a71;
	text-transform:uppercase;
}
.right-pane{
	background-color:transparent;
	margin-top:-2rem;
}
.left-pane{
	padding:4rem;
}
</style>