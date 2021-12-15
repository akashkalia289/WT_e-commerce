import {
  $,
  get_local_storage_object,
  save_object_to_local_storage,
} from "../helpers.js";

// for signing in the existing users
export function sign_in() {
  const sign_in_email = $("sign_in_email").value;
  const sign_in_pwd = $("sign_in_password").value;
  const master_obj = get_local_storage_object();
  const { users } = master_obj;
  if (users) {
    // to check if the user in present in the users object or not
    const user = users.find(
      (user) => user.email === sign_in_email && user.pwd === sign_in_pwd
    );
    if (user) {
      master_obj["loggedIn"] = true;
      master_obj["loggedInUser"] = user;
      save_object_to_local_storage(master_obj);
      window.location.href = document.referrer
    } else {
      // wrong username and password
      alert("Invalid Username and Password");
    }
  }
}

// for signing up the new existing users
export function sign_up() {
  const master_obj = get_local_storage_object();
  let users = master_obj["users"] || [];
  master_obj["users"] = users;
  let newUserObj = {
    firstName: $("first-name").value,
    lastName: $("last-name").value,
    email: $("email").value,
    pwd: $("password").value,
    house: $("house-apartment").value,
    street: $("street").value,
    city: $("city").value,
    state: $("state").value,
    zip: $("zip").value,
  };
  //check for empty value
  if (
    emptyValValidation(newUserObj) &&
    validateEmail(newUserObj.email) &&
    validateZip(newUserObj.zip) &&
    alreadyPresetUser(newUserObj.email)
  ) {
    console.log("Form Valid");
    //adding new user info in users object
    users.push(newUserObj);
    save_object_to_local_storage(master_obj);
    master_obj["loggedIn"] = true;
    master_obj["loggedInUser"] = users[users.length - 1];
    save_object_to_local_storage(master_obj);
    window.location.href = document.referrer;
  }
}

function emptyValValidation(newUserObj) {
  let isValid = true;
  if (newUserObj.firstName == "") {
    window.alert("Please enter your firstname.");
    return isValid;
  }
  if (newUserObj.lastName == "") {
    window.alert("Please enter your lastname");
    return isValid;
  }
  if (newUserObj.email == "") {
    window.alert("Please enter your email");
    return isValid;
  }
  if (newUserObj.pwd == "") {
    window.alert("Please enter your password");
    return isValid;
  }
  if (newUserObj.house == "") {
    window.alert("Please enter your house");
    return isValid;
  }
  if (newUserObj.street == "") {
    window.alert("Please enter your street");
    return isValid;
  }
  if (newUserObj.city == "") {
    window.alert("Please enter your city");
    return isValid;
  }
  if (newUserObj.state == "") {
    window.alert("Please enter your state");
    return isValid;
  }
  if (newUserObj.zip == "") {
    window.alert("Please enter your zip");
    return isValid;
  }
  return isValid;
}

//validate email soverflow
function validateEmail(email) {
  if (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return true;
  } else {
    window.alert("Please enter valid email");
    return false;
  }
}

//validate zip code
function validateZip(zip) {
  if (
    String(zip)
      .toLowerCase()
      .match(
        //validation for canadian zipcode
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
      )
  ) {
    return true;
  } else {
    window.alert("Please enter valid zip code");
    return false;
  }
}

function alreadyPresetUser(email) {
  const master_obj = get_local_storage_object();
  const { users } = master_obj;
  if (users) {
    // to check if the user in present in the users object or not
    const user = users.find(
      (user) => user.email === email 
    );
    if (user) {
        window.alert("User Already present. Please sign in")
        return false   
    } else {
        return true
    }
  }
}

//to logout the user
export function logout() {
  const master_obj = get_local_storage_object();
  master_obj["loggedIn"] = false;
  master_obj["loggedInUser"] = null;
  save_object_to_local_storage(master_obj);
  window.location.reload();
}
