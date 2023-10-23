function validation() {
  var AccNo = document.getElementById("accNo").value;
  var Amount = document.getElementById("Amt").value;

  var accNo = /^[0-9]{11}$/g;
  var amt = /^[0-9]{2,7}$/g;

  if (accNo.test(AccNo)) {
    document.getElementById("AccNoError").innerHTML = "";
  } else {
    document.getElementById("AccNoError").innerHTML = "Invalid Account Number";
    return false;
  }

  if (amt.test(Amount)) {
    document.getElementById("AmtError").innerHTML = "";
  } else {
    document.getElementById("AmtError").innerHTML = "Invalid Amount";
    return false;
  }
}

function gotoDash() {
  window.location.assign("Index.html");
}
