import React, { Component } from 'react';
import Conversation from '../../components/Conversation';
import Textarea from '../../components/Textarea';

class MessagingPanel extends Component {
  state = {
    messages: []
  }

  connection = new WebSocket('ws://localhost:9090/')

  componentDidMount() {
    this.connection.onmessage = (message) => {
      const data = JSON.parse(message.data)
      this.setState({messages: [...this.state.messages, data]})
    }
  }

  getMessage = (message) => {
    const data = {username: this.props.username, message: message}

    this.connection.send(JSON.stringify(data))
  }

  render() {
    return (
      <div className="panel">
        <Conversation messages={this.state.messages} />
        <Textarea getMessage={this.getMessage} />
      </div>
    );
  }
}

export default MessagingPanel;
