import * as Helpers from './utils/helpers';


const button = document.querySelector('#check');
button.addEventListener('click', (e) => {
    const quantity = document.querySelector('#meat-quantity').value || 1;
    const interval = document.querySelector('#interval').value || 1;

    const amount = quantity / 1000;
    const data = Helpers.getMetadata();
    const beef = data.find(product => product.name === 'beef');

    document.write(`${beef.waterPerKg * amount * interval}ml`);
});