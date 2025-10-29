import React from 'react';
import { Link } from 'react-router-dom';

function PageNF() {
  return (
    <div
      style={{ height: '90vh' }}
      className="d-flex justify-content-center align-items-center p-5 flex-column"
    >
      <img
        width="35%"
        src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif"
        alt="error"
      />
      <h1>404!</h1>
      <h4>Page not found</h4>
      <Link
        to="/"
        className="btn text-white"
        style={{ backgroundColor: 'purple' }}
      >
        Go to Home
      </Link>
    </div>
  );
}

export default PageNF;
