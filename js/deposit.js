// Step-1 : Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
  // Step-2: Get the deposit amount from the deposit field
  const depositField = document.getElementById('deposit-field');
  const depositAmount = depositField.value;
  // Step-3: Get the current deposit total
  // For non-input (element other than input textarea) use innerText  to get the text
  const depositTotalElement = document.getElementById('deposit-total') 
  const depositTotal = depositTotalElement.innerText;
  depositTotalElement.innerText = depositAmount; 
})