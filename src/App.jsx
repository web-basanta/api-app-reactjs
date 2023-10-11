import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{ display: 'block',  
                  width: 300,  
                  padding: 3 }}> 
      <h4>Login</h4> 
      <Form> 
        <Form.Group> 
          <Form.Label>Enter your email address:</Form.Label> 
          <Form.Control type="email" 
                        placeholder="Enter your your email address" /> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Enter your password:</Form.Label> 
          <Form.Control type="password" placeholder="Enter your password" /> 
        </Form.Group> 
        <Button variant="primary" type="submit"> 
           Click here to submit form 
        </Button> 
      </Form> 
    </div> 
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      
    </>
  )
}

export default App
