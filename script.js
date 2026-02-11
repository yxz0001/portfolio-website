
    //  email double check 

function checkEmails() {
    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirmEmail").value;
    return email === confirmEmail;
}

function checkDate() {
    let selectedDate = new Date(document.getElementById("date").value);
    let today = new Date();

    today.setHours(0, 0, 0, 0);

   
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    return selectedDate >= tomorrow;
}

function validateForm() {
    if (!checkEmails()) {
        alert("Error: Email addresses do not match.");
        return false;
    }

    if (!checkDate()) {
        alert("Error: Project date must be at least 1 day in the future.");
        return false;
    }

    //  form 
    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    let duration = document.getElementById("duration").value;

    //  message
    let summary =
        "Confirm Project Enquiry\n\n" +
        "To: 250101861@aston.ac.uk\n\n" +
        "From: " + email + "\n" +
        "Name: " + firstName + "\n" +
        "Phone: " + phone + "\n\n" +
        "Project Description:\n" + description + "\n\n" +
        "Start Date: " + date + "\n" +
        "Duration: " + duration + " weeks\n\n" +
        "Do you want to confirm this enquiry?";

    // Confirmation 
    let confirmSubmission = confirm(summary);

    if (confirmSubmission) {
        alert("Enquiry confirmed.");
        return true;
    } else {
        return false;
    }
}
