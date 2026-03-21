import "./style.css";

const content = document.querySelector(".content");

import tasks from "./components/tasks.js";
import projects from "./components/projects.js";

function render(pageFn) {
  content.textContent = "";
  content.append(pageFn());
}

render(projects);

const tasksBtn = document.querySelector("#tasks-btn");
tasksBtn.addEventListener("click", () => {
  render(tasks);
});

const projectsBtn = document.querySelector("#projects-btn");
projectsBtn.addEventListener("click", () => {
  render(projects);
});
