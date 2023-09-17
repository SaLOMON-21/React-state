import React, { useState } from 'react';

function Filter({ onFilter }) {
const [titleFilter, setTitleFilter] = useState('');
const [ratingFilter, setRatingFilter] = useState('');

const handleFilter = () => {
    // Call the onFilter function with the filter criteria.
    onFilter({ title: titleFilter, rating: ratingFilter });
};

return (
    <div className="filter">
    <input
        type="text"
        placeholder="Filter by Title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
    />
    <input
        type="number"
        placeholder="Filter by Rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
    />
    <button onClick={handleFilter}>Apply Filters</button>
    </div>
);
}

export default Filter;
