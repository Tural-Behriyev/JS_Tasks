const url = "https://jsonplaceholder.typicode.com/users";
const cards = document.querySelector(".cards");
const xhr = new XMLHttpRequest();
xhr.open("GEt", url);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.response);
    data.forEach(({ name, username, email, phone }) => {
      cards.innerHTML += `
      <div class="card">
            <h2>${name}</h2>
            <h3>${username}</h3>
            <p>${email}</p>
            <p>${phone}</p>
        </div>
        `;
    });
  }
};
xhr.send();
