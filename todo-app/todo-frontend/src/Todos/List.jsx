import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
    return (
        <>
            {todos.map(todo => {
                return (
                    <React.Fragment key={todo._id}>
                        <Todo
                            todo={todo}
                            onDelete={() => deleteTodo(todo)}
                            onComplete={() => completeTodo(todo)}
                        />
                        <hr />
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default TodoList