
/*-------------------- index github data-------------------------------- */

let data = {};
const PROFILE_NAME = "profile-name";
const IMG_USER = "imgUser";

function init() {

  fetch("https://api.github.com/users/Avraham-K")
    .then((res) => {
      //////promise from server
      return res.json();
    })
    .then((data) => {
      ////promise converted data to JSON
      console.log("Data", data);
      document.getElementById(PROFILE_NAME).innerText = data.name;
      document.getElementById(IMG_USER).src = data.avatar_url;
    })
    .catch((err) => { }); ///promiss
}

init();


/*-------------------- contact submit verification------------------------- */


var userData = {
    first: "",
    last: "",
    comment: "",
    email: "",
    best: "",
  };
  const BTN_SUBMIT = document.getElementById("btnSubmit");
  function onChangeValue(value, event) {
    console.log("value",value)
    console.log("event",event.target.id)
    userData[event.target.id] = value;

    if (
      userData.first !== "" &&
      userData.email !== "" &&
      userData.comment !== "" &&
      userData.best !== "" &&
      userData.best !== "Select an Option"
    ) {
      console.log("valid data");
      BTN_SUBMIT.disabled = false;
    } else {
      console.log("not valid data");
      BTN_SUBMIT.disabled = true;
    }
  }
