import React from 'react';
import './AnimalCard.css'

class AnimalCard extends React.Component {
    render() {
        const { name, description, url, breeds, attributes, age, photos, id } = this.props.animal;
        return(
            <div className='card'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{url}</p>
                <button onClick={() => this.props.handleSave(id)}>Save</button>
                <button><a href={url} target='_blank' rel="noopener noreferrer">Meet</a></button>
            </div>
        )
    }
}

export default AnimalCard;