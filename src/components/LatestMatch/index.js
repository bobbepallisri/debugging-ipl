import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="team-detail-main-container">
      <div className="match-summary-container">
        <p className="latest-team-name">{competingTeam}</p>
        <p className="match-date">{date}</p>
        <p className="match-venue">{venue}</p>
        <p className="match-result">{result}</p>
      </div>

      <div className="team-logo-image-container">
        <img
          className="team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>

      <div className="other-details-container">
        <h1 className="match-details-head">First Innings</h1>
        <p className="match-details-des">{firstInnings}</p>
        <h1 className="match-details-head">Second Innings</h1>
        <p className="match-details-des">{secondInnings}</p>
        <h1 className="match-details-head">Man Of The Match</h1>
        <p className="match-details-des">{manOfTheMatch}</p>
        <h1 className="match-details-head">Umpires</h1>
        <p className="match-details-des">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
