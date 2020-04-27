<template>
    <div>
        Home Page
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam maxime 
            iure, dolorem, esse nemo maiores praesentium ipsum laborum libero fugit 
            asperiores architecto. Dolorum nulla cumque magnam sequi numquam repellat 
            asperiores!</p>

            <ul>
                <li v-for="car in carsy" :key="car.id">
                    <div v-for="(value, key) in car" :key="value.id">{{ key }}: {{ value }}</div>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    computed: {
        carsy() {
            return this.$store.state.cars
        }
    }
}
</script>