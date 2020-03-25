import React from 'react';

class FormSubmit extends React.Component {


    render() {
        return (
            <button id={this.props.id} onClick={this.props.click}> {this.props.label} </button>
        );
    }
}

export default FormSubmit;