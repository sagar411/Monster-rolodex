import React,{Component} from 'react';
import './App.css';

class App extends Component {


  constructor(){
    super();

    this.state={
      monstors:[
      //   {
      //   name:"Frankenstein",
      //   id:"1"
      // },
      // {
      //   name:"Dracula",
      //   id:"2"
      // },
      // {
      //   name:"Zombie"
      //   ,
      //   id:"3"
      // }
    ]

    }
  }

  componentDidMount(){
    
    //api request to that url fetch return us and convert to json so js can understaand take the user and set to monsters.
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(response=> response.json())
    .then(user=>this.setState({monstors:user}))
  }
 

  render(){
  return (
    <div className="App">
      {
        this.state.monstors.map(monstor => <h1 key={monstor.id}>{monstor.name} </h1>)
      }
    </div>
  );
}
}

export default App;
