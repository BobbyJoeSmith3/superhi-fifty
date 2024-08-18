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


document.querySelectorAll('.shape').forEach(function(shape) {
    shape.animate(
    [
        // keyframes
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' }
    ],
    {
        // timing options
        duration: 3000,
        iterations: Infinity,
    },
    );
})

// document.querySelector('.shape').animate(
//     [
//         // keyframes
//         { transform: 'scale(1)' },
//         { transform: 'scale(1.2)' },
//         { transform: 'scale(1)' }
//     ],
//     {
//         // timing options
//         duration: 3000,
//         iterations: Infinity,
//     },
// );