import React, { Component } from 'react';
import ProjectItem from '../components/ProjectItem';
class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }
    static defaultProps = {
        categories:['Web Design','Web Dev','Mobile Dev']
    }
    handleSubmit(e){
        console.log(this.refs.title.value);
        e.preventDefault();
        this.setState({
            newProject:{
                title:this.refs.title.value,
                category:this.refs.category.value
            }},function(){
                //console.log(this.state)
                this.props.addProject(this.state.newProject);
            })
    }
  render() {
      let categoryOptions = this.props.categories.map(category=>{
          return <option key={category} value={category}>{category}</option>
      })
    return (
      <div>
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br/>
                <input type="text" ref="title"/>
            </div>
            <div>
                <label>Category</label>
                <select ref="category">
                    {categoryOptions }
                </select>
            </div>
            <input type='submit' value ="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
