/**
 * Created by jacob on 26-06-17.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>PluralSight</h1>
          <p>React, Redux</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>

      </div>
    );
  }
}

export default HomePage;
