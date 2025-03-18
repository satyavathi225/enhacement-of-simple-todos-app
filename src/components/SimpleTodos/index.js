import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {simpleTodoList: initialTodosList, inputTodo: ''}

  onDeleteTodo = id => {
    const {simpleTodoList} = this.state
    const filteredTodoList = simpleTodoList.filter(
      eachTodo => eachTodo.id !== id,
    )
    this.setState({simpleTodoList: filteredTodoList})
  }

  onEditTodo = id => {
    const {simpleTodoList} = this.state
    const todo = simpleTodoList.find(eachTodo => eachTodo.id === id)
    this.setState({inputTodo: todo.title})
  }

  onSaveTodo = id => {
    const {inputTodo} = this.state

    this.setState(prevState => ({
      simpleTodoList: prevState.simpleTodoList.map(eachTodo =>
        eachTodo.id === id ? {...eachTodo, title: inputTodo} : eachTodo,
      ),
      inputTodo: '',
    }))
  }

  onEnterTodo = event => {
    this.setState({inputTodo: event.target.value})
  }

  onClickAddTodo = () => {
    const {inputTodo} = this.state
    const trimmedTodo = inputTodo.trim()

    if (trimmedTodo !== '') {
      // Extract number at the end of input
      const match = trimmedTodo.match(/(\d+)$/) // Finds a number at the end
      const count = match ? parseInt(match[0], 10) : 1 // Default to 1 if no number found
      const todoText = match
        ? trimmedTodo.replace(/\d+$/, '').trim()
        : trimmedTodo

      const multipliedTodos = Array.from({length: count}, () => ({
        id: uuidv4(),
        title: todoText,
      }))

      this.setState(prevState => ({
        simpleTodoList: [...prevState.simpleTodoList, ...multipliedTodos],
        inputTodo: '', // Reset input after adding
      }))
    }
  }

  render() {
    const {simpleTodoList, inputTodo} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="todo-heading"> Simple Todos </h1>
          <div className="input-container">
            <input
              type="text"
              onChange={this.onEnterTodo}
              value={inputTodo}
              className="input-todo"
              placeholder="Title"
            />
            <button
              type="button"
              className="add-button"
              onClick={this.onClickAddTodo}
            >
              Add
            </button>
          </div>
          <ul className="todo-ul">
            {simpleTodoList.map(eachTodo => (
              <TodoItem
                onDeleteTodo={this.onDeleteTodo}
                onEditTodo={this.onEditTodo}
                onSaveTodo={this.onSaveTodo}
                todoList={eachTodo}
                key={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
