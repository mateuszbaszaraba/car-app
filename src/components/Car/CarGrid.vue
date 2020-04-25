<template>
    <div class="cont">
        <ul>
            <router-link 
                tag="li" 
                to="car/1" 
                style="cursor: pointer"><i class="icon-cab"></i><br><p>Car 1</p></router-link>
            <router-link 
                tag="li" 
                to="car/2" 
                style="cursor: pointer"><i class="icon-cab"></i><br><p>Car 2</p></router-link>
            <router-link 
                tag="li" 
                to="car/3" 
                style="cursor: pointer"><i class="icon-cab"></i><br><p>Car 3</p></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cars: ['bmw']
        }
    }
}
</script>

<style lang="scss" scoped>

.cont {
    width: 100vw;
    height: 40vh;
}

ul {
    width: 90vw;
    height: 40vh;
    margin: auto;
    display: flex;
    justify-content: space-around;
}

ul > li {
    width: 25vw;
    height: 40vh;
    display: inline-block;
    text-align: center;
    border: 1px solid rgb(168, 168, 168);
    border-radius: 50px;
    -webkit-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
}

li > p {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
}

</style>