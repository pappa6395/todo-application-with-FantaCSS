import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";

function TodoInput(props) {

    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('');
    

  return (
    <div className='input-container'>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Add task'/>
        <button 
            className='input-button' 
            onClick={() => {
                if (!inputValue) {return}
                handleAddTodo(inputValue)
                setInputValue('')
                }}>
                <FaPlus style={{marginTop:"10px"}} />
        </button>
    </div>
  )
}

export default TodoInput