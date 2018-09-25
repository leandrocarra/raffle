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

    this.state = {
      description: 'description',
      list: [],
      boyName: 'Benino',
      girlName: 'benina'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.setBoyName = this.setBoyName.bind(this)

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
    let name = localStorage.getItem('name')
    let surName= localStorage.getItem('surName')

    this.setState({
      description: e.target.value,
      parent: `${name} ${surName}`
    })
    //console.log(this.state.parent)
  }

  handleAdd() {
    const description = this.state.description
    const parent = this.state.parent
    axios.post(URL, {
      description,
      parent,
      done:true})
      .then(resp => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { done:true })
      .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description))
  }

  setBoyName(todo) {
    this.setState({ boyName: todo.description })
  }

  setGirlName(todo) {
    this.setState({ girlName: todo.description })
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
          setGirlName={this.setGirlName}
          setBoyName={this.setBoyName}
          boyName={this.state.boyName}
          girlName={this.state.girlName}
          />
      </span>
    )
  }
}
