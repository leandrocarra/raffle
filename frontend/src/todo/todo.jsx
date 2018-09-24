import React, {Component} from 'react'
import axios from 'axios'


import TodoForm from './todoForm'

import './css/Reset.css';
import './css/App.css';
import './css/RaffleGenders.css';
import './css/RaffleConfirmed.css';
import './css/RaffleFloater.css';
import './css/RaffleLogin.css';
import './css/RaffleTop.css';
import './css/RaffleReward.css';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = { description: 'description', list: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleSetStorage = this.handleSetStorage.bind(this)
    this.handleGetStorage = this.handleGetStorage.bind(this)

    this.refresh()

    this.handleClear = () => {
      this.refresh();
    }
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createAt${search}`)
      .then(resp => this.setState({...this.state, description, list: resp.data}))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, {description})
    .then(resp => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done:true })
      .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description))
  }

  handleSetStorage(todo) {
    localStorage.setItem(todo._id, todo.description);
    // this.handleGetStorage(todo)
  }

  handleGetStorage(todo) {
    let storaged = localStorage.getItem(todo._id);
    console.log(storaged)
    return storaged
  }

  render(){
    return(
      <span>
        <TodoForm
          list={this.state.list}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          handleSetStorage={this.handleSetStorage}
          handleGetStorage={this.handleGetStorage}
          />
      </span>
    )
  }
}
