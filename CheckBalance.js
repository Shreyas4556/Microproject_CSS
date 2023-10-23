function gotoDash() {
  window.location.assign("Index.html");
}

function validation() {
  var PINNo = parseInt(document.getElementById("pinNo").value);

  var pinNo = /^[0-9]{4,5}$/g;

  if (pinNo.test(PINNo)) {
    document.getElementById("pinNoError").innerHTML = "";
  } else {
    document.getElementById("pinNoError").innerHTML = "Invalid PIN Number";
    document.getElementById("pinNo").value = "";
    return false;
  }

  var pin = parseInt(localStorage.getItem("PinNo"));
  if (PINNo == pin) {
    var show = localStorage.getItem("dAmt");
    document.getElementById("Amt").value = show;
  } else {
    alert("Please Enter valid PIN Number");
  }
}
