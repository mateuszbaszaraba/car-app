import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cars: [
            { brand: 'bmw', model: 'serie 3', mileage: '142232' },
            { brand: 'mercedes-benz', model: 'a-class', mileage: '111814' },
            { brand: 'bmw', model: 'serie 5', mileage: '123571' },
        ]
    }
})