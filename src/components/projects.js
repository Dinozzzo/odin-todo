import { tasksArray } from "./data.js";

import { projectsList } from "./data.js";

export default function projects() {
  // MAIN CONTAINER OF THE PAGE
  const container = document.createElement("div");
  container.classList.add("projects-container");

  // TITLE OF THE PAGE
  const title = document.createElement("h3");
  title.textContent = "Projects";

  // GRID CONTAINER
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("projects-grid");

  // FUNCTION CREATING CARDS
  function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    const hr = document.createElement("hr");
    cardTitle.textContent = project;

    const taskDisplay = document.createElement("ul");

    projectCard.append(cardTitle, hr, taskDisplay);
    gridContainer.append(projectCard);
    addTasksToCard(project, taskDisplay);
  }

  // ADD EACH TASK TO THE RIGHT CARD
  function addTasksToCard(project, taskDisplay) {
    const projectTasks = tasksArray.filter(
      (task) => task.project === project.toLowerCase(),
    );
    projectTasks.forEach((task) => {
      const displayElement = document.createElement("li");
      displayElement.classList.add("card-element");
      displayElement.textContent = task.title;
      const elementHr = document.createElement("hr");
      elementHr.classList.add("list-hr");
      taskDisplay.append(displayElement, elementHr);
    });
  }

  // CREATE CARD FOR EACH PROJECT
  projectsList.forEach((project) => {
    createProjectCard(project);
  });

  // GENEREAL ASSEMBLAGE
  container.append(title, gridContainer);
  return container;
}
