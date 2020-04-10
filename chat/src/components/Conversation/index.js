import React, { Component } from 'react';
import './style.css';


class Conversation extends Component {

  displayMessage = () => this.props.messages.map((message, i) => <div key={i} className="message"><b>{ message.username }</b>: <em>{ message.message }</em></div>)

  render() {
    return (
      <div className="conversation">
        { this.displayMessage()}
      </div>
    );
  }
}

export default Conversation;
