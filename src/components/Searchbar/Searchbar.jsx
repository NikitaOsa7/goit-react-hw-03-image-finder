import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
    state = {
        searchData: '',
    };

    render() {
        const { handleChange, handleSubmit } = this;
        

        
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm}>
                    <button type="submit" className={s.SearchForm__button}>
                        <span className={s.SearchForm__button__label}>Search</span>
                    </button>

                    <input
                        className={s.SearchForm__input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                    />
                </form>
            </header>
        );
    }
}