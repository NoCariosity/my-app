import React from 'react';

class CourseSearch extends React.Component {
    render() {
        return (
            <div className="search-bar-wrap">
                <input
                    className="search-bar"
                    value={this.props.searchValue}
                    onChange={this.props.handleChange}    // need to be lifted up to CourseCatalogue
                    placeholder="Search"
                />
            </div>
        );
    }
}

export default CourseSearch;