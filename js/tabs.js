const tabsHandlerElements = document.querySelectorAll("[data-tabs-handler]")
const tabsContentElements = document.querySelectorAll("[data-tabs-field]")
const designTitle = document.querySelectorAll(".design__title")

tabsHandlerElements.forEach((tab, tabIndex) => {
   tab.addEventListener("click", () => {
      tabsHandlerElements.forEach((item) =>
         item.classList.remove("design-list__item_active")
      )
      tab.classList.add("design-list__item_active")

      tabsContentElements.forEach((content) => {
         if (content.dataset.tabsField === tab.dataset.tabsHandler) {
            content.classList.remove("hidden")
         } else {
            content.classList.add("hidden")
         }
      })

      designTitle.forEach((title, titleIndex) => {
         title.classList.add("hidden")
         if (tabIndex === titleIndex) {
            title.classList.remove("hidden")
         }
      })
   })
})
