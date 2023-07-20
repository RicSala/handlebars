import { starRatingHTML } from './rating-html.js';




export const addInteractivity = (elementName) => document.addEventListener('DOMContentLoaded', (event) => {

    console.log('DOM fully loaded and parsed')


    const ratingPlaceholder = document.getElementById(elementName);
    ratingPlaceholder.innerHTML = starRatingHTML;

    const stars = document.querySelectorAll('.star');

    stars.forEach((star, index) => {
        star.addEventListener('click', (e) => {
            console.log(`Star #${index + 1} was clicked`);
        });
    });
});

export const toggleFavorite = (elementName) => {
    const favoriteButton = document.getElementById(elementName);
    console.log(favoriteButton)
    favoriteButton.addEventListener('click', (e) => {
        console.log('Favorite button was clicked');
        // add the class fill-rose-500 if it doesn't exist and remove fill-neutral-500/70 and viceversa
        favoriteButton.classList.toggle('fill-rose-500');
        favoriteButton.classList.toggle('fill-neutral-500/70');
    });
};

// create a class for a "rating component" that can be reuse and has inputs numberOfStarts and elementName
// rating-component.js
export class Rating {
    constructor(containerId, name, min, max) {
        this.containerId = containerId;
        this.name = name;
        this.min = min;
        this.max = max;
    }

    render() {
        // get the container for the stars
        const ratingContainer = document.getElementById(this.containerId);
        if (!ratingContainer) {
            console.error(`Container with id ${this.containerId} not found`);
            return;
        }

        // add the stars
        for (let i = 0; i < this.max; i++) {
            const star = document.createElement('div');
            star.textContent = '⭐';
            star.classList.add('star');

            // add the click event listener
            star.addEventListener('click', () => {
                console.log(`Star #${i + 1} in ${this.name} was clicked.`);
            });

            // append the star to the container
            ratingContainer.appendChild(star);
        }
    }
}



