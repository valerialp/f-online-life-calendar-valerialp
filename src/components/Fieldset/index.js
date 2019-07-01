import React from 'react';

class Fieldset extends React.Component{
    render(){
        const {children} = this.props;
        return(
            <fieldset className={`form__${this.props.styles}-fieldset`}>
                <legend className={`form__${this.props.styles}-legend`}>{this.props.title}</legend>
                    {children}
            </fieldset>
        )
    }
}

export default Fieldset;