<template>

    <div class="modal" :style="{backgroundColor: modalColor}"> 
        <!-- <h2>{{carName}}</h2> -->
        <p>Brand: {{brand}}</p>
        <p>Model: {{model}}</p>
        <p>Engine Type: {{engine}}</p>
        <p>Color: {{color}}</p>
        <p>Year of Production: {{year}}</p>
    </div>

</template>

<script>
export default {

    name: 'CarModal',

    

    props: {

        carName: {
            type: String
        },

        brand: {
            type: String,
            required: false,
            // default: ''
        },
     
        model: {
            type: [String, Number],
            required: true,
        },

        engine: {
            type: [String, Number],
            required: true
        },

        color: {
            type: String,
            required: false,
        },
        
        year: {
            type: Number,
            required: true,
        },

        modalColor: {
            type: String,
            required: true,
        }
    },
    
}

</script>

<style scoped>

    .modal {
        width: 1000px;
        padding: 30px;
        border-radius: 10px;
        margin-top: 60px;
        margin-left: auto;
        margin-right: auto;
    }


    h2, p {
        padding: 10px;
        background: black;
        color: white;
        font-weight: bold;
        margin-bottom: 20px;
        border-radius: 10px;
    }

</style>