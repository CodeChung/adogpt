import React from 'react';
import AnimalCard from './AnimalCard'

class AnimalList extends React.Component {
    static defaultProps = {
        animals: []
    }
    render() {
        const animals = this.props.animals.map((animal, index) => {
            return <AnimalCard key={index} animal={animal}/>
        })
        return (
            <section className='animalList'>
                {animals}
            </section>
        )
    }
}

export default AnimalList;