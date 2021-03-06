import React, { Component } from 'react';
import './UrlContainer.css';
import { connect } from 'react-redux';
import { setUrls } from '../../actions';
import { getUrls } from '../../apiCalls';
import { deleteUrl } from '../../apiCalls';

export class UrlContainer extends Component {
  componentDidMount() {
    getUrls()
      .then(data => this.props.setUrlsInStore(data.urls))
      .catch(err => console.error('Error fetching:', err));
  }

  deleteIdea = async (id) => {
    await deleteUrl(id);
    const testFetch = await getUrls();
    this.props.setUrlsInStore(testFetch.urls)
  }

  render() {
    const urlEls = this.props.urls.map(url => {
      return (
        <div className="url">
          <h3>{url.title}</h3>
          <a href={url.short_url} target="blank">{url.short_url}</a>
          <p>{url.long_url}</p>
          <button onClick={() => this.deleteIdea(url.id)}>Delete</button>
        </div>
      )
    });
  
    return (
      <section>
        { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
      </section>
    )
  }
}

export const mapStateToProps = ({ urls }) => ({
  urls
});

export const mapDispatchToProps = dispatch => {
  return {
    setUrlsInStore: urls => dispatch(setUrls(urls))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer);
