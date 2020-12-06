<template>
  <div class="basic">
    <Navbar></Navbar>
    <div class="container-xl">
      <h1> Local Attractions</h1>
    <div class="row">
      <div class="box col-12 col-md-6 col-xl-4">
        <div class="skill-card">
          <header class="skill-card__header"><span><img src="../assets/beach.jpg" class="img-fluid skill-card__icon"></span></header>
          <section class="skill-card__body">
            <h2 class="skill-card__title">xyz Beach</h2><span class="skill-card__duration">5 km</span>
            <ul class="skill-card__knowledge">
              <li>Surfing </li>
              <li>Jet Sking</li>
            </ul>
          </section>
        </div>
      </div>
      <div class="box col-12 col-md-6 col-xl-4">
        <div class="skill-card">
          <header class="skill-card__header"><span><img src="../assets/church.jpg" class="img-fluid skill-card__icon"></span></header>
          <section class="skill-card__body">
            <h2 class="skill-card__title">Xyz Church</h2><span class="skill-card__duration">2.8 km</span>
            <ul class="skill-card__knowledge">
              <li>since 1900 </li>
              <li>Antique Architecture</li>
            </ul>
          </section>
        </div>
      </div>
      <div class="box col-12 col-md-6 col-xl-4">
        <div class="skill-card">
          <header class="skill-card__header"><span><img src="../assets/park.jpg" class="img-fluid skill-card__icon"></span></header>
          <section class="skill-card__body">
            <h2 class="skill-card__title">xyz Amusement Park</h2><span class="skill-card__duration">1.5 km</span>
            <ul class="skill-card__knowledge">
              <li>Variety of rides</li>
              <li>10 am to 8pm</li>
            </ul>
          </section>
        </div>
      </div>
      <div class="box col-12 col-md-6 col-xl-4">
        <div class="skill-card">
          <header class="skill-card__header"><span><img src="../assets/garden.jpg" class="img-fluid skill-card__icon"></span></header>
          <section class="skill-card__body">
            <h2 class="skill-card__title">xyz Garden</h2><span class="skill-card__duration">1 km</span>
            <ul class="skill-card__knowledge">
              <li>Wide vareity of flowers</li>
              <li>Peace of mind</li>
            </ul>
          </section>
        </div>
      </div>
      <div class="box col-12 col-md-6 col-xl-4">
        <div class="skill-card">
          <header class="skill-card__header"><span><img src="../assets/mall.jpg" class="img-fluid skill-card__icon"></span></header>
          <section class="skill-card__body">
            <h2 class="skill-card__title">xyz Mall</h2><span class="skill-card__duration">4km</span>
            <ul class="skill-card__knowledge">
              <li>Range of Brands</li>
              <li>Modern architecture</li>
            </ul>
          </section>
        </div>
      </div>
      <div class="box col-12 col-md-6 col-xl-4">
        <div class="skill-card">
          <header class="skill-card__header"><span><img src="../assets/handicraft.jpg" class="img-fluid skill-card__icon"></span></header>
          <section class="skill-card__body">
            <h2 class="skill-card__title">Handicraft Market</h2><span class="skill-card__duration">2km</span>
            <ul class="skill-card__knowledge">
              <li>Vocal for local</li>
              <li>Culture infused products</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Navbar from './navbar';
export default {
  components:{
    "Navbar" :Navbar,
  }
}
</script>
<style  scoped>  
.basic {
  position:fixed;
  height:100%;
  width:100%;
  overflow:auto;
}
h1{
  margin:1.5rem;
  color:#006a71;
}
.row{
  margin:1rem;
  display:flex;
  justify-content:left ;
}
.skill-card {
  border-radius: 1rem;
  margin:0.5rem;
  width:100%;
  height:21rem;
  padding:0;
  background-color: #FFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
}
.skill-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.skill-card:hover .skill-card__header {
  height: 60%;
}
.skill-card:hover .skill-card__header .skill-card__icon {
  -webkit-transform: translateX(-50%) translateY(-50%) scale(1);
          transform: translateX(-50%) translateY(-50%) scale(1);
}
.skill-card:hover .skill-card__body {
  height: 40%;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  -webkit-transition-timing-function: cubic-bezier(0, 1.5, 1, 1);
          transition-timing-function: cubic-bezier(0, 1.5, 1, 1);
  -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(1) {
  -webkit-transition-delay: 0.25s;
          transition-delay: 0.25s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(2) {
  -webkit-transition-delay: 0.5s;
          transition-delay: 0.5s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(3) {
  -webkit-transition-delay: 0.75s;
          transition-delay: 0.75s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(4) {
  -webkit-transition-delay: 1s;
          transition-delay: 1s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(5) {
  -webkit-transition-delay: 1.25s;
          transition-delay: 1.25s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(6) {
  -webkit-transition-delay: 1.5s;
          transition-delay: 1.5s;
}
.skill-card .skill-card__header {
  position: relative;
  background-color:#006a71;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  height: 76%;
  padding:0;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  overflow: hidden;
}
.skill-card .skill-card__header .skill-card__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  color:white;
  -webkit-transform: translateY(-50%) translateX(-50%);
          transform: translateY(-50%) translateX(-50%);
  display: block;
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
.skill-card .skill-card__body {
  height: 30%;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  overflow: hidden;
  padding:0.8rem;
  font-weight: 500;
  font-size: 1.1rem;
}
.skill-card .skill-card__body .skill-card__title {
  font-weight: 600;
  font-size: 1.5rem;
  color:teal;
  text-transform: uppercase;
}
.skill-card .skill-card__body .skill-card__knowledge li {
  line-height: normal;
  -webkit-transition-duration: 0;
          transition-duration: 0;
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
}
</style>