import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen,
    }));
  };

  render() {
    return (
      <Item>
        <Image
          src={this.props.webformatURL}
          alt={this.tags}
          loading="lazy"
          width="395"
          height="210"
          onClick={this.toggleModal}
        />
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            onClose={this.toggleModal}
          />
        )}
      </Item>
    );
  }
}
