<template>
    <div>
        <p>Car ID: {{ $route.params.id }}</p>
        <button @click="confirmed = true">Confirm</button>
        <h4 v-if="confirmed"><b>Saved!</b></h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave (to, from, next) {
        if(this.confirmed) {
            next();
        } else {
            if (confirm('are you sure?')) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>