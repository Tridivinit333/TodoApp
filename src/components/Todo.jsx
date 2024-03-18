import React from 'react'
import { FaTrash } from 'react-icons/fa';

const Todo = ({Todo}) => {

    const handleDelte = ()=>{
        onDelete(todo.id)
    }


  return (
    <div className='realtodo' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    {/* Todo item */}
    <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">
            <strong><p>{Todo}</p></strong>
        </label>
    </div>
    {/* Recycle bin icon */}
    <FaTrash onClick={handleDelte} style={{ cursor: 'pointer' }} />
</div>
  )
}

export default Todo
