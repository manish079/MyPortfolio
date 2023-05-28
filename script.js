var viewResume = document.querySelector("#resume");

viewResume.addEventListener("click", function () {
  viewResume.addEventListener("click", function () {
    //alert("Hello")
  });
});

//nav button

document.querySelector(".nav-links").classList.toggle("nav-links-active");
document.querySelector("#nav-toggle").addEventListener("click", () => {
  document.querySelector(".active").style.left = 0;

  // document.querySelector(".nav-links").classList.toggle("nav-links-active");

  // document.querySelector(".nav-links-active").style.display = "block";

  document
    .querySelector(".nav-links-active .secondary-button")
    .classList.remove("secondary-button");

  document
    .querySelector(".nav-links-active .primary-button")
    .classList.remove("primary-button");
});

// creating portfolio project tab component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btn[0].classList.add("p-active-btn");

p_btns.addEventListener("click", (event) => {
  const p_btn_clicked = event.target; //current tab
  // console.log(p_btn_clicked);

  if (p_btn_clicked !== p_btns) {
    p_btn.forEach((currEle) => currEle.classList.remove("p-active-btn"));
    // if (p_btn_clicked != p_btns) {
    p_btn_clicked.classList.add("p-active-btn");

    // to find the number in data Attr
    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((currEle) => currEle.classList.add("hidden"));

    img_active.forEach((currEle) => currEle.classList.remove("hidden"));
  }

  // }
});

document.querySelector("#dark-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-class");
});

// document.getElementById("dark-mode").addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode-class");
// });

// document.getElementById("dark-mode").addEventListener("click", () => {
//   document.body.style.backgroundColor = "black";
//   document.body.style.color = "white";

//   document.querySelectorAll("p").forEach((element) => {
//     element.style.color = "white";
//   });
//   document.querySelectorAll("a").forEach((element) => {
//     element.style.color = "white";
//   });
//   document.querySelectorAll(".secondary-button").forEach((element) => {
//     element.style.color = "white";
//   });
// });

// document.getElementById("dark-mode").addEventListener("click", (e) => {
//   if (icon.classList.contains("fa-sharp fa-solid fa-moon")) {
//     icon.classList.remove("fa-sharp fa-solid fa-moon");
//     icon.classList.add("fa-solid fa-brightness");
//   } else {
//     icon.classList.remove("fa-solid fa-brightness");
//     icon.classList.add("fa-sharp fa-solid fa-moon");
//   }
// });

//send email contact
// const contact = document.querySelector(".contact-btn");
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");
// const msg = document.querySelector("#msg");

// if (contact) {
//   if (
//     document.myForm.name.value != "" &&
//     document.myForm.email.value != "" &&
//     document.myForm.msg != ""
//   ) {
//     contact.addEventListener("click", function () {
//       alert("Successfully form submited");
//     });
//   } else {
//     alert("wrong");
//   }
// }
//
