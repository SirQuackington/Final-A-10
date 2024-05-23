function validateEmail() {
            var emailInput = document.getElementById("emailInput");
            var email = emailInput.value.trim();

            if (email === "") {
                alert("Please enter your email address.");
            } else {
                // Proceed to the next page or perform further actions
                alert("Email has been sent.");
                window.location.href = "index.html";
            }
        }