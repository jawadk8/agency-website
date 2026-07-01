const toggleBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleBtn.textContent = "Light mode";
} else {
  toggleBtn.textContent = "Dark mode";
}

toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "Dark mode";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "Light mode";
  }
});