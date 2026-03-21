import { tasksArray } from "./data.js";

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
    cardTitle.textContent = project;
  }

  // GENEREAL ASSEMBLAGE
  container.append(title, gridContainer);
  return container;
}

console.log(tasksArray);
