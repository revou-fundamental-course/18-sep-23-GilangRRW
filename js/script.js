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



