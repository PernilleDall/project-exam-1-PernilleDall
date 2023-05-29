const yourName = document.getElementById("yourname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const yourMessage = document.getElementById("yourmessage");

function validateYourName() {
    console.log(yourName);
    if (yourName.value.length < 5) {
        document.querySelector("#error").innerHTML += `<p>Name must have a minimum of 5 characters</p>`;
    }
}

function validateEmail() {
    console.log(email);
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value.match(validRegex)) {
        document.querySelector("#error").innerHTML += `<p>Valid Email format is required</p>`;
    }
}

function validateSubject() {
    if (subject.value.length < 15) {
        document.querySelector("#error").innerHTML += `<p>Subject must have a minimum of 15 characters</p>`;
    }
}

function validateYourMessage() {
    if (yourMessage.value.length < 25) {
        document.querySelector("#error").innerHTML += `<p>Your message must have a minimum of 25 characters</p>`;
    }
}

function submitForm() {
    validateYourName();
    validateEmail();
    validateSubject();
    validateYourMessage();
}

const submitButton = document.getElementById("submitbutton");

submitButton.addEventListener("click", (event) => {
    submitForm();
    event.preventDefault();
});
 
