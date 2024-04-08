document.addEventListener("DOMContentLoaded", function() {
  // Get the transfer button element
  var transferBtn = document.querySelector(".option-btn.transfer");

  // Add event listener for transfer button
  transferBtn.addEventListener("click", function() {
    // Display popup
    alert("You are not allowed to carry out any transaction as your account is on restriction!");

    // Redirect to transfer page
    window.location.href = "index.html";
  });

  // Get the pay bills button element
  var payBillsBtn = document.querySelector(".option-btn.pay-bills");

  // Add event listener for pay bills button
  payBillsBtn.addEventListener("click", function() {
    // Display popup
    alert("This is a pay bills popup!");

    // Redirect to pay bills page
    window.location.href = "pay_bills.html";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  // Dummy data for transaction history
  var transactions = [
    { name: "John Doe",    amount: "-$500.00",   date: "-2013-09-16" },
    { name: "Jane Smith",    amount: "-$1000.00",   date: "-2014-03-28" },
    { name: "Alice Johnson",   amount: "-$200.00",   date: "-2013-06-25" },
    { name: "Bob Brown",   amount: "-$1500.00",   date: "-2013-03-19" },
    { name: "David Lee",   amount: "   -$300.00",   date: "-2012-03-15" }
  ];

  // Function to dynamically populate transaction history
  function populateTransactionHistory() {
    var transactionList = document.getElementById("transactionList");

    transactions.forEach(function(transaction) {
      var listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${transaction.name}</span>
        <span>${transaction.amount}</span>
        <span>${transaction.date}</span>
      `;
      transactionList.appendChild(listItem);
    });
  }

  // Call the function to populate transaction history
  populateTransactionHistory();
});
// Example JavaScript code to update user's photo
document.getElementById('userPhoto').src = 'Alex.jpeg'; // Replace 'user_photo.jpg' with the path to the user's photo