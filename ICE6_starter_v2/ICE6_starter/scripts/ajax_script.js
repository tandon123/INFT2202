//Saksham Tandon
//100881399
//to add the photos




console.log('ajax_script.js loaded');

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// Function to get random photos and display them in the HTML
function getRandomPhotos() {

  $.get(url_photos, function(photos) {
    // Shuffle the array of photos
    photos = shuffleArray(photos);

    // Take the first two photos
    let photo1 = photos[0];
    let photo2 = photos[1];

    // Set the source of the image elements in the HTML
    $('#photo1').attr('src', photo1.url);
    $('#photo2').attr('src', photo2.url);
  });
}

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Call the function for each URL and log it
$.get(url_posts, function(data) {
  console.log('Posts data:', data);
});

$.get(url_comments, function(data) {
  console.log('Comments data:', data);
});

$.get(url_albums, function(data) {
  console.log('Albums data:', data);
});

$.get(url_photos, function(data) {
  console.log('Photos data:', data);
});

$.get(url_todos, function(data) {
  console.log('Todos data:', data);
});

$.get(url_users, function(data) {
  console.log('Users data:', data);
});

// Call the function to display random photos
getRandomPhotos();
