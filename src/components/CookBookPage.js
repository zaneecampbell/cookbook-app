import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const DashboardPage = () => {
  

  return (
  <div>
    <Link to='/create'>
      <Button>Add Recipe</Button>
    </Link>
  </div>
  )
}

export default DashboardPage;
