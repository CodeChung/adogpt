import React from 'react';
import './AnimalCard.css'

class AnimalCard extends React.Component {
    render() {
        const { name, description, url, breeds, attributes, age, photos, id } = this.props.animal;
        const photo = photos ? photos[0] : '';
        return(
            <div className='card'>
                <div className='card-image'>
                    <img src={photo && photo.medium ? photo.medium : '' } alt='pet' className='img-responsive'></img>
                </div>
                <div className='card-header'>
                    <div className='card-title h2'>{name}</div>
                    <span class='chip'>{age}</span>
                </div>
                <p>{description}</p>
                <p>{url}</p>
                <button className='btn' onClick={() => this.props.handleSave(id)}>Save</button>
                <a href={url} target='_blank' rel="noopener noreferrer"><button className='btn btn-primary'>Meet</button></a>
            </div>
        )
    }
}

export default AnimalCard;