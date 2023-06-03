// Variables
const viewResume = document.querySelector("#resume");
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");
const lightTheme = document.querySelector(".light-theme");
const darkTheme = document.querySelector(".dark-theme");

// Resume View
viewResume.addEventListener("click", function () {
  viewResume.addEventListener("click", function () {
    //alert("Hello")
  });
});

// Portfolio project tab component
p_btn[0].classList.add("p-active-btn");

p_btns.addEventListener("click", (event) => {
  const p_btn_clicked = event.target; // Current tab

  if (p_btn_clicked !== p_btns) {
    p_btn.forEach((currEle) => currEle.classList.remove("p-active-btn"));
    p_btn_clicked.classList.add("p-active-btn");

    // Find the number in data attribute
    const btn_num = p_btn_clicked.dataset.btnNum;

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((currEle) => currEle.classList.add("hidden"));
    img_active.forEach((currEle) => currEle.classList.remove("hidden"));
  }
});

// Dark and Light Theme
lightTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-class");
  document.querySelector("footer").style.backgroundColor = "#101010";
  document.querySelector(".coding-card-item h5").style.color = "#14213d";
  document.querySelector(".coding-card-item a").style.color = "#14214d";

  // Toggle visibility of light-theme and dark-theme icons
  lightTheme.style.display = "none";
  darkTheme.style.display = "block";
});

darkTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-class");
  document.querySelector("footer").style.backgroundColor = "";
  document.querySelector(".coding-card-item h5").style.color = "";
  document.querySelector(".coding-card-item a").style.color = "";

  // Toggle visibility of light-theme and dark-theme icons
  lightTheme.style.display = "block";
  darkTheme.style.display = "none";
});

// Scroll page bottom to top when click on scroll-up-btn
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopButton = document.querySelector(".scroll-up-btn");
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
  const scrollToTopButton = document.querySelector(".scroll-up-btn");
  const scrollStep = -window.scrollY / (500 / 15); // Adjust the scroll speed here

  const scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15); // Adjust the interval speed here
}

//Transition Scroll when click on nav-links
const navLinks = document.querySelectorAll(".nav-links ul a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Toggle the active class on the clicked link
    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");

    // Get the target section from the link's href attribute
    const targetSection = document.querySelector(link.getAttribute("href"));

    // Scroll to the target section with smooth behavior
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navigation-bar

document.querySelector(".nav-links-active").classList.remove("active");

document.querySelector("#nav-toggle").addEventListener("click", () => {
  // document.querySelector(".nav-links-active").style.left = "0";
  document.querySelector(".nav-links-active").classList.toggle("active");
});

// close - nav;
document.querySelector(".close-nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links-active").classList.toggle("active");
});
