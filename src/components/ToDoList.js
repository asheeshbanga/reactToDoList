import ToDoItem from "./ToDoItem"

export default function ToDoList( { todos, toggleToDo, deleteToDo }) {
    return (
        <ul className="list">
        {todos.length === 0 && <p>No Todos</p>}
        {todos.map(todo => {
          return (
            <ToDoItem 
                {...todo} 
                key={todo.id} 
                toggleToDo={toggleToDo}
                deleteToDo={deleteToDo}
            />
          )
        })}
      </ul>
    )
}