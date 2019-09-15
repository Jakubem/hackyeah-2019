import * as Helpers from './utils/helpers';

const data = Helpers.getMetadata();

const config = {};

window.config = config;

const render = () => {
  const quantity = document.querySelector('#meat-quantity').value || 1;
  const interval = document.querySelector('#interval').value || 1;

  const amount = quantity / 1000;
  const meetTypeMultiplier = data.find(product => product.name === config.type).waterPerKg;
  const value = Number(Number.parseFloat(`${meetTypeMultiplier * amount * interval / 1000}`).toFixed(2)); // 1000 makes it liters
  document.querySelector('.display').value = `${value} liters`;
  document.querySelector('.meat-quantity__output').value = quantity;
  document.querySelector('.interval__output').value = interval;
}

Object.defineProperty(config, 'type', {
  get() {
    return document.querySelector('input[name="food-type"]:checked').value;
  },
});

render();

document.querySelectorAll('input').forEach(e => e.addEventListener('input', render));

