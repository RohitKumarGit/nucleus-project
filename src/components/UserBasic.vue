<template>
<!-- Not able to scroll page contents when size reduced -->
    <div class=" basic">
      <Navbar></Navbar>
      <br>
      <div class="contents">
        <span>WELCOME {{user.firstname +" "+ user.lastname}} !</span>
      <div class="row">
        <div class="box col-12 col-lg-6 ">
      <Services></Services>
      </div>
        <div class="box col-12 col-lg-6 ">
          <Bookings></Bookings>
        </div>
        </div>
      </div>
    </div>
    
</template>
<script>
import Navbar from './navbar';
import Services from './Services';
import Bookings from './Bookings';
import { mapGetters } from "vuex";
export default{
  computed : {
      ...mapGetters(["user"])
    },
    methods:{
  
}
    ,
    components:{
    "Services" :Services,
    "Navbar" :Navbar,
    "Bookings":Bookings,
  }
}
</script>
<style scoped lang="scss">  
.basic {
  position:fixed;
  width:100%;
  height: 100%;
  background-repeat: repeat;
  background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.6),
        rgba($color-primary-dark, 0.6)),
    url(https://i.ytimg.com/vi/L2WgJgAULo8/maxresdefault.jpg);
    background-size: cover;
}
.basic .row{
  margin: 0.8rem;
}
.contents{
  margin:1rem;
}
span{
  color:#006a71;
  font-size:1.6rem;
  margin-left: 5rem ;
  font-weight: 700;
  background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
opacity:0.95;
  border-radius: 2rem;
  padding:1rem;
  text-shadow: 2px 7px 10px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);
}

</style>