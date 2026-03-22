// TASKS LIST
export const tasksArray = [
  {
    title: "Go to the gym",
    priority: "medium",
    project: "sport",
    dueDate: "2026-03-20",
    description: "Leg day session",
  },
  {
    title: "Send email to boss",
    priority: "high",
    project: "work",
    dueDate: "2026-03-21",
    description: "About next week's planning",
  },
  {
    title: "Study JavaScript",
    priority: "low",
    project: "studies",
    dueDate: "2026-03-22",
    description: "Review modules and webpack",
  },
];

// PROJECT OPTIONS
export const projectsList = ["Work", "Sport", "Studies", "Others"];

// LOCALSTORAGE

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

export function loadTasks() {
  const data = localStorage.getItem("tasks");
  if (!data) return;

  const parsedData = JSON.parse(data);
  tasksArray.length = 0;
  tasksArray.push(...parsedData);
}
