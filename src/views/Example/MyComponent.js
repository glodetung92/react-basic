import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    // State define
    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: 1, name: 'Developer', salary: '300$' },
            { id: 2, name: 'Analist', salary: '500$' },
            { id: 3, name: 'Boss', salary: '1000$' }
        ]
    }

    handleOnChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangeSecond = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleClickButton = () => {
        console.log(this.state)
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <form action="">
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" value={this.state.firstName} onChange={(event) => this.handleOnChange(event)} /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname" value={this.state.lastName} onChange={(event) => this.handleOnChangeSecond(event)} /><br/>
                    <input type="button" value="Click Me!!!" onClick={() => this.handleClickButton()} />
                </form> 
                <ChildComponent
                    name={this.state.firstName}
                    age={'25'}
                    address={'Tokyo'}
                    arrJobs={ this.state.arrJobs }
                />
            </>
        )
    }
}

export default MyComponent