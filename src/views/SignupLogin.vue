<template>
    <div id="maindiv">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 d-none d-lg-block left-div">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="../assets/resort3.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/resort5.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/resort6.jpg" alt="Third slide">
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-5 right-div">
                    <div class="outer-login">
                             <div class="row px-3">
                                <div class="col-sm-9 col-md-9 col-lg-10 card flex-row mx-auto px-0 form">
                                   <router-view />
                                    <slot></slot>
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
    data() {
        return{
        }
    }
  }
</script>

<style scoped>
#maindiv{ 
    display:flex;
    background: #cbeaed;
    position:fixed;
    height:100%;
    width:100%;
    justify-content: center;
    align-items: center;
    padding-left:1.5rem;
    padding-right:1.5rem;
}
.container
{
    background:#00828b;
}
.carousel
{
    max-height:38rem;
}
.carousel-inner
{
    max-height:38rem;
    border-top-left-radius :1.75rem;
    border-bottom-left-radius: 1.75rem;
}
img{
     max-height:38rem;
}
.container{ 
  background:white;
  box-shadow: 0.5rem 0.5rem 1.2rem #002225;
  border-radius:1.75rem;
}
.card{
  overflow: hidden;
  border: 0 !important;
  background: transparent;
}
.left-div
{
    padding:0rem;
}
.right-div
{
    border-radius:1.75rem;
    background-color:#ffffdd;
}
.row
{
    border-radius:1.75rem;
}
.form
{
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>
