// Function to change page
function gotonext() {
  window.location.assign("Profile2.html");
}

// Function to go to Dashboard
function gotoDash() {
  window.location.assign("Index.html");
}

function display() {
  const name = localStorage.getItem("Name");
  const dob = localStorage.getItem("DateOfBirth");
  const e_mail = localStorage.getItem("Email");
  const mob = localStorage.getItem("MobileNo");
  const gen = localStorage.getItem("Gender");
  const occup = localStorage.getItem("Occupation");
  const IDN = localStorage.getItem("IDNumber");
  const iDate = localStorage.getItem("IssueDate");
  const eDate = localStorage.getItem("ExpiryDate");
  const accn = localStorage.getItem("AccNo");
  const acct = localStorage.getItem("AccType");
  const pin = localStorage.getItem("PinNo");

  document.getElementById("Fname").value = name;
  document.getElementById("DOB").value = dob;
  document.getElementById("Email").value = e_mail;
  document.getElementById("Mobile").value = mob;
  document.getElementById("gender").value = gen;
  document.getElementById("occupation").value = occup;
  document.getElementById("IDNum").value = IDN;
  document.getElementById("issdate").value = iDate;
  document.getElementById("expire").value = eDate;
  document.getElementById("Accno").value = accn;
  document.getElementById("Acc_Type").value = acct;
  document.getElementById("pinNo").value = pin;
}
