<template>
  <div class="row leftdiv">
    <div class="para">
      <p>What do you wish to do next ?</p>
      <p><span> Enjoy your Stay </span></p>
    </div>
    <div class="row container">
      <div class="square col-12 col-sm-6 col-xl-4">
        <router-link to="./table">
          <img class="img-fluid" src="../assets/resort3.jpg" />
          <div class="content">
            <p>Table <br />Reservation</p>
          </div>
          </router-link>
      </div>
      <div class="square col-12 col-sm-6 col-xl-4">
        <router-link to="./room">
        <img class="img-fluid" src="../assets/resort5.jpg" />
        <div class="content">
          <p>
            Room<br />
            Service
          </p>
        </div>
        </router-link>
      </div>
      <div class="square col-12 col-sm-6 col-xl-4">
        <router-link to="./room">
        <img class="img-fluid" src="../assets/resort5.jpg" />
        <div class="content">
          <p>
            Food<br />
            Preorder
          </p>
        </div>
        </router-link>
      </div>
      <div class="square col-12 col-sm-6 col-xl-4">
        <router-link to="./buffet">
        <img class="img-fluid" src="../assets/resort1.jpg" />
        <div class="content">
          <p>
            Book<br />
            Buffet
          </p>
        </div>
        </router-link>
      </div>
      <div class="square col-12 col-md-6 col-xl-4">
        <router-link to="./local">
        <img class="img-fluid" src="../assets/resort7.jpg" />
        <div class="content">
          <p>Local <br />Attractions</p>
        </div>
        </router-link>
      </div>
      <div class="square col-12 col-md-6 col-xl-4">
        <router-link to="./room">
        <img class="img-fluid" src="../assets/resort2.jpg" />
        <div class="content">
          <p>Other <br />Activities</p>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.leftdiv {
  text-align: center;
  color: white;
  padding-top: 1rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 1.6rem;
}
.para {
  width: 100%;
  display: flex;
  flex-direction: column;
}
span {
  font-weight: 500;
  line-height: 4rem;
  font-size: 1.5rem;
  color: white;
  background: #db5c5a;
  padding: 0.8rem 1.2rem;
  margin: auto;
  border-radius: 2rem;
}
.square {
  border: 1.2rem solid transparent;
  border-radius: 2rem;
  padding: 0;
}
.square:hover img {
  box-shadow: 6px 11px 22px -5px rgba(0, 0, 0, 0.64);
  filter: brightness(1);
}
a:hover{
  color:white;
  font-size:1.6rem;
}
img {
  border-radius: 2rem;
  filter: brightness(0.7);
}
.square:after {
  content: "";
  display: block;
}
.content {
  position: absolute;
  width: 90%;
  height: 90%;
  top: 40%;
  text-align: center;
}
a{
  color:white;
}
</style>