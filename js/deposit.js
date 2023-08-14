// Step-1 : Add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // Step-2: Get the deposit amount from the deposit field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // Step-3: Get the current deposit total
  // For non-input (element other than input textarea) use innerText  to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  depositTotalElement.innerText = newDepositAmount;
  
  // Add number to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;
  
  // Step-5: get balance current total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // Step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // Set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;
  // Step-7: Clear the deposit field
  depositField.value = "";
});
