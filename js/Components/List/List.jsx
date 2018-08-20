import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            response: false,
            active: true,
            editName: "",
            editUserName: "",
            name: "",
            userName: "",
            userId: ""
        }
    }

    //downloading data
    componentWillMount(){
        let url='https://jsonplaceholder.typicode.com/users/'
        // let url='http://localhost:3000/users/'
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({response: json}))
    }

    //deleting record
    handleClickDel = (e) => {
        let url='https://jsonplaceholder.typicode.com/users/'
        // let url='http://localhost:3000/users/'

        fetch(url + e.target.parentElement.id , {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(json => console.log(json));

        // location.reload ();

    }

    //open modal 4 edit
    handleClickEdit = (e) => {
        this.setState({editName: e.target.previousSibling.previousSibling.previousSibling.innerText,
            editUserName: e.target.previousSibling.previousSibling.innerText,
            userId: e.target.parentElement.id })
    }

//saving and updating db
    handleClickSave = (e) => {
        let url='https://jsonplaceholder.typicode.com/users/'
        // let url='http://localhost:3000/users/';

        fetch(url + this.state.userId, {
            method: 'PATCH',
            body: JSON.stringify({
                name: this.state.editName,
                username: this.state.editUserName
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))

        console.log(this.state.editName)
        // location.reload ();

    }

    handleChange = (e) => {
        this.setState({
            editName: e.target.value
        })
    }

    handleChange2 = (e) => {
        this.setState({
            editUserName: e.target.value
        })
    }

    render(){

        if(this.state.response){
            return <div className="list-group list-group-flush container">{this.state.response.map((el, index)=>{
                    return <div className="list-group-item list-group-item-light row" key={el.id} id={el.id}>
                        <div className="col-12 col-md-6 h3 name" >{el.name}</div>
                        <div className="col-12  col-md-6 h4 nick">{el.username}</div>
                        <button type="button" className="btn btn-danger btn-sm col-12 ml-md-auto"  onClick={this.handleClickDel}>delete</button>
                        <button type="button" className="btn btn-warning btn-sm col-12" data-toggle="modal" data-target="#modalEdit" onClick={this.handleClickEdit}>edit</button>
                    </div>
                }
            )
            }

                <div className="modal" tabIndex="-1" role="dialog" id="modalEdit">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">#{this.state.userId} {this.state.editName}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <form>
                                    <div className="form-row align-items-center">
                                        <div className="col-auto">
                                            <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                                            <input onChange={this.handleChange} type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Your Name" value={this.state.editName}/>
                                        </div>
                                        <div className="col-auto">
                                            <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">@</div>
                                                </div>
                                                <input onChange={this.handleChange2} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Your Username" value={this.state.editUserName}/>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.handleClickSave}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div></div>
        }else{
            return (
                <h1>404</h1>
            )

        }
    }
}


export default List;