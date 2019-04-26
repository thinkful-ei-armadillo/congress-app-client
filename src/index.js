import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext'
import './index.css';
import App from './components/App/App';
import { MemberProvider } from './contexts/MemberContext';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
    <MemberProvider>
      <App />
    </MemberProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
