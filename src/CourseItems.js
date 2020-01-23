import React from 'react';

function CourseItems(props) {
    return (
        <div className="col-9">
            {props.courses.map((course) => (
            <div className="course-card">
                <div className="row">
                    <img className="course-avatar col-2" alt={course.title}>
                    </img>
                    <div className="col-10">
                        <div className="course-category">
                            {course.Category}
                        </div>
                        <div className="course-title">
                            {course.Title}
                        </div>
                        <div className="course-overview">
                            {course.Summary}
                        </div>
                        <div className="course-card-bottom row">
                            <div className="tags col-8 d-flex">
                                {course.Tags.map((tag) => (
                                    <label className="course-tag">
                                        {tag}
                                    </label>
                                ))}
                            </div>
                            <div className="col-4">
                                <button type="link" className="learn-more-button" href={course.Uri}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        )}
        </div>
    );
}

export default CourseItems;