import React from 'react'
import { connect } from 'react-redux'
import { addTask } from './action'
function Right({addNewTask }) {
  function handleAddTask() {
    const task = document.querySelector('.task').value
    addNewTask(task);
  }
  return (
    <div class='right'>
      <label>Enter Content</label>
      <input type='text' className='task'/>
      <button onClick={handleAddTask}>SUBMIT</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  appState: state,
})

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (task) => dispatch(addTask(task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Right)
