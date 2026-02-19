import "./style.css";

const content = document.querySelector(".content");

import home from "./components/home.js";
import tasks from "./components/tasks.js";

function render(pageFn) {
  content.textContent = "";
  content.append(pageFn());
}

render(home);

const dashboardBtn = document.querySelector("#dashboard-btn");
dashboardBtn.addEventListener("click", () => {
  render(home);
});

const tasksBtn = document.querySelector("#tasks-btn");
tasksBtn.addEventListener("click", () => {
  render(tasks);
});
