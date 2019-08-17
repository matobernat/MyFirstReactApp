import React, { Component } from 'react';
import './App.css';
import './cardStyle.css'
import Table from './Table.js'
import AddForm from './AddForm.js'
import EditForm from './EditForm.js'
import Detail from './Detail.js'


class App extends Component {

  state = {
    users: [],
    editedUser: [],
    detailedUser: [],
    editDivIsHidden : true,
    detailDivIsHidden : true,
  }


  removeUser = userId => {
    this.deleteRequest(userId);
    this.loadUsers();
  }

  deleteRequest = userId => {
    const url = 'http://localhost:8888/user'
    return fetch(url + '/' + userId, {
      method: 'delete'
    })
    .then(response => response.json());
  }

  loadUsers = () => {
    const url =
      'http://localhost:8888/user'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          users: result,
        })
      })
    }

  loadUser = (userId) => {
    const url =
      'http://localhost:8888/user'

    fetch(url + '/' + userId)
      .then(result => result.json())
      .then(result => {
        return result
      })
    }

  getUser = (userId) => {
    var selectedUsers = this.state.users.filter((user) => {
       return user.id === userId
     })
     if (selectedUsers.length > 0){
       return selectedUsers[0]
     }
     return null
  }

  seteditedUser = (userId) =>{

    this.setState({
                   editedUser : this.getUser(userId),
                   editDivIsHidden: false
                 })
  }

  setdetailedUser = (userId) =>{
    if (userId === this.state.detailedUser.id){
      this.setState({
                     detailDivIsHidden: !this.state.detailDivIsHidden
                   })
    }
    else{
      this.setState({
                     detailedUser : this.getUser(userId),
                     detailDivIsHidden: false
                   })
    }

  }

  toggleHidden = () => {
    this.setState({
      editDivIsHidden: !this.state.editDivIsHidden
    })
  }



  componentDidMount(){
    this.loadUsers()
    }
  render() {

    return (
      <div className="container">


        <Table
          removeUser = {this.removeUser}
          getUsers = {this.state.users}
          seteditedUser = {(userId)=> {this.seteditedUser(userId)}}
          setdetailedUser = {(userId)=> {this.setdetailedUser(userId)}}
          />

          <AddForm loadUsers = {this.loadUsers}/>


          {!this.state.editDivIsHidden &&
              <EditForm
                loadUsers = {this.loadUsers}
                toggleHidden = {this.toggleHidden}
                editedUser = {this.state.editedUser}
                changeEditedUser ={(name, surname)=> {this.changeEditedUser(name, surname)}}
              />
          }

          {!this.state.detailDivIsHidden &&
              <Detail
                loadUsers = {this.loadUsers}
                toggleHidden = {this.toggleHidden}
                detailedUser = {this.state.detailedUser}
              />
          }
      </div>
    )
  }
}
export default App;
