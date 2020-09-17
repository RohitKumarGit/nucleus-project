<template>
    <div id="maindiv">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="../assets/trial3.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/trial1.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/trial2.jpg" alt="Third slide">
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="outer-login">
                        <div class="container">
                             <div class="row px-3">
                                <div class="col-sm-10 col-md-9 card flex-row mx-auto px-0">
                                   <router-view />
                                </div>
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
    },
    methods: {
    },
  }
</script>

<style scoped>
#maindiv{ 
    background:#006a71;
    padding:10%;
}
.carousel-item
{
    height: 100%;
}
img{
    border-top-left-radius: 5%;
    border-bottom-left-radius: 5%;
}
.col-lg-6{
    padding:0;
}
.container{ 
  background:#ffffdd;
    border-radius:5%;
}
.outer-login{
  min-height: 33rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card{
  overflow: hidden;
  border: 0 !important;
  background: transparent;
}
</style>
