import React, {useState} from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()
  const handleAdd = () => {
    axios.post('http://localhost:3001/add', {task: task})
    .then(() => location.reload())
    .catch(err => console.log(err))
    console.log('Add button clicked')
  }
  return (
    <div className='create_form'>
        <input type="text" placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create