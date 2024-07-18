import React from 'react'
import Todo from './Todo'

function TodoList({todos,onremoveTodo,onupdateTodo}) {
    return (
        <div style={{ width: '100%', marginTop: '50px' }}>
            {
                todos && todos.map((todo) => (
                    <Todo onremoveTodo={onremoveTodo} key={todo.id} todo={todo} onupdateTodo={onupdateTodo} />
                ))
            }
    </div>
  )
}

export default TodoList
