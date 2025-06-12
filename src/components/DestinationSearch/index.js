// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    return (
      <div>
        <div>
          <h1> Destination Search </h1>
          <div>
            <input type="search" placeholder="Search"/>
            <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon"/>
          </div>
          <ul>
            {destinationsList.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
