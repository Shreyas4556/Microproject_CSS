const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

function validation() {
  const check = 1;
  const full_nm = document.getElementById("Fname").value;
  const dob = document.getElementById("DOB").value;
  const email = document.getElementById("Email").value;
  const mobile = document.getElementById("Mobile").value;

  const gender = document.getElementById("gender").value;
  const occupation = document.getElementById("occupation").value;

  // Identity details
  const idNumber = document.getElementById("IDNum").value;
  const issuedate = document.getElementById("issdate").value;
  const expiry = document.getElementById("expire").value;

  // Account details
  const accnumber = document.getElementById("Accno").value;
  const accType = document.getElementById("Acc_Type").value;
  const pinno = document.getElementById("pinNo").value;

  // form 2
  const add = document.getElementById("Address").value;
  const City = document.getElementById("city").value;
  const State = document.getElementById("state").value;
  const dist = document.getElementById("district").value;
  const block = document.getElementById("blockNo").value;
  const ward = document.getElementById("wardNo").value;

  // Family Details
  const father = document.getElementById("fatherNm").value;
  const mother = document.getElementById("motherNm").value;
  const spouse = document.getElementById("spouseNm").value;

  // username and password
  const username = document.getElementById("unm").value;
  const passWord = document.getElementById("pass").value;
  const rePassWord = document.getElementById("repass").value;
  // Regex
  const nameReg = RegExp("^[A-Za-z. ]{3,30}$", "g");
  if (nameReg.test(full_nm)) {
    document.getElementById("FullNameError").innerHTML = "";
  } else {
    document.getElementById("FullNameError").innerHTML = "Invalid Name";
    check = 0;
  }

  // Dob
  if (dob == "") {
    document.getElementById("DobError").innerHTML =
      "Enter Proper Date of Birth";
    check = 0;
  } else {
    document.getElementById("DobError").innerHTML = "";
  }

  // E-mail
  const EmailReg = RegExp(
    "^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$",
    "g"
  );
  if (EmailReg.test(email)) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "Invalid Email Address";
    check = 0;
  }

  // Mobile Number
  const MobileReg = RegExp("^[789][0-9]{9,9}$", "g");
  if (MobileReg.test(mobile)) {
    document.getElementById("MobNoError").innerHTML = "";
  } else {
    document.getElementById("MobNoError").innerHTML = "Invalid Mobile Number";
    check = 0;
  }

  // Gender
  if (gender == "Select here") {
    document.getElementById("genderError").innerHTML = "Select Gender here";
    check = 0;
  } else {
    document.getElementById("genderError").innerHTML = "";
  }

  // Occupation;
  if (occupation == "Select here") {
    document.getElementById("occpationError").innerHTML =
      "Select Occupation here";
    check = 0;
  } else {
    document.getElementById("occpationError").innerHTML = "";
  }

  // ID number
  const idReg = RegExp("^[0-9]{3,4}$", "g");
  if (idReg.test(idNumber)) {
    document.getElementById("IdnoError").innerHTML = "";
  } else {
    document.getElementById("IdnoError").innerHTML = "Invalid ID Number";
    check = 0;
  }

  // Issued Date
  if (issuedate == "") {
    document.getElementById("dateIssueError").innerHTML =
      "Enter Proper Issued Date";
    check = 0;
  } else {
    document.getElementById("dateIssueError").innerHTML = "";
  }

  // Expiry Date
  if (expiry == "") {
    document.getElementById("dateExpiryError").innerHTML =
      "Enter Proper Expiry Date";
    check = 0;
  } else {
    document.getElementById("dateExpiryError").innerHTML = "";
  }

  // Account Number
  const accReg = RegExp("^[0-9]{11,11}$");
  if (accReg.test(accnumber)) {
    document.getElementById("AccnoError").innerHTML = "";
  } else {
    document.getElementById("AccnoError").innerHTML = "Invalid Account Number";
    check = 0;
  }

  localStorage.setItem("Name", full_nm);
  localStorage.setItem("DateOfBirth", dob);
  localStorage.setItem("Email", email);
  localStorage.setItem("MobileNo", mobile);
  localStorage.setItem("Gender", gender);
  localStorage.setItem("Occupation", occupation);
  localStorage.setItem("IDNumber", idNumber);
  localStorage.setItem("IssueDate", issuedate);
  localStorage.setItem("ExpiryDate", expiry);
  localStorage.setItem("AccNo", accnumber);
  localStorage.setItem("AccType", accType);
  localStorage.setItem("PinNo", pinno);
  localStorage.setItem("Address", add);
  localStorage.setItem("CityName", City);
  localStorage.setItem("StateName", State);
  localStorage.setItem("DistrictName", dist);
  localStorage.setItem("BlockNo", block);
  localStorage.setItem("WardNo", ward);
  localStorage.setItem("Username", username);
  localStorage.setItem("PassWord", passWord);
  localStorage.setItem("RePassWord", rePassWord);

  const CSDreg = RegExp("^[A-Za-z]+(?:[s-][a-zA-Z]+)*$", "g");
  if (CSDreg.test(City)) {
    document.getElementById("cityError").innerHTML = "";
  } else {
    document.getElementById("cityError").innerHTML = "Invalid City Name";
    check = 0;
    return false;
  }

  const StateReg = RegExp("^[A-Za-z]+(?:[s-][a-zA-Z]+)$", "g");
  if (StateReg.test(State)) {
    document.getElementById("stateError").innerHTML = "";
  } else {
    document.getElementById("stateError").innerHTML = "Invalid State Name";
    check = 0;
    return false;
  }

  const Dreg = RegExp("^[A-Za-z]+(?:[s-][a-zA-Z]+)*$", "g");
  if (Dreg.test(dist)) {
    document.getElementById("districtError").innerHTML = "";
  } else {
    document.getElementById("districtError").innerHTML =
      "Invalid District Name";
    check = 0;
    return false;
  }

  const blockReg = RegExp("^[0-9]{1,3}$", "g");
  if (blockReg.test(block)) {
    document.getElementById("blockNoError").innerHTML = "";
  } else {
    document.getElementById("blockNoError").innerHTML = "Invalid Block Number";
    check = 0;
    return false;
  }

  const WardReg = RegExp("^[0-9]{1,3}$", "g");
  if (WardReg.test(ward)) {
    document.getElementById("wardError").innerHTML = "";
  } else {
    document.getElementById("wardError").innerHTML = "Invalid Ward Number";
    check = 0;
    return false;
  }

  // Username
  const unmReg = RegExp("^[A-Za-z_]{6,16}$", "g");
  if (unmReg.test(username)) {
    document.getElementById("unmError").innerHTML = "";
  } else {
    document.getElementById("unmError").innerHTML = "Invalid username";
    check = 0;
  }
}
