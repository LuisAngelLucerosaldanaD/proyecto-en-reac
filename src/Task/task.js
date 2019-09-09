import React, {Component}from 'react';
class Task extends Component{
    render(){
        return(<div>
            {this.props.tasks.map(e => <p key={e.id}>
            {e.title} - {e.description} - {e.done}
            <input type="checkbox"/>
            <button>
                x
            </button>
            </p>
              )
            }
        </div>
      );
    }
}
export default Task;