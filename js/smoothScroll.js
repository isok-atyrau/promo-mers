const linksHead = document.querySelectorAll(".menu-list__link")
const mainScroll = document.querySelector(".menu__scroll")
const newArray = [...linksHead, mainScroll]

newArray.forEach((link) => {
   link?.addEventListener("click", (e) => {
      e.preventDefault()

      const ID = e.target.getAttribute("href").substr(1)

      seamless.scrollIntoView(document.getElementById(ID), {
         behavior: "smooth",
         block: "start",
         inline: "center",
      })
   })
})
