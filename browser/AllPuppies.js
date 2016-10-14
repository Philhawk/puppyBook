import React from 'react';

export default class AllPuppies extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.loadAllPuppies();
  }

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
                <li><a href="#">{puppy.name}</a></li>
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
