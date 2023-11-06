import React, {Component} from 'react';

class ScrollableTextarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'hello',
        };
    }

    componentDidMount() {
        this.textarea.value = this.state.text;
    }

    handleTextareaChange = (event) => {
        this.setState({text: event.target.value});
    };

    render() {
        return(
            <div>
                <textarea
                    //rows="4"
                    //cols="50"
                    ref={(textarea) => (this.textarea = textarea)}
                    onChange={this.handleTextareaChange}
                    style={{overflowY: 'scroll'}}
                />
            </div>
        );
    }
}

export default ScrollableTextarea;
