<template>
      <div class="modal">
        <h2>Benz</h2>
        <p>Name: {{brand}}</p>
        <p>Model: {{model}}</p>
        <p>Engine Type: {{engine}}</p>
        <p>Color: {{color}}</p>
        <p>Year of Production: {{year}}</p>
      </div>
</template>

<script>
export default {

    data()  {
        return  {
            brand: 'Benz',
            model: 'S-class',
            engine: 'V8',
            color: 'Silver',
            year: 2020,
            // showModal: true
        }
    }, 

// I want to experiment with this method and see if I can emit it to control the car details
    // methods: {
    //     toggleCarDetails() {
    //         this.showModal = !showModal
    //         this.emit('show')
    //     }
    // }

}

</script>

<style scoped>
    .modal {
        width: 1000px;
        background: grey;
        padding: 30px;
        border-radius: 10px;
        margin-top: 60px;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
     
    }

    h2, p {
        padding: 10px;
        background: white;
        font-weight: bold;
        margin-bottom: 20px;
        border-radius: 10px;
    }

</style>