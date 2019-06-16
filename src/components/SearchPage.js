import React from 'react';
import AnimalList from './AnimalList/AnimalList';
import Autosuggest from 'react-autosuggest';
import { dogs, cats } from '../breeds';

class SearchPage extends React.Component {
    state = {
        type: '',
        breed: '',
        gender: '',
        age: '',
        location: '',
        dogs: dogs,
        cats: cats,
        suggestions: [],
    }
    setOption = (option, choice) => {
        this.setState({[option]: choice})
    }
    getSuggestions = (breed) => {
        const animal = this.state.type === 'dog' ? dogs : cats;
        const breeds = animal.breeds.map(breed => breed.name.toLowerCase());
        console.log(breed)
        const breedSearch = breed.trim().toLowerCase();
        const searchLength = breedSearch.length;

        return searchLength === 0 ? [] : breeds.filter(breed => breed.slice(0, searchLength) === breedSearch || breed.includes(breedSearch))
    }
    getSuggestionValue = suggestion => suggestion;
    onSuggestionsFetchRequested = value => {
        this.setState({
            suggestions: this.getSuggestions(value.value)
        });
    };
    renderSuggestion = suggestion => (
    <div>
        {suggestion}
    </div>
    )
    onChange = () => {this.setOption('zipcode', this.state.breed)}
    render() {
        const { suggestions, breed } = this.state;
        const value = breed;
        const inputProps = {
            placeholder: 'breed',
            value,
            onChange: this.onChange
        }
        return (
            <section className='search-page'>
                <form>
                    <label htmlFor='animal-input'>I'm looking for </label>
                    <select name='animal-input' id='animal-input' onChange={(e) => this.setOption('type', e.target.value)}>
                        <option value=''>Any</option>
                        <option value='dog'>Dog</option>
                        <option value='cat'>Cat</option>
                    </select>
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
                    <label htmlFor='breed'>Breed</label>
                    <input name='breed' id='breed' type='text' 
                        onChange={(e) => {
                            this.getSuggestions(e.target.value)
                            this.setOption('breed', e.target.value)}}
                        />
                    <label htmlFor='zipcode'>Zipcode</label>
                    <input name='zipcode' id='zipcode' type='text' onChange={(e) => this.setOption('zipcode', e.target.value)}/>
                    <button onClick={e => {
                        e.preventDefault();
                        console.log(this.state)
                        this.props.handleSearch(this.state)
                    }}>Find!</button>
                    <Autosuggest 
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested} 
                        renderSuggestion={this.renderSuggestion} 
                        getSuggestionValue={() => this.getSuggestionValue(this.state.breed)}
                        alwaysRenderSuggestions={true}
                        inputProps={inputProps} />
                </form>
                <AnimalList animals={this.props.animals} handleSave={this.props.handleSave}/>
            </section>
        )
    }
}

export default SearchPage;