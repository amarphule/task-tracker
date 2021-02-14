const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Add Task</label>
                <input type='text' placeholder='Add task' />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Day and Time' />
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' />
            </div>
            <input type='submit' value='Add New Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
