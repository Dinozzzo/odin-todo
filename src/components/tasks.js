export default function tasks() {
  const container = document.createElement("div");
  container.classList.add("tasks-container");

  // TITLE
  const title = document.createElement("h3");
  title.textContent = "Tasks";

  // SIDEBAR + BUTTONS
  const sideBar = document.createElement("div");
  sideBar.classList.add("tasks-side-bar");

  const allBtn = document.createElement("button");
  allBtn.textContent = "All";
  const overdueBtn = document.createElement("button");
  overdueBtn.textContent = "Overdue";
  const upcomingBtn = document.createElement("button");
  upcomingBtn.textContent = "Upcoming";
  const completedBtn = document.createElement("button");
  completedBtn.textContent = "Completed";
  const deletedBtn = document.createElement("button");
  deletedBtn.textContent = "Deleted";

  // ADD A TASK

  // ASSEMBLAGE
  sideBar.append(allBtn, overdueBtn, upcomingBtn, completedBtn, deletedBtn);
  container.append(title, sideBar);
  return container;
}
