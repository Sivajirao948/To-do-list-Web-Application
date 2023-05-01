import React from 'react'

const Todolist = ({Todolist,deleteHandler}) => {
  return (
    <div>
       {Todolist.map((todo,index) =>
       <div key={index}>
        <h5>{todo} &nbsp;  <button onClick={() => deleteHandler (index)}>Delete</button></h5>
       </div>)}
    </div>
  )
}

export default Todolist