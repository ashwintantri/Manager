import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddProject from '../src/components/AddProject';
import Projects from '../src/components/Projects';
class App extends Component {
  constructor()
  {
    super();
    this.state = {
      projects:[]
    }
  }
  componentWillMount()
  {
    this.setState({
      projects:[{
          title:'Business Website',
          category:'Web Design'
        },
        {
          title:'Social App',
          category:'Mobile Development'
        },
        {
          title:'Ecommerce Shopping cart',
          category:'Web Development'
        }]
    });
  }

  handleAddProject(project){
      let projects = this.state.projects;
      projects.push(project);
      this.setState({
        projects:projects
      });
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
