console.log('app.js loaded')

// Load the user class script with an alias
const script = document.createElement('script');
script.src = 'userClass.js';
script.setAttribute('data-alias', 'UserClass');
document.body.appendChild(script);

/**
 * IIFE to insert nav bar at the top of each page
 */
$(function () {
    let navBar = `<div class="naviation">
                    <nav class="nav">
                        <a class="nav-link active" href="index.html">Home</a>
                        <a class="nav-link" href="slideshow.html">Slideshow</a>
                        <a class="nav-link disabled" id="username" href="#"></a>
                        <a class="nav-link" href="form.html">Form</a>
                    </nav>
                </div>`

    // Replace the nav-holder with the navBar content
    $('.nav-holder').replaceWith(navBar);
});

/**
 * Function to add styling to all links on the page
 */
$(function () {
    $("a").addClass("fancy-link");
});

/**
 * Function to demo adding content with .text() and .html()
 */
$(function () {
    let text = "It is one of his best works!";
    let newP = $("<p></p>").html(`<strong>${text}</strong>`);
    $("#content-div").append(newP);
});

/**
 * Function to demo adding toggle to button
 */
$(function () {
    $("button").click(function () {
        $(this).parent().find("p").each(function () {
            if ($(this).hasClass("toggleHide")) {
                $(this).removeClass("toggleHide").addClass("toggleShow");
            } else {
                $(this).removeClass("toggleShow").addClass("toggleHide");
            }
        });
    });
});

// Form jQuery

// If the submit button is present
if ($("#btnRegSubmit").length) {
    $("#btnRegSubmit").click(function (e) {
        e.preventDefault(); // Prevent the default submit action

        // Create a new user
        let user = new UserClass.User();

        // Get input values
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let username = $("#username").val();
        let email = $("#email").val();
        let password = $("#password").val();

        // Validate input fields
        let firstNameValid = user.validateFirstName(firstName);
        let lastNameValid = user.validateLastName(lastName);
        let usernameValid = user.validateUsername(username);
        let passwordValid = user.validatePassword(password);

        // Display error messages if validation fails
        if (!firstNameValid) {
            $("#firstNameError").text("Please enter a valid first name.");
        } else {
            $("#firstNameError").text("");
        }

        if (!lastNameValid) {
            $("#lastNameError").text("Please enter a valid last name.");
        } else {
            $("#lastNameError").text("");
        }

        if (!usernameValid) {
            $("#usernameError").text("Please enter a valid username.");
        } else {
            $("#usernameError").text("");
        }

        if (!passwordValid) {
            $("#passwordError").text("Please enter a valid password.");
        } else {
            $("#passwordError").text("");
        }

        // Debug statement for user object
        console.log(`UserDetails: ${user.displayUser()}`);
    });
}

// If reset button is present
if ($("#btnReset").length) {
    $("#btnReset").click(function () {
        // Clear all error messages
        $(".error").text("");
    });
}

// Slideshow

// If there's a gallery class on the page
if ($(".gallery").length) {
    rotateGallery();
}

function rotateGallery() {
    let images = [
        "./images/portraits/portrait-01.jpg",
        "./images/portraits/portrait-02.jpg",
        "./images/portraits/portrait-03.jpg",
        "./images/portraits/portrait-04.jpg",
        "./images/portraits/portrait-05.jpg",
        "./images/portraits/portrait-06.jpg",
        "./images/portraits/portrait-07.jpg",
        "./images/portraits/portrait-08.jpg",
        "./images/portraits/portrait-09.jpg",
        "./images/portraits/portrait-10.jpg",
        "./images/portraits/portrait-11.jpg",
        "./images/portraits/portrait-12.jpg",
        "./images/portraits/portrait-13.jpg",
        "./images/portraits/portrait-14.jpg",
        "./images/portraits/portrait-15.jpg",
        "./images/portraits/portrait-16.jpg",
        "./images/portraits/portrait-17.jpg",
        "./images/portraits/portrait-18.jpg",
    ];

    let index = 0;
    let galleryImage = $(".gallery img");

    setInterval(function () {
        index = (index + 1) % images.length;
        galleryImage.fadeOut("slow", function () {
            $(this).attr("src", images[index]).fadeIn("slow");
        });
    }, 3000); // Rotate every 3 seconds
}
