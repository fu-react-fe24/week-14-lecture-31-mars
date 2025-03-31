import TodoItem from "./TodoItem";

function TodoList() {
    const todoList = [
        {
            task : 'Köpa Kaffe',
            done : true,
            id : 1
        },
        {
            task : 'Mata katten',
            done : false,
            id : 2
        },
        {
            task : 'Äta glass',
            done : false,
            id : 3
        },
        {
            task : 'Duscha katten',
            done : true,
            id : 4
        },
        {
            task : 'Mata grisen',
            done : false,
            id : 5
        },
    ];

    return (
        <ul>
            {
                todoList.map(todo => {
                    return <TodoItem 
                        key={todo.id}
                        task={todo.task}
                        done={todo.done}
                    />
                })
            }
        </ul>
    )
}

export default TodoList;