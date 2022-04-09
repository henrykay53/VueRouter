<template>
    <CarView @toggle="toggleModal" modalColor="gray" color="Grey" carName='Audi' carImage="r8" :loading="loading" :carDetails="carDetails" :showModal="showModal"  />
</template>


<script>
import CarView from './CarView.vue'

export default {
  name: 'Audi',

  data() {
      return {
          showModal: false,
          carDetails: null,
          loading: false,
      }
  },


  components: {CarView},

  methods: {
      
      toggleModal() {
          this.showModal = !this.showModal

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
                    'X-RapidAPI-Key': 'ce7ad2394bmsh466aa978674ec47p1a7318jsn0a2ebe98c438'
                }
            };

        

          fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0', options)
	      .then(response => response.json())
	      .then(response => {
              this.loading = false;
              this.displayDetails(response)
            })
	      .catch(err => console.error(err)); 
        },

        displayDetails(response) {
            // console.log("namei", response[0]);
            this.carDetails = response[6];
            // this.model = response[0].model

        },
       
    }
}

</script>

<style scoped>

</style>