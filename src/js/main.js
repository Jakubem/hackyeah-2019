import * as Helpers from './utils/helpers';

const data = Helpers.getMetadata();

const config = {};

window.config = config;

const render = () => {
    const quantity = document.querySelector('#meat-quantity').value || 1;
    const interval = document.querySelector('#interval').value || 1;

    const amount = quantity / 1000;
    const meetTypeMultiplier = data.find(product => product.name === config.type).waterPerKg;
    document.querySelector('.display').innerHTML = meetTypeMultiplier * amount * interval / 1000; // 1000 makes it liters 
}

Object.defineProperty(config, 'type', {
    get() {
        return document.querySelector('input[name="food-type"]:checked').value;
    },
});

document.querySelectorAll('input').forEach(e => e.addEventListener('click', render));

