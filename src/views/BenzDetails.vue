<template>
    <h1>Welcome to Benz Page</h1>
    <img  class="benz-img" src="@/assets/cars/Benz.jpg" alt="Silver-benz">
    <BenzModal/>
    <button class="show-btn">Show Car Detail</button>
  
</template>

<script>

import BenzModal from '../components/BenzModal.vue'

export default {
    name: 'Benz',
    components: {BenzModal}, 
}

</script>

<style scoped>  
    .benz-img {
        width: 100%;
        margin: 0;
        padding-top: 40px;
    }

    .show-btn {
        background: grey;
        color: white;
        padding: 15px;
        margin-top: 20px;
        border-radius: 10px;
        border: none;
        font-size: 20px;

    }

 


</style>