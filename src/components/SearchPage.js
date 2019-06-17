import React from 'react';
import AnimalList from './AnimalList/AnimalList';
import { dogs, cats, both } from '../breeds';

class SearchPage extends React.Component {
    state = {
        params: {
            type: '',
            breed: '',
            gender: '',
            age: '',
            location: '',
            distance: 0,
        },
        suggestions: [],
    }
    setOption = (option, choice) => {
        const params = this.state.params;
        params[option] = choice
        this.setState({params: params})
    }

    getSuggestions = (breed) => {
        const type = this.state.params.type;
        const animal = type === '' ? both : type === 'dog' ? dogs : cats;
        const breeds = animal.breeds.map(breed => breed.name.toLowerCase());
        const breedSearch = breed.trim().toLowerCase();
        const searchLength = breedSearch.length;

        const searchMatches = searchLength === 0 ? [] : breeds.filter(breed => breed.slice(0, searchLength) === breedSearch || breed.includes(breedSearch));
        const suggestions = searchMatches.map((breed, index) => <button className='breed'
            value={breed}
            key={index}
            onClick={(e) => {
                e.preventDefault();
                this.setOption('breed', e.target.value)}}>{breed}</button>)
        this.setState({suggestions: suggestions.slice(0, 5)})
    }
    render() {
        const {suggestions} = this.state;
        return (
            <section className='search-page'>
                <form>
                    <label htmlFor='animal-input'>I'm looking for a </label>
                    <select name='animal-input' id='animal-input' onChange={(e) => this.setOption('type', e.target.value)}>
                        <option value=''>Any</option>
                        <option value='dog'>Dog</option>
                        <option value='cat'>Cat</option>
                    </select> 
                    <label htmlFor='zipcode'> near </label>
                    <input name='zipcode' id='zipcode' type='text' onChange={(e) => {
                        this.setOption('location', e.target.value)
                        this.setOption('distance', 50)
                    }} placeholder='zipcode'/>
                    <div className='search-options'>
                        <label htmlFor='gender'>Gender</label>
                        <select name='gender' id='gender' onChange={(e) => this.setOption('gender', e.target.value)}>
                            <option value=''>Any</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                        <label htmlFor='age'>Age</label>
                        <select name='age' id='age' onChange={(e) => this.setOption('age', e.target.value)}>
                            <option value=''>Any</option>
                            <option value='baby'>Baby</option>
                            <option value='young'>Young</option>
                            <option value='adult'>Adult</option>
                            <option value='senior'>Senior</option>
                        </select>
                    </div>
                    <div className='breed-section'>
                        <label htmlFor='breed'>Breed</label>
                        <input name='breed' id='breed' type='text' value={this.state.params.breed}
                            onChange={(e) => {
                                this.getSuggestions(e.target.value)
                                this.setOption('breed', e.target.value)}}
                            />
                        {suggestions}
                    </div>

                   
                    <button className='btn btn-lg' onClick={e => {
                        e.preventDefault();
                        this.props.handleSearch(this.state.params)
                    }}>Find!</button>
                </form>
                <AnimalList animals={this.props.animals} handleSave={this.props.handleSave}/>
            </section>
        )
    }
}

export default SearchPage;