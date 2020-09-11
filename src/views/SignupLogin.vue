<template>
    <div id="maindiv">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="../assets/resort3.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/resort1.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/resort2.jpg" alt="Third slide">
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6">
                     <router-view />
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
    padding:2rem;
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
    background-color:  #006a71;
    border-radius:5%;
}
</style>
