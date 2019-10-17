import React from 'react';

import Form from './form/Form'
import ListItem from './list/ListItem'

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <ListItem/>
      </div>
    )
  }
}

export default App