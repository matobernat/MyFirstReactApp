import React, { Component } from 'react'

class Detail extends Component{
  constructor(props) {
    super(props)

    this.initialState = {
      job: 'I work as a hockey player',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      name: this.props.detailedUser.name,
      surname: this.props.detailedUser.surname,

    }

    this.state = this.initialState
  }

  componentWillReceiveProps(nextProps) {

    this.props.detailedUser.id = nextProps.detailedUser.id
    this.props = nextProps

    this.setState({
      name: nextProps.detailedUser.name,
      surname: nextProps.detailedUser.surname,
    })
  }

  render(){
    return (
      <div className="cardContainer">
        <h2 className = "h2Detail"> Detail </h2>
        <div className="card">
           <div className="card__image-container">
             <img className="card__image" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80" alt="" />
            </div>

           <div className="card__content">
             <h1 className="card__title">{this.props.detailedUser.name} {this.props.detailedUser.surname}</h1>
             <p> id: {this.props.detailedUser.id} </p>
             <p> {this.state.job} </p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Detail;
