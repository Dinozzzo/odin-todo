import "./style.css";

import { loadTasks } from "./components/data.js";
import tasks from "./components/tasks.js";
import projects from "./components/projects.js";

loadTasks();

const content = document.querySelector(".content");

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
