import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import LoginForm from './LoginForm';



function App() {



    return (
    <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/fail">
                        < Result style={{color: "#F00"}} name="Failed !"/>
                    </Route>
                    <Route exact path="/success">
                        < Result style={{color: "#00F"}} name="Success !"/>
                    </Route>
                    <Route path="/">
                        < LoginForm />
                    </Route>
                </Switch>
            </div>
    </Router>
  );
}

function Result(props) {
    return (
        <h1 style={props.style}>{props.name}</h1>
    );
}

export default App;
