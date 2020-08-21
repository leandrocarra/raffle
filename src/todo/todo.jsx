import React, {Component} from 'react'
import axios from 'axios'

import TodoForm from './todoForm'

import './css/reset.css';
import './css/App.css';
import './css/RaffleGenders.css';
import './css/RaffleConfirmed.css';
import './css/RaffleFloater.css';
import './css/RaffleLogin.css';
import './css/RaffleTop.css';
import './css/RaffleReward.css';

 //const URL = 'https://shrouded-tundra-40513.herokuapp.com/api/todos'
const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: 'description',
      list: [],
      boyName: 'Benino',
      girlName: 'benina',
      nameIdGirl: '',
      nameIdBoy: '',
      boyChecked: false,
      girlChecked: false,
      showShadow: 'none',
      showConfirm: '',
      showSuccess: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleAddParent = this.handleAddParent.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.setBoyName = this.setBoyName.bind(this)
    this.setGirlName = this.setGirlName.bind(this)
    this.handleGetId = this.handleGetId.bind(this)
    this.toggleChangeBoy = this.toggleChangeBoy.bind(this)
    this.toggleChangeGirl = this.toggleChangeGirl.bind(this)
    this.showConfirmBox = this.showConfirmBox.bind(this)
    this.hideConfirmBox = this.hideConfirmBox.bind(this)
    this.showSuccess = this.showSuccess.bind(this)

    this.refresh()

    this.handleClear = () => {
      this.refresh();
    }
  }

  toggleChangeBoy() {
    // console.log(this.state.boyChecked)
    this.setState({
      boyChecked: true
    },() => this.showConfirmBox())

  }

  toggleChangeGirl() {
    // console.log(this.state.girlChecked)
    this.setState({
      girlChecked: true
    },() => this.showConfirmBox())
  }

  showConfirmBox() {
    if (this.state.boyChecked === true && this.state.girlChecked === true){
      this.setState({
        showConfirm: 'raffle-floater__effect',
        showShadow: 'show'
      })
    }
  }

  hideConfirmBox() {
    this.setState({
      showConfirm: '',
      showShadow: 'none'
    })
  }

  showSuccess() {
    this.setState({
      showSuccess: 'success'
    })
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=createAt${search}`)
      .then(resp => this.setState({...this.state, description, list: resp.data}))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleGetId() {
    let getId = getAttribute("data-id")
  }

  handleChange(e) {
    let name = localStorage.getItem('name')
    let surName= localStorage.getItem('surName')
    this.setState({
      description: e.target.value,
      parent: `${name} ${surName}`
    })
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, {
      description,
      done:false
    })
      .then(resp => this.refresh())
  }

  handleAddParent() {
    const parent = this.state.parent
    const nameIdBoy = this.state.nameIdBoy
    const nameIdGirl = this.state.nameIdGirl
    Promise.all([
      axios.put(`${URL}/${nameIdBoy}`, {parent, done:true }),
      axios.put(`${URL}/${nameIdGirl}`, {parent, done:true })
    ])
    .then(resp => this.refresh())
    .then(resp => this.showSuccess())
    // console.log('boy', nameIdBoy, 'girl', nameIdGirl)
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
    this.setState({
      boyName: todo.description,
      nameIdBoy: todo._id
    })
  }

  setGirlName(todo) {
    this.setState({
      girlName: todo.description,
      nameIdGirl: todo._id
    })
  }

  render(){
    return(
      <span>
        <TodoForm
          list={this.state.list}
          handleMarkAsDone={this.handleMarkAsDone}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleAddParent={this.handleAddParent}
          description={this.state.description}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          setGirlName={this.setGirlName}
          setBoyName={this.setBoyName}
          boyName={this.state.boyName}
          girlName={this.state.girlName}
          nameIdGirl={this.state.nameIdGirl}
          nameIdBoy={this.state.nameIdBoy}
          nameId={this.state.nameId}
          toggleChangeBoy={this.toggleChangeBoy}
          toggleChangeGirl={this.toggleChangeGirl}
          showConfirm={this.state.showConfirm}
          showShadow={this.state.showShadow}
          hideConfirmBox={this.hideConfirmBox}
          showSuccess={this.state.showSuccess}
          />
      </span>
    )
  }
}
