import React,{Component} from 'react';
import './App.css';
import { CardList  } from './component/card-list/card-list.component';
// import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
class App extends Component {


  constructor(){
    super();

    this.state={
      monstors:[

    ],
    searchField:""

    };
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    
    //api request to that url fetch return us and convert to json so js can understaand take the user and set to monsters.c
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(response=> response.json())
    .then(user=>this.setState({monstors:user}))
  }
  handleChange =(e)=>{
    this.setState({searchField:e.target.value });
  
  }

  render(){
    //make new array useing dot filter method 
    //destructuring ..
    const {monstors,searchField }=this.state;

    //equal to...const monsters = this.state.monster &&
    //  const searchFields = this.state.searchField;

    const filteredMonsters = monstors.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())||monster.email.toLowerCase().includes(searchField.toLowerCase()) )

      
      return (
    <div className="App">
      {/* <input 
      type="search" 
      placeholder='search monsters' 
      onChange={e=>this.setState({searchField:e.target.value })}></input> */}

<SearchBox placeholder='search monsters' 
           handleChange={this.handleChange}
          //  handleChange={this.handleChange.bind(this)}
></SearchBox>  
      <CardList monstors={filteredMonsters}>   </CardList>
   
    </div>
  );
}
}

export default App;
