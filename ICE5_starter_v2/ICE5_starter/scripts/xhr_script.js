console.log('xhr_script.js loaded');

const postURL = 'https://jsonplaceholder.typicode.com/posts';
const commentURL = 'https://jsonplaceholder.typicode.com/comments';
const albumURL = 'https://jsonplaceholder.typicode.com/albums';
const photoURL = 'https://jsonplaceholder.typicode.com/photos';
const todoURL = 'https://jsonplaceholder.typicode.com/todos';
const userURL = 'https://jsonplaceholder.typicode.com/users';

const request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            const responseData = JSON.parse(request.responseText);
            console.log(responseData);

            updateElement('firstImage', 'firstCaption', responseData[0]);
            updateElement('secondImage', 'secondCaption', responseData[1]);
        } else {
            console.error('Error occurred while fetching data:', request.status);
        }
    }
};

function updateElement(imageId, captionId, data) {
    document.getElementById(imageId).src = data.url;
    document.getElementById(captionId).innerText = data.caption;
}

request.open('GET', photoURL, true);
request.setRequestHeader('Content-Type', 'application/json');
request.send();
