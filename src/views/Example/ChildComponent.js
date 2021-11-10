import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
    // State define
    state = {
        showJobs: false
    }

    handleOnclickButton = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDel = (job) => {
        this.props.delAJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;

        return (
            <>  
                { showJobs === false ?
                    <div><button  className="btn-show" onClick={() => this.handleOnclickButton() }>Show</button></div>
                    :
                    <>
                    <div className="job-list">
                        {
                            arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary} <></> <span onClick={() => this.handleOnClickDel(item)}>x</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div><button onClick={() => this.handleOnclickButton() }>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent