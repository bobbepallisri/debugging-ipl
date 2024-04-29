import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchDetails
  return (
    <li className="recent-match-card-container">
      <img
        className="recent-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="recent-team-name">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className="recent-match-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
