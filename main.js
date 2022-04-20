import "./style.scss";
import "./src/index.css";

const discordBtn = document.querySelectorAll(".discord__frame");
const discordIcon = document.querySelector(".discord__frame img");
const joinText = document.querySelector(".discord__frame span");

discordBtn.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    discordIcon.src = "src/images/svg/discord.svg";
    joinText.classList.remove("gold");
    btn.classList.add("gold-bg");
  });
  btn.addEventListener("mouseout", () => {
    discordIcon.src = "src/images/svg/discord-gradient.svg";
    joinText.classList.add("gold");
    btn.classList.remove("gold-bg");
  });
});

const toggleButton = document.querySelector(".header__burger");
const navbar = document.querySelector(".header__menu");
const header = document.querySelector(".header");

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  header.classList.toggle("opened-navbar");
});
