/*
 Firstname
 Lastname
 Phone
 Number
 Adress
 Place
 PLZ

 https://www.bbastian.xyz/phonebook.html?firstname=Max&lastname=Mustermann&phone=123456789&number=123&adress=Musterstraße&place=Musterstadt&plz=12345
 */

function getAll() {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const firstname = urlParams.get("firstname");
  const lastname = urlParams.get("lastname");
  const phone = urlParams.get("phone");
  const number = urlParams.get("number");
  const adress = urlParams.get("adress");
  const place = urlParams.get("place");
  const plz = urlParams.get("plz");

  const fullName = firstname + " " + lastname;

  document.getElementById("name").innerHTML = fullName;
}
