<template>
  <div class="basic">
    <h1>Good Morning Arijit</h1>
    <div class="container-xl">
      <div>Div 1</div>
      <div>Div 2</div>
    </div>
    <div class="container-xl">
    <div class="row">
      <div class="box col-12 col-md-6 col-xl-4">
        <div class="skill-card">
          <header class="skill-card__header"><span><i class="skill-card__icon fas fa-file-invoice fa-7x"></i></span></header>
          <section class="skill-card__body">
            <h2 class="skill-card__title">User Invoice</h2><span class="skill-card__duration">Your stay</span>
            <ul class="skill-card__knowledge">
              <li>Checkin Details </li>
              <li>Total Bill</li>
              <li>Bill Due</li>
              <li>payment Options</li>
            </ul>
          </section>
        </div>
      </div>
      <div class="box col-12 col-md-6 col-xl-4">
        <div class="skill-card">
          <header class="skill-card__header"><i class="skill-card__icon fas fa-utensils fa-7x"></i></header>
          <section class="skill-card__body">
            <h2 class="skill-card__title">User Invoice</h2><span class="skill-card__duration">Your stay</span>
            <ul class="skill-card__knowledge">
              <li>Checkin Details </li>
              <li>Total Bill</li>
              <li>Bill Due</li>
              <li>payment Options</li>
            </ul>
          </section>
        </div>
      </div>
      <div class="box col-12 col-md-6 col-xl-4">
        <div class="skill-card">
          <header class="skill-card__header"><i class=" skill-card__icon fas fa-chair fa-7x"></i></header>
          <section class="skill-card__body">
            <h2 class="skill-card__title">User Invoice</h2><span class="skill-card__duration">Your stay</span>
            <ul class="skill-card__knowledge">
              <li>Checkin Details </li>
              <li>Total Bill</li>
              <li>Bill Due</li>
              <li>payment Options</li>
            </ul>
          </section>
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
  height:100%;
  width:100%;
  background-color: #cbeaed;
}
h1{
  margin:2rem;
  color:#006a71;
}
.row{
  margin:1rem;
  display:flex;
  justify-content:left ;
}
.skill-card {
  border-radius: 1rem;
  margin:1rem;
  width:100%;
  height:20rem;
  padding:0;
  background-color: #FFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
}
.skill-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.skill-card:hover .skill-card__header {
  height: 30%;
}
.skill-card:hover .skill-card__header .skill-card__icon {
  -webkit-transform: translateX(-50%) translateY(-50%) scale(1);
          transform: translateX(-50%) translateY(-50%) scale(1);
}
.skill-card:hover .skill-card__body {
  height: 70%;
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
  height: 60%;
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
  height: 50%;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  overflow: hidden;
  padding:0.8rem;
}
.skill-card .skill-card__body .skill-card__title {
  font-weight: 600;
  font-size: 1.7rem;
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