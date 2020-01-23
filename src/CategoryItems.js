import React from 'react';

function CategoryItems(props) {
    return (
        <div className="d-flex align-content-start flex-wrap">
            {props.categories.map((category) => (
                    <div
                        className={`category-item p-2 ${category.Selected ? 'selected' : ''}`}
                        onClick={() => props.handleClick(category.CategoryID)} //TODO: to be implemented 
                    >
                        {category.Name}
                    </div>
                )
            )}
        </div>
    );
}

export default CategoryItems;