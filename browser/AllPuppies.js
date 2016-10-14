import React from 'react';
import { Link } from 'react-router';

export default class AllPuppies extends React.Component {

  render () {

    console.log('These are the props being passed down: ', this.props)

    let { allPuppies} = this.props;

    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <div>
            {
              allPuppies && allPuppies.map(puppy => (
                <ul className="list-unstyled" key={puppy.id}>
                  <li>
                    <Link to={`puppies/${puppy.id}`}>{puppy.name}</Link>
                  </li>
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
