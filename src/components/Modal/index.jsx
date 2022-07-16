import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleBackDropClick}>
        <div className={css.modal}>
          <img
            className={css.image}
            src={this.props.image}
            alt={this.props.tag}
          />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
