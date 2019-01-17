import React from 'react';
import { Link } from 'react-router-dom';

// not found page for bad links
const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;

// Add cute little lost cook image?
