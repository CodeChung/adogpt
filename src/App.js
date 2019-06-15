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
  // IMPLEMENT SEARCH LATER
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
        console.log(this.state.accessToken)
      })
      .catch(err => alert(err))
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
    console.log(url);
    fetch(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
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
    // get types for reference
    // fetch("https://api.petfinder.com/v2/types", {
    //   headers: {
    //     Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIwYjM2ZDI3MGQwMjJlZGZhYTkzZmY3OGM4NmNlZTEwYTQyNjYyY2I4N2VjYjNjMzg3NjFhZjA1YWQ1NzA4ODFiYmQwOWZhYzA0MDVhMTRjIn0.eyJhdWQiOiJTUU96bjlRRUhZUkRsRXAzenphbnNNOWFaSmhwYTNLbFdIMFlTM0RONHQ2R1lYS3czdCIsImp0aSI6IjIwYjM2ZDI3MGQwMjJlZGZhYTkzZmY3OGM4NmNlZTEwYTQyNjYyY2I4N2VjYjNjMzg3NjFhZjA1YWQ1NzA4ODFiYmQwOWZhYzA0MDVhMTRjIiwiaWF0IjoxNTYwNTYwODU5LCJuYmYiOjE1NjA1NjA4NTksImV4cCI6MTU2MDU2NDQ1OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.x01x1-LsyTJ_NrTEJ462TM-AsmlYW6YU50iiwyoLjpm4zFisAYUJlyM2Wfi6yDo1hNz2-WmvDAvQrSBHe8pE9psENr7Mn4FvwWgSfZIbbh-BDmp-IZkl8ummzEpCcwlPUAjI6oGMcYEkvMLQckFBPR9x14DjROyPU84Z92Kimc4gTJ4UvR8-N3gof6-Aj6efp2DsOQKylzaW0vKwdY_kPRBDce7SKgeW75MNSMMJzYLJTY3xmFjYobugNjhjbPp1OvKzZNdtvHZrt8IFmBb-T6iSwfqgCkocRo3FT1zzwJQe3cFQkOD3Uyzrle32T8JHIgEXJG58aB-y4DEYR9pq2A"
    //   }
    // })
    //   .then(resp => resp.json())
    //   .then(resp => console.log(resp))
  
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
