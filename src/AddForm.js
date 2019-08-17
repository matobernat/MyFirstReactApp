import React, { Component } from 'react'

class AddForm extends Component{
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      surname: '',
      job: ''
    }

    this.state = this.initialState
  }

  handleChange = event => {

    if (event.target.name === "name"){
      this.setState({
        name: event.target.value,
      })
    }
    else if (event.target.name === "surname") {
      this.setState({
        surname: event.target.value
      })
    }
    else {
      this.setState({
        job: event.target.value
      })
    }
  }

  hanleRequest = () => {
    fetch('http://localhost:8888/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        surname: this.state.surname,
        job:this.state.job
      })
    })
  }

  handleSubmit = (event) => {
    this.setState(this.initialState);
    this.hanleRequest();
    this.props.loadUsers();
  }

  render(){

    return (
      <div className = "registerDiv">
        <h2> Register: </h2>
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
          <label>Job</label>
            <input
              type="text"
              name="job"
              value= {this.state.job}
              onChange={this.handleChange} />
          <input type="button" value="Submit" onClick = {this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default AddForm;
