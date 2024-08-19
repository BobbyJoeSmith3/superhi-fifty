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



const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// grab all of the .circles from the html
const circles = document.querySelectorAll('.circle')

// loop through circles array and apply animation
circles.forEach((circle, index) => {
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

squiggles.forEach((squiggle, index) => {
    // gets a random number between 0 and 45 using our random function generator from stack overflow
    const randomNumber = random(0, 45);
    // create a bit of randomness for animation delay
    const randomDelay = random(0, 2000);

    squiggle.animate(
        [
            { transform: 'rotate(0deg)'},
            { transform: `rotate(${randomNumber}deg)`},
            { transform: 'rotate(0deg)'}
        ],
        {
            delay: randomDelay,
            duration: 5000,
            iterations: Infinity
        }
    )
})


// detect when an element is in-view in the viewport
// when .section enters the viewport add class 'in-viewport'
// when it exits remove class 'in-viewport'
inView('.section')
    .on('enter', section => {
        // classList.add is the same as jQuery's .addClass() method
        section.classList.add('in-viewport')
    })
    .on('exit', section => {
        section.classList.remove('in-viewport')
    });


// set the class to add only once we have scrolled 20% of our section into the viewport
inView.threshold(0.2);


// 1. select each section on the page and loop through them
// 2. in each section we want to grab the artists and shapes
// 3. add transition and delay effects for both artists and shapes
// 4. make shapes fade in only after the artists

const sections = document.querySelectorAll('.section');

sections.forEach((section, index) => {
    // use querySelectorAll on our 'section' to only find elements 
    // inside of our section vs. entire document
    const artists = section.querySelectorAll('.lineup li');
    const shapes = section.querySelectorAll('.shape');

    artists.forEach((artist, index) => {
        const delay = index * 100;
        artist.style.transitionDelay = `${delay}ms`;
    })

    shapes.forEach((shape, index) => {
        // only start once all of the artists have faded in using the .length property
        const delay = (artists.length + index) * 100;
        shape.style.transitionDelay = `${delay}ms`;
    })

})