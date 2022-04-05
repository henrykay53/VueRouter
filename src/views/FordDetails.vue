<template>
  <h1>Welcome to Ford's Page</h1>
  <img  class="mustang-img" src="@/assets/cars/2022-Ford-Mustang-Shelby.jpg" alt="blue-mustang">
    <button class="show-btn">Show Car Detail</button>
</template>

<script>
export default {
    name: 'Ford'

}
</script>

<style scoped>
    .mustang-img {
        width: 100%;
        padding-top: 60px;
    }

    .show-btn {
        background: rgb(84, 137, 236);
        padding: 15px;
        margin-top: 20px;
        border-radius: 10px;
        font-size: 20px;

    }

</style>