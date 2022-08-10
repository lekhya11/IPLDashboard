import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamCardsList: [],
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updateData = data.foreach(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({teamCardsList: updateData})
  }

  render() {
    const {teamCardsList} = this.state

    return (
      <div className="app-container">
        <div className="logo-heading-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        <div>
          <TeamCard teamCardsList={teamCardsList} key={teamCardsList.id} />
        </div>
      </div>
    )
  }
}

export default Home
