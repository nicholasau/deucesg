document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".app-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter.toLowerCase();

      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      cards.forEach(card => {
        const tagElement = card.querySelector(".tag");

        if (!tagElement) {
          card.style.display = "none";
          return;
        }

        const cardTag = tagElement.textContent.trim().toLowerCase();

        if (selectedFilter === "all" || cardTag === selectedFilter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
