import React from 'react';

class CourseSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchValue: event.target.value
        });
    }

    render() {
        return (
            <div className="search-bar-wrap m-auto">
                <input
                    className="search-bar border shadow-sm p-3 mb-5 rounded"
                    value={this.state.searchValue}
                    onChange={this.handleChange}    // need to be lifted up to CourseCatalogue
                    placeholder="Search"
                >
                </input>
                {/* <label className="search-icon"></label> */}
            </div>
        );
    }
}

export default CourseSearch;