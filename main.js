//scope is overriden by strict mode in browser 
function validateForm(){
    let name_ = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let invalidChars = ['#', '$', '%', '^', '&', '*', '+', '-', '=', '/', '\\'];
    let invalidCharsInName = [];
    let invalidCharsInEmail = [];
    let invalidCharsInMessage = [];
    let numErrorsInName = 0 ;
    let numErrorsInEmail = 0;
    let numErrorsinMessage = 0;

    let contactme_wrapper = document.getElementById("contactme_wrapper");
    let errorColor = "rgba(255, 0, 0, 0.1)";
    

   
    if(name_.value.length < 1){
        name_.style.backgroundColor = "rgba(255, 100, 100, 0.7)";
        name_.placeholder = "name must not be blank";
        isError = true;
    }
    if(email.value.length < 1){
        email.style.backgroundColor = "rgba(255, 100, 100, 0.7)";
        email.placeholder = "email must not be blank";
        isError = true;
    }
    
        for(let i = 0; i < invalidChars.length; i++){
            if(name_.value.includes(invalidChars[i])){
                invalidCharsInName[numErrorsInName] = invalidChars[i];
                numErrorsInName++;
                isError = true;
            }
            if(email.value.includes(invalidChars[i])){
                invalidCharsInEmail[numErrorsInEmail] = invalidChars[i];
                numErrorsInEmail++;
                isError = true;
            }
            if(message.value.includes(invalidChars[i])){
                invalidCharsInMessage[numErrorsinMessage] = invalidChars[i];
                numErrorsinMessage++;
                isError = true;
            }
        }

        if(invalidCharsInName.length > 0){
            name_.style.backgroundColor = "rgba(255, 100, 100, 0.7)";
            name_.placeholder = "invalid character in name: " + invalidCharsInName.toString();  
            name_.value = '';
            isError = true;
        }
        if(invalidCharsInEmail.length > 0){
            email.style.backgroundColor = "rgba(255, 100, 100, 0.7)";
            email.placeholder = "invalid character in email: " + invalidCharsInEmail.toString();   
            email.value = '';
            isError = true;
        }
        if(invalidCharsInMessage.length > 0){
            message.style.backgroundColor = "rgba(255, 100, 100, 0.7)";
            message.placeholder = "invalid character in message: " + invalidCharsInMessage.toString();  
            message.value = '';
            isError = true;
        }

        if(isError){
            contactme_wrapper.style.backgroundColor = errorColor;
        }
 
   return !isError; //if false, form submission false, won't submit
}

function clearErrors(){
    let name_ = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    name_.placeholder = "NAME";
    name_.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

    email.placeholder = "EMAIL"; 
    email.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

    message.placeholder = "MESSAGE (optional)"; 
    message.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

    let contactme_wrapper = document.getElementById("contactme_wrapper");
    let defaultColor = "rgba(0, 0, 255, 0.1)";
    contactme_wrapper.style.backgroundColor = defaultColor;
}

