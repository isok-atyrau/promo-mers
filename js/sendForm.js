const form = document.querySelector(".form-test-drive")
const API_URL = "https://jsonplaceholder.typicode.com"

form.addEventListener("submit", (e) => {
   e.preventDefault()

   let data = []

   for (let { name, value } of form.elements) {
      if (name) {
         data[name] = value
      }
   }

   fetch(`${API_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(data),
   })
      .then((responce) => {
         if (responce.status === 200 || responce.status === 201) {
            return responce.json()
         } else {
            throw new Error(responce.status)
         }
      })
      .then((data) => {
         alert(`Данные отправлены успешно!!!`)
         form.reset()
      })
      .catch((error) => {
         console.dir(error)
         alert(`Произошла ошибка, статус ${error.message}`)
      })
})
