<template>
    <div class="container rightdiv ">
          <h1> Your Preorders and Registrations</h1>
          <div class="orders u-add-height u-made-scroll">
            <div class="courses-container ">
              <div class="course"  v-for="buffet in bookings.buffet" :key="buffet._id">
                <div class="course-preview">
                  <i class="fas fa-pizza-slice fa-3x"></i>
                </div>
                <div class="course-info">
                  <h2>Buffet Slot booked</h2>
                  <p>ABCNI</p>
                  <button class="btn">7:30pm</button>
                </div>
              </div>
            </div>
            <div class="courses-container">
              <div class="course" v-for="table in bookings.t" :key="table._id">
                <div class="course-preview">
                  <i class="fas fa-chair fa-3x"></i>
                </div>
                <div class="course-info" v-if="table.user_id!='cancel'">
                  <h2>Table reservations </h2>
                  <p>At XYZ restaurant{{table.restaurant_id}}</p>
                  <span>for {{table.Duration}} hr/hrs &nbsp; <a href="#cancel" @click="Cancel(table)">Cancel</a></span>
                  <b-button class="btn">{{table.Time}}:00</b-button>
                </div>
                <div id="cancel" v-if="table.user_id=='cancel'">
                  <p>Order cancelled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
  watch:{
    user(){
      this.getData()
    }
  },
  data(){
    return {
      bookings:{},
      cancel:false,
    }
  },
  methods:{
    async getData(){
      const {data} = await axios.get('/allbookings',{
        headers: {
            authorization: this.user.ya,
          },
        params:{
          user_id:this.user._id
        }
      })
      this.bookings = data
      console.log(this.bookings);
    },
    Cancel(table){
      const helper= this;
      console.log(table);
      axios.delete("/tablereserve",
      {
        data:{
          uid:helper.user.uid,
          reserve:table,
        },
        headers: {
            authorization: this.user.ya,
          },
      });
      table.user_id="cancel";
    }
  },
  created(){
    this.getData()
  },
  computed:{
    ...mapState(['user'])
  }
}
</script>
<style  scoped>  
.rightdiv{
  text-align:center;
  color:white;
  padding-top:1rem;
  border-radius:2rem;
}
.rightdiv h1{
  font-size: 1.6rem;
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
	margin: 1.2rem;
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
    font-size:1.4rem;
}

.course-preview {
	background-color:#006a71;
	color: #fff;
	padding: 2rem;
	max-width: 250px;
}
.course-info {
	padding: 0.5rem;
  color:#008289;
	position: relative;
  text-align: left;
	width: 100%;
    margin-left: 1rem;
}

.btn {
	background-color:#db5c5a;
	border: 0;
	border-radius: 50px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	color: #fff;
	font-size: 1rem;
	padding: 1rem 1.5rem;
	position: absolute !important;
	bottom: 1rem;
	right: 1rem;
	letter-spacing: 1px;
}
.u-add-height {
  height: 35rem;
}
.u-made-scroll {
  overflow-y: auto;
}
</style>