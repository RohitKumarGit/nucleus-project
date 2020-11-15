<template>
<div class="basic">
<div class="container row">
    <div class="col-5">
    <img src="../assets/error.jpg" class="img-fluid">
    </div>
    <div class="col-7 text">
    <h1> Sorry<br> Page Not Found</h1>
    <h4>Something went wrong</h4>
    <router-link to="/"><span>Go to Homepage</span></router-link>
    </div>
</div>
</div>
</template>

<script>
</script>

<style scoped>
.basic{
    background:#cbeaed;
    margin-top:10%;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.container{
    padding:3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
img{
    border-radius: 50%;}
.text{
    color:#006a71;
}
a{
    
    color:white;
    font-size:larger;
    
    font-weight: 500;
    display:flex;
    margin-top:1rem;
}
span{
    background:#006a71;
    padding: 1rem 2rem 1.2rem 2rem;
    border-radius:2rem;
    border:none;
}
span:hover{
    background:#04464b;
    box-shadow:0px 1px 10px 0px rgba(0, 0, 0, 0.3);
     
}
a:hover{
    color:white;
     text-decoration: none;
}
</style>