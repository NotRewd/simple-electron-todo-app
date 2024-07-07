import React, { useEffect, useState } from 'react'
import TodoList from '../components/TodoList.jsx'
import NewTodoButton from '../components/NewTodoButton.jsx'
import TodoContent from '../components/TodoContent.jsx'
import NoTodoContent from '../components/NoTodoContent.jsx'

function TodoPage(props)
{
  const [todoItems, setTodoItems] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() =>
  {
    setTodoItems(props.todoItems);
  }, [props.todoItems]);

  const createNewTodo = () =>
  {
    const item = {
      title: 'New Todo',
      content: 'My new todo item.'
    };

    setTodoItems([...todoItems, item]);
  }
  
  return (
    <div className="todo-page">
      <div className="sidebar">
        <h2 className="sidebar-header">Todos</h2>
        <div className="sidebar-content">
          <TodoList todoItems={todoItems} onTodoSelected={setSelectedTodo}/>
          <NewTodoButton onClick={createNewTodo}/>
        </div>
      </div>

      <div className="content">
        {selectedTodo ? <TodoContent key={selectedTodo.id} todoItem={selectedTodo} /> : <NoTodoContent />}
      </div>
    </div>
  )
}

export default TodoPage