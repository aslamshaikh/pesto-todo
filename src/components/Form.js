import 'bootstrap/dist/css/bootstrap.css'
import React  from 'react'

class Form extends React.Component {
    date = new Date();
    dateStr = this.date.getFullYear() + ":" 
                + ("00" + (this.date.getMonth() + 1)).slice(-2) + ":"  
                + ("00" + this.date.getDate()).slice(-2) + "T"
                + ("00" + this.date.getHours()).slice(-2) + ":"
                + ("00" + this.date.getMinutes()).slice(-2);
    render() {
      return (
        <div id="Form">
          <h3>Add a new item to the Task:</h3>  
          <form onSubmit={this.props.handleFormSubmit}>
            <label htmlFor="name">
            Task Name:
            <input id="name" value={this.props.name} 
              type="text" name="name"
              onChange={this.props.handleInputChange} />
            </label>
            <label htmlFor="time">
            Time :
            <input id="time" value={this.props.time} 
              type="datetime-local" name="time" step='1' min='2021-09-28T14:43:00'
              onChange={this.props.handleInputChange} />
            </label>
            <button type="submit" value="Submit">Add Task</button>
          </form>
        </div>
      );
    }
  }
  
  export default Form;
