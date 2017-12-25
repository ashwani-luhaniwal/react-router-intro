import React from 'react';

const Child = ({ match }) => (
    <div>
        {/* Rednering id's which were fetched from urls */}
        <h3>ID: {match.params.id}</h3>
    </div>
)
export default Child;