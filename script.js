const tasks = [
  {
    title: "Comprar comida para o gato",
    type: "Urgente",
  },
  {
    title: "Consertar Computador",
    type: "Prioritário",
  },
  {
    title: "Beber água",
    type: "Normal",
  },
];

function createCard(taskInfo) {
  const taskCardItem = document.createElement("li");
  const taskCardContent = document.createElement("div");
  const taskTitle = document.createElement("span");

  if (taskInfo.type === "Urgente") {
    taskTitle.classList.add("span-urgent");
  } else if (taskInfo.type === "Prioritário") {
    taskTitle.classList.add("span-priority");
  } else {
    taskTitle.classList.add("span-normal");
  }

  const taskDescription = document.createElement("p");

  taskDescription.innerText = taskInfo.title;

  taskCardContent.appendChild(taskTitle);
  taskCardContent.appendChild(taskDescription);

  const buttonDelete = document.createElement("button");

  buttonDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  buttonDelete.addEventListener("click", function (event) {
    tasks.splice(tasks.indexOf(taskInfo), 1);

    document.querySelector(".tasks").innerHTML = "";

    renderElements(tasks);
  });

  taskCardItem.appendChild(taskCardContent);
  taskCardItem.appendChild(buttonDelete);

  return taskCardItem;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");

  let card;

  for (let i = 0; i < taskList.length; i++) {
    card = createCard(taskList[i]);
    htmlList.appendChild(card);
  }
}

renderElements(tasks);

const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function (e) {
  const input = document.getElementById("input_title");

  let newTaskList = tasks;

  let task = e.target.form.elements.input_title.value;
  let priority = e.target.form.elements.input_priority.value;

  let newTask = {
    title: task,
    type: priority,
  };

  newTaskList.push(newTask);

  document.querySelector(".tasks").innerHTML = "";

  renderElements(newTaskList);

  input.value = "";

  e.preventDefault();
  e.stopPropagation();
});
