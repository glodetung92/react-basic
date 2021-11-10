import react from "react";

class AddComponent extends react.Component {
    // State define
    state = {
        title: "",
        salary: "",
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleClickButton = () => {
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params!!!')
            this.setState({
                title: "",
                salary: ""
            })
            return
        }

        this.props.addNewJob(
            {
                id: Math.floor(Math.random() * 1001),
                title: this.state.title,
                salary: this.state.salary
            }
        )

        this.setState({
            title: "",
            salary: ""
        })
    }

    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="fname">Job's Title:</label><br/>
                    <input type="text" id="fname" name="fname" value={this.state.title} onChange={(event) => this.handleChangeTitleJob(event)} /><br/>
                    <label htmlFor="lname">Salary:</label><br/>
                    <input type="text" id="lname" name="lname" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br/>                    
                    <input type="button" value="Submit" onClick={() => this.handleClickButton()} />
                </form>
            </div>
        )
    }

}

export default AddComponent