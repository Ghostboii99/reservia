const form = document.querySelector("#search-form");
const destination = document.querySelector("#destination");
const status = document.querySelector("#search-status");
const cards = [...document.querySelectorAll(".stay-card")];
const checkIn = document.querySelector("#check-in");

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
checkIn.min = tomorrow.toISOString().split("T")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const selected = destination.value;
  let visible = 0;

  cards.forEach((card) => {
    const match = selected === "all" || card.dataset.destination === selected;
    card.hidden = !match;
    if (match) visible += 1;
  });

  const label = destination.options[destination.selectedIndex].text;
  status.textContent = `${visible} curated ${visible === 1 ? "stay" : "stays"} found for ${label}.`;
  document.querySelector("#stays").scrollIntoView({ behavior: "smooth" });
});
