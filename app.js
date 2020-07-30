window.addEventListener("load", _loaded);
function _loaded() 
{
console.log("Welcome to notes app. This is app.js");
showNotes();

//if user adds a note, add it to local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //console.log(notesObj);
  showNotes();
});

//funtion to show elements from local storage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title">NOTE ${index + 1}</h4>
    <p class="card-text"> ${element}</p>
    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
  </div>
  </div> `;
  //<button id="${index}" onclick="editNote(this.id)" class="btn btn-primary">Edit Note</button>
  });
 let notesElm = document.getElementById('notes');
 if(notesObj.length != 0){
 notesElm.innerHTML = html;
 }
 else {
   notesElm.innerHTML = `<h1 style= "color: #FFF;">Nothing To Show! Use "Add A Note" section above to add notes.</h1>`;//Clear prevoius notes as it will show after refresh too.By using localstorage.clear() command in console in inspect tool.
 }
}

//for searching elements in notes
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
  
  let inputVal = search.value.toLowerCase();
  //console.log('Input Event Fired!', inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function(element){
   let cardTxt = element.getElementsByTagName("p")[0].innerText;
   if(cardTxt.includes(inputVal)){
     element.style.display = "block";
   }
   else{
     element.style.display = "none";
   }
   //console.log(cardTxt);

  });
});
}

//function to delete a note
function deleteNote(index) {
  //console.log("Deleting Note",index);
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//again define showNotes function as undefined for deleteNote
function showNotes() {
   let notes = localStorage.getItem("notes");
   if(notes == null){
     notesObj = [];
   }
   else{
     notesObj = JSON.parse(notes);
   }
   let html = "";
   notesObj.forEach(function(element, index) {
     html += `
     <div class="notecard my-2 mx-2 card" style="width: 18rem;">
     <div class="card-body">
     <h4 class="card-title">NOTE ${index + 1}</h4>
     <p class="card-text"> ${element}</p>
    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
  </div>
  </div> `;
  //<button id="${index}" onclick="editNote(this.id)" class="btn btn-primary">Edit Note</button>
  });
 let notesElm = document.getElementById('notes');
 if(notesObj.length != 0){
 notesElm.innerHTML = html;
 }
 else {
   notesElm.innerHTML = `<h1 style= "color: #FFF;">Nothing To Show! Use "Add A Note" section above to add notes.</h1>`;//Clear prevoius notes as it will show after refresh too.By using localstorage.clear() command in console in inspect tool.
 }
}

// //function for edit notes
// function editNote(index) {
// console.log("Edit The Note", index);
// let editTxt = document.getElementById('editTxt');
// let notes = localStorage.getItem("notes");
//   if(notes == null){
//     notesObj = [];
//   }
//   else{
//     notesObj = JSON.parse(notes);
//   }
//   let html = "";
//   notesObj.forEach(function(element, index) {
//     html += `
//     <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//     <div class="card-body">
//     <h4 class="card-title">NOTE ${index + 1}</h4>
//     <div class="form-group">
//          <textarea class="form-control" id="editTxt" rows="3">
//          ${element}
//          </textarea>
//     </div>
//          <button id="saveTxt" onclick="saveNote(this.id)" class="btn btn-primary">Save</button>
//     </div>
//     </div> `;
//   });
//  /*else {
//    notesElm.innerHTML = `<h1 style= "color: #FFF;">Nothing To Show! Use "Add A Note" section above to add notes.</h1>`;//Clear prevoius notes as it will show after refresh too.By using localstorage.clear() command in console in inspect tool.
//  }}*/


