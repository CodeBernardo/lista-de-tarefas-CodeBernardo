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
  }
];



function createCard(taskInfo) {
  // Criando elementos necessários
  const taskCardItem = document.createElement("li");
  const taskCardContent = document.createElement("div");

  const taskTitle = document.createElement("span");

  if(taskInfo.type === "Urgente") {
    taskTitle.classList.add('span-urgent')
  } else if(taskInfo.type === "Prioritário") {
    taskTitle.classList.add('span-priority')
  } else {
    taskTitle.classList.add('span-normal')
  }

  const taskDescription = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo
  taskDescription.innerText = taskInfo.title;

  // Adicionando span e paragrafo a div
  taskCardContent.appendChild(taskTitle);
  taskCardContent.appendChild(taskDescription);
  
  // Criando botão para deletar tarefa
  const buttonDelete = document.createElement("button");
  
  // Adicionando icone ao botão
  buttonDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  
  // Adicionando a div e o botão de deletar ao list item
  taskCardItem.appendChild(taskCardContent);
  taskCardItem.appendChild(buttonDelete);
  
  return taskCardItem;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");

  // Ajustar a lógica
  let card
  for(let i=0; i<taskList.length; i++) {
    card = createCard(taskList[i]);
    htmlList.appendChild(card);
  }
}

renderElements(tasks);

function renderLastElement(taskList) {
  const htmlList = document.querySelector(".tasks")
  let card = createCard(taskList)
  htmlList.appendChild(card)
  console.log(htmlList)
}

const btnSubmit = document.getElementById('btnSubmit')
btnSubmit.addEventListener('click', function(e) {
  
  let task = e.target.form.elements.input_title.value
  let priority = e.target.form.elements.input_priority.value
  
  let newTask = {
    title: task,
    type: priority
  }
  
  renderLastElement(newTask)

  e.preventDefault() 
  e.stopPropagation()
})



