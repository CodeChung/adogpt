import React from 'react';
import './AnimalCard.css'

class AnimalCard extends React.Component {
    state = {
        active: false,
    }
    render() {
        const { name, description, url, breeds, attributes, age, photos, id } = this.props.animal;
        const photo = photos ? photos[0] : '';
        const breed = breeds.primary;
        const characteristics = Object.keys(attributes).filter(key => attributes[key]).map((feature, index) => <span className='chip' key={index}>{feature}</span>);
        return(
            <div className='animal-card'>
                <div className='card' onClick={() => this.setState({active: true})}>
                    <div className='card-image'>
                        <img src={photo && photo.large ? photo.large : 'https://cdn.pixabay.com/photo/2017/05/20/15/37/dog-2329172_1280.png' } alt='pet' className='img-responsive'></img>
                    </div>
                    <div className='card-header'>
                        <div className={name.length < 20 ? 'card-title h3' : 'card-title h4'}>{name}</div>
                        <span className='chip'>{breed}</span>
                        {breeds.secondary && <span className='chip'>{breeds.secondary}</span>}
                    </div>
                </div>
                <div className={ this.state.active ? 'modal active' : 'modal' } id="modal-id">
                <a href="#close" className="modal-overlay" aria-label="Close" onClick={() => this.setState({active: false})}> </a>
                    <div className="modal-container">
                        <div className="modal-header">
                            <a href="#close" className="btn btn-clear float-right" aria-label="Close" onClick={() => this.setState({active: false})}> </a>
                            <div className="modal-title h5">{name}</div>
                        </div>
                        <div className="modal-body">
                        <div className="content">
                            <span className='chip'>{age}</span>
                            <p>{description}</p>
                            {characteristics}
                            <button className='btn' onClick={() => this.props.handleSave(id)}>Save</button>
                            <a href={url} target='_blank' rel="noopener noreferrer"><button className='btn btn-primary'>Meet</button></a>
                            {/* {attributes}*/}
                        </div>
                        </div>
                        <div className="modal-footer">
                        ...
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default AnimalCard;