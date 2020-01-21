import React from 'react';
import DatePicker from 'react-datepicker';
import './CalendarFilter.scss';

import "react-datepicker/dist/react-datepicker.css";

class CalendarFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate : new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(date){
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div className="calendar-filter">
                <div className="calendar d-flex justify-content-between align-middle">
                    <label>{this.props.label}</label>
                    <DatePicker 
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default CalendarFilter;