"use strict";

const submitButton = document.getElementById('submitButton'); 
submitButton?.addEventListener('click', submitFunction);
const container = document.getElementById('main');
const form = document.getElementById('submitForm'); 

const numOfReviews = document.querySelector('#total').textContent;
let total = parseInt(numOfReviews);
const average = document.querySelector('#average').textContent;
let currentAverage = parseInt(average);

function submitFunction(){
    if (form.reportValidity()) {
        event.preventDefault();
        const rating = document.querySelector('#rating').value;
        const feedback = document.querySelector('#feedback').value
        const review = {rating, feedback};
        addReview(review);

        total++;
        const updateTotal = document.querySelector('#total');
        updateTotal.textContent = total;

        currentAverage = (currentAverage * total + parseInt(rating))/(total + 1);
        const updateAverage = document.querySelector('#average');
        updateAverage.textContent = currentAverage;
    }
}

function addReview(review){
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('card');
    reviewContainer.classList.add('rating-item');
    reviewContainer.classList.add('flex');
    
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');
    for (let step = 1; step <= 5; step++) {
        const star = document.createElement('i');
        star.classList.add('fa-star');
        if (step <= parseInt(review.rating)) {
            star.classList.add('fa-solid');
        }
        else {
            star.classList.add('fa-regular');
        }
        starContainer.append(star);
    }
    reviewContainer.append(starContainer);

    const reviewFeedback = document.createElement('p');
    reviewFeedback.classList.add('feedback');
    reviewFeedback.textContent = review.feedback;
    reviewContainer.append(reviewFeedback);
    
    container.append(reviewContainer);
}
