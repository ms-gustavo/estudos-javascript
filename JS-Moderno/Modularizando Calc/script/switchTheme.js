function switchTheme() {
  const body = document.querySelector("body");
  const root = document.querySelector(":root");
  if (body.id === "dark") {
    root.style.setProperty("--bg-color", "#ffffff");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#F28029");
    root.style.setProperty("--primary-color", "#3811F2");

    body.id = "light";
  } else {
    root.style.setProperty("--bg-color", "#090909");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#ffffff");
    root.style.setProperty("--primary-color", "#280137");
    body.id = "dark";
  }
}

export { switchTheme };
