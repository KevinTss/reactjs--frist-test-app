import React from 'react';

import Form from './form/Form'
import ListItem from './list/ListItem'

class App extends React.Component {

  addItem = item => {
    console.log('item, ', item)
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