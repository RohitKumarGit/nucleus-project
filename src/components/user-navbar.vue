<template>
	<div class="navbar-cont">
<nav class="navbar navbar-expand-lg navbar-mainbg">
  <a class="navbar-brand navbar-logo" href="#"><strong>NUCLEUS</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse my" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="fas fa-tachometer-alt"></i>Dashboard</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="javascript:void(0);"><i class="fas fa-couch"></i>Book Table</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="fas fa-hamburger"></i>Food Preorder</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="fas fa-utensils"></i>Book Buffet</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="fas fa-broom"></i>Room Service</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="fas fa-biking"></i>Local Attractions</a>  </li>
            </ul>
            <div class="dropdown">
  <button type="button" class="btn dropdown-toggle btn-primary navbar-button" data-toggle="dropdown">
  <i class="fas fa-user"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Edit Profile</a>
    <a class="dropdown-item" href="#">Sign Out</a>
  </div>
</div>
        </div>
  </nav>
<div class="row">
<div class="card leftcard">
  <div class="card-text">
    <div class="portadaleft">
    
    </div>
    <div class="title-total">   
      <h2>Hey Deepika</h2>
  
  <div class="desc">What do you plan to do next ?</div>
  </div>
 
  </div>
</div>
<div class="card rightcard">
  <div class="card-text">
    <div class="portadaright">
    
    </div>
    <div class="title-total">   
      <h2>Upcoming reservations</h2>
  </div>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
  data(){
    return {
    };
  }
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
	background-color: #5161ce;
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
    padding: 20px 20px;
    transition-duration:0.6s;
	transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
}
#navbarSupportedContent>ul>li.active>a{
	color: #5161ce;
	background-color: transparent;
	transition: all 0.7s;
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
    background-color: #5161ce;
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
		padding: 12px 30px;
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
  background-color: #5161CE;
  border-color: #5161CE;
}
.btn.btn-primary.focus,
.btn.btn-primary:focus {
  background-color: #5161CE;
  border-color: #5161CE;
  outline: none;
  box-shadow: none;
}
.btn.btn-primary:hover {
  background-color: #5161CE;
  border-color: #5161CE;
  outline: none;
  box-shadow: none;
}
.my
{
  margin-right:1rem;
}



.card {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
  height:25rem;
  width:35rem;
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  position: relative;
  margin:3.5rem;
}
.card h2 {
  margin: 0;
  padding: 0 1rem;
}
.card .title {
  padding: 1rem;
  text-align: right;
  color: #5161ce;
  font-weight: bold;
  font-size: 12px;
}
.card .desc {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
.card .actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0.5rem 1rem;
}
.card svg {
  width: 85px;
  height: 85px;
  margin: 0 auto;
}

.card-text {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.title-total {
  padding: 2.5em 1.5em 1.5em 1.5em;
}

path {
  fill: white;
}

.img-portadaleft {
  width: 100%;
}
.img-portadaright {
  width: 100%;
}

.portadaleft {
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: url("https://i.pinimg.com/originals/2d/8f/4a/2d8f4a5b817f2713b2662fb371e7d3d1.jpg");
  background-position: bottom center;
  background-size: cover;
}
.portadaright {
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: url("https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/03/27191826/270318_retreat_05.jpg?w=1200&h=628&fill=blur&fit=fill");
  background-position: bottom center;
  background-size: cover;
}
.rightcard
{
  margin-left:1rem;
}
</style>