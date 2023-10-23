function backto() {
  window.location.assign("Profile.html");
}

function display() {
  const address = localStorage.getItem("Address");
  const cityNm = localStorage.getItem("CityName");
  const StateNm = localStorage.getItem("StateName");
  const DistrictNm = localStorage.getItem("DistrictName");
  const blockNum = localStorage.getItem("BlockNo");
  const wardNum = localStorage.getItem("WardNo");
  const unm = localStorage.getItem("Username");
  const pass = localStorage.getItem("PassWord");

  document.getElementById("Address").value = address;
  document.getElementById("city").value = cityNm;
  document.getElementById("state").value = StateNm;
  document.getElementById("district").value = DistrictNm;
  document.getElementById("blockNo").value = blockNum;
  document.getElementById("wardNo").value = wardNum;
  document.getElementById("unm").value = unm;
  document.getElementById("pass").value = pass;
}
