import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import axios from 'axios';
import { Route,} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],    
    };
  }
  componentDidMount(){
    var token = localStorage.getItem(`token`)
    var request = {
      headers: { authorization : token }
    }
  axios
    .get("https://testing-app-for-react.herokuapp.com/api/login", request)
    .then(response => {
      this.setState({ users: response.data })
    })
    .catch(err => console.log(err))
  }

  render() {
  return (
    <div className="App">
      <Route path ='/login' component = {Login} />
      <Route path ='/register' component = {Register} />
    </div>
  )
  }
}

export default App;
