const moon = document.getElementById("moon-icon");

moon.addEventListener("click", () => {
  const container = document.getElementById("login-container");
  if (moon.classList.contains("fa-moon")) {
    moon.classList.remove("fa-moon");
    moon.classList.add("fa-sun");
    container.classList.add("dark");

    return;
  }

  moon.classList.add("fa-moon");
  moon.classList.remove("fa-sun");
  container.classList.remove("dark");
});
