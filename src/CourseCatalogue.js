import React from 'react';
import CategoryItems from './CategoryItems';
import CourseSearch from './CourseSearch';
import CourseItems from './CourseItems';
import GeneralFilter from './GeneralFilter';
import CalendarFilter from './CalendarFilter';
import * as DataAPI from './utils/DataAPI';

import 'bootstrap/dist/css/bootstrap.min.css';

class CourseCatalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [], 
            regions: [
                {value: 'all', label: 'All Locations'},
                {value: 'auckland', label: 'Auckland'},
                {value: 'wellington', label: 'Wellington'},
                {value: 'christchurch', label: 'Christchurch'},
                {value: 'dunedin', label: 'Dunedin'},
            ],
            otherFilters: [
                {value: 'public', label: 'public'},
                {value: 'in-house', label: 'in-house'}
            ],
            allCourses: [],
            currentCourses: [],
            filters: {
                category: 'all',
                region: 'all',
                from: new Date(),
                to: new Date('June 30, 2020')
            }
        };

        this.handleCategoryItemClick = this.handleCategoryItemClick.bind(this);
        this.handleRegionFilter = this.handleRegionFilter.bind(this);
        this.handleDateFilter = this.handleDateFilter.bind(this);
    }

    componentDidMount() {
        fetch categories and courses
        DataAPI.getAll().then((data) => {
            let categories, courses;
            categories = data.categories.Items;
            courses = data.courses;
            for(let course of courses) {
                categories.forEach((category) => {
                    category.Selected = false;  // append Selected propert to category item
                    if(category.CategoryID == course.CategoryID){
                        course.Category = category.Name;
                    }
                });
            }
            categories.unshift({
                CategoryID: '0000',
                SequenceIndex:0,
                Name:"All category",
                Selected: true,
                ViewUri:"http://demo.learningsource.com.au/course-catalogue"
            })
            this.setState({
                categories: categories,
                initialCourses: courses,
                currentCourses: courses
            });
        });
    }

    handleCategoryItemClick(categoryID){
        // render the catgory item to have blue bg color
        const categories = this.state.categories.map((category) => {
            category.Selected = false;
            if(categoryID == category.CategoryID) category.Selected = true;
            return category;
        });
        if(categoryID !== '0000'){
            // filter courses according to categoryID
            const courses = this.state.initialCourses.filter((course) => {
                return (categoryID == course.CategoryID);
            });
            this.setState({currentCourses: courses, categories: categories});
        }else {
            this.setState((preState) => ({
                courses: preState.allCourses,
                categories
            }));
        }
        
    }

    handleRegionFilter(region) {

    }

    handleDateFilter(date) {
        const current = new Date();
        let start = current, end = current;
        if(date.from){
            if(date.from < current){
                start = date.from;
            }
            this.setState({filters: {from: start}});
        } else {
            if(date.to < start){
                alert("The end date should not be earlier than the start date or today, please reselect the date range!");
            }
            this.setState({filters: {to: end}});
        }
    }

    render() {
        return (
            <div className='course-catelogue'>
                <CategoryItems categories={this.state.categories} handleClick={this.handleCategoryItemClick}/>
                <CourseSearch />
                <div className="row">
                    <div className="col-3">
                        <GeneralFilter options={this.state.regions} handleClick={this.handleRegionFilter}/>
                        <CalendarFilter label="from" handleChange={this.handleDateFilter} date={this.state.filters.from}/>
                        <CalendarFilter label="to" handleChange={this.handleDateFilter} date={this.state.filters.to}/>
                        <GeneralFilter options={this.state.otherFilters}/>
                    </div>
                    <CourseItems courses={this.state.currentCourses} />
                </div>
            </div>
        );
    }
}

export default CourseCatalogue;