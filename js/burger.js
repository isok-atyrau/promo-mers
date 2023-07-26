const menu = document.querySelector(".menu")
const burger = document.querySelector(".humburger-menu")
const menuListItem = document.querySelectorAll(".menu-list__item")

burger.addEventListener("click", () => {
   menu.classList.toggle("menu-active")
   burger.classList.toggle("humburger-menu-active")

   menuListItem.forEach((item) => {
      item.addEventListener("click", () => {
         menu.classList.remove("menu-active")
         burger.classList.remove("humburger-menu-active")
      })
   })
})
