//Saksham Tandon
//100881399

/* 
 * This line should configure the submit handler for your form.
 * It should use the submitAnimalForm method below.
 */
// put your code here


/* 
 * This line should get the list of available animals, then render the table when the page loads.
 * It should use the getAnimals and renderAnimalTable methods below.
 */
// put your code here

// Configure the submit handler for the form
document.querySelector('#create-container form').addEventListener('submit', submitAnimalForm);

// Get the list of available animals and render the table when the page loads
window.addEventListener('load', function() {
    getAnimals().then(renderAnimalTable).catch(function(error) {
        console.error('Error fetching animals:', error);
        // Display an error message
        var messageContainer = document.querySelector('#retrieve-container');
        messageContainer.innerHTML = '<div class="alert alert-danger" role="alert">Error fetching animals. Please try again later.</div>';
    });
});


/* 
 * renderAnimalTable
 * This method should take an array of animals, and display a table of them.
 * If the array is empty, it should hide the table and instead show a message that there are currently no animals.
 * @param Animal[];
 * @return void
 */
function renderAnimalTable(arrayOfAnimals) {
    var tableContainer = document.querySelector('#retrieve-container');
    var tableHTML = '';

    if (arrayOfAnimals.length === 0) {
        // If the array is empty, display a message that there are currently no animals
        tableHTML = '<div class="alert alert-info" role="alert">There are currently no animals.</div>';
    } else {
        // If the array is not empty, construct the table HTML
        tableHTML += '<table class="table">';
        tableHTML += '<thead><tr><th>Name</th><th>Heads</th><th>Legs</th><th>Sound</th></tr></thead>';
        tableHTML += '<tbody>';
        arrayOfAnimals.forEach(function(animal) {
            tableHTML += '<tr>';
            tableHTML += '<td>' + animal.name + '</td>';
            tableHTML += '<td>' + animal.heads + '</td>';
            tableHTML += '<td>' + animal.legs + '</td>';
            tableHTML += '<td>' + animal.sound + '</td>';
            tableHTML += '</tr>';
        });
        tableHTML += '</tbody>';
        tableHTML += '</table>';
    }

    // Update the table container with the constructed HTML
    tableContainer.innerHTML = tableHTML;
}


/* 
 * submitAnimalForm
 * This method should be what gets called when your form is submitted.
 * It should utilize the fetch methods below.
 * It should hide or show an error message if there is a problem.
 * If it is successful, it should do something to update the list of animals.
 * @param event;
 * @return void
 */
async function submitAnimalForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    try {
        // Make a fetch call using the POST method to /api/animal
        const response = await fetch('/api/animal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObject)
        });

        if (!response.ok) {
            // If there is a problem adding the animal, show an error message
            throw new Error('Failed to add animal');
        }

        // If the animal is successfully added, refresh the table of animals
        await refreshAnimalTable();

        // Clear the form fields
        form.reset();
    } catch (error) {
        console.error('Error submitting animal form:', error);
        // Display an error message
        const messageContainer = document.querySelector('#create-container');
        messageContainer.innerHTML = '<div class="alert alert-danger" role="alert">Error submitting animal form. Please try again later.</div>';
    }
}


/* 
 * postAnimal
 * This method should use fetch to post a new animal to the server.
 * It should only return a successful response from the server, or an object with an error message.
 * It should not modify the dom at all.
 * For full points, your fetch methods should utilize the URL, Headers, and Request classes.
 * @param event;
 * @return Animal | Error
 */
async function postAnimal(formDataObject) {
    try {
        // Make a fetch call using the POST method to /api/animal
        const response = await fetch('/api/animal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObject)
        });

        if (!response.ok) {
            // If there is an error response from the server, parse and return the error message
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        // If the response is successful, parse and return the posted animal data
        const postedAnimal = await response.json();
        return postedAnimal;
    } catch (error) {
        // Return an Error object with the error message
        return new Error('Failed to post animal: ' + error.message);
    }
}


/* 
 * getAnimal
 * This method should use fetch to get a list of animals from the server.
 * It should only return an array of animals, or an object with an error message.
 * It should not modify the dom at all.
 * For full points, your fetch methods should utilize the URL, Headers, and Request classes.
 * @param event | null;
 * @return Animal[] | Error
 */
async function getAnimals() {
    try {
        // Make a fetch call using the GET method to /api/animal
        const response = await fetch('/api/animal', {
            method: 'GET'
        });

        if (!response.ok) {
            // If there is an error response from the server, parse and return the error message
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        // If the response is successful, parse and return the array of animals
        const animals = await response.json();
        return animals;
    } catch (error) {
        // Return an Error object with the error message
        return new Error('Failed to get animals: ' + error.message);
    }
}
