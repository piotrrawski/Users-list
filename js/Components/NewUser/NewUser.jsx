import React from 'react';

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            userName: "",
        }
    }

//adding new record
    handleClickAdd = (e) => {

        let url='https://jsonplaceholder.typicode.com/users/'
        // let url='http://localhost:3000/users/'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                username: this.state.userName,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));

        // location.reload ();
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleChange2 = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-success col" data-toggle="modal" data-target="#exampleModal">Add new user</button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New user</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <form>
                                    <div className="form-row align-items-center">
                                        <div className="col-auto">
                                            <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                                            <input onChange={this.handleChange} type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Your Name" value={this.state.name}/>
                                        </div>
                                        <div className="col-auto">
                                            <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">@</div>
                                                </div>
                                                <input onChange={this.handleChange2} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Your Username" value={this.state.userName}/>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.handleClickAdd}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default NewUser;

