function makeMarquee () {
    const title = 'FIFTY Music Festival—November 10-12, Desert Valley';

    // an array constructor which creates a new empty array with 50 slots
    // the fill method will populate the array with specified items
    // join method joins together all of the elements in the array into one text string with a specified delineator
    const marqueeText = new Array(50).fill(title).join(' — ');

    // 1. grab our marquee span from the html
    // 2. we want to set our repeating title as the content
    const marquee = document.querySelector('.marquee span');
    marquee.innerHTML = marqueeText;

}

makeMarquee();


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// grab all of the .circles from the html
const circles = document.querySelectorAll('.circle')

// loop through circles array and apply animation
circles.forEach(function(circle, index) {
    circle.animate(
        [
            // keyframes
            { transform: 'scale(1)' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' }
        ],
        {
            // timing options
            // index is the position of the element in the circle array
            // timing is in miliseconds, multiply by each element's unique index number
            delay: 300 * index,
            duration: 3000,
            iterations: Infinity
        }
    );
})

const squiggles = document.querySelectorAll('.squiggle');

squiggles.forEach(function(squiggle, index) {
    // gets a random number between 0 and 45 using our random function generator from stack overflow
    const randomNumber = random(0, 45);
    // create a bit of randomness for animation delay
    const randomDelay = random(0, 3000);

    squiggle.animate(
        [
            { transform: 'rotate(0deg)'},
            { transform: 'rotate(' + randomNumber + 'deg)'},
            { transform: 'rotate(0deg)'}
        ],
        {
            delay: randomDelay,
            duration: 5000,
            iterations: Infinity
        }
    )
})