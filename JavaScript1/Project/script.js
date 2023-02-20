const tarefa = document.getElementById("tarefa");
const btnADD = document.getElementById("adicionar");
const lista = document.getElementById("listaTarefas");

const inserirTarefa = () => {
  const item = document.createElement('li');
  item.innerText = tarefa.value;
  
  const editBtn = document.createElement('button');
  editBtn.innerText = 'Editar';

  if (editBtn.innerText === 'Editar') {
    editBtn.addEventListener('click', () => {   
      tarefa.value = item.value;
      editBtn.innerText = 'Salvar';
    });
  }
  if (editBtn.innerText === 'Salvar') {
    editBtn.addEventListener('click', () => {
      item.innerText = tarefa.value;
      editBtn.innerText = 'Editar';
      tarefa.value = '';
    });      
  }
  item.appendChild(editBtn);
  
  lista.appendChild(item);
  tarefa.value = '';
}

btnADD.addEventListener('click', inserirTarefa);

lista.addEventListener('click', ({target})=> {
  if (target.tagName === 'LI') {
    target.remove();
  }
})