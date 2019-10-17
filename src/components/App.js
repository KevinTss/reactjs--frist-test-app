import React from 'react';

import Form from './form/Form'
import ListItem from './list/ListItem'

class App extends React.Component {

  state = {
    items: []
  }

  addItem = item => {
    item.id = Date.now()
    let newItems = [ ...this.state.items, item ]
    this.setState({ items: newItems })
  }

  render() {
    return (
      <div>
        <Form title="My title for this form" submitted={this.addItem}/>
        <ListItem/>
      </div>
    )
  }
}

export default App