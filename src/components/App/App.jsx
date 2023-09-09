import { Component } from 'react';
import { Layout } from '../LayoutComponent/Layout.styled';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { getGalleryItems } from 'galleryApi';

export class App extends Component {
  state = {
    query: '',
    items: [],
    page: 1,
    error: false,
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
          error: false,
        });
        const items = await getGalleryItems(query, page);
        if (this.state.page === prevState.page) {
          return this.setState({
            items: items.hits,
          });
        }
        this.setState(state => ({
          items: [...state.items, ...items.hits],
        }));
      } catch (error) {
        this.setState({
          error: true,
        });
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
    const { items, isLoading, error } = this.state;
    console.log(items);
    return (
      <>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {isLoading && <p>Loading...</p>}
        {error && <p>ERROR!</p>}
        {items.length > 0 && <ImageGallery items={items} />}
        {items.length > 0 && (
          <Button onClick={this.onLoadMoreClick}>Load more</Button>
        )}
      </>
    );
  }
}
