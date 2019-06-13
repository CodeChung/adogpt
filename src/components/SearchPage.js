import React from 'react';
import AnimalList from './AnimalList';

class SearchPage extends React.Component {
    render() {
        return (
            <section className='search-page'>
                <form>
                    <label>Zipcode</label>
                    <input type='text'/>
                </form>
                <AnimalList animals={this.props.animals}/>
            </section>
        )
    }
}

export default SearchPage;