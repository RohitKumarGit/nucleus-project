<template>
<div class="basic">
  <div id="wrapper">
  <div id="container">
    
    <div class="information-column">
      <div class="content">

        <h1>Choose a slot that suits you the best</h1>
        <p>Avoid the Hastle in Buffets</p>
      </div>
    </div>
    
    <div class="form-column">
      
      <div class="subscribtion free">
          <h2>Breakfast</h2>
          <p>Unlimited music online</p>
      </div>

      <div class="subscribtion family">
          <h2>Lunch</h2>
          <p>Unlimited music for the whole family</p>
      </div>

      <div class="subscribtion premium">
          <h2>Dinner</h2>
          <p>Unlimited music anywhere, anytime both online and offline</p>
      </div>
      
     <form class="form">
        
        <label>Mumber of people</label>
        <input type="number" placeholder="0">
       
        <label class="payment free-form">Payment</label>
        <div class="klarna payment-btn btn free-form"><img src="https://cdn.klarna.com/1.0/shared/image/generic/logo/de_de/basic/logo_white.png"/></div>
        <div class="paypal payment-btn btn free-form"><img src="https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom-white.svg"/></div>
       <div class="card payment-btn btn free-form">Card</div>
       <div class="free-button btn">Book slot</div>
       
       <div class="next free-form btn">Next<i class="fa fa-angle-right"></i></div>
        
      </form>
      
    </div>
    
  </div>
</div>
  </div>
</template>

<script>
export default{
  components:{
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  font-family: "museo-sans", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f1f2f6;
}
*:focus {
  outline: none;
}

.basic {
  background-color: #DEFFE7;
}

#wrapper {
  position: absolute;
  top: 50%;
  margin-top: -240px;
  left: 0;
  width: 100%;
}

#container {
  width: 720px;
  height: 480px;
  margin: 0 auto;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  overflow: hidden;
}

.information-column {
  width: 40%;
  height: 100%;
  overflow: hidden;
  float: left;
  position: relative;
  background-image: url("http://enwaara.se/codepen/music.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.content {
  width: 100%;
  height: 100%;
  padding: 30px;
  background: -moz-linear-gradient(-45deg, rgba(241, 242, 246, 0.9) 0%, rgba(227, 228, 232, 0.9) 45%, rgba(214, 215, 219, 0.9) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(241, 242, 246, 0.9) 0%, rgba(227, 228, 232, 0.9) 45%, rgba(214, 215, 219, 0.9) 100%);
  background: linear-gradient(135deg, rgba(241, 242, 246, 0.9) 0%, rgba(227, 228, 232, 0.9) 45%, rgba(214, 215, 219, 0.9) 100%);
}
.content h1 {
  width: 100%;
  margin-top: 32px;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 8px;
  color: #2EBD59;
  text-shadow: -1px 1px 2px #ff6b81;
}
.content p {
  width: 62%;
  font-size: 0.8em;
  letter-spacing: 1px;
  line-height: 1.6em;
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: #a4b0be;
}

.logo {
  width: 40%;
  height: auto;
}

.form-column {
  width: 60%;
  height: 100%;
  padding: 50px;
  float: right;
  background: #2ebd59;
  background: -moz-linear-gradient(45deg, #2ebd59 0%, #32c95d 54%, #39e561 100%);
  background: -webkit-linear-gradient(45deg, #2ebd59 0%, #32c95d 54%, #39e561 100%);
  background: linear-gradient(45deg, #2ebd59 0%, #32c95d 54%, #39e561 100%);
}

.subscribtion {
  width: 100%;
  overflow: hidden;
  padding: 12px;
  margin-bottom: 24px;
  border: 2px solid #f1f2f6;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  cursor: pointer;
}
.subscribtion:nth-child(1) {
  margin-top: 24px;
}
.subscribtion h2 {
  width: 60%;
  font-weight: 700;
  font-size: 1.4em;
  letter-spacing: 2px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f1f2f6;
  margin-bottom: 8px;
}
.subscribtion p {
  width: 80%;
  font-size: 0.8em;
  line-height: 1.4em;
}
.subscribtion:hover {
  box-shadow: 0px 0px 10px 0px #ff6b81;
}
.subscribtion.active {
  background-color: #f1f2f6;
}
.subscribtion.active:nth-child(1) {
  margin-top: 0px;
}
.subscribtion.active h2 {
  color: #2EBD59;
  border-color: #2EBD59;
}
.subscribtion.active p {
  color: #2EBD59;
}
.subscribtion.hidden {
  height: 0;
  margin: 0;
  padding-bottom: 0;
  padding-top: 0;
  opacity: 0;
}

.form {
  width: 100%;
  opacity: 0;
}
.form.active {
  opacity: 1;
}
.form label {
  display: block;
  width: 100%;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.form input {
  width: 100%;
  padding: 8px;
  border: none;
  background: none;
  border-bottom: 1px solid #f1f2f6;
  margin-bottom: 12px;
  font-size: 0.8em;
  color: #f1f2f6;
  letter-spacing: 1px;
}
.form input::-webkit-input-placeholder {
  color: #009432;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.form input::-moz-placeholder {
  color: #009432;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.form input:-ms-input-placeholder {
  color: #009432;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.form input:-moz-placeholder {
  color: #009432;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.form input:focus::-webkit-input-placeholder {
  color: #f1f2f6;
}
.form input:focus::-moz-placeholder {
  color: #f1f2f6;
}
.form input:focus:-ms-input-placeholder {
  color: #f1f2f6;
}
.form input:focus:-moz-placeholder {
  color: #f1f2f6;
}

.payment {
  margin-top: 12px;
}

.btn {
  width: 30.33%;
  float: left;
  margin-right: 4%;
  margin-top: 12px;
  height: 40px;
  padding-top: 12px;
  text-align: center;
  background-color: #f1f2f6;
  color: #2EBD59;
  font-weight: 700;
  font-size: 0.8em;
  letter-spacing: 2px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
.btn i {
  margin-left: 8px;
}

.klarna {
  background-color: #fa82a0;
}
.klarna img {
  width: 50%;
  height: auto;
  margin-top: 2px;
}
.klarna:hover, .klarna.active {
  background-color: #F9688D;
}

.paypal {
  background-color: #009cde;
}
.paypal img {
  width: 60%;
  height: auto;
}
.paypal:hover, .paypal.active {
  background-color: #008DCE;
}

.card {
  margin-right: 0;
}
.card:hover, .card.active {
  box-shadow: 0px 0px 10px 0px #ff6b81;
}

.free-button {
  width: 100%;
  margin-right: 0;
  margin-top: 8px;
  display: none;
}
.free-button:hover {
  box-shadow: 0px 0px 10px 0px #ff6b81;
}
.free-button.active {
  display: block;
}

.next {
  width: 100%;
  margin-right: 0;
  margin-top: 12px;
}
.next i {
  color: #2EBD59;
  margin-left: 8px;
}
.next:hover i {
  margin-left: 12px;
}

.free-form.hidden {
  height: 0;
  opacity: 0;
  display: none;
}

</style>