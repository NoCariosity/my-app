import React from 'react';
import Select  from 'react-select';

class GeneralFilter extends React.Component{
    render() {
        return (
            <div className="general-select">
                <Select
                    defaultValue={this.props.options[0]}
                    name="general"
                    options={this.props.options}
                />
            </div>
        );
    }
}

export default GeneralFilter;