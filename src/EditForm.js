import React, { Component } from 'react'

class AddForm extends Component{
  constructor(props) {
    super(props)

    this.initialState = {
      name: this.props.editedUser.name,
      surname: this.props.editedUser.surname,
    }

    this.state = this.initialState
  }


  handleChange = event => {

    if (event.target.name === "name"){
      this.setState({
        name: event.target.value,
      })
    }
    else{
      this.setState({
        surname: event.target.value
      })
    }

  }

  componentWillReceiveProps(nextProps) {
    this.props.editedUser.id = nextProps.editedUser.id
    this.setState({
      name: nextProps.editedUser.name,
      surname: nextProps.editedUser.surname,
    })
  }

  handleRequest = () => {
    const url = 'http://localhost:8888/user'

    fetch(url + '/' + this.props.editedUser.id, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        surname: this.state.surname,
      })
    })
  }

  handleSubmit = (event) => {
    this.handleRequest();
    this.props.loadUsers();
    this.props.toggleHidden();
  }

  render(){

    return (
      <div className = "editDiv">
        <h2> Edit: </h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value= {this.state.name}
            onChange={this.handleChange} />
          <label>Surname</label>
          <input
            type="text"
            name="surname"
            value= {this.state.surname}
            onChange={this.handleChange} />
          <input type="button" value="Submit" onClick = {this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default AddForm;
