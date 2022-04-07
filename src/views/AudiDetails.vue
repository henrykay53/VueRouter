<template>
    <h1>Welcome To Audi's Page</h1>
    <img class="audi-img" src="@/assets/cars/r8.jpg" alt="black-audi">

    <div v-if="showModal">
          <AudiModal />
    </div>
  
    <button class="show-btn" v-on:click="toggleModal">
        <span v-if="showModal">Show Audi Details</span>
        <span v-if="!showModal">Hide Audi Dtails</span>
    </button>
  
</template>

<script>
import AudiModal from '../components/AudiModal.vue'

export default {
  name: 'Audi',
  data() {
      return {
          showModal: false
      }
  },

  components: {AudiModal},

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
        box-shadow: 0 2px 2px grey;
    }

    .audi-img {
        width: 100%;
        margin: 0;
        padding-top: 40px;
    }

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

    

   

</style>