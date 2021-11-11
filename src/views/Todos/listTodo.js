import React from "react";
import './listTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Making video'},
            {id: 'todo3', title: 'Fixing bugs'}
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Add todo success");
    }

    handleDelTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        
        this.setState({
            listTodos: currentTodos
        })
        toast.info('Delete Success!!!')
    }

    handleEditTodo = (todo) => {
        let editTodo = this.state.editTodo;
        let isEditEmpty = Object.keys(editTodo).length === 0;
        if (isEditEmpty === true) {
            let editTodo = todo
            this.setState({
                editTodo: editTodo 
            })
        } else {
            let afterEditTodos = this.state.listTodos
            let objIndex = afterEditTodos.findIndex(item => item.id === todo.id)
            afterEditTodos[objIndex].title = editTodo.title

            this.setState({
                listTodos: afterEditTodos,
                editTodo: {}
            })

            toast.info('Update Success!!!')
            return;
        }
        
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = this.state.editTodo
        
        editTodoCopy.title = event.target.value

        
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let {listTodos, editTodo} = this.state;
        let isEditEmpty = Object.keys(editTodo).length === 0;

        return (
            <>
                <p>
                    Simple TODO Apps with React.
                </p>
                <div className="list-todo-container">
                <AddTodo 
                        addNewTodo = {this.addNewTodo}
                />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        { isEditEmpty ?
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={item.title} onChange={(event) => this.handleOnchangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        {/* edit button */}
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            { isEditEmpty ?
                                                'Edit'
                                                :
                                                <>
                                                    {editTodo.id === item.id ?
                                                        'Save'
                                                        :
                                                        'Edit'
                                                    }
                                                </>
                                            }
                                        </button>
                                        {/* delete button */}
                                        <button className="del"
                                            onClick={() => this.handleDelTodo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
            )
    }
}

export default ListTodo