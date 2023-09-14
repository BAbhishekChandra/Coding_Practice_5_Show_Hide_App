// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstname: false, showLastname: false}

  showHideFirstname = () => {
    const {showFirstname} = this.state

    if (showFirstname === false) {
      this.setState({showFirstname: true})
    } else {
      this.setState({showFirstname: false})
    }
  }

  showHideLastname = () => {
    const {showLastname} = this.state

    if (showLastname === false) {
      this.setState({showLastname: true})
    } else {
      this.setState({showLastname: false})
    }
  }

  render() {
    const {showFirstname, showLastname} = this.state

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="show-hide-container">
              <button
                className="show-hide-button"
                type="button"
                onClick={this.showHideFirstname}
              >
                Show/Hide Firstname
              </button>
              {showFirstname && (
                <div className="show-container">
                  <p className="show-heading">Joe</p>
                </div>
              )}
            </div>
            <div className="show-hide-container">
              <button
                className="show-hide-button"
                type="button"
                onClick={this.showHideLastname}
              >
                Show/Hide Lastname
              </button>
              {showLastname && (
                <div className="show-container">
                  <p className="show-heading">Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
