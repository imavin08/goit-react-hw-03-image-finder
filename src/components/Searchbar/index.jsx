import { Component } from 'react';
import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue === '') {
      alert('Введите название');
      return;
    }

    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.onFormSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}></button>

          <input
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
