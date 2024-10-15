const menu = document.querySelector(".icn1");
const headerContent = document.querySelector(".top");
const closeIcon = document.querySelector(".close-icon");
const menuarea = document.querySelector("body > div > ul");
const voiceparent = document.querySelector("body > audio");
const voicebtn = document.querySelector("body > img");

menu.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.add("open");
  voicebtn.classList.add("phnestg");
});

menuarea.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("open");
  voicebtn.classList.remove("phnestg");
});

window.addEventListener("click", () => {
  headerContent.classList.remove("open");
  voicebtn.classList.remove("phnestg");
});

//........iss trika s bhi kstra h joo true or false hona ek ek cond altern way ,k chl rhi h
voicebtn.addEventListener("click", (e) => {
  voicebtn.classList.toggle("voice-on");
  e.stopPropagation();
  voiceparent.muted = !voiceparent.muted;
});



//..........un attribut ko kesa checked kra jinka hona truty, or n hona flasy hota h jinko value dynmaucly t, f javasc s set n krsta h
// <input type="checkbox" id="checkbox">
// <button id="toggleBtn">Toggle Checked</button>

// const checkbox = document.querySelector("#checkbox");
// const toggleBtn = document.querySelector("#toggleBtn");
// 
// toggleBtn.addEventListener("click", () => {
//   if (checkbox.hasAttribute("checked")) {
//     // If the `checked` attribute is present, remove it
//     checkbox.removeAttribute("checked");
//   } else {
//     // If the `checked` attribute is not present, add it
//     checkbox.setAttribute("checked", "true");
//   }
// });


//.........asa attribute jinki boat sari value hoti h unko kesa set krtga h
/* <input id="myInput" type="text" placeholder="Enter something">
<button id="toggleType">Change Input Type</button> */

// const inputField = document.querySelector("#myInput");
// const toggleTypeButton = document.querySelector("#toggleType");

// toggleTypeButton.addEventListener("click", () => {
//   // Check the current type and change it to the next one
//   if (inputField.getAttribute("type") === "text") {
//     inputField.setAttribute("type", "password"); // Change to password
//   } else if (inputField.getAttribute("type") === "password") {
//     inputField.setAttribute("type", "email"); // Change to email
//   } else {
//     inputField.setAttribute("type", "text"); // Change back to text
//   }
// });



