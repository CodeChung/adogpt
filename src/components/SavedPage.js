import React from 'react';
import AnimalList from './AnimalList';

function SavedPage(props) {
    return (
        <section className='saved-animals'>
            <h2>Saved Animals</h2>
            <AnimalList animals={props.saved}/>
        </section>
    )
}

export default SavedPage