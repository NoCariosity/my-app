import React from 'react';

function CourseItems(props) {
    return (
        <div>
            {props.courses ? props.courses.map((course) => (
            <div className="course-card" key={course.TemplateID}>
                <img className="course-avatar" alt={course.Name} src={require("./images/HSR.jpg")}>
                </img>
                <div className="course-description">
                    <div className="course-category">
                        {course.Categories ? course.Categories.map((category) => (
                            <label>
                                {category.Name}
                            </label>
                        )) : ''}
                    </div>
                    <div className="course-title">
                        {course.Name}
                    </div>
                    <div className="course-overview">
                        {course.Description.Summary}
                    </div>
                    <div className="course-card-bottom">
                        <div className="course-tags">
                            {course.Tags ? course.Tags.map((tag) => (
                                <label>
                                    {tag}
                                </label>
                            )): ''}
                        </div>
                        <div className="course-button">
                            <a href={course.ViewUri}>
                                <button className="learn-more-button">
                                Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            )
        ) : (<div className="no-results">
            No results
        </div>)}
        </div>
    );
}

export default CourseItems;