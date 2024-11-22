// function register() {
//   const username = document.getElementById("username").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   // Basic validation
//   if (!username || !email || !password) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   // Replace this with your actual registration logic (e.g., sending to a server)
//   // For now, let's store the user data in local storage
//   const user = { username, email, password };
//   localStorage.setItem("registeredUser", JSON.stringify(user));

//   alert("Registration successful!");
//   // Redirect to the login page or other desired page
//   window.location.href = "login.html";
// }

function register() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  // Basic validation
  if (!username || !email || !password || !age || !gender) {
    alert("Please fill in all fields.");
    return;
  }

  // Replace this with your actual registration logic (e.g., sending to a server)
  const user = { username, email, password, age, gender };
  localStorage.setItem("registeredUser", JSON.stringify(user));

  alert("Registration successful🎊🎉");
  // Redirect to the login page or other desired page
  window.location.href = "login.html";
}