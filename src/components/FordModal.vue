<template>
      <div>
        <h2>Ford</h2>
        <p>Name: {{brand}}</p>
        <p>Model: {{model}}</p>
        <p>Engine Type: {{engine}}</p>
        <p>Year of Production: {{year}}</p>
    </div>
  
</template>

<script>
export default {
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

<style>

</style>