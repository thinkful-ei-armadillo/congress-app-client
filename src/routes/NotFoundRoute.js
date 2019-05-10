import React, { Component } from 'react';

class NotFoundRoute extends Component {
  
  render() {
    document.title = 'MyCongress - Page Not Found';
    return (
      <section>
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </section>
    );
  }
}

export default NotFoundRoute;
