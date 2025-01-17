const spanLinks = document.querySelector(".nav .links span");
const secondLinks = document.querySelector(".second-links");
const toggleIcon = document.querySelector(".nav > i");
const scrollToTop = document.querySelector("body > i");
const infoDiv = Array.from(document.querySelectorAll(".info"));
const textInfo = Array.from(
  document.querySelectorAll(".faq .faq-info > .text-info")
);
const landingSection = document.querySelector(".landing");
const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg"];
let interval = setInterval(() => {
  let randomImg = images[Math.floor(Math.random() * images.length)];
  landingSection.style.backgroundImage = `url(${randomImg})`;
}, 10000);
const imagesAvatar = Array.from(
  document.querySelectorAll(".clients .photos img")
);
const clientText = Array.from(document.querySelectorAll(".clients .text"));
imagesAvatar.forEach((img, index) => {
  img.addEventListener("click", () => {
    imagesAvatar.forEach((im) => {
      im.classList.remove("active");
    });
    img.classList.add("active");
    clientText.forEach((t, i) => {
      t.classList.remove("active");
      if (index === i) {
        t.classList.add("active");
      }
    });
  });
});
scrollToTop.style.display = "none";
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});
spanLinks.addEventListener("click", () => {
  secondLinks.classList.toggle("show");
});
toggleIcon.addEventListener("click", () => {
  document.querySelector(".nav .links").classList.toggle("show");
});
infoDiv.forEach((div, index) => {
  div.addEventListener("click", () => {
    infoDiv.forEach((d, i) => {
      if (i !== index) {
        d.children[0].classList.remove("flip");
        textInfo[i].classList.remove("show");
      }
    });
    div.children[0].classList.toggle("flip");
    textInfo[index].classList.toggle("show");
  });
});
