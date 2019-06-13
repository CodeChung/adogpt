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
    }
  }
  // IMPLEMENT SEARCH LATER
  // componentDidMount() {
  //   fetch('https://api.petfinder.com/v2/animals', {
  //     headers: {
  //       Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEyYjg2ZDJkNDc1NDk4MTE3ZmRjZTU3OTkzMzRjZjlhOTkyYTljOTJiNGNhODM0OTQ2YzI3Y2Y2NzgwYjViZmExYzRlZGNmMzE3NGNlOWQyIn0.eyJhdWQiOiJTUU96bjlRRUhZUkRsRXAzenphbnNNOWFaSmhwYTNLbFdIMFlTM0RONHQ2R1lYS3czdCIsImp0aSI6ImEyYjg2ZDJkNDc1NDk4MTE3ZmRjZTU3OTkzMzRjZjlhOTkyYTljOTJiNGNhODM0OTQ2YzI3Y2Y2NzgwYjViZmExYzRlZGNmMzE3NGNlOWQyIiwiaWF0IjoxNTYwNDU4ODIxLCJuYmYiOjE1NjA0NTg4MjEsImV4cCI6MTU2MDQ2MjQyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.l6ehnfHetkRepyGbFaHKqaknE3lZIP1c8C3wJAyMHwD2svcwa2mQUtpX_2kWtObowm4UM0jvovcymkrY0mzJo7u7vPYcbj0GNmB6zeGaFFMYKibYs12_JrMDMXjgUCH4kjKcDNYDTA7HWv9p3uyGI6dSCrQz4DER4Akd9EY0z8UAnhxbhhlGLkriFRuOJ0ndne3U7cX9jShzQ6NbPH4sSHmQeTx5F2jBp2hGXxGMg0-aF2CVAEoKzGxrtPupcqSFXZTI3TlPF8zxZkyk9CXxbh0wkcenXJIzgPFs9UGJoFXUtSYPYkAMUBWcD-q4FZmR0Kk7wqmLXEXT4wgtcEOH1Q'
  //     }
  //   })
  //     .then(resp => resp.json())
  //     .then(resp => this.setState({animals: resp.animals}))
  // }
  saveCard = (id) => {
    console.log(id)
    if (!this.state.saved.map(animal => animal.id).includes(id)) {
      const saved = this.state.saved;
      const card = this.state.animals.find(animal => animal.id === id);
      this.setState({saved: [...saved, card]})
    }
    
  }
  render() {
    // get types for reference
    // fetch("https://api.petfinder.com/v2/types", {
    //   headers: {
    //     Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIzODIxYmRiOWM2NjVlODIzNjFjMzBiYjgyZTE1ODQ2YjRmZGE4MDE3YmM1MjBmM2IwZDU0YzZhNjk1Y2RjNmUwMGM1OTkxZjBkMmQ2OTA1In0.eyJhdWQiOiJCczZtRjFRY3p5WVg0cjU4OEVWcDdRR1Ywa1prVlJiUjA3ZTFNNXlPYU85Y0p2M0JNSSIsImp0aSI6IjIzODIxYmRiOWM2NjVlODIzNjFjMzBiYjgyZTE1ODQ2YjRmZGE4MDE3YmM1MjBmM2IwZDU0YzZhNjk1Y2RjNmUwMGM1OTkxZjBkMmQ2OTA1IiwiaWF0IjoxNTYwMzg2NTA0LCJuYmYiOjE1NjAzODY1MDQsImV4cCI6MTU2MDM5MDEwNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.UcCqbfXLfe6OVpavObKKqD2l7UbeQRspDL98u3o28dQKla5bCPrVwtojZpSj4KAShcLxcA1Wpgh-DkJFkQH74FD156dc04gQKa-3HO8a3_E8AJMrwAcwqG9GRX31hCR5NBuCnf38S1d9cSNRHTNRcy1haFuu4Z7RvhUzrTBHlsW97LF7EZlnmty17-cJXWcQSgfi4eQiT3SHb28myf22rBVefBjXvXeFPjPBzp-R10H1gZcRQrlaYwrkVVU5dVJC2h2NKz8-hIFwiD1V6QxWW7ypQibOSzsox-KfHpR2cFBiKIT3Byeoh7jqAIFOC7v9VCppeJh0nSfkOFYi0gvcGQ"
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
        <Route exact path='/' component={() => <SearchPage animals={this.state.animals} handleSave={this.saveCard}/>}/>
        <Route path='/saved' component={() => <SavedPage saved={this.state.saved}/>}/>
      </div>
    );
  }
}

export default App;
