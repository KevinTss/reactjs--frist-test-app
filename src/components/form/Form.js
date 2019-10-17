import React from 'react'

class Form extends React.Component {

  state = {
    name: '',
    quantity: 0
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <h3>{this.props.title}</h3>

        <input 
          type="text" 
          placeholder="name" 
          value={this.state.name} 
          onChange={event => this.setState({ name: event.target.value })}
        />

        <input 
          type="number" 
          placeholder="quantity" 
          value={this.state.quantity} 
          onChange={event => this.setState({ quantity: Number(event.target.value) })}
          />

        <button type="submit">Ajouter</button>
      </form>
    )
  }
}

export default Form