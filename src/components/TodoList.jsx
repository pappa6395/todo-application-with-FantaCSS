import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {

    const { todos, selectedTab } = props

    const filterTodoList = selectedTab === 'All' ? 
    todos : selectedTab === 'Completed' ? 
    todos.filter(val => val.complete) : 
    todos.filter(val => !val.complete)


  return (
    <div>
        {filterTodoList.map((todo, todoIndex) => {
            return (
                <TodoCard 
                    key={todoIndex}
                    todoIndex={todos.findIndex(val => val.
                        input == todo.input)} 
                    {...props}
                    todo={todo} />
            )
        })}
    </div>
  )
}

export default TodoList