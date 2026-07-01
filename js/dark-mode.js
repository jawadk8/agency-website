const toggleBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.setAttribute("data-bs-theme", "dark");
    toggleBtn.textContent = "Light mode";
  } else {
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.setAttribute("data-bs-theme", "light");
    toggleBtn.textContent = "Dark mode";
  }
}

applyTheme(savedTheme === "dark" || (!savedTheme && systemPrefersDark));

toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  applyTheme(!isDark);
  localStorage.setItem("theme", !isDark ? "dark" : "light");
});