const container = document.getElementById("user-container");

function fetchUserData() {
  container.innerHTML = "Loading...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(users => {
      container.innerHTML = ""; // Clear previous content
      users.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

// Initial fetch
fetchUserData();
