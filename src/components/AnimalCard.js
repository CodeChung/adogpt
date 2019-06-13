import React from 'react';

class AnimalCard extends React.Component {
    render() {
        const { name, description, url, breeds, attributes, age, photos } = this.props.animal;
        return(
            <div className='card'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{url}</p>
            </div>
        )
    }
}

export default AnimalCard;