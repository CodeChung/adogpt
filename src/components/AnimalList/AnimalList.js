import React from 'react';
import AnimalCard from '../AnimalCard/AnimalCard'
import './AnimalList.css';

class AnimalList extends React.Component {
    static defaultProps = {
        animals: []
    }
    render() {
        const animals = this.props.animals.map((animal, index) => {
            return <AnimalCard key={index} animal={animal} handleSave={this.props.handleSave}/>
        })
        return (
            <section className='animal-list'>
                {animals}
            </section>
        )
    }
}

export default AnimalList;