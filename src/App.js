import React ,{Component}from 'react';
import './App.css';
import tasks from './tasks.json';      
import Task from './Task/task';
class App extends Component{
  state={
    tasks: tasks
  }
  render(){
    return <div>
      <Task tasks={this.state.tasks}/>
    </div>
  }
}

export default App;
