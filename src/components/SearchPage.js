import React from 'react';
import AnimalList from './AnimalList/AnimalList';

class SearchPage extends React.Component {
    render() {
        return (
            <section className='search-page'>
                <form>
                    <label htmlFor='animal-input'>I'm looking for </label>
                    <select name='animal-input' id='animal-input'>
                        <option>Dog</option>
                        <option>Cat</option>
                    </select>
                    <label htmlFor='gender'>Gender</label>
                    <select name='gender' id='gender'>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <label htmlFor='breed'>Breed</label>
                    <input name='breed' id='breed' type='text'></input>
                    <label htmlFor='zipcode'>Zipcode</label>
                    <input name='zipcode' id='zipcode' type='text'/>
                    <button>Find!</button>
                </form>
                <AnimalList animals={this.props.animals} handleSave={this.props.handleSave}/>
            </section>
        )
    }
}

export default SearchPage;