import * as React from 'react';
import { Socket } from './Socket';


export class Content extends React.Component {
  constructor(props){
        super(props);
    //Initial state is an array of empty messages
    this.state = {data_received: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
      Socket.emit('message', 
      {'message':this.state.value,
    
      });
      event.preventDefault();
      //      console.log(this.state.data_received);
  }

    componentDidMount() {
        Socket.on('message received', (data) => {
            console.log("Content recieved message");
            this.setState({
                'number_received': data['message']
            });
        });
    }

    render() {
        
        return (
            <div style={{backgroundColor: 'white', position: 'absolute', left: '25%', width: '700px', height: '1000px', border: '1px solid #000'}}>
            <h1>CHATBOT</h1>
            
                <form onSubmit={this.handleSubmit}>
                <label style={{ color:'black' }}>
                Username:
                <input value={this.state.username} onChange={this.handleUsernameChange}/>
                Message:
                <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
            
        </div> ); 
    }
}