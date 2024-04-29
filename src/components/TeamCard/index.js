import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, teamName, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="team-card-container">
        <img className="team-logo-image" src={teamImageUrl} alt={teamName} />
        <p className="team-name">{teamName}</p>
      </li>
    </Link>
  )
}

export default TeamCard
