<template>
	<nav class="navbar navbar-expand-lg navbar-mainbg">
  <a class="navbar-brand navbar-logo" onmouseover="this.style.color='white'" href="#"><strong>NUCLEUS</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse my" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'" href="javascript:void(0);"><i class="fas fa-tachometer-alt"></i>Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'" href="javascript:void(0);"><i class="fas fa-couch"></i>Book Table</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'" href="javascript:void(0);"><i class="fas fa-hamburger"></i>Food Preorder</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'" href="javascript:void(0);"><i class="fas fa-utensils"></i>Book Buffet</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'" href="javascript:void(0);"><i class="fas fa-broom"></i>Room Service</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'" href="javascript:void(0);"><i class="fas fa-biking"></i>Local Attractions</a>  </li>
            </ul>
            <div class="dropdown">
  <button type="button" class="btn dropdown-toggle btn-primary navbar-button" data-toggle="dropdown">
  <i class="fas fa-user"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Edit Profile</a>
    <button id="signout" @click="logout()">Sign Out</button>
  </div>
</div>
        </div>
  </nav>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data(){
    return {
    };
  },
  methods:{
      logout(){
          firebase.auth().signOut()
          .then(()=>{
            this.$router.replace("/");
          });
      }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

body{
	font-family: 'Roboto', sans-serif;
}
* {
	margin: 0;
	padding: 0;
}
i {
	margin-right: 10px;
}
.navbar-logo{
	padding: 15px;
	color: #fff;
}
.navbar-mainbg{
	background-color: #006a71;
	padding: 0px;
}
#navbarSupportedContent{
	position: relative;
}
#navbarSupportedContent ul{
	padding: 0px;
	margin: 0px;
}
#navbarSupportedContent ul li a i{
	margin-right: 10px;
}
#navbarSupportedContent li {
	list-style-type: none;
	float: left;
}
#navbarSupportedContent ul li a{
	color: rgba(255,255,255,0.5);
    text-decoration: none;
    font-size: 15px;
    display: block;
    padding: 10px 10px;
    transition-duration:0.5s;
	transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
}
#navbarSupportedContent>ul>li.active>a{
	color: #006a71;
	background-color: transparent;
	transition: all 0.5s;
}
#navbarSupportedContent a:not(:only-child):after {
	content: "\f105";
	position: absolute;
	right: 20px;
	top: 10px;
	font-size: 14px;
	font-family: "Font Awesome 5 Free";
	display: inline-block;
	padding-right: 3px;
	vertical-align: middle;
	font-weight: 900;
	transition: 0.5s;
}
#navbarSupportedContent .active>a:not(:only-child):after {
	transform: rotate(90deg);
}
.hori-selector{
	display:inline-block;
	position:absolute;
	height: 100%;
	top: 0px;
	left: 0px;
	transition-duration:0.6s;
	transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	background-color: #fff;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	margin-top: 10px;
}
.hori-selector .right,
.hori-selector .left{
	position: absolute;
	width: 25px;
	height: 25px;
	background-color: #fff;
	bottom: 10px;
}
.hori-selector .right{
	right: -25px;
}
.hori-selector .left{
	left: -25px;
}
.hori-selector .right:before,
.hori-selector .left:before{
	content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #006a71;
}
.hori-selector .right:before{
	bottom: 0;
    right: -25px;
}
.hori-selector .left:before{
	bottom: 0;
    left: -25px;
}




@media (max-width: 991px){
	#navbarSupportedContent ul li a{
		padding: 8px 20px;
	}
	.hori-selector{
		margin-top: 0px;
		margin-left: 10px;
		border-radius: 0;
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
	}
	.hori-selector .left,
	.hori-selector .right{
		right: 10px;
	}
	.hori-selector .left{
		top: -25px;
		left: auto;
	}
	.hori-selector .right{
		bottom: -25px;
	}
	.hori-selector .left:before{
		left: -25px;
		top: -25px;
	}
	.hori-selector .right:before{
		bottom: -25px;
		left: -25px;
	}
}
.dropdown
{
  margin-left:1rem;
  margin-right:1.5rem;
}
.btn.btn-primary {
  background-color: #006a71;
  border-color: #006a71;
}
.btn.btn-primary.focus,
.btn.btn-primary:focus {
  background-color: #006a71;
  border-color: #006a71;
  outline: none;
  box-shadow: none;
}
.btn.btn-primary:hover {
  background-color: #006a71;
  border-color: #006a71;
  outline: none;
  box-shadow: none;
}
.my
{
  margin-right:1rem;
}
a
{
	font-family:Roboto,sans-serif;
}
#signout{
	font-size: 100%;
	padding:0;
	border:0;
	background-color: transparent;
}
</style>