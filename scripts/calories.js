document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let gender = null;
    var weight = document.getElementById("input-kg").value;
    var height = document.getElementById("input-height").value;
    var age = document.getElementById("input-age").value;
    var pal = document.getElementById("pal").value;
    var palInt = parseFloat(pal);

    var feedback = document.getElementById("feedback");

    const genderRadios = document.getElementsByName("gender");

    for (let i = 0; i < genderRadios.length; i++) {
      if (genderRadios[i].checked) {
        gender = genderRadios[i].value;
        break;
      }
    }

    if (gender === null) {
      feedback.innerText = "Bitte wählen Sie ein Geschlecht aus.";
      return;
    } else if (weight.trim() === "" || weight === null) {
      feedback.innerText = "Bitte geben Sie Ihr Gewicht ein.";
      return;
    } else if (weight <= 40 || weight > 220) {
      feedback.innerText =
        "Bitte geben Sie ein Gewicht zwischen 40 und 220 kg ein.";
      return;
    } else if (height.trim() === "" || height === null) {
      feedback.innerText = "Bitte geben Sie Ihre Größe ein.";
      return;
    } else if (height <= 139 || height > 220) {
      feedback.innerText =
        "Bitte geben Sie eine Größe zwischen 140 und 220 cm ein.";
      return;
    } else if (age.trim() === "" || age === null) {
      feedback.innerText = "Bitte geben Sie Ihr Alter ein.";
      return;
    } else if (age <= 18 || age > 99) {
      feedback.innerText =
        "Bitte geben Sie ein Alter zwischen 18 und 99 Jahren ein.";
      return;
    }

    if (gender === "female") {
      var c = getCalories(weight, height, age, gender, palInt);
      feedback.innerText = "Grundumsatz: " + c;
    } else if (gender === "male") {
      var c = getCalories(weight, height, age, gender, palInt);
      feedback.innerText = "Grundumsatz: " + c;
    } else {
      feedback.innerHTML = `Etwas ist schiefgelaufen, <a href='https://bbastian.xyz/contact'>bitte kontaktieren Sie mich hier</a>.`;
    }
  });
});

function getCalories(weight, height, age, gender, pal) {
  if (gender === "male") {
    var calories = 66.47 + 13.7 * weight + 5 * height - 6.8 * age;
    var caloriesPal = calories * pal;
  } else if (gender === "female") {
    var calories = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;
    var caloriesPal = calories * pal;
  }

  return Math.floor(caloriesPal);
}
