// sendSuccess.innerHTML = "Terima Kasih! Data anda telah kami terima. Silahkan tunggu beberapa saat." +
//         "Apabila sales belum menghubungi 1x24 jam setelah anda mengirimkan data" +
//         "Silahkan input ulang data."; 

// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Slider
var slideIndex = 1;
var slideInterval = 3000; // Change this value to adjust the slide interval (in milliseconds)

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);  
}

showSlides(slideIndex);

// Automatically transition to the next slide
setInterval(function() {
    nextSlide();
}, slideInterval);



// * validate email
function validateEmail() {
    // var emailValue = document.getElementById("email").value;
    const emailValue = document.forms["contact-form"]["email"].value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailValue === ""){
        document.getElementById("error-email").innerHTML = "Email tidak boleh kosong!";
        return false;
    } else if (!emailRegex.test(emailValue)) {
        document.getElementById("error-email").innerHTML = "Email tidak valid!";
        return false;
    }

    return true;
}


// * validasi interest (not required)
function validateInterest() {
    // var interestValue = document.getElementById("interest").value;
    const interestValue = document.forms["contact-form"]["interest"].value;

    // * not requred
    return true;
}

function removeError() {
    var errorName = document.getElementById("error-name");
    var errorEmail = document.getElementById("error-email");
    var errorInterest = document.getElementById("error-interest");

    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorInterest.innerHTML = "";

    return true;
}

function removeValue() {
    const nameValue = document.forms["contact-form"]["your-name"].value;
    const emailValue = document.forms["contact-form"]["email"].value;
    const interestValue = document.forms["contact-form"]["interest"].value;

    nameValue.innerHTML = "";
    emailValue.innerHTML = "";
    interestValue.innerHTML = "";
}


// ! validasi form
function validateForm() {
    removeError();

    var nameValid = validateName();
    var emailValid = validateEmail();
    var interestValid = validateInterest();

    // return nameValid && emailValid && interestValid;

    // cek semua validasi
    if (nameValid && emailValid && interestValid) {
        showSuccessOverlay();
    }

    return false;
}

function showSuccessOverlay() {
    var sendSuccess = document.getElementById("send-success");
    sendSuccess.innerHTML = "Terima Kasih! Data anda telah kami terima. Silahkan tunggu beberapa saat." +
                            " Apabila sales belum menghubungi 1x24 jam setelah anda mengirimkan data" +
                            " Silahkan input ulang data."; 

    var successOverlay = document.getElementById("success-overlay");
    successOverlay.style.display = "flex";

    document.getElementById("close-button").addEventListener("click", function() {
        successOverlay.style.display = "none";
    });
}

// Calculator

    // Get the input element
const input = document.getElementById("input");

// Get the buttons
const buttons = document.querySelectorAll("button");

// Add event listeners to the buttons
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Get the button value
        const value = event.target.value;

        // Check if the button is an operator, a number, or a special key
        if (value === "+" || value === "-" || value === "*" || value === "/") {
            // Append the operator to the input
            input.value += value;
        } else if (value >= "0" && value <= "9") {
            // Append the number to the input
            if (input.value === "0") {
                // Replace the initial zero with the number
                input.value = value;
            } else {
                // Append the number to the input
                input.value += value;
            }
        } else if (value === ".") {
            // Append the decimal point to the input
            if (!input.value.includes(".")) {
                // Only append if there is no decimal point already
                input.value += value;
            }
        } else if (value === "=") {
            // Evaluate the expression and display the result
            try {
                // Use eval to calculate the result
                const result = eval(input.value);

                // Check if the result is a valid number
                if (isNaN(result) || !isFinite(result)) {
                    // Display an error message
                    input.value = "Error";
                } else {
                    // Display the result
                    input.value = result;
                }
            } catch (error) {
                // Display an error message
                input.value = "Error";
            }
        } else if (value === "C") {
            // Clear the input
            input.value = "0";
        } else if (value === "<") {
            // Delete the last character from the input
            if (input.value.length > 1) {
                // Remove the last character
                input.value = input.value.slice(0, -1);
            } else {
                // Reset the input to zero
                input.value = "0";
            }
        }
    });
});



