(function(){
  emailjs.init({
    publicKey: "2feiKTNT-tWQril-v",
  });
})()

function showAlert(message, type) {
  const alertDiv = document.getElementById("alert")
  alertDiv.textContent = message
  alertDiv.className = "alert " + type
  alertDiv.style.display = "block"
  setTimeout(() => {
    alertDiv.style.display = "none";
  }, 3000);
}

function checkFormValidity() {
  const form = document.getElementById("contact-form")
  const submitButton = document.getElementById("submit-btn")
  submitButton.disabled = !form.checkValidity();
}

const form = document.getElementById("contact-form")
const inputs = form.querySelectorAll("input, textarea")

checkFormValidity();

inputs.forEach(input => {
  input.addEventListener("input", checkFormValidity);
})

form.addEventListener("submit", function(event) {
event.preventDefault()
emailjs.sendForm("service_wmp7hrh", "template_3x6g12c", form)
  .then(function() {
    checkFormValidity()
    showAlert("Email sent successfully!", "success")
    form.reset();
  }, function(error) {
    console.log("Error: ", error)
    showAlert("Failed to send your message. Please try again.", "error");
  });
})