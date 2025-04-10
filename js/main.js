const nameInput = document.getElementById("name-surname");
const distanceInput = document.getElementById("distance");
const ageInput = document.getElementById("age-range");
const createButton = document.getElementById("generate");
const cancelButton = document.getElementById("cancel");

createButton.addEventListener("click", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const distance = parseInt(distanceInput.value);
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
    const price = distance * 0.21;

    if (age === "minor") {
      console.log("minorenne");
      const prezzo = applyDiscount(price, 20);
      console.log(prezzo);
    } else if (age === "over-65") {
      console.log("over-65");
      const prezzo = applyDiscount(price, 40);
      console.log(prezzo);
    } else {
      console.log("adulto");
      const prezzo = price;
      console.log(prezzo);
    }
  }
  !isNaN(distance) ? finalPrice(distance, age) : ;
});

cancelButton.addEventListener("click", function () {
  nameInput.value = "";
  distanceInput.value = "";
  ageInput.value = "minor";
});
