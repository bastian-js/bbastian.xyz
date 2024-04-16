/*
 Firstname
 Lastname
 Phone
 Adress
 Place
 PLZ

 https://www.bbastian.xyz/phonebook.html?firstname=Max&lastname=Mustermann&number=123&adress=Musterstraße&place=Musterstadt&plz=12345
 */

function getAll() {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const firstname = urlParams.get("firstname");
  const lastname = urlParams.get("lastname");
  const number = urlParams.get("number");
  const adress = urlParams.get("adress");
  const place = urlParams.get("place");
  const plz = urlParams.get("plz");

  document.title = firstname + " " + lastname;

  document.getElementById("name").innerHTML = firstname + " " + lastname;
  document.getElementById("phone").innerHTML = number;
  document.getElementById("adress").innerHTML = adress;
  document.getElementById("placeplz").innerHTML = plz + " " + place;
}
