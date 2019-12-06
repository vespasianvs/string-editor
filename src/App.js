import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    length:0,
    string:[]
  };

  textChangeHandler = (event) => {
    this.setState({length:event.target.value.length, string: event.target.value.split("")});
  }

  deleteCharHandler = (id, event) => {
    const myString = this.state.string;
    const currLength = this.state.length;

    myString.splice(id, 1);
    this.setState({length: currLength-1, string: myString});
  }

  render() {

    let chars = null;

    if (this.state.string.length > 0) chars = this.state.string.map((char, index) => <CharComponent letter={char} click={this.deleteCharHandler.bind(this, index)} />);

    return (
      <div className="App">
        <input type="text" onChange={this.textChangeHandler} value={this.state.string.join("")}/>
        <p>String Length: {this.state.length}</p>
        <ValidationComponent length={this.state.length}/>
        {chars}
      </div>
    );
  }
}

export default App;
