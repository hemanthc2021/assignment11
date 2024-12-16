


const button = document.getElementById("button");

function validate(event) {
event.preventDefault();
let name = document.getElementById("name");
let email = document.getElementById("email");
let feedback = document.getElementById("feedback");

event.preventDefault();

if(name.value == ""){
    nameMessages.style.display = 'block';
    nameMessages.innerHTML = "<p style='color:red'>Name is required!<p>"
    name.focus()
    feedbackMessages.style.display = 'none';
   
} else {
    nameMessages.style.display = 'none';
    feedbackMessages.style.display = 'none';
}
if(email.value == ""){
    emailMessages.style.display = 'block';
    emailMessages.innerHTML = "<p style='color:red'>Email is required!<p>"
    email.focus()
    feedbackMessages.style.display = 'none';
    return false
} else {
    let emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(email.value)) {
      emailMessages.style.display = 'block';
      emailMessages.innerHTML = "<p style='color:red'>Valid email is required!<p>"  
      email.focus();
      return false;
    } else{
        emailMessages.style.display = 'none';
    }
    emailMessages.style.display = 'none';
  }

  feedbackMessages.style.display = 'block';
  feedbackMessages.innerHTML = "<p style='color:green'>Thank you for your feedback!<p>"  
  document.feedbackForm.reset();



 }

button.addEventListener("click", validate)
