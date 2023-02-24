import './App.css';
import React, {Component} from "react";
import Personal from './component/Personal';
import Experience from './component/Experience';
import Education from './component/Education';
import Project from './component/Project';
import DisplayPersonal from './component/DisplayPersonal';
import DisplayExperience from './component/DisplayExperience';
import DisplayEducation from './component/DisplayEducation';
import DisplayProject from './component/DisplayProject';
import Form from './component/Container/Form';
import uniqid from "uniqid";


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
      exp:{
        id: uniqid(),
        company: '',
        position: '',
        start: '',
        end: '',
        description: '',
      },
      edu:{
        id: uniqid(),
        school: '',
        degree: '',
        start: '',
        end: '',
      },
      proj:{
        id: uniqid(),
        projectname: '',
        description: '',
      },
      expList: [],
      eduList: [],
      projList: [],
    }
  }

  handlePersonalDetailsChange = (e) => {
    const {id, value} = e.target;

    this.setState(prevState => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [id]: value
      }})
      )
  }

  handleExpChange = (e) => {
    const {className, value} = e.target;

    this.setState(prevState => ({
      ...prevState,
      exp: {
        ...prevState.exp,
        [className]: value
      }}), () => {console.log(this.state)}
      )
  }

  handleEduChange = (e) => {
    const {className, value} = e.target;

    this.setState(prevState => ({
      ...prevState,
      edu: {
        ...prevState.edu,
        [className]: value
      }})
      )
  }

  handleProjChange = (e) => {
    const {className, value} = e.target;

    this.setState(prevState => ({
      ...prevState,
      proj: {
        ...prevState.proj,
        [className]: value
      }})
      )
  }

  handleArrayChange = (property, ) => {

  }

  onAddEdu = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      eduList: this.state.eduList.concat(this.state.edu),
      edu:{
        id: uniqid(),
        school: '',
        degree: '',
        start: '',
        end: '',
      },
    }))
  };

  onAddProj = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      projList: this.state.projList.concat(this.state.proj),
      proj:{
        id: uniqid(),
        projectname: '',
        description: '',
      },
    }))
  };

  onAddExp = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      expList: this.state.expList.concat(this.state.exp),
      exp:{
        id: uniqid(),
        company: '',
        position: '',
        start: '',
        end: '',
        description: '',
      },
    }))
  };

  render(){
    return(
      <div>
        <h1>CV Builder</h1>
        <div id='container'>
          <Form 
          {...this.state}
          handlePersonalDetailsChange={this.handlePersonalDetailsChange} 
          handleExpChange={this.handleExpChange}
          handleProjChange={this.handleProjChange}
          handleEduChange={this.handleEduChange}
          onAddExp={this.onAddExp}
          onAddProj={this.onAddProj}
          onAddEdu={this.onAddEdu}
          />

          <div id='output'>
            <DisplayPersonal data={this.state.personal}/>
            <DisplayExperience data = {this.state.exp}/>
            <DisplayProject data = {this.state.proj}/>
            <DisplayEducation data = {this.state.edu}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
