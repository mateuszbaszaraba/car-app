<template>
    <div>
        <p>Car id: {{ $route.params.id }}</p>
        <router-link :to="{name: 'carEdit'}" tag="button">Edit car</router-link>

        <hr>
        <router-link to="/car/1" tag="button">Go to car 1</router-link>
        <router-link to="/car/2" tag="button">Go to car 2</router-link>
        <router-link to="/car/3" tag="button">Go to car 3</router-link>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>