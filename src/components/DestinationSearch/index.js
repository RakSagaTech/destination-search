// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    return (
      <div className="app-container">
        <div className="destinations-search-container">
          <h1 className="heading"> Destination Search </h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="destinations-list">
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
