import "./style.scss";
import "./src/index.css";

const discordBtn = document.querySelectorAll(".discord a");

discordBtn.forEach((btn) => {
  btn.addEventListener("mouseover", (e) => {
    btn.querySelector("img").src = "src/images/svg/discord.svg";
  });
  btn.addEventListener("mouseout", (e) => {
    btn.querySelector("img").src = "src/images/svg/discord-gradient.svg";
  });
});

const socials = document.querySelectorAll(".socials li a img");
const data = soc.getAttribute("data-social");

socials.forEach((social) => {
  social.addEventListener("mouseover", (e) => {
    console.log("hello");
    social.src = `src/images/icon/${data}-gradient.svg`;
  });
  social.addEventListener("mouseout", (e) => {
    social.src = `src/images/icon/${data}.svg`;
  });
});

document.querySelector(".scroll").addEventListener("click", () => {
  window.scrollTo(0, 1200);
  console.log("hello");
});

const toggleButton = document.querySelector(".header__burger");
const navbar = document.querySelector(".header__menu");
const header = document.querySelector(".header");

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  header.classList.toggle("opened-navbar");
});

document.addEventListener("scroll", () => {
  if (window.scrollY >= 186) {
    header.classList.add("bg-black", "z-50");
    header.classList.remove("pb-16");
    document.querySelector(".header__content").classList.remove("pb-16");
  } else if (window.scrollY === 0) {
    header.classList.remove("bg-black", "z-50");
  }
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".popup").classList.add("hidden");
});

document.querySelector("body").addEventListener("click", (event) => {
  if (event.target.matches(".popup__content")) return;
  document.querySelector(".popup").classList.add("hidden");
});

setTimeout(() => {
  document.querySelector(".popup").classList.remove("hidden");
}, 300000);

var $$cookieDisclaimer = document.querySelector(".js-cookie-disclaimer");

if (!localStorage.getItem("cookieDisclaimer")) {
  $$cookieDisclaimer.classList.add("is-active");
}

$$cookieDisclaimer
  .querySelector("button")
  .addEventListener("click", function () {
    localStorage.setItem("cookieDisclaimer", true);
    $$cookieDisclaimer.classList.remove("is-active");
  });
