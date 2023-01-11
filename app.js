function getData() {
  const url = "https://script.google.com/macros/s/AKfycbz1rgNZo7NMzHbDmaBcD9_Sgqz1cIsgZdKeonXdO9DnmG0b8xGwcNFh54F8wEEQEzGCEw/exec"

  fetch(url)
    .then(response => response.json())
    .then(response => {
      document.getElementById("app").textContent = response[0].status
    })
}

function setData() {
  const url = "https://script.google.com/macros/s/AKfycbz1rgNZo7NMzHbDmaBcD9_Sgqz1cIsgZdKeonXdO9DnmG0b8xGwcNFh54F8wEEQEzGCEw/exec"

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    body: JSON.stringify({"title":"Generate your eRCS (LOA) in a few click!","date":"2022-12-17T16:00:00.000Z","body":"","image":"https://drive.google.com/file/d/1J2YIZgLCVQ3h4amrw34gsDEp6IuFJ1ac/view?usp=share_link","createdby":"Admin"})
  })

  console.log("setData")
}

document.getElementById("btn").addEventListener("click", getData)
document.getElementById("btn2").addEventListener("click", setData)
