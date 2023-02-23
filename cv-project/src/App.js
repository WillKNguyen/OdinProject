import './App.css';
import React, {Component} from "react";
import Personal from './component/Personal';
import Experience from './component/Experience';
import Education from './component/Education';
import Project from './component/Project';
import DisplayPersonal from './component/DisplayPersonal';

class App extends Component {
  constructor(){
    super();
    this.state = {
      personal: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        summary: '',
      },
    }
  }

  handlePersonalDetailsChange = (e) => {
    const {id, value} = e.target;
    console.log(id,value)

    this.setState(prevState => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [id]: value
      }
  }), () => {console.log(this.state)})
  }

  render(){
    return(
      <div>
        <h1>CV Builder</h1>
        <Personal handlePersonalDetailsChange={this.handlePersonalDetailsChange}/>
        <DisplayPersonal data={this.state.personal}/>
        <Experience />
        <Project/>
        <Education />
      </div>
    )
  }
}

export default App;
