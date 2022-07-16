import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImage, onOpen, tag }) => {
  return (
    <li onClick={onOpen} className={css.galleryItem}>
      <img className={css.galleryItemImage} src={smallImage} alt={tag} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
