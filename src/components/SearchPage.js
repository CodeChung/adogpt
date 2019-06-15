import React from 'react';
import AnimalList from './AnimalList/AnimalList';

class SearchPage extends React.Component {
    state = {
        type: '',
        breed: '',
        gender: '',
        age: '',
        location: '',
    }
    setOption = (option, choice) => {
        this.setState({[option]: choice})
    }
    render() {
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
                    <input name='breed' id='breed' type='text' onChange={(e) => this.setOption('breed', e.target.value)}/>
                    <label htmlFor='zipcode'>Zipcode</label>
                    <input name='zipcode' id='zipcode' type='text' onChange={(e) => this.setOption('zipcode', e.target.value)}/>
                    <button onClick={e => {
                        e.preventDefault();
                        console.log(this.state)
                        this.props.handleSearch(this.state)
                    }}>Find!</button>
                </form>
                <AnimalList animals={this.props.animals} handleSave={this.props.handleSave}/>
            </section>
        )
    }
}

export default SearchPage;