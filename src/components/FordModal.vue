<template>
      <div class="modal">
        <h2>Ford</h2>
        <p>Name: {{brand}}</p>
        <p>Model: {{model}}</p>
        <p>Engine Type: {{engine}}</p>
        <p>Year of Production: {{year}}</p>
    </div>
  
</template>

<script>

export default {
    
    name: 'FordModal',

    data() {
        return {
            brand: 'Ford',
            model: 'Shelby',
            engine: 'V8',
            year: 2020
        }
    }

}
</script>

<style scoped>
      .modal {
        width: 1000px;
        background: rgb(88, 89, 173);
        padding: 30px;
        border-radius: 10px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
     
    }


    h2, p {
        padding: 10px;
        background: green;
        margin-bottom: 20px;
        border-radius: 10px;
    }

</style>