var viewResume = document.querySelector("#resume");

viewResume.addEventListener("click", function () {
  viewResume.addEventListener("click", function () {
    //alert("Hello")
  });
});

//nav button
// document.querySelector(".nav-links").classList.toggle("nav-links-active");
// document.querySelector("#nav-toggle").addEventListener("click", () => {
//   document.querySelector(".active").style.left = 0;

//   document
//     .querySelector(".nav-links-active .secondary-button")
//     .classList.remove("secondary-button");

//   document
//     .querySelector(".nav-links-active .primary-button")
//     .classList.remove("primary-button");
// });

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

// =====================================================================================
// Dark and Light Theme

document.querySelector(".light-theme").addEventListener("click", () => {
  // console.log("Click");

  const lightTheme = document.querySelector(".light-theme");
  const darkTheme = document.querySelector(".dark-theme");

  document.body.classList.toggle("dark-mode-class");
  document.querySelector("footer").style.backgroundColor = "#101010";
  document.querySelector(".coding-card-item h5").style.color = "#14213d";
  document.querySelector(".coding-card-item a").style.color = "#14214d";

  // Toggle visibility of light-theme and dark-theme icons
  lightTheme.style.display = "none";
  darkTheme.style.display = "block";
});
document.querySelector(".dark-theme").addEventListener("click", () => {
  const lightTheme = document.querySelector(".light-theme");
  const darkTheme = document.querySelector(".dark-theme");

  document.body.classList.toggle("dark-mode-class");
  document.querySelector("footer").style.backgroundColor = ""; // Restore default value
  document.querySelector(".coding-card-item h5").style.color = ""; // Restore default value
  document.querySelector(".coding-card-item a").style.color = ""; // Restore default value

  // Toggle visibility of light-theme and dark-theme icons
  lightTheme.style.display = "block";
  darkTheme.style.display = "none";
});

// =====================================================================================
//Scroll page bottom to top when click on scroll-up-btn

//When user scrolls down 20px from the top of the document, show the btn

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopButton = document.querySelector(".scroll-up-btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// Scroll to top when the button is clicked
document.querySelector(".scroll-up-btn").onclick = function () {
  scrollToTop();
};

function scrollToTop() {
  //Without transition it goes to top

  /*  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; */

  //With transition
  var scrollToTopButton = document.querySelector(".scroll-up-btn");
  var scrollStep = -window.scrollY / (500 / 15); // Adjust the scroll speed here

  var scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15); // Adjust the interval speed here
}
