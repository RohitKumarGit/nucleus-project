<template>
    <div class=" basic ">
      <Navbar></Navbar>
      <p>{{user.email}}</p>
      <div class="row">
        <div class="box col-12 col-lg-6 ">
      <Services></Services>
      </div>
        <div class="box col-12 col-md-6 ">
          <Bookings></Bookings>
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
    components:{
    "Services" :Services,
    "Navbar" :Navbar,
    "Bookings":Bookings,
  }
}
</script>
<style  scoped>  
.basic {
  position:fixed;
  width:100%;
  height: 100%;
  background-image:url("../assets/Bg2.png");
  background-repeat: repeat;
}
.basic .row{
  margin: 1rem;
}
</style>