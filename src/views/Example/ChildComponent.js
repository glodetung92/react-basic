import React from "react";

class ChildComponent extends React.Component {
    // State define
    state = {
        firstName: "",
        lastName: ""
    }

    render() {
        console.log('>>> check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        let { arrJobs } = this.props;

        return (
            <>
                <div className="job-list">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.name} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent