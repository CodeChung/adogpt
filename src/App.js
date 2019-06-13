import React from 'react';
import AnimalList from './components/AnimalList';
import './App.css';
import SearchPage from './components/SearchPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      saved: [],
    }
  }
  componentDidMount() {
    fetch('https://api.petfinder.com/v2/animals', {
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVjMWE4ZjRkMDA2MTVkNDA2YWQyNjQwMmE2YTVjYTk1NmNjMmVjNDljYjEwNmI5NjUxZmU3M2I4YzgyYmQzODkyM2QzNWVjODJiZWE3NmE2In0.eyJhdWQiOiJTUU96bjlRRUhZUkRsRXAzenphbnNNOWFaSmhwYTNLbFdIMFlTM0RONHQ2R1lYS3czdCIsImp0aSI6ImVjMWE4ZjRkMDA2MTVkNDA2YWQyNjQwMmE2YTVjYTk1NmNjMmVjNDljYjEwNmI5NjUxZmU3M2I4YzgyYmQzODkyM2QzNWVjODJiZWE3NmE2IiwiaWF0IjoxNTYwNDU1MDQ5LCJuYmYiOjE1NjA0NTUwNDksImV4cCI6MTU2MDQ1ODY0OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.GNuyNdT8Bd6St3YeXc0gzUmkJUJUnpU4Aqiadfiai8PJ2qGS_jNXXl1kwPiPrJ3k3J2DROlO93Kfd56YTB1bc-fibQuCyINDdSH8Zu1aX4BDiI12ML7SIw1CGQWP9fkz98d2NNwJoO7xcCEUhEc4vndwFR1exg2IpLsmd5BvgLCDcAtyulfMFjqP1pr4-Y6FIj_VXuTarLn2ImxztpMi5belYreCymAOi-XZYMPtIckmev57GjhgLvL8Y_96ioQLOMFnWvJjl8OFR7wj--inVh9ynwOfGBykUh2SB5Y4635Ys5TvwE_pXTPh35niA-DeqLBsN--fmswoBnq8WL6DAQ'
      }
    })
      .then(resp => resp.json())
      .then(resp => this.setState({animals: resp.animals}))
  }
  saveCard(card) {
    const saved = this.state.saved;
    this.setState({saved: [...saved, card]})
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
          <a href='/'>Saved (should be on side as a tab)</a>
          <a href='/'>Search</a>
        </section>
        <SearchPage animals={this.state.animals}/>
      </div>
    );
  }
}

export default App;
