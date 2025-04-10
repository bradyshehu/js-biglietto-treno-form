const nameInput = document.getElementById("name-surname");
const distanceInput = document.getElementById("distance");
const ageInput = document.getElementById("age-range");
const clientData = document.getElementById("client-data");

clientData.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const distance = distanceInput.value;
  const age = ageInput.value;
  console.log(name);
  console.log(distance);
  console.log(age);
});
