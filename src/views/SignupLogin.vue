<template>
    <div id="maindiv">
        <b-container fluid="lg">
        <b-row>
            <b-col cols="12" md="6">
                <b-carousel
                id="carousel-fade"
                :interval="4000"
                fade
                indicators
                img-width="500"
                img-height="48"
                >
                <b-carousel-slide>
                    <template v-slot:img>
                    <img
                        class="d-block img-fluid w-100"
                        src="../assets/resort3.jpg"
                        alt="image slot"
                    >
                    </template>
                </b-carousel-slide>
                    <b-carousel-slide>
                    <template v-slot:img>
                    <img
                        class="d-block img-fluid  w-100"
                        src="../assets/resort2.jpg"
                        alt="image slot"
                    >
                    </template>
                </b-carousel-slide>
                    <b-carousel-slide>
                        <template v-slot:img>
                        <img
                            class="d-block img-fluid w-100"
                            src="../assets/resort1.jpg"
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col id="forms" cols="12" md="6">
                <router-view/>
            </b-col>
        </b-row>
        </b-container>
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
    padding:10rem 0;
}
div.row{
    padding:0;
}
img{
    border-top-left-radius: 5%;
    border-bottom-left-radius: 5%;
}
div.col-md-6.col-12{
    padding: 0;
    }
#forms.col-md-6.col-12{
    position:relative;
    background-color:  #006a71;
    border-top-right-radius: 5%;
    border-bottom-right-radius: 5%;
    }
</style>
