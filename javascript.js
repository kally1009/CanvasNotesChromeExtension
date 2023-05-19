// remove the add event button
//document.getElementById('create_new_event_link').remove();

//onblur or keypress or something for saving to local storage
//div that's a parent. position will be relative.
//span for the X and a textarea. Both of them position Absolute.
// z-index for order. right: 0; onclick on the span.
//look up css shadows or page curl shadows.

// create note html element and replace the calendar obj
var note_area = document.createElement("div");
note_area.id = "note";
var note_input = document.createElement("TEXTAREA");
note_input.id = "note-input";
var clear_btn = document.createElement("span");
clear_btn.innerHTML = "X";
clear_btn.id = "deleteButton";

note_area.appendChild(clear_btn);
note_area.appendChild(note_input);

document.getElementById("minical").replaceWith(note_area);

//style note element
document.getElementById("note-input").style.backgroundColor = "#fbfc5a";
document.getElementById("note-input").style.border = "none";
document.getElementById("note").style.outline = "none";
document.getElementById("note-input").style.outline = "none";
document.getElementById("note").style.height = "180px";
document.getElementById("note").style.fontSize = "13px";
document.getElementById("note-input").placeholder = "click to add text";
// for some reason the element has to be styled here, the style in the css isn't being applied for some reason

window.addEventListener("load", (event) => {
  if (localStorage.getItem("noteData")) {
    loadNote();
  }
});

function updateNote() {
  var notes = note_data;
  document.getElementById("note-input").value = notes;
}

function loadNote() {
  note_data = JSON.parse(localStorage.getItem("noteData"));
  updateNote();
}

function saveNote() {
  note_input = document.getElementById("note-input").value;
  localStorage.setItem("noteData", JSON.stringify(note_input));
}

//calls functions
document.addEventListener("keyup", saveNote);

clear_btn.onclick = function startNewNote() {
  document.getElementById("note-input").value = "";

  note_data = {};
  saveNote();
};
