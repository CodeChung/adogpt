import React from 'react';
import './App.css';
import { access } from 'fs';

class App extends React.Component {
  render() {
    // get types for reference
    // fetch("https://api.petfinder.com/v2/types", {
    //   headers: {
    //     Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIzODIxYmRiOWM2NjVlODIzNjFjMzBiYjgyZTE1ODQ2YjRmZGE4MDE3YmM1MjBmM2IwZDU0YzZhNjk1Y2RjNmUwMGM1OTkxZjBkMmQ2OTA1In0.eyJhdWQiOiJCczZtRjFRY3p5WVg0cjU4OEVWcDdRR1Ywa1prVlJiUjA3ZTFNNXlPYU85Y0p2M0JNSSIsImp0aSI6IjIzODIxYmRiOWM2NjVlODIzNjFjMzBiYjgyZTE1ODQ2YjRmZGE4MDE3YmM1MjBmM2IwZDU0YzZhNjk1Y2RjNmUwMGM1OTkxZjBkMmQ2OTA1IiwiaWF0IjoxNTYwMzg2NTA0LCJuYmYiOjE1NjAzODY1MDQsImV4cCI6MTU2MDM5MDEwNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.UcCqbfXLfe6OVpavObKKqD2l7UbeQRspDL98u3o28dQKla5bCPrVwtojZpSj4KAShcLxcA1Wpgh-DkJFkQH74FD156dc04gQKa-3HO8a3_E8AJMrwAcwqG9GRX31hCR5NBuCnf38S1d9cSNRHTNRcy1haFuu4Z7RvhUzrTBHlsW97LF7EZlnmty17-cJXWcQSgfi4eQiT3SHb28myf22rBVefBjXvXeFPjPBzp-R10H1gZcRQrlaYwrkVVU5dVJC2h2NKz8-hIFwiD1V6QxWW7ypQibOSzsox-KfHpR2cFBiKIT3Byeoh7jqAIFOC7v9VCppeJh0nSfkOFYi0gvcGQ"
    //   }
    // })
    //   .then(resp => resp.json())
    //   .then(resp => console.log(resp))
    fetch('https://api.petfinder.com/v2/animals', {
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIzODIxYmRiOWM2NjVlODIzNjFjMzBiYjgyZTE1ODQ2YjRmZGE4MDE3YmM1MjBmM2IwZDU0YzZhNjk1Y2RjNmUwMGM1OTkxZjBkMmQ2OTA1In0.eyJhdWQiOiJCczZtRjFRY3p5WVg0cjU4OEVWcDdRR1Ywa1prVlJiUjA3ZTFNNXlPYU85Y0p2M0JNSSIsImp0aSI6IjIzODIxYmRiOWM2NjVlODIzNjFjMzBiYjgyZTE1ODQ2YjRmZGE4MDE3YmM1MjBmM2IwZDU0YzZhNjk1Y2RjNmUwMGM1OTkxZjBkMmQ2OTA1IiwiaWF0IjoxNTYwMzg2NTA0LCJuYmYiOjE1NjAzODY1MDQsImV4cCI6MTU2MDM5MDEwNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.UcCqbfXLfe6OVpavObKKqD2l7UbeQRspDL98u3o28dQKla5bCPrVwtojZpSj4KAShcLxcA1Wpgh-DkJFkQH74FD156dc04gQKa-3HO8a3_E8AJMrwAcwqG9GRX31hCR5NBuCnf38S1d9cSNRHTNRcy1haFuu4Z7RvhUzrTBHlsW97LF7EZlnmty17-cJXWcQSgfi4eQiT3SHb28myf22rBVefBjXvXeFPjPBzp-R10H1gZcRQrlaYwrkVVU5dVJC2h2NKz8-hIFwiD1V6QxWW7ypQibOSzsox-KfHpR2cFBiKIT3Byeoh7jqAIFOC7v9VCppeJh0nSfkOFYi0gvcGQ'
      }
    })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
    return (
      <div className="App">
        <h1>Fetch</h1>
        <form>
          <label>Zipcode</label>
          <input type='text'/>
        </form>
      </div>
    );
  }
}

export default App;
