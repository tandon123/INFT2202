//Group Member Names: Saksham Tandon(100881399), Aastha Minhas(100859631), Aman Gulati

$(document).ready(function(){
    // error message will be hidden at the starting
    $("#ErrorMessage").hide(); 
    
    // Validating First Name and Last Name
    $("#firstName, #lastName").on("input", function(){
        var firstNameLength = $("#firstName").val().trim().length;
        var lastNameLength = $("#lastName").val().trim().length;
        if (firstNameLength < 2 || lastNameLength < 2) {
            $("#ErrorMessage").text("First Name and Last Name must be at least 2 characters long.").show();
        } else {
            $("#ErrorMessage").hide();
        }
    });
    
    // Validating Email
    $("#emailAddress").on("input", function(){
        var email = $("#emailAddress").val().trim();
        if (email.length < 8 || email.indexOf("@") === -1) {
            $("#ErrorMessage").text("Email must be at least 8 characters long and contain '@' symbol.").show();
        } else {
            $("#ErrorMessage").hide();
        }
    });
    
    // Validating Passwords
    $("#password, #confirmPassword").on("input", function(){
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        if (password.length < 6) {
            $("#ErrorMessage").text("Password must be at least 6 characters long.").show();
        } else if (password !== confirmPassword) {
            $("#ErrorMessage").text("Passwords do not match.").show();
        } else {
            $("#ErrorMessage").hide();
        }
    });
    
    // Handle Form Submission
    $("#registerForm").submit(function(event){
        event.preventDefault(); // Prevent the default form submission
        
        // Retrieving the data from the form
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#emailAddress").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        
        // validating firstnsme, lastname, email, password and confirm password
        if(firstName.trim() === "") {
            alert("Please enter your First Name.");
            return;
        }
        if(lastName.trim() === "") {
            alert("Please enter your Last Name.");
            return;
        }
        if(email.trim() === "") {
            alert("Please enter your Email Address.");
            return;
        }
        if(password.trim() === "") {
            alert("Please enter your Password.");
            return;
        }
        if(confirmPassword.trim() === "") {
            alert("Please confirm your Password.");
            return;
        }
        if(password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if(password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        
        // Registration successful
        alert("Registration successful!");
        // Clearing the form
        $("#registerForm")[0].reset();
    });
});