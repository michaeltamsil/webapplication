import React from 'react';
import './App.css';
import {Form, Input, Button} from 'reactstrap'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RiverWebBase</h1>
        <Form>
          
          <Input type="email" name="email" id="email" placeholder="email" className="mb-4 mt-4"/>
          <Input type="password" name="password" id="password" placeholder="password"/>
          <Button color="success" className="mt-4">sign in</Button>{' '}
          <Button color="primary" className="mt-4">sign up</Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
