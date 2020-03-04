import React, { Component } from 'react';
import { addUrl } from '../../actions';
import { connect } from 'react-redux';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      id: Date.now(), 
      title: this.state.title,
      long_url: this.state.urlToShorten,
      short_url: ''
      }
    this.props.addUrlToStore(newUrl)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addUrlToStore: (url) => { dispatch(addUrl(url)) },
});

export default connect(null, mapDispatchToProps)(UrlForm)
