import React, {Component} from 'react';
import {SearchBox} from './component/search-box/search-box.component'
import {CardList} from './component/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  async componentDidMount() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();
     this.setState({ monsters: data});
  }
  
  
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder= 'Search Monsters' handleChange={txt => this.setState({searchField: txt.target.value})} />
        <CardList monsters= {filteredMonsters} />
      </div>
      
    )
    
  }
}

export default App;
