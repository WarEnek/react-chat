import React, { Component } from 'react';
import './style.css';

class Textarea extends Component {
  
  messageHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      this.props.getMessage(e.target.value)
      e.target.value = ""
    }
  }

  render() {
    return (
      <div className="textarea">
        <textarea onKeyDown={this.messageHandler}></textarea>
      </div>
    );
  }
}

export default Textarea;
