import React, { Component } from 'react';
import { addUrl } from '../../actions';
import { postUrls } from '../../apiCalls';
import { connect } from 'react-redux';

export class UrlForm extends Component {
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

  handleSubmit = async(e) => {
    e.preventDefault();
    const newUrl = await this.postUrlForShortening();
    this.props.addUrlToStore(newUrl)
    this.clearInputs();
  }

  postUrlForShortening = () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        long_url: this.state.urlToShorten,
        title: this.state.title,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return postUrls(options);
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
