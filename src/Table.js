import React, { Component } from 'react'

class Table extends Component {
  render() {
    const { removeUser, getUsers , seteditedUser, setdetailedUser} = this.props

    return (
      <div className = "tableDiv">
      <h1>Hello, this is list of users </h1>
      <table className = "table table-sm">
      <TableHeader />
      <TableBody  removeUser={removeUser} getUsers= {getUsers} seteditedUser = {seteditedUser}  setdetailedUser = {setdetailedUser}/>
      </table>
      </div>
    )
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.getUsers.map((row,index) => {

    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.surname}</td>
        <td>
          <button onClick={() => props.setdetailedUser(row.id)} >detail</button>
        </td>
        <td>
          <button onClick={() => props.seteditedUser(row.id)} >edit</button>
        </td>
        <td>
          <button onClick={() => props.removeUser(row.id)} >Delete</button>
        </td>


      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}
export default Table
