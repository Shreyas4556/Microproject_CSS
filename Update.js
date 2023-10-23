function LastValidate() {
  var email = document.getElementById("Email").value;
  var mobile = document.getElementById("Mobile").value;
  var pinno = document.getElementById("pinNo").value;
  var add = document.getElementById("Address").value;
  var City = document.getElementById("city").value;
  var State = document.getElementById("state").value;
  var dist = document.getElementById("district").value;
  var block = document.getElementById("blockNo").value;
  var ward = document.getElementById("wardNo").value;
  var oldpassWord = document.getElementById("opass").value;
  var passWord = document.getElementById("pass").value;
  var rePassWord = document.getElementById("repass").value;

  localStorage.setItem("Email", email);
  localStorage.setItem("MobileNo", mobile);
  localStorage.setItem("PinNo", pinno);
  localStorage.setItem("Address", add);
  localStorage.setItem("CityName", City);
  localStorage.setItem("StateName", State);
  localStorage.setItem("DistrictName", dist);
  localStorage.setItem("BlockNo", block);
  localStorage.setItem("WardNo", ward);
  localStorage.setItem("PassWord", passWord);
  localStorage.setItem("RePassWord", rePassWord);

  alert("Records Updated Successfully");
}

function backtoProfile() {
  window.location.assign("Profile.html");
}
