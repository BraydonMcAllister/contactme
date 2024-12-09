document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactme_form");
    const contactWrapper = document.getElementById("contactme_wrapper");
  
    form.addEventListener("submit", (e) => {
      if (!validateForm(e)) {
        e.preventDefault();
        return;
      }
  
      const formData = new FormData(form);
      fetch(form.action, {
        method: "POST",
        body: formData
      })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an issue submitting the form. Please try again later.");
        });
    });
  });
  
  function displayThankYouPage() {
    document.getElementById("contactme_wrapper").innerHTML = `
      <div id="form_wrapper" class="thank_you_wrapper">
        <h1>Thank You!</h1>
        <p>Your message has been sent successfully.</p>
        <button type="button" onclick="displayFormPage()">Go Back to Form</button>
      </div>
    `;
  }
  
  function displayFormPage() {
    document.getElementById("contactme_wrapper").innerHTML = `
      <div id="form_wrapper">
        <form id="contactme_form" name="contactme_form" method="POST" onsubmit="return validateForm(event)">
          <h1 id="main_header">Contact Me</h1>
          <div id="name_wrapper" class="textarea_wrapper">
            <input
              id="name"
              class="basic_input"
              type="text"
              name="name"
              autocomplete="off"
              placeholder="NAME"
            />
          </div>
          <div id="email_wrapper" class="textarea_wrapper">
            <input
              id="email"
              class="basic_input"
              type="email"
              name="email"
              autocomplete="off"
              placeholder="EMAIL"
            />
          </div>
          <div id="message_wrapper" class="textarea_wrapper">
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="MESSAGE (optional)"
            ></textarea>
          </div>
          <div id="submitbutton_wrapper">
            <input id="submit_button" type="submit" value="SEND" />
          </div>
        </form>
      </div>
    `;
  }
  
  function validateForm(event) {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
  
    const invalidChars = /[#\$%\^&\*\+\-=/\\]/;
    let isError = false;
  
    clearErrors();
  
    if (nameField.value.trim() === "") {
      highlightError(nameField, "Name must not be blank");
      isError = true;
    } else if (invalidChars.test(nameField.value)) {
      highlightError(nameField, "Invalid character in name");
      isError = true;
    }
  
    if (emailField.value.trim() === "") {
      highlightError(emailField, "Email must not be blank");
      isError = true;
    } else if (invalidChars.test(emailField.value)) {
      highlightError(emailField, "Invalid character in email");
      isError = true;
    }
  
    if (invalidChars.test(messageField.value)) {
      highlightError(messageField, "Invalid character in message");
      isError = true;
    }
  
    if (isError) {
      document.getElementById("contactme_wrapper").style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    }
  
    if (isError) {
      event.preventDefault();
    }
  
    return !isError;
  }
  
  function clearErrors() {
    const fields = ["name", "email", "message"];
    fields.forEach((id) => {
      const field = document.getElementById(id);
      field.placeholder = id.toUpperCase();
      field.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      field.style.color = "";
    });
  
    document.getElementById("contactme_wrapper").style.backgroundColor = "rgba(0, 0, 255, 0.1)";
  }
  
  function highlightError(field, message) {
    field.style.backgroundColor = "#EA3546";
    field.style.color = "white";
    field.placeholder = message;
    field.value = "";
  }
  