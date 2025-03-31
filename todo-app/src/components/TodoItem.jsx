function TodoItem({task, done}) {
    console.log(done);
  return (
    <li
        style={{ backgroundColor: done ? 'green' : 'red' }} /* Ternary Operator */
    >{task}</li>
  )
}

export default TodoItem;
