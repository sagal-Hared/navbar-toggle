const togglebar = document.getElementById("togglebar");
const worker = document.getElementById("worker");

togglebar.addEventListener("click", () => {
    worker.classList.toggle("display-none");
}
)

