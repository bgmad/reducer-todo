import React from 'react';

class TodoItem extends React.Component {

    constructor(props) {
        super();
        this.state = props.item;
    }

    handleToggle = e => {
        this.props.handleToggleCompleted(this.state.id);
        this.setState({
            completed: !this.state.completed
        })
    }

    render() {
        return (
            <div onClick={this.handleToggle}>
                {!this.state.completed ? 
                    <li id={this.state.id}>{this.state.item}</li> :
                    <strike><li id={this.state.id}>{this.state.item}</li></strike>
                }
            </div>
        )
    }
}

export default TodoItem;