import TodoList from "./components/TodoList";

function App() {
  let appName = 'My Todo App';

  return (
    <section className="app">
      <h1>{ appName }</h1>
      <TodoList />
    </section>
  )
}

export default App