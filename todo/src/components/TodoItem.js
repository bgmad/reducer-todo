import React from 'react';

class TodoItem extends React.Component {

    toggleCompleted(e) {
        this.props.handleCompleted(this.props.item.id);
    }

    render() {
        return (
            <div onClick={this.toggleCompleted}>
                {!this.props.item.completed ? 
                    <li id={this.props.item.id}> {this.props.item.item} </li> :
                    <strike>
                        <li id={this.props.item.id}> {this.props.item.item} </li> 
                    </strike>
                }
            </div>
        )
    }
}

export default TodoItem;