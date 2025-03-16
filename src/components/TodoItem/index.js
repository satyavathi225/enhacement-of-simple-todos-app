// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteButton} = props
  const {title, id} = eachTodo
  const onButtonClicked = () => deleteButton(id)

  return (
    <li className="list-item">
      <p className="sentence">{title}</p>
      <button className="button" type="button" onClick={onButtonClicked}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
