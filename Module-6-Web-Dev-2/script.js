const elementToStyle = document.getElementById("sign-up-link");

elementToStyle.style.color = "red";

// Inline events
function myFunction() {
    document.getElementById("sign-up-link").innerText = "Button Clicked";

}

// Event Listeners

const contactButton = document.getElementById("contact-link");

contactButton.addEventListener("click", function() {
    contactButton.innerText = "Button Clicked";
    contactButton.style.backgroundColor = "purple";
    contactButton.style.color = "white";
});