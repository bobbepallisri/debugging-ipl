import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerImageUrl: '',
    latestMatchDetails: {},
    recentMatchesList: [],
    isLoading: true,
    bgColorClassName: '',
  }

  componentDidMount() {
    this.getFetchTeamMatchesData()
  }

  getFetchTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamData = await response.json()

    const LatestMatchData = teamData.latest_match_details
    const updateFormatLatestMatchData = {
      umpires: LatestMatchData.umpires,
      result: LatestMatchData.result,
      manOfTheMatch: LatestMatchData.man_of_the_match,
      id: LatestMatchData.id,
      date: LatestMatchData.date,
      venue: LatestMatchData.venue,
      competingTeam: LatestMatchData.competing_team,
      competingTeamLogo: LatestMatchData.competing_team_logo,
      // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
      firstInnings: LatestMatchData.first_innings,
      secondInnings: LatestMatchData.second_innings,
      matchStatus: LatestMatchData.match_status,
    }

    const recentMatchesData = teamData.recent_matches
    const updateFormatRecentMatchesData = recentMatchesData.map(
      eachDetails => ({
        umpires: eachDetails.umpires,
        result: eachDetails.result,
        manOfTheMatch: eachDetails.man_of_the_match,
        id: eachDetails.id,
        date: eachDetails.date,
        venue: eachDetails.venue,
        competingTeam: eachDetails.competing_team,
        competingTeamLogo: eachDetails.competing_team_logo,
        // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
        firstInnings: eachDetails.first_innings,
        secondInnings: eachDetails.second_innings,
        matchStatus: eachDetails.match_status,
      }),
    )

    this.setState({
      teamBannerImageUrl: teamData.team_banner_url,
      latestMatchDetails: updateFormatLatestMatchData,
      recentMatchesList: updateFormatRecentMatchesData,
      isLoading: false,
      bgColorClassName: id,
    })
  }

  TeamsAndMatchDetailsRender = () => {
    const {
      teamBannerImageUrl,
      latestMatchDetails,
      recentMatchesList,
      bgColorClassName,
    } = this.state
    return (
      <div className="team-details-main-container">
        <div className={`team-details-container ${bgColorClassName}`}>
          <img
            src={teamBannerImageUrl}
            className="team-banner-image"
            alt="team banner"
          />
          <div className="latest-matches-section-container">
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <div className="latest-matches-card-container">
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
          </div>

          <ul className="recent-matches-card-section-container">
            {recentMatchesList.map(eachMatch => (
              <MatchCard recentMatchDetails={eachMatch} key={eachMatch.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loading-screen-container">
      <Loader type="Oval" color="rgb(43, 255, 0)" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? this.renderLoader() : this.TeamsAndMatchDetailsRender()}
      </div>
    )
  }
}

export default TeamMatches
