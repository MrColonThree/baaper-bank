// Step-1 : Add event listener to the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Step-2: Get the deposit amount from the deposit field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // Step-3: Get the current deposit total
  // For non-input (element other than input textarea) use innerText  to get the text
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  withdrawTotalElement.innerText = newWithdrawAmount;
  
  // Add number to set the total deposit
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;
  
  // Step-5: get ballance current total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // Step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  // Set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;
  // Step-7: Clear the deposit field
  withdrawField.value = "";
});