import React from 'react';
import { Redirect } from 'react-router-dom';

import FormLabel from './FormLabel';
import FormSubmit from './FormSubmit';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: '', pass: '',redirect: ''};
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = () => {
        //requete au serv
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //contenu de la requete
            body: JSON.stringify({
                login: [this.state.login],
                pass: [this.state.pass]
            })
        })
            .then((response) => { return response.json() })
            .then((data) => {
                //traitement de la reponse
                if (data.err) {
                    this.setState({redirect: 'fail'});
                } else {
                    this.setState({ redirect: 'success' });
                }
            });
    }

    render() {
        return (
            <div className="myForm">
                <form>
                    <FormLabel name="login" type="text" value={this.state.login} handle={this.handleChange} /><br />
                    <FormLabel name="pass" type="password" value={this.state.pass} handle={this.handleChange} />
                    <p>{this.state.login} / {this.state.pass}</p>
                </form>

                <FormSubmit id="submitLogin"label="Submit" click={this.handleSubmit} />
                {this.decideRedi()}
            </div>
        )
    };

    //redirection
    decideRedi = () => {
        if ((this.state.redirect) !== '') {
            let url = "/" + this.state.redirect;
            return (
                <Redirect to={url} />
            );
        }
    }

}

                 
export default LoginForm;