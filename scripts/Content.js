import * as React from 'react';

import { ChatRoom } from './ChatRoom';
import { Socket } from './Socket';

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'numbers': []
        };
    }
    
    componentDidMount() {
        Socket.on('number received', (data) => {
            this.setState({
                'number_received': data['number']
            });
        })
    }

    render() {
        var generated_num = [];
        generated_num.push(this.state.number_received);
        
        let my_rand_num = this.state.number_received;
        return (
            <div>
                <h1>Random number!</h1>
                <ul>{my_rand_num}</ul>
                <ul>{generated_num}</ul>
                <ChatRoom />
            </div>
        );
    }
}