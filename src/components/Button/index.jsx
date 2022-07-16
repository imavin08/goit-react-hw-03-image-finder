import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick()}
        className={css.button}
        type="button"
      >
        Load more
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
