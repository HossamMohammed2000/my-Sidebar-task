const body = document.querySelector("body");
const SideBar = body.querySelector(".SideBar");
const toggle = body.querySelector(".toggle");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
const menuLinks = body.querySelectorAll(".nav-link");
const Pages = body.querySelectorAll(".page");
const card = body.querySelectorAll(".card");

const achievements = [
  {
    icon: "bx bxs-badge-check",
    title: "Course Completed",
    desc: "Finished a web development course.",
  },
  {
    icon: "bx bx-rocket",
    title: "Project Launched",
    desc: "Built and deployed a website.",
  },
  {
    icon: "bx bxs-trophy",
    title: "Award Received",
    desc: "Won Best Developer award.",
  },
];

const achievementsSection = document.getElementById("achievements");

achievements.forEach((achieve) => {
  const cards = document.createElement("div");
  cards.classList.add("card");
  cards.innerHTML = `
    <i class="${achieve.icon}"></i>
    <h2>${achieve.title}</h2>
    <p>${achieve.desc}</p>
    <a href="#">Read More</a>
  `;
  achievementsSection.appendChild(cards);
});

toggle.addEventListener("click", () => {
  SideBar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Dark mode";
  } else {
    modeText.innerText = "Light mode";
  }
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    Pages.forEach((section) => section.classList.remove("active"));
    menuLinks.forEach((link) => link.classList.remove("active"));

    item.classList.add("active");

    const targetId = item.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    if (targetSection) targetSection.classList.add("active");
  });
});
