import React from 'react';
import Select  from 'react-select';
import './GeneralFilter.scss';

class GeneralFilter extends React.Component{
    render() {
        return (
            <div className="general-select">
                <Select
                    defaultValue={this.props.options[0]}
                    name="region"
                    options={this.props.options}
                />
            </div>
        );
    }
}

export default GeneralFilter;