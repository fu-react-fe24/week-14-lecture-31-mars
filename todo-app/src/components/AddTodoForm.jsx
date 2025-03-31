function AddTodoForm({handleAddTodo}) {
    let inputValue = '';

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddTodo(inputValue);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            onChange={ (event) => inputValue = event.target.value }
            type="text" 
            placeholder="Ny Todo" 
        />
        <button>Lägg till</button>
    </form>
  )
}

export default AddTodoForm
