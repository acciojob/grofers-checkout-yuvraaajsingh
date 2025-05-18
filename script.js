const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Prevent multiple additions
  if (document.querySelector("#ans")) return;

  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach(priceEl => {
    total += parseFloat(priceEl.textContent);
  });

  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.id = "ans"; // Required by the test
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  document.querySelector("table").appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
