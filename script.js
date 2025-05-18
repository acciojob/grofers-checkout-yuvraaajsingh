const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Prevent adding total row multiple times
  if (document.querySelector(".total-row")) return;

  // Select all elements with class 'price'
  const priceElements = document.querySelectorAll(".price");

  let total = 0;
  priceElements.forEach(priceEl => {
    total += parseFloat(priceEl.textContent);
  });

  // Create a new row for total
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row"); // So we can check for duplicates

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  
  // Append total row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
