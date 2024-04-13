// Log that the script has been loaded
console.log('Script for loading photos is active');

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

// Create a new XMLHttpRequest object
let httpRequest = new XMLHttpRequest();

// Define the response handler for when the HTTP request changes state
httpRequest.onreadystatechange = function() {
    // Ensure the request has completed
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            // Parse the JSON response
            let responseData = JSON.parse(httpRequest.responseText);

            // Ensure there is sufficient data to update the UI
            if (responseData.length >= 2) {
                // Set the source and caption of the first photo
                document.getElementById('photo1').src = responseData[0].url;
                document.getElementById('caption1').innerText = responseData[0].title;

                // Set the source and caption of the second photo
                document.getElementById('photo2').src = responseData[1].url;
                document.getElementById('caption2').innerText = responseData[1].title;
            } else {
                console.error('Insufficient data to display photos and captions');
            }
        } else {
            // Log an error if the request was not successful
            console.error('Error fetching data:', httpRequest.status);
        }
    }
};

// Configure the GET request and initiate it
httpRequest.open('GET', apiUrl, true);
httpRequest.send();