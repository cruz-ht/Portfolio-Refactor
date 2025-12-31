// JavaScript for Hamburger Menu (All Pages)

        // retrieving/assiging the hamburger menu
        const hamburger = document.querySelector(".hamburger-Menu")

        // retrieving the nav meu
        const navLinks = document.querySelector(".navbar")
 
        // letting js know for each click/attraction the iamge will toogle on/off
        hamburger.addEventListener("click",()=>{
        navLinks.classList.toggle("mobile-menu")
        })








// CONTACT FORM VALIDATION


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get input elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const number = document.getElementById("number");
    const message = document.getElementById("message");
    
    // Get error elements
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const numberError = document.getElementById("number-error");
    const messageError = document.getElementById("message-error");
    
    // letting the error display reset before checking again aka clearing any previous message 
    [nameError, emailError, numberError, messageError].forEach(el => {
      el.textContent = "";
      el.classList.remove("show");
    });

    [name, email, number, message].forEach(input =>
      input.classList.remove("error")
    );

    // letting the form be valid until proven
    let valid = true;
    
    //name
    if (name.value.trim() === "") {
      nameError.textContent = "* Please enter your name.";
      nameError.classList.add("show");
      name.classList.add("error");
      valid = false;
    }
    
    //email
    if (!email.value.includes("@") || email.value.trim() === "") {
      emailError.textContent = "* Please enter a valid email.";
      emailError.classList.add("show");
      email.classList.add("error");
      valid = false;
    }
    
    //phone number
    if (number.value.trim() === "") {
      numberError.textContent = "* Please enter your phone number.";
      numberError.classList.add("show");
      number.classList.add("error");
      valid = false;
    }
    
    //message
    if (message.value.trim().length < 10) {
      messageError.textContent = "* Message must be at least 10 characters.";
      messageError.classList.add("show");
      message.classList.add("error");
      valid = false;
    }
    
    // If everything is valid, submit the form
    if (valid) {
      form.submit();
    }
  });
});