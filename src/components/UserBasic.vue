<template>
  <div class=" basic ">
    <div class="row">
      <div class="box col-12 col-lg-6 leftdiv">
        <h3> What do you wish to do next ?</h3>
        <h5><span>  Enjoy your Stay  </span></h5>
        <div class="row container">
          <div class="square col-6 col-xl-4">
             <img class="img-fluid" src="../assets/resort3.jpg">
            <div class="content">
              <p> Table <br>Reservation</p>
            </div>
          </div>
          <div class="square col-6 col-xl-4">
            <img class="img-fluid" src="../assets/resort5.jpg">
            <div class="content">
              <p> Room<br> Service</p>
            </div>
          </div>
          <div class="square col-6 col-xl-4">
             <img class="img-fluid" src="../assets/resort3.jpg">
            <div class="content">
              <p> Food<br> Preorder</p>
            </div>
          </div>
          <div class="square col-6 col-xl-4">
            <img class="img-fluid" src="../assets/resort3.jpg">
            <div class="content">
              <p> Book<br> Buffet</p>
            </div>
          </div>
          <div class="square col-6 col-xl-4">
            <img class="img-fluid" src="../assets/resort7.jpg">
            <div class="content">
              <p> Local <br>Attractions</p>
            </div>
          </div>
          <div class="square col-6 col-xl-4">
            <img class="img-fluid" src="../assets/resort2.jpg">
            <div class="content">
              <p> Other <br>Activities</p>
            </div>
          </div>
        </div>
      </div>
      <div class="box col-12 col-md-6 rightdiv">
        <div class="container">
          <h1> Your Preorders and Registrations</h1>
          <div class="orders">
            <div class="courses-container">
              <div class="course">
                <div class="course-preview">
                  <i class="fas fa-pizza-slice fa-3x"></i>
                </div>
                <div class="course-info">
                  <h2>Food Preordered</h2>
                  <p>ABCNI</p>
                  <button class="btn">7:30pm</button>
                </div>
              </div>
            </div>
            <div class="courses-container">
              <div class="course">
                <div class="course-preview">
                  <i class="fas fa-chair fa-3x"></i>
                </div>
                <div class="course-info">
                  <h2>Table registration </h2>
                  <p>At XYZ restaurant</p>
                  <button class="btn">8:00pm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style  scoped>  
.basic {
  position:fixed;
  width:100%;
  background-image:url("../assets/Bg2.png");
}
.basic .row{
  margin: 1rem;
}
.leftdiv{
  text-align:center;
  color:white;
  padding-top:1rem;
  border-radius:2rem;
  font-weight: 500;
  font-size: 1.8rem;
}
span{
  font-weight: 500;
  line-height: 4rem;
  font-size: 1.5rem;
  color:white;
  background: #db5c5a;
  padding:0.8rem 1.2rem;
  margin: auto;
  border-radius: 2rem;
}
.square {
  border: 1.2rem solid transparent;
  border-radius: 2rem;
  padding:0;
}
.square:hover img{
  box-shadow: 6px 11px 22px -5px rgba(0,0,0,0.64);
  filter: brightness(0.9);
}
img{
  border-radius:2rem;
  filter: brightness(0.6);
}
.square:after {
  content: "";
  display: block;
  
}
.content {
  position: absolute;
  width: 90%;
  height: 90%;
  top:40%;
  text-align:center;
}
.rightdiv{
  text-align:center;
  color:white;
  padding-top:1rem;
  border-radius:2rem;
}
.rightdiv h1{
  font-size: 1.8rem;
  font-weight:500;
}
.courses-container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0;
}

.course {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
	width: 700px;
}

.course h6 {
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.course h2 {
	letter-spacing: 1px;
	margin: 10px 0;
}

.course-preview {
	background-color:#db5c5a;
	color: #fff;
	padding: 30px;
	max-width: 250px;
}
.course-info {
	padding: 1rem;
  color:#008289;
	position: relative;
  text-align: left;
	width: 100%;
}

.btn {
	background-color:#db5c5a;
	border: 0;
	border-radius: 50px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	color: #fff;
	font-size: 1rem;
	padding: 1rem 1.5rem;
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	letter-spacing: 1px;
}


</style>