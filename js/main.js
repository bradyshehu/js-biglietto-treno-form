const nameInput = document.getElementById("name-surname");
const distanceInput = document.getElementById("distance");
const ageInput = document.getElementById("age-range");
const createButton = document.getElementById("generate");
const cancelButton = document.getElementById("cancel");
const wrongForm = document.getElementById("wrong-form");
const ticket = document.getElementById("ticket");
const ticketName = document.getElementById("ticket-name");
const ticketType = document.getElementById("ticket-type");
const ticketPrice = document.getElementById("ticket-price");

createButton.addEventListener("click", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const distance = distanceInput.value;
  const age = ageInput.value;
  console.log(name);
  console.log(distance);
  console.log(age);

  function applyDiscount(price, discountPercentage) {
    const discountAmount = (price * discountPercentage) / 100;
    const discountedPrice = (price - discountAmount).toFixed(2);
    return discountedPrice;
  }

  function finalPrice(distance, age) {
    ticketName.innerText = `${name}`;
    const price = distance * 0.21;

    if (age === "minor") {
      console.log("minorenne");
      const prezzo = applyDiscount(price, 20);
      console.log(prezzo);
      ticketType.innerText = "Biglietto minorenni";
      ticketPrice.innerText = `${prezzo}`;
    } else if (age === "over-65") {
      console.log("over-65");
      const prezzo = applyDiscount(price, 40);
      console.log(prezzo);
      ticketType.innerText = "Biglietto over-65";
      ticketPrice.innerText = `${prezzo}`;
    } else {
      console.log("adulto");
      const prezzo = price;
      console.log(prezzo);
      ticketType.innerText = "Biglietto standard";
      ticketPrice.innerText = `${prezzo}`;
    }
    wrongForm.classList.add("d-none");
    ticket.classList.remove("d-none");
  }
  !isNaN(distance)
    ? finalPrice(distance, age)
    : wrongForm.classList.remove("d-none");
});

cancelButton.addEventListener("click", function () {
  nameInput.value = "";
  distanceInput.value = "";
  ageInput.value = "minor";
});
