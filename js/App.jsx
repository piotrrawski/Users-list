import React from 'react';
import ReactDOM from 'react-dom';

import List from './Components/List';
import NewUser from './Components/NewUser'

class App extends React.Component {
    render(){
        return(
            <div>
                <NewUser />
                <List />
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});