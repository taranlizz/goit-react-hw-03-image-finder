import { Toaster } from 'react-hot-toast';
import { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { getGalleryItems, PER_PAGE } from 'galleryApi';
import { Loader } from 'components/Loader/Loader';
import * as notificationAPI from 'galleryNotificationApi';

export class App extends Component {
  state = {
    query: '',
    items: [],
    totalItems: 0,
    page: 1,
    isLoading: false,
  };

  componentDidUpdate = async (_, prevState) => {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      const { query, page } = this.state;
      try {
        this.setState({
          isLoading: true,
        });

        const items = await getGalleryItems(query, page);

        if (this.state.page === prevState.page) {
          notificationAPI.success(items.totalHits);
          notificationAPI.info(items.totalHits);
          this.setState({
            items: items.hits,
            totalItems: items.totalHits,
            page: 1,
          });
          return;
        }

        notificationAPI.info(items.totalHits, page);
        this.setState(state => ({
          items: [...state.items, ...items.hits],
        }));
      } catch (error) {
        notificationAPI.error();
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  };

  onSearchSubmit = value => {
    this.setState({ query: `${Date.now()}/${value}` });
  };

  onLoadMoreClick = () => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  };

  render() {
    const { items, isLoading, totalItems, page } = this.state;
    const isNeedToShow = totalItems / PER_PAGE > page;
    return (
      <>
        <Toaster position="top-right" reverseOrder={false} />
        <SearchBar onSubmit={this.onSearchSubmit} />
        {isLoading && <Loader />}
        {items.length > 0 && <ImageGallery items={items} />}
        {items.length > 0 && isNeedToShow && (
          <Button onClick={this.onLoadMoreClick}>Load more</Button>
        )}
      </>
    );
  }
}
