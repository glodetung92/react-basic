import React from "react";

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    onClickAdd = () => {
        if (!this.state.title) {
            alert('missing title');
            return;
        }
        let todo = {
            id: Math.floor(Math.random()*1001),
            title: this.state.title
        }

        this.props.addNewTodo(todo)

        this.setState({
            title: ''
        })    
    }

    render() {
        let {title} = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event) } />
                <button type="button" className="add" onClick={(todo)=> this.onClickAdd(todo)}>Add</button>
            </div>
        )
    }
}

export default AddTodo