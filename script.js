const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   if (document.querySelector(".total-row")) return;

  // Select all elements with class 'price'
  const priceElements = document.querySelectorAll(".price");

  let total = 0;
  priceElements.forEach(priceEl => {
    total += parseFloat(priceEl.textContent);
};

getSumBtn.addEventListener("click", getSum);

