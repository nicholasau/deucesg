const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".app-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if(filter === "all"){
                card.style.display = "";
                return;
            }

            const tag =
                card.querySelector(".tag")
                    .textContent
                    .trim()
                    .toLowerCase();

            if(tag === filter.toLowerCase()){
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});
