import React from 'react';
import './App.css';
import UrlContainer from '../../containers/UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer />
      </main>
  );
}

export default App;