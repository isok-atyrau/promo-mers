const btn = document.querySelector(".more")
const modal = document.querySelector(".modal")

btn.addEventListener("click", () => {
   modal.classList.remove("hidden")
})

modal.addEventListener("click", (e) => {
   const target = e.target

   if (
      target.classList.contains("overlay") ||
      target.classList.contains("modal__close")
   ) {
      modal.classList.add("hidden")
   }
})
