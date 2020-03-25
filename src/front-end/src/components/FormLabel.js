import React from 'react';

class FormLabel extends React.Component {


    render() {
        return(<>
            <label>
                {this.props.name} :
            <input id={this.props.name} name={this.props.name} type={this.props.type} value={this.props.value} onChange={this.props.handle} />
            </label>
        </>);
    }
}

export default FormLabel;