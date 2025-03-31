import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import todoList from "./data/todoList";

function App() {
  let appName = 'My Todo App';

  const handleTodoClick = (id) => {
    todoList.forEach(item => {
      if(item.id === id) item.done = !item.done;
    })
    console.log(todoList)
  }

  const handleAddTodo = (text) => {
    const newTodo = {
      id: todoList.length + 1,
      task : text,
      done : false
    }
    todoList.push(newTodo);
    console.log(todoList);
    
  }

  return (
    <section className="app">
      <h1>{ appName }</h1>
      <TodoList 
        handleTodoClick={handleTodoClick}
        todos={todoList} 
      />
      <AddTodoForm 
        handleAddTodo={handleAddTodo}
      />
    </section>
  )
}

export default App