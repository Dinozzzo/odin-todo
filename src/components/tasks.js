import { saveTasks, tasksArray } from "./data.js";
import { projectsList } from "./data.js";

export default function tasks() {
  // MAIN CONTAINER OF THE PAGE
  const container = document.createElement("div");
  container.classList.add("tasks-container");

  // PAGE TITLE
  const title = document.createElement("h3");
  title.textContent = "Tasks";

  // SIDEBAR CONTAINER
  const sideBar = document.createElement("div");
  sideBar.classList.add("tasks-side-bar");

  // LEFT PART OF SIDEBAR
  const leftSidebar = document.createElement("div");
  leftSidebar.classList.add("left-sidebar");

  // SIDEBAR FILTER BUTTONS
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

  // DIALOG TITLE
  const dialogTitle = document.createElement("h5");
  dialogTitle.textContent = "My new task";
  dialogTitle.classList.add("dialog-title");

  // SEPARATOR LINE
  const hr = document.createElement("hr");

  // FORM CONTAINER INSIDE DIALOG
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  // FORM ELEMENT
  const form = document.createElement("form");
  form.classList.add("tasks-form");

  // TOP PART OF THE FORM
  const topForm = document.createElement("div");
  topForm.classList.add("top-form");

  // LEFT SIDE OF FORM
  const leftForm = document.createElement("div");
  leftForm.classList.add("left-form");

  // TITLE INPUT
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
  titleInp.placeholder = "Send mail to my boss..  ";
  titleInp.required = true;

  // PROJECT SELECT
  const isProjectDiv = document.createElement("div");
  isProjectDiv.classList.add("tasks-form-div");

  const isProjectLab = document.createElement("label");
  isProjectLab.classList.add("tasks-form-label");
  isProjectLab.textContent = "Project";
  isProjectLab.setAttribute("for", "project");

  const isProjectSel = document.createElement("select");
  isProjectSel.classList.add("tasks-form-select");

  projectsList.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.toLowerCase();
    option.textContent = project;
    isProjectSel.append(option);
  });

  // ADD NEW PROJECT
  const addProjectBtn = document.createElement("button");
  addProjectBtn.textContent = "+ Add new project";
  addProjectBtn.classList.add("add-project-btn");

  // RIGHT SIDE OF FORM
  const rightForm = document.createElement("div");
  rightForm.classList.add("right-form");

  // PRIORITY SELECT
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

  // DUE DATE INPUT
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

  // DEFAULT DATE = TODAY
  dueDateInp.value = new Date().toISOString().split("T")[0];

  // BOTTOM PART OF FORM
  const botForm = document.createElement("div");
  botForm.classList.add("bottom-form");

  // DESCRIPTION TEXTAREA
  const descripDiv = document.createElement("div");
  descripDiv.classList.add("tasks-form-div");

  const descripLab = document.createElement("label");
  descripLab.classList.add("tasks-form-label");
  descripLab.textContent = "Description";
  descripLab.setAttribute("for", "description");

  const descripInp = document.createElement("textarea");
  descripInp.classList.add("descrip-input");
  descripInp.id = "description";
  descripInp.name = "description";
  descripInp.placeholder = "Need to send the mail about..";

  // FORM FOOTER BUTTONS
  const footerForm = document.createElement("div");
  footerForm.classList.add("footer-form");

  // TASK LIST DISPLAY CONTAINER
  const tasksListDiv = document.createElement("div");
  tasksListDiv.classList.add("tasks-display");

  // MAIN LIST
  const tasksList = document.createElement("ul");
  tasksList.classList.add("tasks-list");

  // HEADER LINE
  const tasksItemH = document.createElement("li");
  tasksItemH.classList.add("tasks-item");

  const taskTitleH = document.createElement("div");
  taskTitleH.textContent = "Title";
  taskTitleH.classList.add("tasks-cell");

  const taskPriorityH = document.createElement("div");
  taskPriorityH.textContent = "Priority";
  taskPriorityH.classList.add("tasks-cell");

  const taskProjectH = document.createElement("div");
  taskProjectH.textContent = "Project";
  taskProjectH.classList.add("tasks-cell");

  const taskDateH = document.createElement("div");
  taskDateH.textContent = "Due Date";
  taskDateH.classList.add("tasks-cell");

  const taskActions = document.createElement("div");
  taskActions.textContent = "Actions";
  taskActions.classList.add("tasks-cell");

  // BUTTON TO CREATE A TASK
  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Create a new task";
  addTaskBtn.classList.add("addtask-btn");

  // DIALOG CONTAINER
  const dialogContainer = document.createElement("div");
  dialogContainer.classList.add("dialog-container");

  const dialog = document.createElement("dialog");
  dialog.classList.add("tasks-dialog");

  // RENDER FUNCTION : DISPLAY TASKS IN THE DOM
  function renderTasks(tasks = tasksArray) {
    tasksList.innerHTML = "";
    tasksList.append(tasksItemH);

    tasks.forEach((task, index) => {
      const taskLine = createTaskLine(task, index);
      tasksList.append(taskLine);
    });
  }

  let isEditing = false;
  let editingIndex = null;
  const completedTasks = [];

  function createTaskLine(task, index) {
    const newLine = document.createElement("li");
    newLine.classList.add("tasks-item");
    newLine.id = "full-line";

    const newLineTitle = document.createElement("div");
    newLineTitle.id = "new-line-title";
    newLineTitle.textContent = task.title;
    newLineTitle.classList.add("list-items");

    const newLinePriority = document.createElement("div");
    newLinePriority.id = "new-line-priority";
    newLinePriority.classList.add("list-items");

    const priorityBadge = document.createElement("span");
    priorityBadge.textContent = task.priority;
    priorityBadge.classList.add("priority-badge");

    newLinePriority.appendChild(priorityBadge);

    if (priorityBadge.textContent === "low") {
      priorityBadge.style.backgroundColor = "rgb(80, 206, 1)";
    } else if (priorityBadge.textContent === "medium") {
      priorityBadge.style.backgroundColor = "rgb(255, 207, 17)";
    } else if (priorityBadge.textContent === "high") {
      priorityBadge.style.backgroundColor = "rgb(255, 88, 88)";
    }

    const newLineProject = document.createElement("div");
    newLineProject.id = "new-line-project";
    newLineProject.textContent = task.project;
    newLineProject.classList.add("list-items");

    const newLineDate = document.createElement("div");
    newLineDate.id = "new-line-date";
    newLineDate.textContent = task.dueDate;
    newLineDate.classList.add("list-items");

    const newLineActions = document.createElement("div");
    newLineActions.id = "new-line-actions";
    newLineActions.classList.add("list-items");

    if (task.isCompleted) {
      newLineTitle.style.textDecoration = "line-through";
      newLineProject.style.textDecoration = "line-through";
      newLineDate.style.textDecoration = "line-through";
      newLine.style.opacity = "0.5";
    }
    // COMPLETE TASK

    const completeLineBtn = document.createElement("button");
    completeLineBtn.textContent = "Complete";

    if (task.isCompleted) {
      completeLineBtn.textContent = "Undo";
    } else {
      completeLineBtn.textContent = "Complete";
    }

    completeLineBtn.addEventListener("click", (event) => {
      event.stopPropagation();

      task.isCompleted = !task.isCompleted;

      renderTasks();
    });

    // completed filter
    completedBtn.addEventListener("click", () => {
      const completedTasks = tasksArray.filter(
        (task) => task.isCompleted === true,
      );
      renderTasks(completedTasks);
    });

    // DELETE TASK
    const deleteLineBtn = document.createElement("button");
    deleteLineBtn.textContent = "Delete";
    deleteLineBtn.addEventListener("click", () => {
      tasksArray.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    // EDIT THE DIALOG
    const editLineBtn = document.createElement("button");
    editLineBtn.textContent = "Edit";
    editLineBtn.addEventListener("click", () => {
      // edit mode on
      isEditing = true;
      editingIndex = index;
      validFormBtn.textContent = "Edit";
      // keep the original values
      titleInp.value = task.title;
      prioritySel.value = task.priority;
      isProjectSel.value = task.project;
      dueDateInp.value = task.dueDate;
      descripInp.value = task.description;
      // open the dialog
      dialog.showModal();
    });

    // ASSEMBLAGE OF TASK
    newLineActions.append(completeLineBtn, editLineBtn, deleteLineBtn);

    newLine.append(
      newLineTitle,
      newLinePriority,
      newLineProject,
      newLineDate,
      newLineActions,
    );

    tasksList.append(newLine);

    // SHOW DESCRIPTION WHEN TASK IS CLICKED ON
    newLine.addEventListener("click", () => {
      const existing = newLine.nextElementSibling;

      if (existing && existing.classList.contains("descrip-line")) {
        existing.remove();
      } else {
        const descripLine = document.createElement("li");
        descripLine.classList.add("descrip-line");
        descripLine.textContent = task.description;

        newLine.after(descripLine);
      }
    });

    return newLine;
  }

  // CREATE NEW TAKS
  addTaskBtn.addEventListener("click", () => {
    dialog.showModal();
    isEditing = false;
    editingIndex = null;
    validFormBtn.textContent = "Create";
  });

  // CLOSE DIALOG
  const cancelFormBtn = document.createElement("button");
  cancelFormBtn.type = "button";
  cancelFormBtn.textContent = "Cancel";
  cancelFormBtn.classList.add("cancelform-btn");
  cancelFormBtn.addEventListener("click", () => {
    dialog.close();
    form.reset();
  });

  // VALID FORM
  const currentDate = new Date().toISOString().split("T")[0];

  const validFormBtn = document.createElement("button");
  validFormBtn.textContent = "Create";
  validFormBtn.classList.add("validform-btn");
  validFormBtn.type = "submit";

  // FORM SUBMIT : CREATE TASK
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isEditing === true) {
      // edit existing task
      tasksArray[editingIndex] = {
        title: titleInp.value,
        priority: prioritySel.value,
        project: isProjectSel.value,
        dueDate: dueDateInp.value,
        description: descripInp.value,
      };
    } else {
      // create new task
      tasksArray.push({
        title: titleInp.value,
        priority: prioritySel.value,
        project: isProjectSel.value,
        dueDate: dueDateInp.value,
        description: descripInp.value,
        isCompleted: false,
      });
    }
    saveTasks();
    renderTasks();
    dialog.close();
    form.reset();
    isEditing = false;
    editingIndex = null;
    // RESET DATE TO TODAY
    dueDateInp.value = currentDate;
  });

  // FILTER THE TASKS

  // all filter
  allBtn.addEventListener("click", () => {
    renderTasks(tasksArray);
  });

  // overdue filter
  function overdueFilter(task) {
    return task.dueDate < currentDate;
  }

  overdueBtn.addEventListener("click", () => {
    const overdue = tasksArray.filter(overdueFilter);
    renderTasks(overdue);
  });

  // today filter
  function todayFilter(task) {
    return task.dueDate === currentDate;
  }

  todayBtn.addEventListener("click", () => {
    const today = tasksArray.filter(todayFilter);
    renderTasks(today);
  });

  // upcoming filter
  function upcomingFilter(task) {
    return task.dueDate > currentDate;
  }

  upcomingBtn.addEventListener("click", () => {
    const upcoming = tasksArray.filter(upcomingFilter);
    renderTasks(upcoming);
  });

  // SIDEBAR ASSEMBLY
  leftSidebar.append(allBtn, overdueBtn, todayBtn, upcomingBtn, completedBtn);

  sideBar.append(leftSidebar, addTaskBtn);

  // HEADER ASSEMBLY
  tasksItemH.append(
    taskTitleH,
    taskPriorityH,
    taskProjectH,
    taskDateH,
    taskActions,
  );

  tasksListDiv.append(tasksList);

  // FORM STRUCTURE
  titleDiv.append(titleLab, titleInp);
  isProjectDiv.append(isProjectLab, isProjectSel, addProjectBtn);
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

  // DIALOG ASSEMBLY
  dialog.append(dialogTitle, hr, formContainer);
  dialogContainer.append(dialog);

  // FINAL PAGE ASSEMBLY
  container.append(title, sideBar, tasksListDiv, dialogContainer);

  // INITIAL RENDER
  renderTasks();

  return container;
}
