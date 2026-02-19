export default function tasks() {
  const container = document.createElement("div");
  container.classList.add("tasks-container");

  // TITLE + ADD TASKS
  const title = document.createElement("h3");
  title.textContent = "Tasks";

  // SIDEBAR + BUTTONS
  const sideBar = document.createElement("div");
  sideBar.classList.add("tasks-side-bar");

  const leftSidebar = document.createElement("div");
  leftSidebar.classList.add("left-sidebar");

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

  // CREATE TASK BUTTON
  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Create a new task";
  addTaskBtn.classList.add("addtask-btn");

  // ASSEMBLAGE
  leftSidebar.append(allBtn, overdueBtn, upcomingBtn, completedBtn, deletedBtn);
  sideBar.append(leftSidebar, addTaskBtn);
  container.append(title, sideBar);
  return container;
}
