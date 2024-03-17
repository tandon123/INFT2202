//Group Member Names: Saksham Tandon(100881399), Aastha Minhas(100859631), Aman Gulati

//Add new ITEM to List
//Create Element
let element= document.createElement("li");
element.setAttribute('class','nav-item');
let link = document.createElement("a");
link.setAttribute('class', 'nav-link');
link.setAttribute('href','./humanresources.html');
link.innerHTML = 'Human Resources';
element.appendChild(link);
document.getElementById("about").after(element);



//change to product name to interest
document.getElementById('product').textContent="Interest";

//For contact page
var seconds=0;

var form = document.getElementById('form')
function displayseconds(){
    seconds +=1;
    document.getElementById("form")
}



// Add event listener to the submit button
document.getElementById("submit").addEventListener("click", function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Call the redirectPage() function only when the submit button is clicked
    window.location.assign("./index.html");
    alert("Thank You");
});
setTimeout(redirectPage,3000);
form.addEventListener('submit',function(event){
    event.preventDefault()

var name = document.getElementById('name').value
console.log(name)
var email = document.getElementById('number').value
console.log(number)
var email = document.getElementById('email').value
console.log(email)
var email = document.getElementById('password').value
console.log(password)
})
