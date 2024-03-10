function sendEmail() {
    var form = document.querySelector('form');
    var Fullname = document.getElementById('fullname').value;
    // var lastname = document.getElementById('lastname').value;
    var fname = document.getElementById('fname').value;
    var mname = document.getElementById('mname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var whatsapp = document.getElementById('whatsapp').value;
    var address = document.getElementById('address').value;
    var classs = document.getElementById('classs').value;
    var school = document.getElementById('school').value;
    var dob = document.getElementById('dob').value;


    var messageBody = "FullName: " + Fullname + "<br/>" +
        "Father Name: " + fname + "<br/>" +
        "Mother Name: " + mname + "<br/>" +
        "Email ID: " + email + "<br/>" +
        "Contact No.: " + mobile + "<br/>" +
        "Whatsapp No.: " + whatsapp + "<br/>" +
        "Address: " + address + "<br/>" +
        "Class: " + classs + "<br/>" +
        "DOB: " + dob + "<br/>" +
        "School: " + school;

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "eduskiess@gmail.com",
//         Password: "A2EAAA18D6BBD7E56DAAA07CD0CE566ACDB1",
//         To: 'eduskiess@gmail.com',
//         From: "eduskiess@gmail.com",
//         Subject: "New Student Details..!!",
//         Body: messageBody
//     }).then(
//         message => alert(message)
//     );
// }

Email.send({
    Host: "smtp.elasticemail.com",
    Username: "rathoreshreta@gmail.com",
    Password: "BD6F1EC8E5A1E784BB5ED2E834E0E57B300D",
    To: 'rathoreshreta@gmail.com',
    From: "rathoreshreta@gmail.com",
    Subject: "This is the subject",
    Body: messageBody
}).then(
    message => alert(message)
);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});