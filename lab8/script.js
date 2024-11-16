'use strict';
/*  json data is from https://api.sampleapis.com/ */

const icedButton = document.getElementById('iced');
const icedJson = 'data/iced.json';
const hotButton = document.getElementById('hot');
const hotJson = 'data/hot.json';
const container = document.querySelector('.container');

icedButton.addEventListener("click", getIcedJson);
hotButton.addEventListener("click", getHotJson);

async function getIcedJson() { 
  try {
    const response = await fetch(icedJson);

    if (!response.ok) {
			throw Error(`Error: ${response.url} ${response.statusText}`);
		}
		
		const data = await response.json();
    console.log(data);
    addDrinks(data);

  } catch (error) {
		console.log(error.message);
	}	
}

async function getHotJson() { 
  try {
    const response = await fetch(hotJson);

    if (!response.ok) {
			throw Error(`Error: ${response.url} ${response.statusText}`);
		}
		
		const data = await response.json();
    console.log(data);
    addDrinks(data);

  } catch (error) {
		console.log(error.message);
	}	
}

function addDrinks(drinks) {
  container.innerHTML = '';

  drinks.forEach(drink=>{
    const article = document.createElement('article'); 
    container.append(article);
    article.classList.add('card');

    const image = document.createElement('img');
    article.append(image);
    image.src = drink.image;
    image.alt = drink.title;

    const contentDiv = document.createElement('div');
    article.append(contentDiv);
    contentDiv.classList.add('content');

    const h3 = document.createElement('h3');
    contentDiv.append(h3);
    h3.textContent = drink.title;

    const p = document.createElement('p');
    contentDiv.append(p);
    p.textContent = `${drink.description} Ingredients include:`;  

    const ingredientsDiv = document.createElement('div');
    contentDiv.append(ingredientsDiv);
    ingredientsDiv.classList.add('ingredients');

    drink.ingredients.forEach(ingredient=> {
      const div = document.createElement('div');
      ingredientsDiv.append(div);
      div.textContent = ingredient;
      div.classList.add('ingredient');
    })
  })
}

