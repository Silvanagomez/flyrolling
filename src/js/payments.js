import './main';
import jQuery from 'jquery/dist/jquery';

const $ = jQuery;

window.chooseCard = () => {
    const cardData = document.getElementById('card-data');
    cardData.className = 'd-block';
    console.log($('#creditcardModal'));
    $('#creditcardModal').modal('toggle')
}