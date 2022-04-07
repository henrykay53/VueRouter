<template>
  <h1>Welcome to Ford's Page</h1>
  <img  class="mustang-img" src="@/assets/cars/2022-Ford-Mustang-Shelby.jpg" alt="blue-mustang">
  <div v-if="showModal">
      <FordModal />
  </div>
  
    <button class="show-btn" v-on:click="toggleModal">
        <span v-if="showModal">Hide Ford Details</span>
        <span v-if="!showModal">Show Ford Details</span>
    </button>
</template>

<script>

import FordModal from '../components/FordModal.vue'
export default {


    data() {
        return {
            showModal: false
        }
    },

    components: {FordModal},
    
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
        box-shadow: 0 2px 2px;
    }

    .mustang-img {
        width: 100%;
        padding-top: 60px;
    }

    .show-btn {
        background: rgb(84, 137, 236);
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 30px;
        border-radius: 10px;
        font-size: 20px;

    }

    

   
</style>