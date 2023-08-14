// Step-1 : Add event listener to the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Step-2: Get the withdraw amount from the withdraw field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  if (
    newWithdrawAmount <= 0 ||
    withdrawField.value === "" ||
    isNaN(newWithdrawAmount)
  ) {
    alert("Invalid input");
    withdrawField.value = "";
    return;
  } else {
    // Step-3: Get the current withdraw total
    // For non-input (element other than input textarea) use innerText  to get the text
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    withdrawTotalElement.innerText = newWithdrawAmount;

    // Step-5: get balance current total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-7: Clear the deposit field
    withdrawField.value = "";

    if (newWithdrawAmount > previousBalanceTotal) {
      alert("You don't have enough amount to withdraw this amount ");
      return;
    }
    // Add number to set the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // Step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
  }
  return;
});
