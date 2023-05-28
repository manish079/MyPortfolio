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
});

document.querySelector(".theme").addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode-class");
  document.querySelector("footer").style.backgroundColor = "#333";
  // document.querySelector(".coding-card-item h5").style.color = "#14213d";
  // document.querySelector(".coding-card-item a").style.color = "#14214d";

  // if (e.target.className == document.querySelector(".light.theme")) {
  //   console.log("sdfsf");
  // }
});

//When user scrolls down 20px from the top of the document, show the btn

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".show").style.display = "block";
  } else {
    document.querySelector(".show").style.display = "none";
  }
};

document.querySelector(".scroll-up-btn").addEventListener("click", () => {
  //scroll to the top element
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
