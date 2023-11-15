function emailSend() {
  var userName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var senderMessage = document.getElementById("message").value;
  var check = document.getElementById("check");

  var messageBody =
    "Name " +
    userName +
    "<br/> Email " +
    email +
    "<br/> Message " +
    senderMessage;

  Email.send({
    SecureToken: "9843873e-4b2f-410a-8dbd-17fd5e9639e7",
    To: "b22228872@gmail.com",
    From: "contact@bbastian.xyz",
    Subject: "neue kontaktanfrage",
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") check.innerHTML = "email succesfully sent!";
    else check.innerHTML = "error, please retry";
  });
}
