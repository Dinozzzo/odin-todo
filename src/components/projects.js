export default function projects() {
  // MAIN CONTAINER OF THE PAGE
  const container = document.createElement("div");
  container.classList.add("projects-container");

  // TITLE OF THE PAGE
  const title = document.createElement("h3");
  title.textContent = "Projects";

  // GENEREAL ASSEMBLAGE
  container.append(title);
  return container;
}
