import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import SavedPage from './components/SavedPage';
import { Route, Link } from 'react-router-dom';
import dummyList from './dummyData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: dummyList,
      saved: [],
      accessToken: '',
    }
  }
  componentDidMount() {
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      body: "grant_type=client_credentials&client_id=SQOzn9QEHYRDlEp3zzansM9aZJhpa3KlWH0YS3DN4t6GYXKw3t&client_secret=QMXJ3ghKX2SI1OvAcqItoeQnrvJcxsUFQq5o6Wrh",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    })
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.status)
        }
        else {
          return resp.json()
        }})
      .then(respJson => {
        this.setState({accessToken: respJson.access_token})
      })
      .catch(err => alert(err))
      .then(() => {
        fetch("https://api.petfinder.com/v2/types/cat/breeds", {
      headers: {
        Authorization: `Bearer ${this.state.accessToken}`
      }
    })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
      })
  }
  saveCard = (id) => {
    console.log(id)
    if (!this.state.saved.map(animal => animal.id).includes(id)) {
      const saved = this.state.saved;
      const card = this.state.animals.find(animal => animal.id === id);
      this.setState({saved: [...saved, card]})
    }
    
  }
  searchAnimals = ( queryState ) => {
    const endpoint = 'https://api.petfinder.com/v2/animals?';
    const query = Object.keys(queryState).filter(key => queryState[key]).map(key => `${key}=${queryState[key]}`).join('&');
    const url = endpoint + query;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${this.state.accessToken}`
      }
    })
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.status);
        } else {
          return resp.json()
        }})
      .then(resp => this.setState({animals: resp.animals}))
      .catch(err => alert(err));
  }
  render() {
    return (
      <div className="App">
        <h1>Fetch</h1>
        <section className='navbar'>
          <Link to='/saved'>Saved (should be on side as a tab)</Link>
          <Link to='/'>Search</Link>
        </section>
        <Route exact path='/' component={() => <SearchPage animals={this.state.animals} handleSave={this.saveCard} handleSearch={this.searchAnimals}/>}/>
        <Route path='/saved' component={() => <SavedPage saved={this.state.saved}/>}/>
      </div>
    );
  }
}

export default App;
