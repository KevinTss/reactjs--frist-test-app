import React from 'react'

class Form extends React.Component {

  state = {
    name: '',
    quantity: 0
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="name"/>
        <input type="number" placeholder="quantity"/>
        <button type="submit">Ajouter</button>
      </form>
    )
  }
}

export default Form