const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", () => {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
});

document.querySelector("#year").textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

document.querySelector("#estimate-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Free estimate request — ${data.get("service")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\n` +
    `Email: ${data.get("email")}\n` +
    `Phone: ${data.get("phone") || "Not provided"}\n` +
    `Service: ${data.get("service")}\n\n` +
    `Project details:\n${data.get("details")}`
  );
  window.location.href = `mailto:integrityhomeservices21@gmail.com?subject=${subject}&body=${body}`;
});
