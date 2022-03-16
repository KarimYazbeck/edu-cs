const username_input = document.getElementById("username_input");
const password_input = document.getElementById("password_input");
const submit = document.getElementById("submit");

/*

submit.onclick = function () {
  var value = localStorage.getItem(username_input.value);
  if (!value) {
    console.log("Username is wrong");
  } else {
    if (value == password_input.value) {
      console.log("You're in");
    } else {
      console.log("Password is wrong");
    }
  }

  username_input.value = "";
  password_input.value = "";
};

*/

// i can make key-value pairs
// how can i make different key-value pairs for the same person?
// i was thinking i should name the keys something like:

// user12 = "karim"
// age12 = "21"
// user49 = "wassim"
// age49 = "18"

// bas how will the login know which key to look for?
// should it loop them all?  --- IT WORKED
// and
// can i name them automatically like that ?
// --- IM GONNA MAKE A VAR IN LOCALSTORAGE THAT TELLS HOW MANY IDS THERE IS AND
// --- CHANGE IT WHEN A NEW USER IS ENTERED

submit.onclick = function () {
  var user;
  var id;
  var user_found = false;

  for (let i = 0; i < localStorage.length; i++) {
    if (username_input.value == localStorage.getItem(localStorage.key(i))) {
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
    return;
  }

  var pass_check = "pass" + id;

  if (password_input.value == localStorage.getItem(pass_check)) {
    console.log("You're in");

    location.href = "storage.html";
  } else {
    console.log("Password is wrong");
  }
};
