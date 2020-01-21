import React from 'react';
import './CategoryItems.scss';

function CategoryItems(props) {
    return (
        <div className="d-flex align-content-start flex-wrap">
            {props.categories.map((category) => (
                    <div
                        className={`category-item p-2 ${category.selected ? 'selected' : ''}`}
                        onClick={props.handleClick} //TODO: to be implemented 
                    >
                        {category.value}
                    </div>
                )
            )}
        </div>
    );
}

export default CategoryItems;