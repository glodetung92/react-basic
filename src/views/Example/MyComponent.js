import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {id: 1, title: "Developer", salary: "300"},
            {id: 2, title: "Analist", salary: "500"},
            {id: 3, title: "Boss", salary: "1000"}
        ]
    }

    addNewJob = (job) => {
        console.log(job)
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job);
        this.setState({
            arrJobs: currentJobs
        })
    }

    delAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        });

    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob = {this.addNewJob}
                />
                 
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    delAJob = {this.delAJob}
                />
            </>
        )
    }
}

export default MyComponent