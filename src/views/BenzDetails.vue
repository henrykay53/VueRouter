<template>
    <h1>Welcome to Benz Page</h1>
    <img  class="benz-img" src="@/assets/cars/Benz.jpg" alt="Silver-benz">

    <div v-if="showModal">
        <BenzModal/>
    </div>

    <button class="show-btn" v-on:click="toggleModal">
        <span v-if="showModal">Hide Benz Details</span>
        <span v-if="!showModal">Show Benz Details</span>
    </button>
   
  
</template>

<script>

import BenzModal from '../components/BenzModal.vue'

export default {
    name: 'Benz',
    data() {
        return {
            showModal: false
        }
    },

    components: {BenzModal}, 


    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        }

    }
}

</script>

<style scoped>  

    h1 {
        display: flex;
        justify-content: center;
        letter-spacing: 1rem;
    }

    button {
        border: none;
        box-shadow: 0 2px 2px black;
    }

    .benz-img {
        width: 100%;
        margin: 0;
        padding-top: 40px;
    }

    .show-btn {
        background: grey;
        color: white;
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 30px;
        border-radius: 10px;
        border: none;
        font-size: 20px;

    }

  

 


</style>