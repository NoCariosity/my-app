import React from 'react';
import './CourseItems.scss';

function CourseItems(props) {
    return (
        props.courses.map((course) => (
            <div className="course-card col-9">
                <div className="row">
                    <img className="course-avatar col-2" alt={course.title}>
                    </img>
                    <div className="col-10">
                        <div className="course-category">
                            {course.category}
                        </div>
                        <div className="course-title">
                            {course.title}
                        </div>
                        <div className="course-overview">
                            {course.overview}
                        </div>
                        <div className="course-card-bottom row">
                            <div className="tags col-8 d-flex">
                                {course.tags.map((tag) => (
                                    <button className="course-tag">
                                        {tag}
                                    </button>
                                ))}
                            </div>
                            <div className="col-4">
                                <button type="link" className="learn-more-button">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        )
    );
}

export default CourseItems;