import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Card from './components/Card';
import fetch from 'isomorphic-unfetch';

const App = () => {
  const [url, setUrl] = useState('');
  const [limit, setLimit] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'url') {
      setUrl(e.target.value);
    } else if (e.target.name === 'limit') {
      setLimit(e.target.value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http:///localhost:8000/search', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ url, limit }),
    });
    // const response = await res.json();
    // setUrl('');
    // setLimit('');
  };

  return (
    <div className="App">
      <Layout />

      <form onSubmit={onSubmit}>
        <div className="form-row mt-3 ml-3">
          <div className="col-5">
            <input
              type="text"
              name="url"
              placeholder="Enter url here"
              onChange={onChange}
              className="form-control"
            />
          </div>
          <div className="col-1">
            <input
              type="text"
              name="limit"
              placeholder="Enter limit"
              onChange={onChange}
              className="form-control"
            />
          </div>
          <input type="submit" value="submit" className="btn btn-outline-info" />
        </div>
      </form>
      <Card />
    </div>
  );
};

export default App;
