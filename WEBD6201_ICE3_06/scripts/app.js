//Name:saksham tandon
//Date:30th jan 2024
//File: app.js


//change the class of each box. reordering the colours
//get the boxes with jquery\
let boxes = $('.box');

//loop through each box
boxes.each(function(index, box){
    //get the class of the current box
        let currentClass = $(box).attr('class');

//if the class is red, make it blue
if (currentClass === 'box red-box') {
    $(box).attr('class', 'blue-box');
}

//if the class is blue, make it green
    else if (currentClass === 'box blue-box') {
    $(box).attr('class', 'green-box');
    }

//if the class is green, make it red
else if (currentClass === 'box green-box') {
    $(box).attr('class', 'red-box');
    }

})

//createa button to open the modal
let button = $('<button>Open Modal</button>');
//Add the button to the page
$('#content').append(button);
button.on('click', function(){
    $('.lightbox').show();
})
//add a click event listner to the button

//when the button is closed, show the modal