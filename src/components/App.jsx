import { Component } from 'react';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

const APIKEY = '27281986-59f4397e165b177c7084776c9';

class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    modalImage: '',
    totalImages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(image => {
          if (!image.total) {
            return alert('К сожалению по Вашему запросу ничего не найдено');
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...image.hits],
            totalImages: image.total,
          }));
        })
        .catch(error => error)
        .finally(() => {
          console.log('totalimgt', this.state.totalImages);
          console.log('img', this.state.images.length);
          this.setState({ loading: false });
        });
    }
  }

  handleSubmit = name => {
    if (this.state.name === name) {
      return alert(`Вы уже просматриваете ${name}`);
    }
    this.setState({ name: name.toLowerCase(), images: [], page: 1 });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onImageClick = url => {
    this.setState({
      modalImage: url,
      showModal: true,
    });
  };

  modalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, loading, showModal, modalImage, totalImages } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery images={images} onImageClick={this.onImageClick} />
        )}

        {images.length !== totalImages && !loading && (
          <Button onClick={this.onLoadMoreClick} />
        )}

        {showModal && (
          <Modal
            image={modalImage}
            tag={this.props.tag}
            onModalClose={this.modalClose}
          />
        )}
      </>
    );
  }
}

export default App;
