import React,{Component} from 'react';
import './App.css';
import { CardList  } from './component/card-list/card-list.component';
// import { CardList } from './component/card-list/card-list.component';

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
    
    //api request to that url fetch return us and convert to json so js can understaand take the user and set to monsters.c
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(response=> response.json())
    .then(user=>this.setState({monstors:user}))
  }
 

  render(){
  return (
    <div className="App">
      <CardList monstors={this.state.monstors}>   </CardList>
   
    </div>
  );
}
}

export default App;
