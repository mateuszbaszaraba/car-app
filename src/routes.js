import Home from './components/Home.vue';
const Car = resolve => {
    require.ensure(['./components/Car/Car.vue'], () => {
        resolve(require('./components/Car/Car.vue'));
    });
};
const CarEdit = resolve => {
    require.ensure(['./components/Car/CarEdit.vue'], () => {
        resolve(require('./components/Car/CarEdit.vue'));
    });
};
const CarGrid = resolve => {
    require.ensure(['./components/Car/CarGrid.vue'], () => {
        resolve(require('./components/Car/CarGrid.vue'));
    });
};
const CarDetails = resolve => {
    require.ensure(['./components/Car/CarDetails.vue'], () => {
        resolve(require('./components/Car/CarDetails.vue'));
    });
};

export const routes = [
    { path: '', name: 'home', component: Home },
    { path: '/car', component: Car, children: [
        { path: '', component: CarGrid },
        { path: ':id', component: CarDetails },
        { path: ':id/edit', component: CarEdit },
    ] },
    { path: '*', redirect: { name: 'home' } }
]