const username_input = document.getElementById("username_input");
const password_input = document.getElementById("password_input");
const submit = document.getElementById("submit");
const verification = document.getElementById("verification");
const home_section = document.getElementById("home-section");
const login_section = document.getElementById("login-section");
const greeting = document.getElementById("greeting");
const profession = document.getElementById("profession");
const logOut = document.getElementById("logOut");
const eye_pass = document.getElementById("eye_pass");
const form_pass = document.getElementById("form-pass");
const username_span = document.getElementById("username-span");
const email_span = document.getElementById("email-span");
const level_span = document.getElementById("level-span");
const average_span = document.getElementById("average-span");
const grade_bar = document.getElementById("grade_bar");
const level_bar = document.getElementById("level_bar");
const grade_bar_span = document.getElementById("grade_bar_span");
const gender_picture = document.getElementById("gender_picture");

// CHECKING IF THERE'S ANY USERS REGISTERED ON THE BROWSER
// because there's no back-end, only local storage

if (localStorage.length == 0) {
  console.log("NO USERS, adding root user...");
  add_root_user();
}

function add_root_user() {
  localStorage.setItem("name0", "root");
  localStorage.setItem("fname0", "John");
  localStorage.setItem("lname0", "Doe");
  localStorage.setItem("profession0", "Student");
  localStorage.setItem("email0", "root@hotmail.com");
  localStorage.setItem("sex0", "Male");
  localStorage.setItem("grade0", 50);
  localStorage.setItem("level0", 9);
  localStorage.setItem("loggedIn", "no");
  localStorage.setItem("nb_of_ids", 1);
  localStorage.setItem("pass0", "root");
}

// CHECKING IF THE USER IS LOGGED IN

var id = localStorage.getItem("id");

if (localStorage.getItem("loggedIn") == "yes") {
  verified(id);
}

submit.onclick = function (id) {
  // CHECKING IF LOG-IN INFO IS RIGHT
  var user;
  //var id;
  var user_found = false;

  // EXPLANATION    // local storage has (key-value) pairs
  // 1- loop through all localStorage
  // 2- check if username == the value of each key in local storage
  // 3- and check if that key starts with 'n' (ex: name0)   (because we don't want the user to enter something else)

  for (let i = 0; i < localStorage.length; i++) {
    if (
      username_input.value == localStorage.getItem(localStorage.key(i)) &&
      localStorage.key(i)[0] == "n"
    ) {
      user = localStorage.key(i);
      id = user[4];
      console.log(id);
      localStorage.setItem("id", id);
      user_found = true;
      break;
    }
  }
  if (!user_found) {
    console.log("Username not found");
    verification.innerHTML = "Username not found";
    return;
  }

  var pass_check = "pass" + id;

  if (password_input.value == localStorage.getItem(pass_check)) {
    console.log("You're in");

    //location.href = "storage.html";
    verified(id);
  } else {
    console.log("Password is wrong");
    verification.innerHTML = "Password is wrong";
  }
};

function verified(id) {
  // IF LOG IN IS VERIFIED
  if (localStorage.getItem("loggedIn") == "yes") {
    home_section.style.transition = "0s";
  }
  home_section.style.filter = "blur(0px)";
  home_section.style.pointerEvents = "auto";
  login_section.style.opacity = "0";
  login_section.style.visibility = "hidden";
  localStorage.setItem("loggedIn", "yes");
  information(id);
}

function information(id) {
  // FILLING UP THE MAIN PAGE WITH THE PROFILE INFORMATION
  var firstname = localStorage.getItem("fname" + id);
  var lastname = localStorage.getItem("lname" + id);
  //var average = localStorage.getItem("grade" + id);
  var professional = localStorage.getItem("profession" + id);
  var username = localStorage.getItem("name" + id);
  var email = localStorage.getItem("email" + id);
  var level = localStorage.getItem("level" + id);
  var grade = localStorage.getItem("grade" + id);
  var sex = localStorage.getItem("sex" + id);

  greeting.innerHTML += firstname + " " + lastname;
  profession.innerHTML += professional;
  username_span.innerHTML += username;
  email_span.innerHTML += email;
  level_span.innerHTML += level;
  average_span.innerHTML += grade;
  grade_bar.style.width = grade + "%";
  level_bar.style.width = level * 10 + "%";
  grade_bar_span.innerHTML += grade;

  if (sex == "Female") {
    gender_picture.setAttribute("src", "femalePic.png");
  } else {
    gender_picture.setAttribute("src", "malePic.png");
  }
}

// LOG OUT FUNCTION

logOut.addEventListener("click", loggingOut, false);

function loggingOut() {
  localStorage.setItem("loggedIn", "no");
  location.reload();
}

// THE EYE THAT SHOWS THE PASSWORD ON HOVER

eye_pass.addEventListener("mouseover", pass_hover, false);

function pass_hover() {
  form_pass.type = "text";
}

eye_pass.addEventListener("mouseout", pass_hover2, false);

function pass_hover2() {
  form_pass.type = "password";
}

// SIGNING UP A NEW USER

// 1- I GET ALL IDS
// 2- WHEN SUBMIT IS PRESSED
// 3- I TAKE ALL THE INFORMATION AND PUT THEM IN LOCALSTORAGE
// 4- GRADE AND LEVEL WILL BE RANDOM
// 5- I PUT ALL VALUES OF INPUTS TO : ""

const form_fname = document.getElementById("form-fname");
const form_lname = document.getElementById("form-lname");
const form_email = document.getElementById("form-email");
const form_username = document.getElementById("form-username");
const form_submit = document.getElementById("form-submit");
const form_radio_student = document.getElementById("form-radio-student");
const form_radio_teacher = document.getElementById("form-radio-teacher");
const form_sex_male = document.getElementById("form-sex-male");
const form_sex_female = document.getElementById("form-sex-female");

form_submit.onclick = function () {
  var newid = parseInt(localStorage.getItem("nb_of_ids")) + 1;

  var new_nb_of_ids = parseInt(localStorage.getItem("nb_of_ids")) + 1;
  localStorage.setItem("nb_of_ids", new_nb_of_ids);

  var new_fname = "fname" + newid;
  var new_lname = "lname" + newid;
  var new_username = "name" + newid;
  var new_email = "email" + newid;
  var new_pass = "pass" + newid;
  var new_level = "level" + newid;
  var new_grade = "grade" + newid;

  var form_grade = Math.floor(0 + Math.random() * 100);
  var form_level = Math.floor(1 + Math.random() * 10);

  localStorage.setItem(new_fname, form_fname.value);
  localStorage.setItem(new_lname, form_lname.value);
  localStorage.setItem(new_username, form_username.value);
  localStorage.setItem(new_email, form_email.value);
  localStorage.setItem(new_pass, form_pass.value);
  localStorage.setItem(new_level, form_level);
  localStorage.setItem(new_grade, form_grade);

  var new_profession = "profession" + newid;
  var new_sex = "sex" + newid;

  if (form_radio_student.checked) {
    localStorage.setItem(new_profession, "Student");
  } else if (form_radio_teacher.checked) {
    localStorage.setItem(new_profession, "Teacher");
  } else {
    console.log("Error, no profession was chosen (Student will be chosen)");
    localStorage.setItem(new_profession, "Student");
  }

  if (form_sex_male.checked) {
    localStorage.setItem(new_sex, "Male");
  } else if (form_sex_female.checked) {
    localStorage.setItem(new_sex, "Female");
  } else {
    console.log("Error, no sex was chosen (Male will be chosen)");
    localStorage.setItem(new_sex, "Male");
  }

  form_fname.value = "";
  form_lname.value = "";
  form_username.value = "";
  form_email.value = "";
  form_pass.value = "";
};
