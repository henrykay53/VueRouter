<template>
      <div class="modal">
        <h2>Ford</h2>
        <p>Name: {{brand}}</p>
        <p>Model: {{model}}</p>
        <p>Engine Type: {{engine}}</p>
        <p>Color: {{color}}</p>
        <p>Year of Production: {{year}}</p>
    </div>
  
</template>

<script>

export default {

    name: 'FordModal', // I know this is not compulsory, I am just leaving it here to constantly remind me of the name of the component i am exporting

    data() {
        return {
            brand: 'Ford',
            model: 'Shelby',
            engine: 'V8',
            color: 'Blue',
            year: 2020
        }
    }

}
</script>

<style scoped>
      .modal {
          /* width: 100%; */
        width: 1000px;
        background: rgb(88, 89, 173);
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