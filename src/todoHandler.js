export let todoList;
export let todoFolderPicked = false;

export function setTodoList(list) {
    todoList = list;
    console.log(todoList);
}

export function setTodoFolderPicked(value) {
    todoFolderPicked = value;
    console.log(todoFolderPicked);
}