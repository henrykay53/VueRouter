<template>
    <h1>Welcome To Audi's Page</h1>
    <img class="audi-img" src="@/assets/cars/audi.jpg" alt="black-audi">
    <AudiModal />
    <button class="show-btn">Show Car Detail</button>
  
</template>

<script>
import AudiModal from '../components/AudiModal.vue'

export default {
  name: 'Audi',
  components: {AudiModal},
}

</script>

<style scoped>
    .show-btn {
        background: black;
        padding: 15px;
        margin-top: 20px;
        border-radius: 10px;
        font-size: 20px;

    }

    .audi-img {
        width: 100%;
        margin: 0;
        padding-top: 40px;
    }

</style>