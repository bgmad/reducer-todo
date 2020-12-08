import React from 'react';

export default class Form extends React.Component {
    state = {
        textInput: ""
    }

    handleTextInput = e => {
        this.setState({
            textInput: e.target.value
        });
    }

    handleAdd = e => {
        if (this.state.textInput) {
            this.props.handleAddItem(this.state.textInput);
            this.setState({
                textInput: ""
            })
        } else {
            return null;
        }
    }

    handleClear = e => {
        this.props.handleClearCompleted();
    }

    render() {
        return (
           <div>
                <input 
                    type='text' 
                    value={this.state.textInput} 
                    onChange={this.handleTextInput}
                />
                <button onClick={this.handleAdd}>Add Item</button>
                <button onClick={this.handleClear}>Clear Completed</button>
           </div> 
        );
    }
}