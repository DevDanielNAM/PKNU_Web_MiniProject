const hamburger = document.getElementById("hamburger");
const mobileNavMenu = document.querySelector(".mobile_nav_menu");
const mobileNavItems = document.querySelectorAll(".mobile_nav_menu > li");
const contact = document.getElementById("contact");
const contact2 = document.getElementById("contact2");
const contactModal = document.querySelector(".contactModal");
const btnConfirm = document.getElementById("btnConfirm");
const popUp = document.querySelector(".popUp");
const closePopup = document.getElementById("closePopup");
const contactClick = document.getElementById("contactClick");

hamburger.addEventListener("click", () => {
  if (mobileNavMenu.style.display === "flex") {
    mobileNavMenu.style.display = "none";
    hamburger.style.opacity = "1";
    popUp.style.opacity= "0.8";
  } else {
    mobileNavMenu.style.display = "flex";
    mobileNavMenu.style.position = "fixed";
    hamburger.style.zIndex = "100";
    hamburger.style.opacity = "0.5";
    popUp.style.opacity= "0.5";
    mobileNavItems.forEach((item) => {
      item.style.fontSize = "32px";
    });
  }
});

setInterval(() => {
  mobileNavMenu.style.display = "none";
  hamburger.style.opacity = "1";
  popUp.style.opacity= "0.8";
}, 10000);

contact.addEventListener("click", () => {
  contactModal.style.display = "block";
});

contact2.addEventListener("click", () => {
  contactModal.style.display = "block";
});

btnConfirm.addEventListener("click", () => {
  contactModal.style.display = "none";
});

closePopup.addEventListener('click',() => {
  popUp.style.display = "none";
})

contactClick.addEventListener('click',() => {
  contactModal.style.display = "block";
})

