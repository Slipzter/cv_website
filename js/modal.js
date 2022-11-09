const modal = document.querySelector("#myModal");

const modalBtn = document.querySelector("#contact-button");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    console.log("opened modal");
}

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    console.log("closed modal");
}



modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

