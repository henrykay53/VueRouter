<template>
    <div class="">
        
        <h1>Welcome To {{carName}}'s Page</h1>
        <img class="car-img" :src="require(`@/assets/cars/${carImage}.jpg`)" alt="black-audi">

        <div class="" v-if="loading">Loading...</div>
        <div v-if="showModal && carDetails">
            <CarModal :brand="carDetails.make" :year="carDetails.year" :modalColor="modalColor" :model="carDetails.model" :engine="carDetails.id" :showbtn="showbtn" :color="color" />
        </div>
    
        <button class="show-btn" @click="toggle" :style="{backgroundColor: showbtn}">
            <span v-if="!showModal">Show {{carName}} Details</span>
            <span v-if="showModal">Hide {{carName}} Details</span>
        </button>
  
    </div>
</template>

<script>
import CarModal from '../components/CarModal.vue'

export default {
    props: ['carName', 'carImage', 'color', 'showModal', 'carDetails', 'loading', 'modalColor', 'showbtn'],

    components: {
        CarModal,
    },

    methods: {
        toggle() {
            this.$emit('toggle');
        },
    }
}
</script>

<style scoped>
.show-btn {
        
        background: black;
        color: white;
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 30px;
        border-radius: 10px;
        border: none;
        font-size: 20px;

    }

    
    h1 {
        display: flex;
        justify-content: center;
        letter-spacing: 1rem;
    }

    button {
        border: none;
        box-shadow: 0 2px 2px grey;
    }

    .car-img {
        width: 100%;
        margin: 0;
        padding-top: 40px;
    }
</style>