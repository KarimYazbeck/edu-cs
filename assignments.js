const submit_btn = document.getElementById("submit_btn");
const submit_status = document.getElementById("submit_status");

var isSubmitted = false;

submit_btn.addEventListener("click", submitted, false);

function submitted() {
  if (!isSubmitted) {
    isSubmitted = true;
    submit_status.style.color = "cadetblue";
    submit_status.innerHTML = "submitting...";
    setTimeout(submittedd, 1200);
  }
}

function submittedd() {
  submit_status.innerHTML = "submitted";
  submit_status.style.color = "green";
}

/*
localStorage.setItem("name", "Karim");
localStorage.removeItem("name", "Karim");
localStorage.getItem("name");
*/

/*
const impKey = document.getElementById("impKey");
const impVal = document.getElementById("impVal");
const impButt = document.getElementById("impButt");
const output = document.getElementById("output");

impButt.onclick = function () {
  var key = impKey.value;
  var value = impVal.value;

  console.log(key);
  console.log(value);

  if (key && value) {
    localStorage.setItem(key, value);
    impKey.value = "";
    impVal.value = "";
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const val = localStorage.getItem(key);

  output.innerHTML += key + " : " + val + "<br>";
}

*/

var user = localStorage.getItem("name" + localStorage.getItem("id"));
var user2 = localStorage.getItem("name0");

console.log("Hello " + user2);

let tabSize = 4;
let spaces = "";
for (i = 0; i < tabSize; i++) {
  spaces += " ";
}

/*
document.getElementById("textbox").addEventListener("keydown", function (e) {
  if (e.key == "Tab") {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value =
      this.value.substring(0, start) + "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart = this.selectionEnd = start + 1;
  }
});
*/

document.getElementById("editor").addEventListener("keydown", preventTab);

function preventTab(event) {
  if (event.keyCode === 9) {
    event.preventDefault();
    let selection = window.getSelection();
    selection.collapseToStart();
    let range = selection.getRangeAt(0);
    range.insertNode(document.createTextNode(spaces));
    selection.collapseToEnd();
  }
}
