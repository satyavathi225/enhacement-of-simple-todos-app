// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoList, onDeleteTodo, onEditTodo, onSaveTodo} = props
  const [isEdited, setIsEdited] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const {title, id} = todoList
  const onDelete = () => {
    onDeleteTodo(id)
  }

  const onClickEdit = () => {
    setIsEdited(prevState => !prevState)
    onEditTodo(id)
  }

  const onClickSave = () => {
    onSaveTodo(id)
    setIsEdited(prevState => !prevState)
  }

  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked)
  }

  return (
    <li className="each-listItem">
      <div className="todo-title-container">
        <input
          type="checkbox"
          className="checkbox"
          onChange={handleCheckboxChange}
        />
        <p className={`todoName ${isChecked && 'is-checked'}`}> {title} </p>
      </div>
      <div>
        {isEdited ? (
          <button type="button" className="save-button" onClick={onClickSave}>
            Save
          </button>
        ) : (
          <button type="button" className="edit-button" onClick={onClickEdit}>
            Edit
          </button>
        )}
        <button type="button" className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
