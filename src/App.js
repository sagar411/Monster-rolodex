import React,{Component} from 'react';
import './App.css';

class App extends Component {


  constructor(){
    super();

    this.state={
      monstors:[
        {
        name:"Frankenstein",
        id:"asc1"
      },
      {
        name:"Dracula",
        id:"asc2"
      },
      {
        name:"Zombie"
        ,
        id:"asc3"
      }]

    }
  }
 

  render(){
  return (
    <div className="App">
      {
        this.state.monstors.map(monstor => <h1>{monstor.name}</h1>)
      }
    </div>
  );
}
}

export default App;
