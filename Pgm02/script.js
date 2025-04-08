function showMessage() {
     alert("Hello! Welcome to my website.");
}

function submitForm() {
     let name = document.getElementById("name").value;
     let email = document.getElementById("email").value;

     if (name && email) {
          document.getElementById("message").innerText =
               "Thank you, " + name + "! Your form has been submitted.";
          return false; // Prevent form from actually submitting
     }

     return false;
}
