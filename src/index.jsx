import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
  return <h1>Hello, React!</h1>;
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);
