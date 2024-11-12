'use strict';
/*  json data is from https://api.sampleapis.com/ */

const icedCoffeeButton = document.getElementById('iced-coffee');
const hotCoffeeButton = document.getElementById('hot-coffee');

    icedCoffeeButton.addEventListener('click', () => {
      fetch('iced.json')
        .then(response => response.json())  
        .then(data => {
          console.log('Iced Coffee Data:', data);  
        })
        .catch(error => {
          console.error('Error fetching Iced Coffee data:', error);
        });
    });

    // Event listener for Hot Coffee button
    hotCoffeeButton.addEventListener('click', () => {
      fetch('hot.json')
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
          console.log('Hot Coffee Data:', data);  // Log the data to the console
        })
        .catch(error => {
          console.error('Error fetching Hot Coffee data:', error);
        });
    });