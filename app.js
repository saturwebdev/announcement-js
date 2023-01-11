let announcementForm = document.getElementById("announcementForm")
let date = document.getElementById("date")
let title = document.getElementById("title")
let body = document.getElementById("body")
let imageUrl = document.getElementById("imageUrl")
let createdBy = document.getElementById("createdBy")
let submitButton = document.getElementById("submitButton")
let buttonSpinner = document.getElementById("buttonSpinner")
let buttonText = document.getElementById("buttonText")
let unknownError = document.getElementById("unknownError")

function afterSubmit(e) {
  e.preventDefault()

  if (announcementForm.checkValidity() === false) {
    e.stopPropagation()
    for (field of announcementForm.elements) {
      if (!field.checkValidity()) {
        field.classList.add("is-invalid")
      } else {
        field.classList.remove("is-invalid")
      }
    }
    return
  }

  for (field of announcementForm.elements) {
    field.classList.remove("is-invalid")
  }

  let info = {
    date: date.value,
    title: title.value,
    body: body.value,
    image: imageUrl.value,
    createdby: createdBy.value
  }

  const url = "https://script.google.com/macros/s/AKfycbz1rgNZo7NMzHbDmaBcD9_Sgqz1cIsgZdKeonXdO9DnmG0b8xGwcNFh54F8wEEQEzGCEw/exec"

  buttonText.textContent = "Saving.."
  buttonSpinner.classList.remove("d-none")
  submitButton.disabled = true

  fetch(url, {
    method: "POST",
    cache: "no-cache",
    redirect: "follow",
    body: JSON.stringify(info)
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      announcementForm.reset()
      buttonText.textContent = "Send"
      buttonSpinner.classList.add("d-none")
      submitButton.disabled = false
    })
    .catch(err => {
      console.log(err)
      console.log("Something went wrong")
      unknownError.classList.remove("d-none")

      setTimeout(() => {
        unknownError.classList.add("d-none")
        buttonText.textContent = "Send"
        buttonSpinner.classList.add("d-none")
        submitButton.disabled = false
      }, 3000)
    })
}

announcementForm.addEventListener("submit", afterSubmit)
