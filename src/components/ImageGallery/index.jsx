import React from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          smallImage={image.webformatURL}
          onOpen={() => onImageClick(image.largeImageURL, image.tags)}
          tag={image.tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
