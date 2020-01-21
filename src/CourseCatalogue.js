import React from 'react';
import CategoryItems from './CategoryItems';
import CourseSearch from './CourseSearch';
import CourseItems from './CourseItems';
import GeneralFilter from './GeneralFilter';
import CalendarFilter from './CalendarFilter';
import 'bootstrap/dist/css/bootstrap.min.css';

class CourseCatalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {value: 'Health and Safety Representative', selected: true}, 
                {value: 'Risk Management', selected: false},
                {value: 'Health and Safety Representative', selected: false}, 
                {value: 'Risk Management', selected: false},
                {value: 'Health and Safety Representative', selected: false}, 
                {value: 'Risk Management', selected: false}
            ], //categories data, to be fetched from remote domain
            regions: [
                {value: 'auckland', label: 'Auckland'},
                {value: 'wellington', label: 'Wellington'},
                {value: 'christchurch', label: 'Christchurch'},
                {value: 'dunedin', label: 'Dunedin'},
            ],
            otherFilters: [
                {value: 'public', label: 'public'},
                {value: 'in-house', label: 'in-house'}
            ],
            courses: [
                {category: 'Health and Safety Representative',
                 avatar: '',
                 title: 'HSR Stage 1',
                 overview: 'Health and Safety Representative Stage 1 helps you to understand your role and responsibilities as a representative and meet minimun regulatory requirements for training.',
                 tags: ['2 days', 'Public course']
                }
            ]
        };
    }

    render() {
        return (
            <div className='course-catelogue'>
                <CategoryItems categories={this.state.categories}/>
                <CourseSearch />
                <div className="row">
                    <div className="col-3">
                        <GeneralFilter options={this.state.regions}/>
                        <CalendarFilter label="from"/>
                        <CalendarFilter label="to"/>
                        <GeneralFilter options={this.state.otherFilters}/>
                    </div>
                    <CourseItems courses={this.state.courses} />
                </div>
            </div>
        );
    }
}

export default CourseCatalogue;