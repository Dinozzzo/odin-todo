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
  allBtn.classList.add("tasks-sidebar-button");
  const overdueBtn = document.createElement("button");
  overdueBtn.textContent = "Overdue";
  overdueBtn.classList.add("tasks-sidebar-button");
  const todayBtn = document.createElement("button");
  todayBtn.textContent = "Today";
  todayBtn.classList.add("tasks-sidebar-button");
  const upcomingBtn = document.createElement("button");
  upcomingBtn.textContent = "Upcoming";
  upcomingBtn.classList.add("tasks-sidebar-button");
  const completedBtn = document.createElement("button");
  completedBtn.textContent = "Completed";
  completedBtn.classList.add("tasks-sidebar-button");
  const deletedBtn = document.createElement("button");
  deletedBtn.textContent = "Deleted";
  deletedBtn.classList.add("tasks-sidebar-button");

  // CREATE TASK BUTTON
  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Create a new task";
  addTaskBtn.classList.add("addtask-btn");

  const dialogContainer = document.createElement("div");
  dialogContainer.classList.add("dialog-container");

  const dialog = document.createElement("dialog");
  dialog.classList.add("tasks-dialog");

  // DIALOG CONTENT
  const dialogTitle = document.createElement("h5");
  dialogTitle.textContent = "My new task";
  dialogTitle.classList.add("dialog-title");

  const hr = document.createElement("hr");

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  // FORM
  const form = document.createElement("form");
  form.classList.add("tasks-form");

  const topForm = document.createElement("div");
  topForm.classList.add("top-form");

  // FORM LEFT SIDE
  const leftForm = document.createElement("div");
  leftForm.classList.add("left-form");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("tasks-form-div");

  const titleLab = document.createElement("label");
  titleLab.classList.add("tasks-form-label");
  titleLab.textContent = "Title";
  titleLab.setAttribute("for", "title");

  const titleInp = document.createElement("input");
  titleInp.classList.add("tasks-form-input");
  titleInp.type = "text";
  titleInp.id = "title";
  titleInp.name = "title";
  titleInp.placeholder = "Work..";
  titleInp.required = true;

  const isProjectDiv = document.createElement("div");
  isProjectDiv.classList.add("tasks-form-div");

  const isProjectLab = document.createElement("label");
  isProjectLab.classList.add("tasks-form-label");
  isProjectLab.textContent = "Project";
  isProjectLab.setAttribute("for", "project");

  const isProjectSel = document.createElement("select");
  isProjectSel.classList.add("tasks-form-select");

  const projects = ["Work", "Sport", "Studies", "Others"];
  projects.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.toLowerCase();
    option.textContent = project;
    isProjectSel.append(option);
  });
  // HERE WE WILL NEED TO CONENCT WITH EXISTING PROJECTS !! //

  // FORM RIGHT SIDE
  const rightForm = document.createElement("div");
  rightForm.classList.add("right-form");

  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("tasks-form-div");

  const priorityLab = document.createElement("label");
  priorityLab.classList.add("tasks-form-label");
  priorityLab.textContent = "Priority";
  priorityLab.setAttribute("for", "priority");

  const prioritySel = document.createElement("select");
  prioritySel.classList.add("tasks-form-select");

  const priorities = ["Low", "Medium", "High"];
  priorities.forEach((level) => {
    const option = document.createElement("option");
    option.value = level.toLowerCase();
    option.textContent = level;
    prioritySel.append(option);
  });

  const dueDateDiv = document.createElement("div");
  dueDateDiv.classList.add("tasks-form-div");

  const dueDateLab = document.createElement("label");
  dueDateLab.classList.add("tasks-form-label");
  dueDateLab.textContent = "Due Date";
  dueDateLab.setAttribute("for", "duedate");

  const dueDateInp = document.createElement("input");
  dueDateInp.classList.add("tasks-form-input");
  dueDateInp.type = "date";
  dueDateInp.id = "duedate";
  dueDateInp.name = "duedate";

  // FORM BOTTOM SIDE
  const botForm = document.createElement("div");
  botForm.classList.add("bottom-form");

  const descripDiv = document.createElement("div");
  descripDiv.classList.add("tasks-form-div");

  const descripLab = document.createElement("label");
  descripLab.classList.add("tasks-form-label");
  descripLab.textContent = "Description";
  descripLab.setAttribute("for", "description");

  const descripInp = document.createElement("input");
  descripInp.classList.add("descrip-input");
  descripInp.type = "textarea";
  descripInp.id = "description";
  descripInp.name = "description";

  // DIALOG BUTTONS
  const footerForm = document.createElement("div");
  footerForm.classList.add("footer-form");

  const cancelFormBtn = document.createElement("button");
  cancelFormBtn.textContent = "Cancel";
  cancelFormBtn.classList.add("cancelform-btn");

  const validFormBtn = document.createElement("button");
  validFormBtn.textContent = "Create";
  validFormBtn.classList.add("validform-btn");
  validFormBtn.type = "button";

  // DIALOG EVENT
  addTaskBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  cancelFormBtn.addEventListener("click", () => {
    dialog.close();
  });

  // CREATION OF TASK
  const tasksList = [];

  function taskFactory(title, priority, project, dueDate, description) {
    return {
      title: title,
      priority: priority,
      project: project,
      dueDate: dueDate,
      description: description,
    };
  }

  validFormBtn.addEventListener("click", () => {
    tasksList.push(
      taskFactory(
        titleInp.value,
        prioritySel.value,
        isProjectSel.value,
        dueDateInp.value,
        descripInp.value,
      ),
    );

    console.log(tasksList);
  });

  // ASSEMBLAGE
  leftSidebar.append(
    allBtn,
    overdueBtn,
    todayBtn,
    upcomingBtn,
    completedBtn,
    deletedBtn,
  );

  sideBar.append(leftSidebar, addTaskBtn);

  // form assemblage
  titleDiv.append(titleLab, titleInp);
  isProjectDiv.append(isProjectLab, isProjectSel);
  leftForm.append(titleDiv, isProjectDiv);

  priorityDiv.append(priorityLab, prioritySel);
  dueDateDiv.append(dueDateLab, dueDateInp);
  rightForm.append(priorityDiv, dueDateDiv);

  topForm.append(leftForm, rightForm);

  descripDiv.append(descripLab, descripInp);
  botForm.append(descripDiv);

  footerForm.append(cancelFormBtn, validFormBtn);

  form.append(topForm, botForm, footerForm);
  formContainer.append(form);

  // dialog assembllage
  dialog.append(dialogTitle, hr, formContainer);
  dialogContainer.append(dialog);

  // general assemblage
  container.append(title, sideBar, dialogContainer);
  return container;
}
