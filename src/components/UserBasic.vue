<template>
<!-- Not able to scroll page contents when size reduced -->
    <div class=" basic">
      <Navbar></Navbar>
      <br>
      <div class="contents">
        <span>Welcome {{user.email}} !</span>
      <div class="row">
        <div class="box col-12 col-lg-6 ">
      <Services></Services>
      </div>
        <div class="box col-12 col-md-6 ">
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
  background-image:url("../assets/Bg2.png");
  height: 100%;
  background-repeat: repeat;
}
.basic .row{
  margin: 1rem;
}
.contents{
  margin:1rem;
}
span{
  color:#006a71;
  font-size:1.6rem;
  margin-left: 5rem ;
  font-weight: 500;
  background-color: rgba(256,256,256,0.9);
  border-radius: 2rem;
  padding:1rem;
}
</style>