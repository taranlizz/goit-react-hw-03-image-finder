import { Component } from 'react';
import { Form, Header, Icon } from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  onChange = evt => {
    this.setState({
      query: evt.currentTarget.value,
    });
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(evt.currentTarget.query.value);
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
            pattern="^[a-zA-Z ]*$"
            name="query"
            onChange={this.onChange}
            value={this.state.query}
            required
          />
          <button type="submit">
            <Icon />
          </button>
        </Form>
      </Header>
    );
  }
}
