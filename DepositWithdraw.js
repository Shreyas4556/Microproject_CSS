// deposit
function validate() {
  var DepositAmt = parseInt(document.getElementById("depositAmt").value);

  var amt = /^[0-9]{3,6}$/g;

  // localStorage.removeItem("dAmt");
  if (amt.test(DepositAmt)) {
    document.getElementById("AmtError").innerHTML = "";
    document.getElementById("depositAmt").value = "";
  } else {
    document.getElementById("AmtError").innerHTML = "Invalid Amount to Deposit";
    return false;
  }
  alert("Rs. " + DepositAmt + " Deposited successfully");

  // localstorage
  var Amount;
  localStorage.setItem("dAmt", 0);
  var Amount = parseInt(localStorage.getItem("dAmt"));
  if (Amount == NaN) {
    Amount = 0;
  }
  DepositAmt = DepositAmt + Amount;

  localStorage.setItem("dAmt", DepositAmt);
}

function gotoDash() {
  window.location.assign("Index.html");
}

// Withdraw
function validation() {
  var WithdrawAmt = parseInt(document.getElementById("withdrawAmt").value);

  var amt = /^[0-9]{2,5}$/g;

  if (amt.test(WithdrawAmt)) {
    document.getElementById("AmtError").innerHTML = "";
    document.getElementById("withdrawAmt").value = "";
  } else {
    document.getElementById("AmtError").innerHTML =
      "Invalid Amount to Withdraw";
    return false;
  }

  var amt = parseInt(localStorage.getItem("dAmt"));
  var finalAmt = amt - WithdrawAmt;
  localStorage.setItem("dAmt", finalAmt);
  alert("Rs. " + WithdrawAmt + " Debited Successfully.");
}

function gotoDash2() {
  window.location.assign("Index.html");
}
