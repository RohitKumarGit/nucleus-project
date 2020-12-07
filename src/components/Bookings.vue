<template>
    <div class="container rightdiv ">
          <span class="orders-heading"> YOUR PREORDERS AND RESERVATIONS</span>
          <div class="orders u-add-height u-made-scroll">
            <div class="courses-container">
              <div class="course"  v-for="buffet in bookings.buffets" :key="buffet._id">
                <div class="course-preview">
                  <i class="fas fa-pizza-slice fa-3x"></i>
                </div>
                <div class="course-info">
                  <h2>Buffet Slot booked</h2>
                  <p>{{buffet.restaurant_id.name}}</p>
                   <a href="#cancel" @click="Cancelb(buffet._id)" class="cancel-links">Cancel</a>
                  <button class="btn">{{buffet.restaurant_id.time_details[0].time_now}}</button>
                </div>
              </div>
            </div>
            <div class="courses-container">
              <div class="course" v-for="table in bookings.tables" :key="table._id">
                <div class="course-preview">
                  <i class="fas fa-chair fa-3x"></i>
                </div>
                <div class="course-info" v-if="table.user_id!='cancel'">
                  <h2>Table reservations </h2>
                  <p>At {{" "+table.restaurant_id.name}}</p>
                  <span>FOR {{table.Duration}} hr/hrs &nbsp; <a href="#cancel" @click="Cancel(table)" class="cancel-links">Cancel</a></span>
                  <b-button class="btn">{{table.Time}}:00</b-button>
                </div>
                <div id="cancel" v-if="table.user_id=='cancel'">
                  <p>Order cancelled</p>
                </div>
              </div>
            </div>
            <div class="courses-container">
              <div class="course" v-for="order in bookings.orders" :key="order._id">
                <div class="course-preview">
                  <i class="fas fa-chair fa-3x"></i>
                </div>
                <div class="course-info">
                  <h2>{{order.order_detail.is_preorder ? "Food Pre Order" :"Food Order"}}</h2>
                 
                  <span>{{order.items.length}} Items  <a class="is-secondary d-block cancel-links" href="#cancel" @click="Cancelm(order._id)">CANCEL</a></span>
                  <b-button class="btn">Rs {{order.total_bill}} </b-button>
                </div>
               
              </div>
            </div>
            <div class="courses-container">
              <div class="course" v-for="order in bookings.restOrders" :key="order._id">
                <div class="course-preview">
                  <i class="fas fa-chair fa-3x"></i>
                </div>
                <div class="course-info">
                  <h2>{{order.order_detail.is_preorder ? "Food Pre Order" :"Food Order"}}</h2>
                 
                  <span>{{order.items.length}} Items  <a class="is-secondary d-block cancel-links" href="#cancel" @click="Cancelm(order._id)">CANCEL</a></span>
                  <b-button class="btn">Rs {{order.total_bill}} </b-button>
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
      console.log()
      const {data} = await axios.get('/allbookings',{
        headers: {
            authorization: this.user.ya,
          },
        params:{
          uid:this.user.uid
        }
      })
      this.bookings = data
      console.log(data)
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
      this.getData()
    },
    async Cancelb(id){
   //   order cancel
    const {data} = await axios.post('/buffetcancel',{
      bid:id,
      uid:this.user.uid
    },{
      headers:{
        authorization:this.user.ya
      }
    })
    console.log(data)
    this.getData()
    },
    async Cancelm(oid){
      console.log(this.user.ya)
    const data = await axios.post('/orders',{
      uid:this.user.uid,
      oid
    },{
      headers:{
        authorization:this.user.ya
      }
    })
     console.log(data)
    this.getData()
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
*::-webkit-scrollbar {
    width: 12px;
}
 
*::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
}
 
*::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
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
.orders{
  overflow-y:auto;
  height:32rem;
scrollbar-width: thin;         
  scrollbar-color: blue orange;
}
.u-add-height {
  height: 28rem;
}
.orders-heading{
  color:#006a71;
  font-size:2rem;
  font-weight: 700;
  background-color: rgba(256,256,256,0.9);
  border-radius: 2rem;
  padding:1rem;
  display:inline-block;
  margin-bottom:0.2rem;
  background-clip:text;
    -webkit-background-clip:text;
    color:transparent;
background-image: linear-gradient(to right, #efef64, #f9f98e);
  text-shadow: 2px 7px 10px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);
}
.cancel-links{
  text-decoration:none;
  font-size:1rem;
  text-transform:uppercase;
  font-weight:700;
  color:orangered;
}
</style>