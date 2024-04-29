import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

const teamApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    teamCardDataList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getFetchTeamCard()
  }

  getFetchTeamCard = async () => {
    const response = await fetch(teamApiUrl)
    const teamCardData = await response.json()

    const updateTeamCardData = teamCardData.teams.map(eachCard => ({
      teamName: eachCard.name,
      id: eachCard.id,
      teamImageUrl: eachCard.team_image_url,
    }))

    this.setState({
      teamCardDataList: updateTeamCardData,
      isLoading: false,
    })
  }

  render() {
    const {teamCardDataList, isLoading} = this.state

    return (
      <div data-testid="loader" className="ipl-dashboard-container">
        {isLoading ? (
          <div className="loading-screen-container">
            <Loader
              type="Oval"
              color="rgb(43, 255, 0)"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <div>
            <div className="heading-container">
              <img
                className="ipl-logo-image"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
            </div>
            <div className="team-card-section-main-container">
              <ul className="team-card-section-container">
                {teamCardDataList.map(eachCard => (
                  <TeamCard teamCardDetails={eachCard} key={eachCard.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
